#!/bin/bash

echo "=== IMD Community Coins Builder - Setup ==="

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "Node.js não encontrado. Por favor, instale o Node.js."
    exit 1
fi

# Verificar se npm está instalado
if ! command -v npm &> /dev/null; then
    echo "npm não encontrado. Por favor, instale o npm."
    exit 1
fi

echo "Node.js version: $(node -v)"
echo "npm version: $(npm -v)"

# Instalar dependências do frontend
echo "Instalando dependências do frontend..."
cd frontend
npm install
cd ..

# Instalar dependências dos contratos
echo "Instalando dependências dos contratos..."
cd contracts
npm install
cd ..

# Criar arquivo .env
echo "Criando arquivo .env..."
if [ ! -f .env ]; then
    cp .env.example .env
    echo "Arquivo .env criado. Por favor, edite com suas configurações."
fi

echo "=== Setup concluído! ==="
echo ""
echo "Para iniciar o desenvolvimento:"
echo "  make dev"
echo ""
echo "Ou manualmente:"
echo "  cd frontend && npm run dev"
