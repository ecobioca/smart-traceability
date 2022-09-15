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
        string metadataURI;
        address[] managersAddrs;
        Role role;
        bool exists;
    }

    mapping(uint256 => Supplier) private _allowedSuppliers;

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

    event NewSupplier(uint256 id);

    event NewManager(uint256 supplierId, address managerAddr);

    event RemovedSupplier(uint256 id);

    event RemovedManager(uint256 supplierId, address managerAddr);

    function getSupplier(uint256 id) public view returns (Supplier memory) {
        return _allowedSuppliers[id];
    }

    // Add user to authorization list
    function _addSupplier(
        string memory metadataURI,
        address[] memory managersAddrs,
        Role role
    ) internal {
        require(managersAddrs.length >= 1, "Invalid zero managersAddrs");
        _numberOfUsers.increment();
        _allowedSuppliers[_numberOfUsers.current()] = Supplier(
            metadataURI,
            managersAddrs,
            role,
            true
        );
        emit NewSupplier(_numberOfUsers.current());
        for (uint256 i = 0; i < managersAddrs.length; i++) {
            emit NewManager(_numberOfUsers.current(), managersAddrs[i]);
        }
    }

    function _removeSupplier(uint256 supplierId)
        internal
        allowedSupplier(supplierId)
    {
        delete _allowedSuppliers[supplierId];
        emit RemovedSupplier(supplierId);
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
        emit NewManager(supplierId, managerAddr);
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

        emit RemovedManager(supplierId, managerAddr);
    }
}
