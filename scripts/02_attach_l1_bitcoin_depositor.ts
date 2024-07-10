import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";

const attachL1BitcoinDepositor: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { network } = hre;

  try {
    if (network.name === "ethereumSepolia") {
      const l1BitcoinDepositorAddress = "L1_BITCOIN_DEPOSITOR_ADDRESS"; // Replace with actual L1BitcoinDepositor address
      const l2BitcoinDepositorAddress = "L2_BITCOIN_DEPOSITOR_ADDRESS"; // Replace with actual L2BitcoinDepositor address

      const L1BitcoinDepositor = await ethers.getContractFactory("L1BitcoinDepositor");
      const l1BitcoinDepositor = await L1BitcoinDepositor.attach(l1BitcoinDepositorAddress);

      const tx = await l1BitcoinDepositor.attachL1BitcoinDepositor(l2BitcoinDepositorAddress);
      await tx.wait();

      console.log(`L1BitcoinDepositor at ${l1BitcoinDepositorAddress} now points to L2BitcoinDepositor at ${l2BitcoinDepositorAddress}`);
    }
  } catch (error) {
    console.error("An error occurred while attaching L1BitcoinDepositor:", error);
  }
};

export default attachL1BitcoinDepositor;
attachL1BitcoinDepositor.tags = ["AttachL1BitcoinDepositor"];
