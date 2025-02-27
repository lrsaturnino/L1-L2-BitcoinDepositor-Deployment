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
      url: process.env.ETHEREUM_MAINNET_RPC_URL || "",
      chainId: 1,
      accounts: process.env.PRIVATE_KEY_L1Deployer !== undefined ? [process.env.PRIVATE_KEY_L1Deployer] : [],
      tags: ["etherscan"],
    },
    base: {
      url: process.env.L2_MAINNET_RPC_URL || "",
      chainId: 8453,
      accounts: process.env.PRIVATE_KEY_L2Deployer !== undefined ? [process.env.PRIVATE_KEY_L2Deployer] : [],
      tags: ["etherscan"],
    },
  },
  etherscan: {
    apiKey: {
      mainnet: process.env.ETHEREUM_MAINNET_EXPLORER_API_KEY || "",
      "base": process.env.L2_MAINNET_EXPLORER_API_KEY || "",
    },
    customChains: [
      {
        network: "base",
        chainId: 8453,
        urls: {
          apiURL: "https://api.basescan.org",
          browserURL: "https://basescan.org",
        },
      },
    ],    
  },

  namedAccounts: {
    deployer: {
      mainnet: "0x949f0ADFDA95351829E49aEec0f99371A227572d",
      base: "0xBC9C7345d240764BAF2D2016a86165BDf06131c2",
    },
  },
};

export default config;
