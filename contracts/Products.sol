// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "./Suppliers.sol";

contract Products is Suppliers {
    using Counters for Counters.Counter;
    Counters.Counter private _numberOfProducts;

    // Mapping from user address to boolean type
    mapping(address => bool) private isAuthorized;

    // Define struct
    struct Product {
        uint256 _supplierId;
        string _metadataUri;
        string _productCode; // EAN
        uint256 _addTime;
    }

    mapping(uint256 => Product) private _products;

    mapping(string => uint256) private _productCodeToId;

    // Register product information
    function addProduct(
        uint256 supplierId,
        string memory productCode,
        string memory metadataUri
    )
        public
        allowedSupplier(supplierId)
        allowedManager(supplierId, msg.sender)
    {
        require(bytes(productCode).length == 13, "Invalid product code");

        _numberOfProducts.increment();
        uint256 productId = _numberOfProducts.current();

        _productCodeToId[productCode] = productId;

        _products[productId]._supplierId = supplierId;
        _products[productId]._productCode = productCode;
        _products[productId]._metadataUri = metadataUri;
        _products[productId]._addTime = block.timestamp;
    }

    // Get the number of products
    function getNumberOfProducts()
        public
        view
        returns (uint256 numberOfProducts)
    {
        return _numberOfProducts.current();
    }

    // Get product information by id
    function getProductOfId(uint256 id)
        public
        view
        returns (
            uint256 supplierId,
            string memory productCode,
            string memory metadataUri,
            uint256 addTime
        )
    {
        supplierId  = _products[id]._supplierId;
        productCode = _products[id]._productCode;
        metadataUri = _products[id]._metadataUri;
        addTime = _products[id]._addTime;
    }

    function getIdOfCode(string memory productCode)
        public
        view
        returns (uint256 id)
    {
        id = _productCodeToId[productCode];
    }

    function getSupplierIdFromProduct(uint256 productId)
        public
        view
        returns (uint256 supplierId)
    {
        supplierId = _products[productId]._supplierId;
    }
}
