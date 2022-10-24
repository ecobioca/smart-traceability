// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "./Suppliers.sol";
import "./utils/BatchesHolder.sol";
import "./utils/BatchesOperator.sol";

contract Products is Suppliers {
    using Address for address;
    using Counters for Counters.Counter;
    Counters.Counter private _numberOfProducts;

    // Mapping from user address to boolean type
    mapping(address => bool) private isAuthorized;

    // Define product struct
    struct Product {
        uint256 supplierId;
        address holderAddr;
        bool holderIsContract;
        string metadataURI;
    }

    mapping(uint256 => Product) private _products;

    mapping(address => bool) private _holderContracts;

    event NewProduct(
        uint256 productId,
        uint256 supplierId,
        address holderAddr,
        string metadataURI
    );

    // Register product information
    function addProduct(
        uint256 supplierId,
        address holderAddr,
        string memory metadataURI
    )
        public
        allowedSupplier(supplierId)
        allowedManager(supplierId, msg.sender)
    {
        bool holderIsContract = holderAddr.isContract();
        if (holderIsContract) {
            require(
                !_holderContracts[holderAddr],
                "Holder contract already exists"
            );
            _holderContracts[holderAddr] = true;
            _doSafeHolderFullCheck(holderAddr);
        }
        _numberOfProducts.increment();
        uint256 productId = _numberOfProducts.current();
        _products[productId] = Product(supplierId, holderAddr, holderIsContract, metadataURI);
        emit NewProduct(productId, supplierId, holderAddr, metadataURI);

        // Grant token transfer rights to manager
        if (msg.sender != holderAddr) {
            _setApprovalForAll(holderAddr, msg.sender, true);
        }
    }

    // Get product information by id
    function getProduct(uint256 id) public view returns (Product memory) {
        return (_products[id]);
    }

    function getSupplierIdFromProduct(uint256 productId)
        public
        view
        returns (uint256 supplierId)
    {
        supplierId = _products[productId].supplierId;
    }

    function getProductHolder(uint256 productId)
        public
        view
        returns (address holderAddress)
    {
        holderAddress = _products[productId].holderAddr;
    }

    function getSupplierProducts(uint256 supplierId)
        public
        view
        returns (uint256[] memory)
    {
        uint256[] memory products = new uint256[](_numberOfProducts.current());
        uint256 counter = 0;
        for (uint256 i = 1; i <= _numberOfProducts.current(); i++) {
            if (_products[i].supplierId == supplierId) {
                products[counter] = i;
                counter++;
            }
        }
        return products;
    }

    /**
     * Check if the contract implements BatchesHolder interface
     */
    function _IBatchesHolderSupportCheck(address account) internal view {
        try
            BatchesHolder(account).supportsInterface(
                type(IBatchesHolder).interfaceId
            )
        returns (bool result) {
            if (!result) {
                revert(
                    "Holder contract does not support BatchesHolder interface"
                );
            }
        } catch {
            revert(
                "Holder contract does not implement BatchesHolder interface"
            );
        }
    }

    function _holderSupplierCheck(address account) public view {
        // External call to contract asking for the supplier address
        (bool success, bytes memory data) = account.staticcall(
            abi.encodeWithSignature("getSupplier()")
        );

        // Check if the returned address is this contract supplier
        require(
            success && abi.decode(data, (address)) == address(this),
            "Invalid supplier in holder"
        );
    }

    /**
     * Check if the contract implements BatchesHolder interface
     */
    function _IBatchesOperatorSupportCheck(address account) internal view {
        try
            BatchesOperator(account).supportsInterface(
                type(IBatchesOperator).interfaceId
            )
        returns (bool result) {
            if (!result) {
                revert(
                    "Holder contract does not support BatchesOperator interface"
                );
            }
        } catch {
            revert(
                "Holder contract does not implement BatchesOperator interface"
            );
        }
    }

    function _doSafeHolderFullCheck(address account) public view {
        _IERC1155SupportCheck(account);
        _IBatchesHolderSupportCheck(account);
        _holderSupplierCheck(account);
        _IBatchesOperatorSupportCheck(account);
    }
}
