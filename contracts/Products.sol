// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "./Suppliers.sol";

contract Products is Suppliers {
    using Counters for Counters.Counter;
    Counters.Counter private _numberOfProducts;

    // Mapping from user address to boolean type
    mapping(address => bool) private isAuthorized;

    // Define product struct
    struct Product {
        uint256 supplierId;
        address holderAddr;
        string metadataUri;
    }

    mapping(uint256 => Product) private _products;

    mapping(address => bool) private _holderAddresses;

    // Define event
    event NewProduct(uint256 id);

    // Register product information
    function addProduct(
        uint256 supplierId,
        address holderAddr,
        string memory metadataUri
    )
        public
        allowedSupplier(supplierId)
        allowedManager(supplierId, msg.sender)
    {
        require(!_holderAddresses[holderAddr], "Holder address already exists");
        _doSafeHolderAcceptanceCheck(holderAddr);
        _holderAddresses[holderAddr] = true;
        _numberOfProducts.increment();
        uint256 productId = _numberOfProducts.current();
        _products[productId] = Product(supplierId, holderAddr, metadataUri);
        emit NewProduct(productId);

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

    function _doSafeHolderAcceptanceCheck(address account) private view {
        if (account.code.length > 0) {
            // Account is a contract

            // External call to contract asking for the supplier address
            (bool success, bytes memory data) = account.staticcall(
                abi.encodeWithSignature("supplier()")
            );

            if (success) {
                // Contract returned the supplier address
                address supplierAddress = abi.decode(data, (address));
                if (supplierAddress != address(this)) {
                    // Contract returned a different supplier address
                    revert("Invalid supplier in holder");
                }
            } else {
                // Contract did not return the supplier address
                revert("Holder not implements supplier");
            }
        }
    }
}
