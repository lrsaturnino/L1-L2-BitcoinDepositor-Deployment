import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployL2BitcoinDepositor: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { ethers, getNamedAccounts, helpers } = hre
  const { deployer } = await getNamedAccounts()

  try {
    const wormholeRelayerAddress = "0x27428DD2d3DD32A4D7f7C497eAaa23130d894911";
    const l2WormholeGatewayAddress = "0x09959798B95d00a3183d20FaC298E4594E599eab";
    const wormholeL1ChainId = 2;

    const [, proxyDeployment] = await helpers.upgrades.deployProxy(
      "BaseL2BitcoinDepositor",
      {
        contractName: "L2BitcoinDepositor",
        initializerArgs: [
          wormholeRelayerAddress,
          l2WormholeGatewayAddress,
          wormholeL1ChainId,
        ],
        factoryOpts: { 
          signer: await ethers.getSigner(deployer),
        },
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
    console.log("L2BitcoinDepositor deployed to Base Sepolia at:", proxyDeployment.address);
    
  } catch (error) {
    console.error("An error occurred during deployment:", error);
  }
};

export default deployL2BitcoinDepositor;
deployL2BitcoinDepositor.tags = ["L2BitcoinDepositor"];
