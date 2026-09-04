# IMD Community Coins Builder

Projeto de lançamento de tokens no protocolo IMD Community Coins.

## Visão Geral

Todo token lançado no IMD é precificado em um único ativo: IMD. Não é em ETH e não é contra uma pool de liquidez própria. Você negocia com ETH, mas, por baixo, cada moeda fica sobre uma curva de bonding denominada em IMD.

## Estrutura do Projeto

```
imd/
├── agents/              # Agentes do builder
│   ├── estrategista/    # Agente 1: Estrategista de Lançamento
│   ├── designer/        # Agente 2: Designer de Identidade
│   ├── desenvolvedor/   # Agente 3: Desenvolvedor de Contrato
│   ├── operador/        # Agente 4: Operador de Launch
│   ├── gestor/          # Agente 5: Gestor de Comunidade
│   └── analista/        # Agente 6: Analista de Mercado
├── contracts/           # Contratos Solidity
├── docs/                # Documentação
├── frontend/            # Interface web
└── scripts/             # Scripts de deploy e utilitários
```

## Agentes do Builder

1. **Estrategista de Lançamento** - Define conceito, narrativa e tokenomics
2. **Designer de Identidade** - Cria identidade visual e assets
3. **Desenvolvedor de Contrato** - Prepara e valida contrato do token
4. **Operador de Launch** - Executa o lançamento na chain
5. **Gestor de Comunidade** - Constrói e engaja comunidade pós-lançamento
6. **Analista de Mercado** - Monitora performance e ajusta estratégia

## Passo a Passo de Lançamento

1. Definir conceito e narrativa
2. Preparar identidade visual
3. Estruturar tokenomics
4. Preparar infraestrutura
5. Executar launch
6. Comunicar lançamento
7. Gerenciar pós-lançamento

## Contratos Importantes

- **Launch**: `0x73d1ae084F04f793A5bbd6B623d74400C9Fc3f42`
- **Hook**: `0x51768F5dA32BA2008304cC81674da51aCb802888`
- **IMD Token**: `0xD34a99Bc0f67aE1bbd63C660e6d0b0dd03E263B7`
- **PoolManager**: `0x000000000004444c5dc75cB358380D2e3dE08A90`

## Fontes

- Documentação IMD: https://communitycoins.imd.fun/docs
- Uniswap v4 docs: https://developers.uniswap.org/docs
- ERC-6909: https://developers.uniswap.org/docs/protocols/v4/concepts/erc-6909
