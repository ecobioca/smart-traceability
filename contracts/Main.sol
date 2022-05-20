// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Admin.sol";
import "./Batchs.sol";

contract Traceability is Admin, Batchs {
    address public _owner;

    constructor () {
        _owner = msg.sender;
    }
}