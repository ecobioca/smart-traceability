// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "./Tokens.sol";
import "./Products.sol";

contract Batchs is NFT, Products {
    using Counters for Counters.Counter;
    Counters.Counter private _numberOfBatchs;
    Counters.Counter private _numberOfTxs;

    // Define Tx model
    struct Tx {
        bytes32 _currentTx;
        bytes32 _previousTx;
        address _sender;
        string _receiver;
        uint256 _time;
    }

    // Define Batch model
    struct Batch {
        uint256 _productId;
        string _batchCode;
        uint256[] _materialBatchIds;
        string _metadataUri;
        uint256 _tokenId;
        uint256 _addTime;
        mapping(uint256 => Tx) _txs;
    }

    mapping(uint256 => Tx) private _txs;

    mapping(uint256 => Batch) private _batchs;

    modifier authorizedToAddBatch(uint256 productId, address managerAddr) {
        uint256 supplierId = getSupplierIdFromProduct(productId);
        require(supplierId > 0, "Product does not exists");
        validatePermission(supplierId, managerAddr);
        _;
    }

    modifier authorizedToTransferBatch(uint256 batchId, address managerAddr) {
        uint256 supplierId = getSupplierIdFromProduct(
            _batchs[batchId]._productId
        );
        validatePermission(supplierId, managerAddr);
        _;
    }

    function validatePermission(uint256 supplierId, address managerAddr)
        private
        view
        allowedSupplier(supplierId)
        allowedManager(supplierId, managerAddr)
        returns (bool)
    {
        return true;
    }

    /*
     - Create a new token that represents the batch
     - Add production batch information

     - metadata should be an IPFS content identifier (CID)
    */
    function addBatch(
        uint256 supplierId,
        uint256 productId,
        string memory batchCode,
        uint256[] memory materialBatchIds,
        string memory metadataUri
    ) public authorizedToAddBatch(productId, msg.sender) {
        uint256[] memory balances = new uint256[](materialBatchIds.length);

        for (uint256 i = 0; i < materialBatchIds.length; i++) {
            balances[i] = balanceOf(msg.sender, materialBatchIds[i]);
            require(balances[i] >= 1, "no permission to transfer materials");
        }

        burnBatch(materialBatchIds, balances);

        _numberOfBatchs.increment();
        uint256 batchId = _numberOfBatchs.current();

        address receiver = getSupplierHolder(supplierId);

        mint(receiver, batchId, 1, metadataUri);

        _batchs[batchId]._productId = productId;
        _batchs[batchId]._batchCode = batchCode;
        _batchs[batchId]._materialBatchIds = materialBatchIds;
        _batchs[batchId]._metadataUri = metadataUri;
        _batchs[batchId]._tokenId = batchId;
        _batchs[batchId]._addTime = block.timestamp;
    }

    /*
     - Allows owners / admins of a batch to transfer it to another address
     - ERC1155 will secure the permissions.
    */
    function transferBatch(uint256 id, address to)
        public
        authorizedToTransferBatch(id, msg.sender)
    {
        transfer(to, _batchs[id]._tokenId, 1);
    }

    // Get batch information by id
    function getBatch(uint256 id)
        public
        view
        returns (
            uint256 productId,
            string memory batchCode,
            uint256[] memory materialBatchIds,
            string memory metadataUri,
            uint256 tokenId,
            uint256 addTime
        )
    {
        productId = _batchs[id]._productId;
        batchCode = _batchs[id]._batchCode;
        materialBatchIds = _batchs[id]._materialBatchIds;
        metadataUri = _batchs[id]._metadataUri;
        tokenId = _batchs[id]._tokenId;
        addTime = _batchs[id]._addTime;
    }

    // Get the number of batches
    function getNumberOfBatchs() public view returns (uint256 numberOfBatchs) {
        numberOfBatchs = _numberOfBatchs.current();
    }

    /*
     - Update batch transactions
     - `previousTx` ensures sender is up to date with the latest tx
    */
    function addTx(
        uint256 batchId,
        string memory receiver,
        string memory timestamp,
        bytes32 previousTx
    ) public authorizedToTransferBatch(batchId, msg.sender) {
        bytes32 currentTx = keccak256(
            abi.encodePacked(receiver, previousTx, timestamp)
        );

        _txs[_numberOfTxs.current()]._currentTx = currentTx;
        _txs[_numberOfTxs.current()]._previousTx = previousTx;
        _txs[_numberOfTxs.current()]._sender = msg.sender;
        _txs[_numberOfTxs.current()]._receiver = receiver;
        _txs[_numberOfTxs.current()]._time = block.timestamp;

        _numberOfTxs.increment();
    }

    // Update batch transactions
    function addTxAndTransfer(
        uint256 batchId,
        string memory receiver,
        address receiverAddress,
        string memory timestamp,
        bytes32 previousTx
    ) public authorizedToTransferBatch(batchId, msg.sender) {
        addTx(batchId, receiver, timestamp, previousTx);
        transfer(receiverAddress, 1, 1);
    }

    // Get transaction information by id
    function getTx(uint256 txId)
        public
        view
        returns (
            bytes32 currentTx,
            bytes32 previousTx,
            address sender,
            string memory receiver,
            uint256 time
        )
    {
        currentTx = _txs[txId]._currentTx;
        previousTx = _txs[txId]._previousTx;
        sender = _txs[txId]._sender;
        receiver = _txs[txId]._receiver;
        time = _txs[txId]._time;
    }

    // Get the number of transactions
    function getNumberOfTxs() public view returns (uint256 numberOfTxs) {
        numberOfTxs = _numberOfTxs.current();
    }
}
