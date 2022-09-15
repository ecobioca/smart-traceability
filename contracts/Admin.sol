// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Suppliers.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Admin is Suppliers {
    using Counters for Counters.Counter;
    Counters.Counter private _numberOfAdmins;

    mapping(address => bool) private _adminAddrs;

    modifier onlyAdmin() {
        require(_adminAddrs[msg.sender], "No admin permission");
        _;
    }

    constructor() {
        _adminAddrs[msg.sender] = true;
    }

    function addAdmin(address addr) external onlyAdmin {
        _adminAddrs[addr] = true;
    }

    function removeAdmin(address addr) external onlyAdmin {
        require(_numberOfAdmins.current() > 1, "Can't have less than 1 admin");
        delete _adminAddrs[addr];
    }

    function addSupplier(
        string memory metadataURI,
        address[] memory managersAddrs,
        Role role
    ) external onlyAdmin {
        _addSupplier(metadataURI, managersAddrs, role);
    }

    function removeSupplier(uint256 supplierId) external {
        _removeSupplier(supplierId);
    }
}
