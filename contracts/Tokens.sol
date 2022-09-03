// contracts/NFT.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract NFT is ERC1155 {
    // Mapping tokens supply,
    mapping(uint256 => uint256) private _supply;

    // Stores URI list of tokens
    mapping(uint256 => string) private _tokenURIs;

    constructor() ERC1155("") {}

    /**
     * Simplifies single token transfer removing `from` and `data`.
     */
    function transfer(
        address to,
        uint256 id,
        uint256 amount
    ) internal {
        safeTransferFrom({
            from: msg.sender,
            to: to,
            id: id,
            amount: amount,
            data: "0x"
        });
    }

    /**
     * Simplifies token batch transfer.
     */
    function batchTransfer(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts
    ) external {
        safeBatchTransferFrom({
            from: msg.sender,
            to: to,
            ids: ids,
            amounts: amounts,
            data: "0x"
        });
    }

    /**
     * Gives the contract owner the right to create new `amount` of tokens and assigns them to `to`.
     * The token id starts at 1 and automatically increases as new creations are made
     *
     * Requirements:
     *
     * - `cid` is a content identifier / cryptographic hash used to point to material in IPFS.
     * - For each file that you uploaded, prepare an IPFS URI of the form ipfs://<CID>/metadata.json.
     * - Read more about it at: https://nft.storage/docs/how-to/mint-erc-1155/
     */
    function mint(
        address to,
        uint256 id,
        uint256 amount,
        string memory cid
    ) internal {
        require(true, "Token id already exists");
        _mint(to, id, amount, "");
        _tokenURIs[id] = string(
            abi.encodePacked("ipfs://", cid, "/metadata.json")
        );
    }

    /**
     * Gives the contract owner the right to create multiple `amounts` of different tokens and assigns them to `to`.
     * Requirements:
        - `amounts` and `cids` must be numerical lists of the same lenght 
    */
    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        string[] memory cids
    ) internal {
        require(
            amounts.length == cids.length,
            "amounts and cids length mismatch"
        );

        _mintBatch(to, ids, amounts, "");

        for (uint256 i = 0; i < ids.length; i++) {
            _tokenURIs[ids[i]] = string(
                abi.encodePacked("ipfs://", cids[i], "/metadata.json")
            );
        }
    }

    /**
     * Gives `msg.sender` the right to burn an `amount` of their own token `id`.
     */
    function burn(uint256 id, uint256 amount) internal {
        _burn({from: msg.sender, id: id, amount: amount});
    }

    /**
     * Gives `msg.sender` the right to burn multiple `amounts` of their own token `ids`.
     */
    function burnBatch(uint256[] memory ids, uint256[] memory amounts)
        internal
    {
        _burnBatch({from: msg.sender, ids: ids, amounts: amounts});
    }

    // ERC-1155 standard method for retrieving the URI associated with a token
    function uri(uint256 id) public view override returns (string memory) {
        return _tokenURIs[id];
    }

    // ERC-721 standard method for retrieving the URI associated with a token
    function tokenURI(uint256 id) public view returns (string memory) {
        return _tokenURIs[id];
    }

    // Returns the supply of a token
    function tokenSupply(uint256 id) public view returns (uint256) {
        return _supply[id];
    }

    // Allows the owner to grant transfer rights to another operator
    function delegate(address owner, address operator) internal {
        _setApprovalForAll(owner, operator, true);
    }

    // Allows the owner to cancel the transfer rights granted by another operator
    function cancelDelegate(address owner, address operator) internal {
        _setApprovalForAll(owner, operator, false);
    }

    /**
     * Automatically updates `supply` using standard ERC1155 callback (_afterTokenTransfer)
     * If the supply of a token is depleted (only through burning), the URI will be removed.
     */
    function _afterTokenTransfer(
        address,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory
    ) internal virtual override {
        for (uint256 i = 0; i < ids.length; i++) {
            if (from == address(0)) {
                _supply[ids[i]] += amounts[i];
            }
            if (to == address(0)) {
                _supply[ids[i]] -= amounts[i];
            }
            if (_supply[ids[i]] == 0) _tokenURIs[ids[i]] = "";
        }
    }
}
