// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "./Tokens.sol";
import "./Products.sol";

contract Batches is NFT, Products {
    using Counters for Counters.Counter;
    Counters.Counter private _numberOfBatches;
    Counters.Counter private _numberOfTxs;

    // Define Tx model
    struct Tx {
        uint256 _batchId;
        address _sender;
        string _receiver;
        bytes32 _previousTx;
    }

    // Define Batch model
    struct Batch {
        uint256 _productId;
        uint256[] _materialBatchIds;
        string _metadataURI;
        uint256 _tokenId;
        bytes32[] _txs;
        bytes32 _previousTx;
    }

    mapping(bytes32 => Tx) private _txs;

    mapping(uint256 => Batch) private _batches;

    event NewTx(bytes32 txId);

    modifier authorizedToAddBatch(uint256 productId, address managerAddr) {
        uint256 supplierId = getSupplierIdFromProduct(productId);
        require(supplierId > 0, "Product does not exist");
        validatePermission(supplierId, managerAddr);
        _;
    }

    modifier authorizedToTransferBatch(uint256 batchId, address managerAddr) {
        uint256 supplierId = getSupplierIdFromProduct(
            _batches[batchId]._productId
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
        uint256 productId,
        uint256[] memory materialBatchIds,
        string memory metadataURI
    ) public authorizedToAddBatch(productId, msg.sender) {
        uint256[] memory balances = new uint256[](materialBatchIds.length);

        for (uint256 i = 0; i < materialBatchIds.length; i++) {
            balances[i] = balanceOf(msg.sender, materialBatchIds[i]);
            require(balances[i] >= 1, "unauthorized material tokens");
        }

        burnBatch(materialBatchIds, balances);

        _numberOfBatches.increment();
        uint256 batchId = _numberOfBatches.current();

        address receiver = getProductHolder(productId);

        mint(receiver, batchId, 1, metadataURI);

        _batches[batchId]._productId = productId;
        _batches[batchId]._materialBatchIds = materialBatchIds;
        _batches[batchId]._metadataURI = metadataURI;
        _batches[batchId]._tokenId = batchId;
    }

    // Get batch information by id
    function getBatch(uint256 id)
        public
        view
        returns (
            uint256 productId,
            uint256[] memory materialBatchIds,
            string memory metadataURI,
            uint256 tokenId
        )
    {
        productId = _batches[id]._productId;
        materialBatchIds = _batches[id]._materialBatchIds;
        metadataURI = _batches[id]._metadataURI;
        tokenId = _batches[id]._tokenId;
    }

    // Get the number of batches
    function getNumberOfBatches() public view returns (uint256 numberOfBatches) {
        numberOfBatches = _numberOfBatches.current();
    }

    /*
     - Allows owners / admins of a batch to transfer it to another address
     - ERC1155 will secure the permissions.
    */
    function transferBatch(uint256 id, address to)
        public
        authorizedToTransferBatch(id, msg.sender)
    {
        address from = getProductHolder(_batches[id]._productId);

        // Grant token transfer rights to manager
        if (!isApprovedForAll(from, msg.sender)) {
            _setApprovalForAll(from, msg.sender, true);
        }

        safeTransferFrom({from: from, to: to, id: id, amount: 1, data: "0x"});
    }

    /*
     - Update batch transactions
     - `previousTx` ensures sender is up to date with the latest tx
    */
    function addTx(
        uint256 batchId,
        string memory receiver,
        uint256 timestamp,
        bytes32 previousTx
    ) public authorizedToTransferBatch(batchId, msg.sender) {
        require(
            previousTx == _batches[batchId]._previousTx,
            "Invalid previous tx"
        );

        bytes32 currentTx = keccak256(
            abi.encodePacked(batchId, receiver, timestamp, previousTx)
        );

        _txs[currentTx]._batchId = batchId;
        _txs[currentTx]._sender = msg.sender;
        _txs[currentTx]._receiver = receiver;
        _txs[currentTx]._previousTx = previousTx;

        _batches[batchId]._txs.push(currentTx);
        _batches[batchId]._previousTx = currentTx;

        emit NewTx(currentTx);

        _numberOfTxs.increment();
    }

    // Update batch transactions
    function addTxAndTransfer(
        uint256 batchId,
        string memory receiver,
        address receiverAddress,
        uint256 timestamp,
        bytes32 previousTx
    ) public authorizedToTransferBatch(batchId, msg.sender) {
        addTx(batchId, receiver, timestamp, previousTx);
        transferBatch(batchId, receiverAddress);
    }

    // Get transaction information by id
    function getTx(bytes32 txId)
        public
        view
        returns (
            uint256 batchId,
            address sender,
            string memory receiver,
            bytes32 previousTx
        )
    {
        batchId = _txs[txId]._batchId;
        previousTx = _txs[txId]._previousTx;
        sender = _txs[txId]._sender;
        receiver = _txs[txId]._receiver;
    }

    // Get the number of transactions
    function getNumberOfTxs() public view returns (uint256 numberOfTxs) {
        numberOfTxs = _numberOfTxs.current();
    }
}
