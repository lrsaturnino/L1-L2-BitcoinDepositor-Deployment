import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";

const attachL2BitcoinDepositor: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { network } = hre;

  try {
    if (network.name === "arbitrumSepolia") {
      const l2BitcoinDepositorAddress = "0x8a1e4e696Ec515Ed5a87160CB89AE698D15181aa"; // Replace with actual L2BitcoinDepositor address
      const l1BitcoinDepositorAddress = "0x0"; // Replace with actual L1BitcoinDepositor address

      const L2BitcoinDepositor = await ethers.getContractFactory("L2BitcoinDepositor");
      const l2BitcoinDepositor = await L2BitcoinDepositor.attach(l2BitcoinDepositorAddress);

      const tx = await l2BitcoinDepositor.attachL1BitcoinDepositor(l1BitcoinDepositorAddress);
      await tx.wait();

      console.log(`L2BitcoinDepositor at ${l2BitcoinDepositorAddress} now points to L1BitcoinDepositor at ${l1BitcoinDepositorAddress}`);
    }
  } catch (error) {
    console.error("An error occurred while attaching L2BitcoinDepositor:", error);
  }
};

export default attachL2BitcoinDepositor;
attachL2BitcoinDepositor.tags = ["AttachL2BitcoinDepositor"];
