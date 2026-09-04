const { ethers } = require("hardhat");

async function main() {
  console.log("Iniciando deploy do token IMD Community Coins...");

  // Verificar se temos as variáveis de ambiente necessárias
  if (!process.env.TOKEN_NAME || !process.env.TOKEN_SYMBOL) {
    console.error("Por favor, configure as variáveis de ambiente TOKEN_NAME e TOKEN_SYMBOL");
    process.exit(1);
  }

  // Obter o signer (carteira)
  const [deployer] = await ethers.getSigners();
  console.log("Deploying com a conta:", deployer.address);
  console.log("Saldo da conta:", (await deployer.provider.getBalance(deployer.address)).toString());

  // Deploy do contrato (será implementado quando o desenvolvedor criar o contrato)
  console.log("Contrato será deployado aqui após implementação...");

  console.log("Deploy concluído!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
