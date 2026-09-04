# IMD Community Coins - Contratos

Contratos Solidity para o protocolo IMD Community Coins.

## Contratos

### IMDCommunityToken

Token ERC-20 com supply fixo de 1 bilhão. Projetado para lançamento no protocolo IMD.

**Funcionalidades:**
- Supply fixo de 1B tokens
- Metadata configurável (nome, símbolo, website, social)
- Burn de tokens
- Controle de owner

**Endereços do Protocolo IMD:**
- Launch: `0x73d1ae084F04f793A5bbd6B623d74400C9Fc3f42`
- Hook: `0x51768F5dA32BA2008304cC81674da51aCb802888`
- IMD: `0xD34a99Bc0f67aE1bbd63C660e6d0b0dd03E263B7`
- PoolManager: `0x000000000004444c5dc75cB358380D2e3dE08A90`

## Setup

```bash
npm install
```

## Compilar

```bash
npx hardhat compile
```

## Testar

```bash
npx hardhat test
```

## Deploy

```bash
# Configurar variáveis de ambiente
cp .env.example .env
# Editar .env com suas configurações

# Deploy
npx hardhat run scripts/deploy.js --network mainnet
```

## Verificar

```bash
npx hardhat verify --network mainnet CONTRACT_ADDRESS "Nome" "Simbolo" "Website" "Social"
```

## Documentação

- [IMD Community Coins](https://communitycoins.imd.fun/docs)
- [Uniswap v4](https://developers.uniswap.org/docs)
- [ERC-6909](https://developers.uniswap.org/docs/protocols/v4/concepts/erc-6909)
