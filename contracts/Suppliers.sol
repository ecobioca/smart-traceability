// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "./Tokens.sol";

contract Suppliers is NFT {
    using Counters for Counters.Counter;
    Counters.Counter private _numberOfUsers;

    enum Role {
        SUPPLIER,
        MANUFECTER,
        DISTRIBUTOR,
        RETAILER
    }

    struct Supplier {
        string metadataUri;
        address[] managersAddrs;
        address holderAddr;
        Role role;
        bool exists;
    }

    mapping(uint256 => Supplier) private _allowedSuppliers;
    mapping(address => bool) private _holderAddresses;

    modifier allowedSupplier(uint256 supplierId) {
        require(_allowedSuppliers[supplierId].exists, "Supplier not allowed");
        _;
    }

    modifier allowedManager(uint256 supplierId, address managerAddr) {
        bool exists;
        for (
            uint256 i = 0;
            i < _allowedSuppliers[supplierId].managersAddrs.length;
            i++
        ) {
            if (_allowedSuppliers[supplierId].managersAddrs[i] == managerAddr) {
                exists = true;
            }
        }
        require(exists, "Manager not allowed");
        _;
    }

    function getSupplier(uint256 id) public view returns (Supplier memory) {
        return _allowedSuppliers[id];
    }

    // Add user to authorization list
    function _addSupplier(
        string memory metadataUri,
        address[] memory managersAddrs,
        address holderAddr,
        Role role
    ) internal {
        require(managersAddrs.length >= 1, "Invalid zero managersAddrs");
        require(!_holderAddresses[holderAddr], "Holder address already exists");
        _doSafeHolderAcceptanceCheck(holderAddr);
        _numberOfUsers.increment();
        _allowedSuppliers[_numberOfUsers.current()] = Supplier(
            metadataUri,
            managersAddrs,
            holderAddr,
            role,
            true
        );
        _holderAddresses[holderAddr] = true;
        for (uint256 i = 0; i < managersAddrs.length; i++) {
            if (holderAddr != managersAddrs[i]) {
                delegate(holderAddr, managersAddrs[i]);
            }
        }
    }

    function _removeSupplier(uint256 supplierId)
        internal
        allowedSupplier(supplierId)
    {
        delete _allowedSuppliers[supplierId];
    }

    function getSupplierHolder(uint256 supplierId)
        public
        view
        returns (address holderAddress)
    {
        holderAddress = _allowedSuppliers[supplierId].holderAddr;
    }

    function getManagers(uint256 supplierId)
        public
        view
        allowedSupplier(supplierId)
        returns (address[] memory _managers)
    {
        _managers = _allowedSuppliers[supplierId].managersAddrs;
    }

    function addManager(uint256 supplierId, address managerAddr)
        internal
        allowedSupplier(supplierId)
        allowedManager(supplierId, managerAddr)
    {
        _allowedSuppliers[supplierId].managersAddrs.push(managerAddr);
        delegate(_allowedSuppliers[supplierId].holderAddr, managerAddr);
    }

    function removeManager(uint256 supplierId, address managerAddr)
        internal
        allowedSupplier(supplierId)
        allowedManager(supplierId, managerAddr)
    {
        uint256 managerIndex;

        for (
            uint256 i = 0;
            i < _allowedSuppliers[supplierId].managersAddrs.length;
            i++
        ) {
            if (_allowedSuppliers[supplierId].managersAddrs[i] == managerAddr) {
                managerIndex = i;
            }
        }

        for (
            uint256 i = managerIndex;
            i < _allowedSuppliers[supplierId].managersAddrs.length - 1;
            i++
        ) {
            _allowedSuppliers[supplierId].managersAddrs[i] = _allowedSuppliers[
                supplierId
            ].managersAddrs[i + 1];
        }

        _allowedSuppliers[supplierId].managersAddrs.pop();
    }

    function _doSafeHolderAcceptanceCheck (address account) private view {
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
