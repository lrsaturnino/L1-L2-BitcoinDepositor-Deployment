/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "BTCUtils",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BTCUtils__factory>;
    getContractFactory(
      name: "Reimbursable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Reimbursable__factory>;
    getContractFactory(
      name: "ReimbursementPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ReimbursementPool__factory>;
    getContractFactory(
      name: "OwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableUpgradeable__factory>;
    getContractFactory(
      name: "Initializable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Initializable__factory>;
    getContractFactory(
      name: "IERC20PermitUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20PermitUpgradeable__factory>;
    getContractFactory(
      name: "IERC20Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Upgradeable__factory>;
    getContractFactory(
      name: "ContextUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ContextUpgradeable__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "IL2WormholeGateway",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IL2WormholeGateway__factory>;
    getContractFactory(
      name: "L2BitcoinDepositor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L2BitcoinDepositor__factory>;
    getContractFactory(
      name: "IWormhole",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWormhole__factory>;
    getContractFactory(
      name: "IWormholeReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWormholeReceiver__factory>;
    getContractFactory(
      name: "IWormholeRelayer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWormholeRelayer__factory>;
    getContractFactory(
      name: "IWormholeTokenBridge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWormholeTokenBridge__factory>;
    getContractFactory(
      name: "AbstractTBTCDepositor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AbstractTBTCDepositor__factory>;
    getContractFactory(
      name: "IBridge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBridge__factory>;
    getContractFactory(
      name: "ITBTCVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITBTCVault__factory>;
    getContractFactory(
      name: "L1BitcoinDepositor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L1BitcoinDepositor__factory>;
    getContractFactory(
      name: "IWormhole",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWormhole__factory>;
    getContractFactory(
      name: "IWormholeReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWormholeReceiver__factory>;
    getContractFactory(
      name: "IWormholeRelayer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWormholeRelayer__factory>;
    getContractFactory(
      name: "IWormholeTokenBridge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWormholeTokenBridge__factory>;
    getContractFactory(
      name: "IL2WormholeGateway",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IL2WormholeGateway__factory>;
    getContractFactory(
      name: "L2BitcoinDepositor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L2BitcoinDepositor__factory>;
    getContractFactory(
      name: "IWormhole",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWormhole__factory>;
    getContractFactory(
      name: "IWormholeReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWormholeReceiver__factory>;
    getContractFactory(
      name: "IWormholeRelayer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWormholeRelayer__factory>;
    getContractFactory(
      name: "IWormholeTokenBridge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWormholeTokenBridge__factory>;
    getContractFactory(
      name: "L1BitcoinDepositor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L1BitcoinDepositor__factory>;
    getContractFactory(
      name: "IWormhole",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWormhole__factory>;
    getContractFactory(
      name: "IWormholeReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWormholeReceiver__factory>;
    getContractFactory(
      name: "IWormholeRelayer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWormholeRelayer__factory>;
    getContractFactory(
      name: "IWormholeTokenBridge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWormholeTokenBridge__factory>;

    getContractAt(
      name: "BTCUtils",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BTCUtils>;
    getContractAt(
      name: "Reimbursable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Reimbursable>;
    getContractAt(
      name: "ReimbursementPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ReimbursementPool>;
    getContractAt(
      name: "OwnableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableUpgradeable>;
    getContractAt(
      name: "Initializable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Initializable>;
    getContractAt(
      name: "IERC20PermitUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20PermitUpgradeable>;
    getContractAt(
      name: "IERC20Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Upgradeable>;
    getContractAt(
      name: "ContextUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ContextUpgradeable>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "IL2WormholeGateway",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IL2WormholeGateway>;
    getContractAt(
      name: "L2BitcoinDepositor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.L2BitcoinDepositor>;
    getContractAt(
      name: "IWormhole",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWormhole>;
    getContractAt(
      name: "IWormholeReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWormholeReceiver>;
    getContractAt(
      name: "IWormholeRelayer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWormholeRelayer>;
    getContractAt(
      name: "IWormholeTokenBridge",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWormholeTokenBridge>;
    getContractAt(
      name: "AbstractTBTCDepositor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AbstractTBTCDepositor>;
    getContractAt(
      name: "IBridge",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBridge>;
    getContractAt(
      name: "ITBTCVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITBTCVault>;
    getContractAt(
      name: "L1BitcoinDepositor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.L1BitcoinDepositor>;
    getContractAt(
      name: "IWormhole",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWormhole>;
    getContractAt(
      name: "IWormholeReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWormholeReceiver>;
    getContractAt(
      name: "IWormholeRelayer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWormholeRelayer>;
    getContractAt(
      name: "IWormholeTokenBridge",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWormholeTokenBridge>;
    getContractAt(
      name: "IL2WormholeGateway",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IL2WormholeGateway>;
    getContractAt(
      name: "L2BitcoinDepositor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.L2BitcoinDepositor>;
    getContractAt(
      name: "IWormhole",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWormhole>;
    getContractAt(
      name: "IWormholeReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWormholeReceiver>;
    getContractAt(
      name: "IWormholeRelayer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWormholeRelayer>;
    getContractAt(
      name: "IWormholeTokenBridge",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWormholeTokenBridge>;
    getContractAt(
      name: "L1BitcoinDepositor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.L1BitcoinDepositor>;
    getContractAt(
      name: "IWormhole",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWormhole>;
    getContractAt(
      name: "IWormholeReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWormholeReceiver>;
    getContractAt(
      name: "IWormholeRelayer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWormholeRelayer>;
    getContractAt(
      name: "IWormholeTokenBridge",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWormholeTokenBridge>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
