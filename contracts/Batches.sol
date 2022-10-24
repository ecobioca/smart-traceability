// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "./Tokens.sol";
import "./Products.sol";

contract Batches is NFT, Products {
    using Counters for Counters.Counter;
    Counters.Counter private batchesCounter;
    Counters.Counter private txsCounter;

    // Define Tx model
    struct Tx {
        uint256 batchId;
        address sender;
        string receiver;
        bytes32 previousTx;
    }

    // Define Batch model
    struct Batch {
        uint256 supplierId;
        uint256 productId;
        uint256[] materialBatchIds;
        string metadataURI;
        bytes32[] txs;
        bytes32 previousTx;
    }

    mapping(bytes32 => Tx) private txs;

    mapping(uint256 => Batch) private batches;

    event NewTx(bytes32 txId);

    event NewBatch(uint256 tokenId, uint256 supplierId, uint256 productId, uint256[] materialIds, string metadataURI);

    modifier authorizedToAddBatch(uint256 productId, address managerAddr) {
        uint256 supplierId = getSupplierIdFromProduct(productId);
        require(supplierId > 0, "Product does not exist");
        validatePermission(supplierId, managerAddr);
        _;
    }

    modifier authorizedToTransferBatch(uint256 batchId, address managerAddr) {
        validatePermission(batches[batchId].supplierId, managerAddr);
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

     - metadata should be an IPFS uri (ipfs://<cid>/metadata.json)
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

        batchesCounter.increment();
        uint256 batchId = batchesCounter.current();

        address receiver = getProductHolder(productId);

        mint(receiver, batchId, 1, metadataURI);

        uint256 supplierId = getSupplierIdFromProduct(productId);

        batches[batchId] = Batch(
            supplierId,
            productId,
            materialBatchIds,
            metadataURI,
            new bytes32[](0),
            bytes32(0)
        );

        emit NewBatch(batchId, supplierId, productId, materialBatchIds, metadataURI);
    }

    // Get batch information by id
    function getBatch(uint256 id)
        public
        view
        returns (Batch memory)
    {
        return (batches[id]);
    }

    // Get the number of batches
    function getNumberOfBatches() public view returns (uint256 numberOfBatches) {
        numberOfBatches = batchesCounter.current();
    }

    /*
     - Allows owners / admins of a batch to transfer it to another address
     - ERC1155 will secure the permissions.
    */
    function transferBatch(uint256 id, address to)
        public
        authorizedToTransferBatch(id, msg.sender)
    {
        address from = getProductHolder(batches[id].productId);

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
            previousTx == batches[batchId].previousTx,
            "Invalid previous tx"
        );

        bytes32 currentTx = keccak256(
            abi.encodePacked(batchId, receiver, timestamp, previousTx)
        );

        txs[currentTx].batchId = batchId;
        txs[currentTx].sender = msg.sender;
        txs[currentTx].receiver = receiver;
        txs[currentTx].previousTx = previousTx;

        batches[batchId].txs.push(currentTx);
        batches[batchId].previousTx = currentTx;

        emit NewTx(currentTx);

        txsCounter.increment();
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
        batchId = txs[txId].batchId;
        previousTx = txs[txId].previousTx;
        sender = txs[txId].sender;
        receiver = txs[txId].receiver;
    }

    // Get the number of transactions
    function getNumberOfTxs() public view returns (uint256 numberOfTxs) {
        numberOfTxs = txsCounter.current();
    }
}
