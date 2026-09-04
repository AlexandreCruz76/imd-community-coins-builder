// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title IMDCommunityToken
 * @dev Token ERC-20 para lançamento no protocolo IMD Community Coins
 * Supply fixo de 1 bilhão de tokens
 */
contract IMDCommunityToken is ERC20, Ownable {
    uint256 public constant TOTAL_SUPPLY = 1_000_000_000 * 10**18; // 1B tokens
    
    // Metadata do token
    string public website;
    string public social;
    
    // Endereços do protocolo IMD
    address public constant IMD_LAUNCH_CONTRACT = 0x73d1ae084F04f793A5bbd6B623d74400C9Fc3f42;
    address public constant IMD_HOOK_CONTRACT = 0x51768F5dA32BA2008304cC81674da51aCb802888;
    address public constant IMD_TOKEN = 0xD34a99Bc0f67aE1bbd63C660e6d0b0dd03E263B7;
    
    constructor(
        string memory _name,
        string memory _symbol,
        string memory _website,
        string memory _social
    ) ERC20(_name, _symbol) Ownable(msg.sender) {
        website = _website;
        social = _social;
        
        // Mint de todo o supply para o deployer
        _mint(msg.sender, TOTAL_SUPPLY);
    }
    
    /**
     * @dev Função para que o protocolo IMD possa queimar tokens
     * (será chamada pelo hook durante trades)
     */
    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }
    
    /**
     * @dev Atualizar website (apenas owner)
     */
    function setWebsite(string memory _website) public onlyOwner {
        website = _website;
    }
    
    /**
     * @dev Atualizar social (apenas owner)
     */
    function setSocial(string memory _social) public onlyOwner {
        social = _social;
    }
}
