const { ethers } = require("hardhat");

async function main() {
  console.log("Deploying IMD Community Token...");

  const [deployer] = await ethers.getSigners();
  console.log("Deploying with account:", deployer.address);

  const balance = await ethers.provider.getBalance(deployer.address);
  console.log("Account balance:", ethers.formatEther(balance));

  const IMDCommunityToken = await ethers.getContractFactory("IMDCommunityToken");
  
  const tokenName = process.env.TOKEN_NAME || "IMD Community Token";
  const tokenSymbol = process.env.TOKEN_SYMBOL || "ICT";
  const website = process.env.TOKEN_WEBSITE || "https://imd.community";
  const social = process.env.TOKEN_SOCIAL || "@imdcommunity";

  const token = await IMDCommunityToken.deploy(
    tokenName,
    tokenSymbol,
    website,
    social
  );

  await token.waitForDeployment();

  const tokenAddress = await token.getAddress();
  console.log("IMD Community Token deployed to:", tokenAddress);

  console.log("\nDeployment Summary:");
  console.log("-------------------");
  console.log("Token Name:", tokenName);
  console.log("Token Symbol:", tokenSymbol);
  console.log("Token Address:", tokenAddress);
  console.log("Website:", website);
  console.log("Social:", social);
  console.log("Deployer:", deployer.address);

  console.log("\nNext steps:");
  console.log("1. Verify contract on Etherscan");
  console.log("2. Call launch() on IMD contract");
  console.log("3. Add liquidity to Uniswap v4 pool");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
