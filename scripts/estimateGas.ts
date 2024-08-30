import { ethers, network } from "hardhat";

async function main() {
  if (network.name === "ethereumSepolia") {
    const L1BitcoinDepositor = await ethers.getContractFactory("L1BitcoinDepositor");
    const gasEstimate = await L1BitcoinDepositor.signer.estimateGas(L1BitcoinDepositor.deploy());
    console.log("Estimated gas for L1BitcoinDepositor deployment:", gasEstimate.toString());
  }

  if (network.name === "arbitrumSepolia") {
    const L2BitcoinDepositor = await ethers.getContractFactory("L2BitcoinDepositor");
    const gasEstimate = await L2BitcoinDepositor.signer.estimateGas(L2BitcoinDepositor.deploy());
    console.log("Estimated gas for L2BitcoinDepositor deployment:", gasEstimate.toString());
  }
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
