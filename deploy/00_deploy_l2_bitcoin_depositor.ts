import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployL2BitcoinDepositors: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { ethers, getNamedAccounts, helpers} = hre
  const { deployer } = await getNamedAccounts()

  try {
    const wormholeRelayerAddress = "0x7B1bD7a6b4E61c2a123AC6BC2cbfC614437D0470";
    const l2WormholeGatewayAddress = "0xc3D46e0266d95215589DE639cC4E93b79f88fc6C";
    const l1ChainId = 10002;

    const [, proxyDeployment] = await helpers.upgrades.deployProxy(
      "ArbitrumL2BitcoinDepositor",
      {
        contractName:
          "@keep-network/tbtc-v2/contracts/l2/L2BitcoinDepositor.sol:L2BitcoinDepositor",
        initializerArgs: [
          wormholeRelayerAddress,
          l2WormholeGatewayAddress,
          l1ChainId,
        ],
        factoryOpts: { signer: await ethers.getSigner(deployer) },
        proxyOpts: {
          kind: "transparent",
        },
      }
    );

    // Contracts can be verified on L2 Base Etherscan in a similar way as we
    // do it on L1 Etherscan
    if (hre.network.tags.basescan) {
      // We use `verify` instead of `verify:verify` as the `verify` task is defined
      // in "@openzeppelin/hardhat-upgrades" to verify the proxy’s implementation
      // contract, the proxy itself and any proxy-related contracts, as well as
      // link the proxy to the implementation contract’s ABI on (Ether)scan.
      await hre.run("verify", {
        address: proxyDeployment.address,
        constructorArgsParams: [],
      })
    }      

    console.log("L2BitcoinDepositor deployed to Arbitrum Sepolia at:", proxyDeployment.address);
    
  } catch (error) {
    console.error("An error occurred during deployment:", error);
  }
};

export default deployL2BitcoinDepositors;
deployL2BitcoinDepositors.tags = ["L2BitcoinDepositor"]
deployL2BitcoinDepositors.dependencies = ["BaseWormholeGateway"]

