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
        uint256 _supplierId;
        string _metadataUri;
    }

    mapping(uint256 => Product) private _products;

    // Define event
    event NewProduct(uint256 id);

    // Register product information
    function addProduct(
        uint256 supplierId,
        string memory metadataUri
    )
        public
        allowedSupplier(supplierId)
        allowedManager(supplierId, msg.sender)
    {
        _numberOfProducts.increment();
        uint256 productId = _numberOfProducts.current();
        _products[productId] = Product(supplierId, metadataUri);
        emit NewProduct(productId);
    }

    // Get product information by id
    function getProduct(uint256 id)
        public
        view
        returns (uint256 supplierId, string memory metadataUri)
    {
        return (_products[id]._supplierId, _products[id]._metadataUri);
    }

    function getSupplierIdFromProduct(uint256 productId)
        public
        view
        returns (uint256 supplierId)
    {
        supplierId = _products[productId]._supplierId;
    }
}
