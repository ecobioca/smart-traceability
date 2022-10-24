// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";

interface IBatchesHolder {
    function getSupplier() external view returns (address);
    function batchExists(uint256 id) external view returns (bool);
}

contract BatchesHolder is IBatchesHolder, ERC1155Holder {
    address private supplier;
    mapping(uint256 => bool) private batches;

    modifier onlySupplier() {
        require(msg.sender == supplier, "Sender isn't an allowed supplier");
        _;
    }

    constructor(address supplierAddr) {
        supplier = supplierAddr;
    }

    function getSupplier() public view override returns (address) {
        return supplier;
    }

    function batchExists(uint256 id) public view override returns (bool) {
        return batches[id];
    }

    // Receive a single ERC1155 token representing a cocoa batch
    function onERC1155Received(
        address,
        address,
        uint256 id,
        uint256,
        bytes memory
    ) public virtual override onlySupplier returns (bytes4) {
        batches[id] = true;
        return this.onERC1155Received.selector;
    }

    // Receive multiple ERC1155 tokens representing a cocoa batch
    function onERC1155BatchReceived(
        address,
        address,
        uint256[] memory ids,
        uint256[] memory,
        bytes memory
    ) public virtual override onlySupplier returns (bytes4) {
        for (uint256 i = 0; i < ids.length; i++) {
            batches[ids[i]] = true;
        }
        return this.onERC1155BatchReceived.selector;
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override
        returns (bool)
    {
        return
            interfaceId == type(IBatchesHolder).interfaceId ||
            super.supportsInterface(interfaceId);
    }
}
