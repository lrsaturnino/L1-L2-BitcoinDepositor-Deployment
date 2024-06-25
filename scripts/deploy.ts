import { ethers, network } from "hardhat";

async function main() {
  if (network.name === "ethereumSepolia") {
    const L1BitcoinDepositor = await ethers.getContractFactory("L1BitcoinDepositor");
    const l1BitcoinDepositor = await L1BitcoinDepositor.deploy();
    await l1BitcoinDepositor.deployed();
    console.log("L1BitcoinDepositor deployed to Ethereum Sepolia at:", l1BitcoinDepositor.address);
  }

  if (network.name === "arbitrumSepolia") {
    const L2BitcoinDepositor = await ethers.getContractFactory("L2BitcoinDepositor");
    const l2BitcoinDepositor = await L2BitcoinDepositor.deploy();
    await l2BitcoinDepositor.deployed();
    console.log("L2BitcoinDepositor deployed to Arbitrum Sepolia at:", l2BitcoinDepositor.address);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
