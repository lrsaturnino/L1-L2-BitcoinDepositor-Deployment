import type { HardhatUserConfig } from "hardhat/config"

import "@nomiclabs/hardhat-etherscan"
import "@keep-network/hardhat-helpers"
import "@nomiclabs/hardhat-waffle"
import "hardhat-gas-reporter"
import "hardhat-contract-sizer"
import "hardhat-deploy"
import "@typechain/hardhat"
import "hardhat-dependency-compiler"
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      }
    ],
  },
  networks: {
    mainnet: {
      url: process.env.MAINNET_RPC_URL || "",
      chainId: 1,
      accounts: process.env.PRIVATE_KEY_MAINNET !== undefined ? [process.env.PRIVATE_KEY_MAINNET] : [],
      tags: ["etherscan"],
    },
    arbitrumOne: {
      url: process.env.ARBITRUM_RPC_URL || "",
      chainId: 42161,
      accounts: process.env.PRIVATE_KEY_ARBITRUM !== undefined ? [process.env.PRIVATE_KEY_ARBITRUM] : [],
      tags: ["etherscan"],
    },
  },
  etherscan: {
    apiKey: {
      mainnet: process.env.ETHERSCAN_API_KEY || "",
      "arbitrumOne": process.env.ARBISCAN_API_KEY || "",
    },
    customChains: [
      {
        network: "arbitrumOne",
        chainId: 42161,
        urls: {
          apiURL: "https://api.arbiscan.io/api",
          browserURL: "https://arbiscan.io/",
        },
      },
    ],    
  },

  namedAccounts: {
    deployer: {
      mainnet: "0x949f0ADFDA95351829E49aEec0f99371A227572d",
      arbitrumOne: "0xBC9C7345d240764BAF2D2016a86165BDf06131c2",
    },
  },
};

export default config;
