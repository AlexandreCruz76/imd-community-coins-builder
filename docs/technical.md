# Documentação Técnica - IMD Community Coins

## Visão Geral do Protocolo

O IMD Community Coins é um launchpad onde todos os tokens são precificados em IMD. A arquitetura utiliza bonding curves denominadas em IMD, com uma pool compartilhada ETH/IMD na Uniswap v4.

## Arquitetura

### Bonding Curves
- Cada moeda nasce com oferta fixa de 1 bilhão
- Relação de produto constante: `k = virtualImd × virtualCoin`
- Preço é função apenas de quanto já foi vendido/comprado

### Pool Compartilhada
- Pool ETH/IMD na Uniswap v4
- Hook acoplado que consome operações
- 1% fee · tick spacing 200
- Todo volume do launchpad passa por aqui

### ERC-6909
- PoolManager da Uniswap v4 guarda todos os tokens
- Claims ERC-6909 para contabilidade
- Supply inteiro depositado uma vez no lançamento

## Contratos

### Contrato de Launch
- Endereço: `0x73d1ae084F04f793A5bbd6B623d74400C9Fc3f42`
- Função: `launch()` - qualquer pessoa pode chamar

### Hook
- Endereço: `0x51768F5dA32BA2008304cC81674da51aCb802888`
- beforeSwap consome operações inteiras

### IMD Token
- Endereço: `0xD34a99Bc0f67aE1bbd63C660e6d0b0dd03E263B7`
- Token base para precificação

### PoolManager
- Endereço: `0x000000000004444c5dc75cB358380D2e3dE08A90`
- Guarda tokens e claims ERC-6909

## Taxas

1. **1% para LPs** - Provedores de liquidez da pool ETH/IMD
2. **0,5% para launcher** - Pago em cada trade (perna ETH)
3. **0,5% queimado** - Reduz permanentemente a oferta de IMD

## Fluxo de uma Transação

1. Usuário chama swap na pool ETH/moeda
2. Hook consome a operação inteira
3. AMM central não faz nada
4. ETH e moeda se compensam em única transação
5. Se pool ETH/IMD não fechar, operação reverte

## Segurança

- Backing sempre cobre moeda em circulação
- Operações nunca terminam "pela metade"
- Contratos verificados no Etherscan
- ERC-6909 garante contabilidade precisa

## Deploy

### Pré-requisitos
1. Wallet com ETH para gas
2. Nome e símbolo do token
3. Website e social (opcional)

### Passos
1. Deploy do contrato ERC-20
2. Chamar `launch()` no contrato IMD
3. Verificar no explorer
4. Documentar hash e endereço

## Referências

- Documentação IMD: https://communitycoins.imd.fun/docs
- Uniswap v4: https://developers.uniswap.org/docs
- ERC-6909: https://developers.uniswap.org/docs/protocols/v4/concepts/erc-6909
