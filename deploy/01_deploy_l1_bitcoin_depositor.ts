import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployL1BitcoinDepositor: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { ethers, getNamedAccounts, helpers } = hre
  const { deployer } = await getNamedAccounts()

  try {
    const tbtcBridgeAddress = "0x5e4861a80B55f035D899f66772117F00FA0E8e7B";
    const tbtcVaultAddress = "0x9C070027cdC9dc8F82416B2e5314E11DFb4FE3CD";
    const wormholeAddress = "0x98f3c9e6E3fAce36bAAd05FE09d375Ef1464288B";
    const wormholeRelayerAddress = "0x27428DD2d3DD32A4D7f7C497eAaa23130d894911";
    const wormholeTokenBridgeAddress = "0x3ee18B2214AFF97000D974cf647E7C347E8fa585";
    const l2WormholeGatewayAddress = "0x09959798B95d00a3183d20FaC298E4594E599eab";
    const wormholeL2ChainId = 30;

    const [, proxyDeployment] = await helpers.upgrades.deployProxy(
      "BaseL1BitcoinDepositor",
      {
        contractName:
          "L1BitcoinDepositor",
        initializerArgs: [
          tbtcBridgeAddress,
          tbtcVaultAddress,
          wormholeAddress,
          wormholeRelayerAddress,
          wormholeTokenBridgeAddress,
          l2WormholeGatewayAddress,
          wormholeL2ChainId,
        ],
        factoryOpts: { signer: await ethers.getSigner(deployer) },
        proxyOpts: {
          kind: "transparent",
        },
      }
    );

    // Contracts can be verified on L2 Base Etherscan in a similar way as we
    // do it on L1 Etherscan
    if (hre.network.tags.etherscan) {
      // We use `verify` instead of `verify:verify` as the `verify` task is defined
      // in "@openzeppelin/hardhat-upgrades" to verify the proxy’s implementation
      // contract, the proxy itself and any proxy-related contracts, as well as
      // link the proxy to the implementation contract’s ABI on (Ether)scan.
      await hre.run("verify", {
        address: proxyDeployment.address,
        constructorArgsParams: [],
      })
    }      
    console.log("L1BitcoinDepositor deployed to Sepolia at:", proxyDeployment.address);
    
  } catch (error) {
    console.error("An error occurred during deployment:", error);
  }
};

export default deployL1BitcoinDepositor;
deployL1BitcoinDepositor.tags = ["L1BitcoinDepositor"];
