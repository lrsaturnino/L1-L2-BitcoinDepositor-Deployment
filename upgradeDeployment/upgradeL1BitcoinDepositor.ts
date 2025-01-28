import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const upgradeL1BitcoinDepositor: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  const { ethers, getNamedAccounts, helpers } = hre;
  const { deployer } = await getNamedAccounts();

  const proxyAddress = "0x37169570D846Cc05D5848AAA30194d308b355638";

  console.log("Upgrading L1BitcoinDepositor at proxy:", proxyAddress);

  const newImplementationDeployment = await helpers.upgrades.upgradeProxy(
    proxyAddress,
    "L1BitcoinDepositor",
    {
      contractName: "L1BitcoinDepositor",
      factoryOpts: { signer: await ethers.getSigner(deployer) },
    }
  );

  console.log(
    "Proxy has been upgraded. Implementation is now at:",
    newImplementationDeployment.implementation
  );

};

export default upgradeL1BitcoinDepositor;
upgradeL1BitcoinDepositor.tags = ["UpgradeL1BitcoinDepositor"];
