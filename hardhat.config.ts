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
    sepolia: {
      url: process.env.ETHEREUM_SEPOLIA_RPC_URL || "",
      chainId: 11155111,
      accounts: process.env.PRIVATE_KEY_L1Deployer !== undefined ? [process.env.PRIVATE_KEY_L1Deployer] : [],
      tags: ["etherscan"],
    },
    baseSepolia: {
      url: process.env.L2_TESTNET_RPC_URL || "",
      chainId: 84532,
      accounts: process.env.PRIVATE_KEY_L2Deployer !== undefined ? [process.env.PRIVATE_KEY_L2Deployer] : [],
      tags: ["etherscan"],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.ETHEREUM_SEPOLIA_EXPLORER_API_KEY || "",
      "baseSepolia": process.env.L2_TESTNET_EXPLORER_API_KEY || "",
    },
    customChains: [
      {
        network: "baseSepolia",
        chainId: 84532,
        urls: {
          apiURL: "https://api-sepolia.basescan.org",
          browserURL: "https://sepolia.basescan.org",
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
