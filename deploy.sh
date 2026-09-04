#!/bin/bash

echo "=== IMD Community Coins Builder - Deploy ==="

# Verificar se temos as variáveis de ambiente necessárias
if [ -z "$MAINNET_RPC_URL" ]; then
    echo "Erro: MAINNET_RPC_URL não está definido."
    echo "Por favor, configure o arquivo .env"
    exit 1
fi

if [ -z "$PRIVATE_KEY" ]; then
    echo "Erro: PRIVATE_KEY não está definido."
    echo "Por favor, configure o arquivo .env"
    exit 1
fi

echo "Compilando contratos..."
cd contracts
npx hardhat compile

echo "Deployando contratos..."
npx hardhat run scripts/deploy.js --network mainnet

echo "=== Deploy concluído! ==="
