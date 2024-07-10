import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers, upgrades } from "hardhat";

const deployL1L2BitcoinDepositors: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { network } = hre;

  try {
    if (network.name === "ethereumSepolia") {
      const tbtcBridgeAddress = "0x9b1a7fE5a16A15F2f9475C5B231750598b113403";
      const tbtcVaultAddress = "0xB5679dE944A79732A75CE556191DF11F489448d5";
      const wormholeAddress = "0x4a8bc80Ed5a4067f1CCf107057b8270E0cC11A78";
      const wormholeRelayerAddress = "0x7B1bD7a6b4E61c2a123AC6BC2cbfC614437D0470";
      const wormholeTokenBridgeAddress = "0xDB5492265f6038831E89f495670FF909aDe94bd9";
      const l2WormholeGatewayAddress = "0xc3D46e0266d95215589DE639cC4E93b79f88fc6C";
      const l2ChainId = 10003;

      const L1BitcoinDepositor = await ethers.getContractFactory("L1BitcoinDepositor");
      const l1BitcoinDepositor = await upgrades.deployProxy(L1BitcoinDepositor, [
        tbtcBridgeAddress,
        tbtcVaultAddress,
        wormholeAddress,
        wormholeRelayerAddress,
        wormholeTokenBridgeAddress,
        l2WormholeGatewayAddress,
        l2ChainId,
      ], { kind: 'transparent' });

      console.log("L1BitcoinDepositor deployed to Ethereum Sepolia at:", l1BitcoinDepositor.target);
    }

    if (network.name === "arbitrumSepolia") {
      const wormholeRelayerAddress = "0x7B1bD7a6b4E61c2a123AC6BC2cbfC614437D0470";
      const l2WormholeGatewayAddress = "0xc3D46e0266d95215589DE639cC4E93b79f88fc6C";
      const l1ChainId = 10002;

      const L2BitcoinDepositor = await ethers.getContractFactory("L2BitcoinDepositor");
      const l2BitcoinDepositor = await upgrades.deployProxy(L2BitcoinDepositor, [
        wormholeRelayerAddress,
        l2WormholeGatewayAddress,
        l1ChainId,
      ], { kind: 'transparent' });

      console.log("L2BitcoinDepositor deployed to Arbitrum Sepolia at:", l2BitcoinDepositor.target);
    }
  } catch (error) {
    console.error("An error occurred during deployment:", error);
  }
};

export default deployL1L2BitcoinDepositors;
deployL1L2BitcoinDepositors.tags = ["L1BitcoinDepositor", "L2BitcoinDepositor"];
