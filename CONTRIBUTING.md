# Contribuindo para IMD Community Coins Builder

Obrigado por interesse em contribuir!

## Como Contribuir

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adicionando nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Regras

- Siga o estilo de código existente
- Adicione testes para novas funcionalidades
- Atualize a documentação se necessário
- Mantenha os commits limpos e descritivos

## Estrutura do Projeto

```
imd/
├── agents/          # Agentes do builder
├── contracts/       # Contratos Solidity
├── docs/            # Documentação
├── frontend/        # Interface web
└── scripts/         # Scripts de deploy
```

## Desenvolvimento

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Contratos
```bash
cd contracts
npm install
npx hardhat compile
```

## Pull Requests

- Uma feature por PR
- Descreva as mudanças
- Referencie issues relacionadas
- Inclua screenshots se aplicável

## Issues

- Use templates existentes
- Seja descritivo
- Inclua passos para reproduzir
- Informe ambiente e versões

Obrigado por contribuir!
