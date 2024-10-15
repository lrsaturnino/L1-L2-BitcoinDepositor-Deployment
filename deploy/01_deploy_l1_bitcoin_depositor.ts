import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployL1BitcoinDepositor: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { ethers, getNamedAccounts, helpers } = hre
  const { deployer } = await getNamedAccounts()

  try {
    const tbtcBridgeAddress = "0x9b1a7fE5a16A15F2f9475C5B231750598b113403";
    const tbtcVaultAddress = "0xB5679dE944A79732A75CE556191DF11F489448d5";
    const wormholeAddress = "0x4a8bc80Ed5a4067f1CCf107057b8270E0cC11A78";
    const wormholeRelayerAddress = "0x7B1bD7a6b4E61c2a123AC6BC2cbfC614437D0470";
    const wormholeTokenBridgeAddress = "0xDB5492265f6038831E89f495670FF909aDe94bd9";
    const l2WormholeGatewayAddress = "0xc3D46e0266d95215589DE639cC4E93b79f88fc6C";
    const wormholeL2ChainId = 10004;

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
