// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Admin.sol";
import "./Batches.sol";

contract Traceability is Admin, Batches {
    address public _owner;

    constructor() {
        _owner = msg.sender;
    }
}
