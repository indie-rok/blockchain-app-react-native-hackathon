// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts@4.7.0/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts@4.7.0/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract StarZap is ERC1155, Ownable, ReentrancyGuard {
    constructor() ERC1155("https://gameexample.com/{id}.json") {}

    mapping(uint256 => bool) public rewardLive;
    mapping(uint256 => bool) public onlyClaimable;
    mapping(address => mapping(uint256 => bool)) public claimedReward;

    string public baseURI = "https://bafybeibopqg4urrea6ohetpdvtk5ttwc34kaht2sthi7crzbf26vnpluve.ipfs.dweb.link/";
    string public uriEnding = ".json";

    // Reward IDs
    // 0 A Star is Born - Create a Profile 
    // 1 Customise your profile 
    // 2 Amount of time on the platform 
    // 3 First buy in the shop
    // 4 Equip your first A.R mask 

    function uri(uint256 id) override public view returns (string memory) {
        return(string(abi.encodePacked(
            baseURI,
            Strings.toString(id),
            uriEnding
        )));
    }

    function setRewardState(uint256 id, bool live, bool claimOnly) external onlyOwner {
        rewardLive[id] = live;
        onlyClaimable[id] = claimOnly;
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function claim(uint256 id) public nonReentrant {
        require(rewardLive[id], "Reward not live");
        require(onlyClaimable[id], "Reward not claimable");
        require(!claimedReward[msg.sender][id], "Already claimed");
        claimedReward[msg.sender][id] = true;
        _mint(msg.sender, id, 1, "");
    }

    function mint(address account, uint256 id, uint256 amount)
        public
    {
        _mint(account, id, amount, new bytes(0));
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts)
        public
    {
        _mintBatch(to, ids, amounts, new bytes(0));
    }
}
