// contracts/NFT.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/introspection/ERC165.sol";

contract NFT is ERC1155 {
    using Address for address;

    // Mapping tokens supply,
    mapping(uint256 => uint256) private _supply;

    // Stores URI list of tokens
    mapping(uint256 => string) private _tokenURIs;

    constructor() ERC1155("") {}

    /**
     * Gives the contract owner the right to create new `amount` of tokens and assigns them to `to`.
     * The token id starts at 1 and automatically increases as new creations are made
     *
     * Recommendations for metadataURI:
     * - Store metadata permanently and decentrally with IPFS.
     * - For each file that you uploaded, prepare an IPFS URI of the form ipfs://<CID>/metadata.json.
     * - Read more about it at: https://nft.storage/docs/how-to/mint-erc-1155/
     */
    function mint(
        address to,
        uint256 id,
        uint256 amount,
        string memory metadataURI
    ) internal {
        _mint(to, id, amount, "");
        _tokenURIs[id] = metadataURI;
    }

    /**
     * Gives the contract owner the right to create multiple `amounts` of different tokens and assigns them to `to`.
     * Requirements:
        - `amounts` and `metadataURIs` must be numerical lists of the same lenght 
    */
    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        string[] memory metadataURIs
    ) internal {
        require(
            amounts.length == metadataURIs.length,
            "amounts and metadataURIs length mismatch"
        );

        _mintBatch(to, ids, amounts, "");

        for (uint256 i = 0; i < ids.length; i++) {
            _tokenURIs[ids[i]] = metadataURIs[i];
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

    /**
     * Check if the contract implements ERC1155Receiver interface
     * ( onERC1155Received and onERC1155BatchReceived )
     */
    function _IERC1155SupportCheck(address account) internal view {
        if (account.isContract()) {
            try
                ERC1155(account).supportsInterface(
                    type(IERC1155Receiver).interfaceId
                )
            returns (bool result) {
                if (!result) {
                    revert(
                        "contract does not implement ERC1155Receiver interface"
                    );
                }
            } catch {
                revert("contract does not implement ERC1155Receiver interface");
            }
        }
    }
}
