require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
      chainId: 31337
    },
    // Configurar redes conforme necessário
    // mainnet: {
    //   url: process.env.MAINNET_RPC_URL,
    //   accounts: [process.env.PRIVATE_KEY]
    // },
    // goerli: {
    //   url: process.env.GOERLI_RPC_URL,
    //   accounts: [process.env.PRIVATE_KEY]
    // }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};
