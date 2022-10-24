// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./BatchesHolder.sol";

interface IBatchesOperator {
    function isOperator(address operator) external view returns (bool);
    function addOperator(address operator) external;
    function removeOperator(address operator) external;
}

contract BatchesOperator is BatchesHolder, IBatchesOperator {
    mapping(address => bool) private operators;

    constructor(address supplierAddr) BatchesHolder(supplierAddr) {}

    function isOperator(address account) public view override returns (bool) {
        return operators[account];
    }

    function addOperator(address operator) public override onlySupplier {
        if (!isOperator(operator)) {
            operators[operator] = true;
        }
    }

    function removeOperator(address operator) public override onlySupplier {
        if (isOperator(operator)) {
            operators[operator] = false;
        }
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override
        returns (bool)
    {
        return
            interfaceId == type(IBatchesOperator).interfaceId ||
            super.supportsInterface(interfaceId);
    }
}