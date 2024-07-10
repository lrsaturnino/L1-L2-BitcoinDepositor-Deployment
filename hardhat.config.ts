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
      url: process.env.MAINNET_SEPOLIA_URL || "",
      chainId: 11155111,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      tags: ["etherscan"],
    },
    arbitrumSepolia: {
      url: process.env.ARBITRUM_SEPOLIA_URL || "",
      chainId: 421614,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      tags: ["etherscan"],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.ETHERSCAN_API_KEY || "",
      "arbitrum-sepolia": process.env.ARBISCAN_API_KEY || "",
    },
    customChains: [
      {
        network: "arbitrum-sepolia",
        chainId: 421614,
        urls: {
          apiURL: "https://api-sepolia.arbiscan.io/api",
          browserURL: "https://sepolia.arbiscan.io",
        },
      },
    ],    
  },

  namedAccounts: {
    deployer: {
      sepolia: "0x992500f42A48371c2c9f91EE6165ba8F9dfB1692",
      arbitrumSepolia: "0x992500f42A48371c2c9f91EE6165ba8F9dfB1692",
    },
  },
};

export default config;
