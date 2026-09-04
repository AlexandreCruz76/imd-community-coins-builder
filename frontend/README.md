# IMD Community Coins Frontend

Frontend para o IMD Community Coins Builder.

## Funcionalidades

- Conexão de carteira MetaMask
- Lançamento de tokens
- Visualização de agentes
- Informações sobre contratos

## Tecnologias

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Ethers.js

## Instalação

```bash
cd frontend
npm install
```

## Desenvolvimento

```bash
npm run dev
```

Acesse: http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Estrutura

```
frontend/
├── components/     # Componentes React
├── context/        # Contextos globais
├── hooks/          # Custom hooks
├── pages/          # Páginas Next.js
├── styles/         # Estilos CSS
├── types/          # Tipos TypeScript
└── utils/          # Utilitários
```

## Variáveis de Ambiente

Crie um arquivo `.env.local`:

```env
NEXT_PUBLIC_IMD_LAUNCH_CONTRACT=0x73d1ae084F04f793A5bbd6B623d74400C9Fc3f42
NEXT_PUBLIC_IMD_HOOK_CONTRACT=0x51768F5dA32BA2008304cC81674da51aCb802888
NEXT_PUBLIC_IMD_TOKEN_ADDRESS=0xD34a99Bc0f67aE1bbd63C660e6d0b0dd03E263B7
```
