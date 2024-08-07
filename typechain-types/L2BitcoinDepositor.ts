/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type BitcoinTxInfoStruct = {
  version: BytesLike;
  inputVector: BytesLike;
  outputVector: BytesLike;
  locktime: BytesLike;
};

export type BitcoinTxInfoStructOutput = [string, string, string, string] & {
  version: string;
  inputVector: string;
  outputVector: string;
  locktime: string;
};

export type DepositRevealInfoStruct = {
  fundingOutputIndex: BigNumberish;
  blindingFactor: BytesLike;
  walletPubKeyHash: BytesLike;
  refundPubKeyHash: BytesLike;
  refundLocktime: BytesLike;
  vault: string;
};

export type DepositRevealInfoStructOutput = [
  number,
  string,
  string,
  string,
  string,
  string
] & {
  fundingOutputIndex: number;
  blindingFactor: string;
  walletPubKeyHash: string;
  refundPubKeyHash: string;
  refundLocktime: string;
  vault: string;
};

export interface L2BitcoinDepositorInterface extends utils.Interface {
  functions: {
    "attachL1BitcoinDepositor(address)": FunctionFragment;
    "initialize(address,address,uint16)": FunctionFragment;
    "initializeDeposit((bytes4,bytes,bytes,bytes4),(uint32,bytes8,bytes20,bytes20,bytes4,address),address)": FunctionFragment;
    "l1BitcoinDepositor()": FunctionFragment;
    "l1ChainId()": FunctionFragment;
    "l2WormholeGateway()": FunctionFragment;
    "owner()": FunctionFragment;
    "receiveWormholeMessages(bytes,bytes[],bytes32,uint16,bytes32)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "wormholeRelayer()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "attachL1BitcoinDepositor",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeDeposit",
    values: [BitcoinTxInfoStruct, DepositRevealInfoStruct, string]
  ): string;
  encodeFunctionData(
    functionFragment: "l1BitcoinDepositor",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "l1ChainId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "l2WormholeGateway",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "receiveWormholeMessages",
    values: [BytesLike, BytesLike[], BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "wormholeRelayer",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "attachL1BitcoinDepositor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initializeDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "l1BitcoinDepositor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "l1ChainId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "l2WormholeGateway",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "receiveWormholeMessages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wormholeRelayer",
    data: BytesLike
  ): Result;

  events: {
    "DepositInitialized(tuple,tuple,address,address)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DepositInitialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type DepositInitializedEvent = TypedEvent<
  [BitcoinTxInfoStructOutput, DepositRevealInfoStructOutput, string, string],
  {
    fundingTx: BitcoinTxInfoStructOutput;
    reveal: DepositRevealInfoStructOutput;
    l2DepositOwner: string;
    l2Sender: string;
  }
>;

export type DepositInitializedEventFilter =
  TypedEventFilter<DepositInitializedEvent>;

export type InitializedEvent = TypedEvent<[number], { version: number }>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface L2BitcoinDepositor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: L2BitcoinDepositorInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    attachL1BitcoinDepositor(
      _l1BitcoinDepositor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _wormholeRelayer: string,
      _l2WormholeGateway: string,
      _l1ChainId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initializeDeposit(
      fundingTx: BitcoinTxInfoStruct,
      reveal: DepositRevealInfoStruct,
      l2DepositOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    l1BitcoinDepositor(overrides?: CallOverrides): Promise<[string]>;

    l1ChainId(overrides?: CallOverrides): Promise<[number]>;

    l2WormholeGateway(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    receiveWormholeMessages(
      arg0: BytesLike,
      additionalVaas: BytesLike[],
      sourceAddress: BytesLike,
      sourceChain: BigNumberish,
      arg4: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    wormholeRelayer(overrides?: CallOverrides): Promise<[string]>;
  };

  attachL1BitcoinDepositor(
    _l1BitcoinDepositor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _wormholeRelayer: string,
    _l2WormholeGateway: string,
    _l1ChainId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initializeDeposit(
    fundingTx: BitcoinTxInfoStruct,
    reveal: DepositRevealInfoStruct,
    l2DepositOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  l1BitcoinDepositor(overrides?: CallOverrides): Promise<string>;

  l1ChainId(overrides?: CallOverrides): Promise<number>;

  l2WormholeGateway(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  receiveWormholeMessages(
    arg0: BytesLike,
    additionalVaas: BytesLike[],
    sourceAddress: BytesLike,
    sourceChain: BigNumberish,
    arg4: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  wormholeRelayer(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    attachL1BitcoinDepositor(
      _l1BitcoinDepositor: string,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(
      _wormholeRelayer: string,
      _l2WormholeGateway: string,
      _l1ChainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    initializeDeposit(
      fundingTx: BitcoinTxInfoStruct,
      reveal: DepositRevealInfoStruct,
      l2DepositOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    l1BitcoinDepositor(overrides?: CallOverrides): Promise<string>;

    l1ChainId(overrides?: CallOverrides): Promise<number>;

    l2WormholeGateway(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    receiveWormholeMessages(
      arg0: BytesLike,
      additionalVaas: BytesLike[],
      sourceAddress: BytesLike,
      sourceChain: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    wormholeRelayer(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "DepositInitialized(tuple,tuple,address,address)"(
      fundingTx?: null,
      reveal?: null,
      l2DepositOwner?: string | null,
      l2Sender?: string | null
    ): DepositInitializedEventFilter;
    DepositInitialized(
      fundingTx?: null,
      reveal?: null,
      l2DepositOwner?: string | null,
      l2Sender?: string | null
    ): DepositInitializedEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    attachL1BitcoinDepositor(
      _l1BitcoinDepositor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      _wormholeRelayer: string,
      _l2WormholeGateway: string,
      _l1ChainId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initializeDeposit(
      fundingTx: BitcoinTxInfoStruct,
      reveal: DepositRevealInfoStruct,
      l2DepositOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    l1BitcoinDepositor(overrides?: CallOverrides): Promise<BigNumber>;

    l1ChainId(overrides?: CallOverrides): Promise<BigNumber>;

    l2WormholeGateway(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    receiveWormholeMessages(
      arg0: BytesLike,
      additionalVaas: BytesLike[],
      sourceAddress: BytesLike,
      sourceChain: BigNumberish,
      arg4: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    wormholeRelayer(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    attachL1BitcoinDepositor(
      _l1BitcoinDepositor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _wormholeRelayer: string,
      _l2WormholeGateway: string,
      _l1ChainId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initializeDeposit(
      fundingTx: BitcoinTxInfoStruct,
      reveal: DepositRevealInfoStruct,
      l2DepositOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    l1BitcoinDepositor(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    l1ChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    l2WormholeGateway(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    receiveWormholeMessages(
      arg0: BytesLike,
      additionalVaas: BytesLike[],
      sourceAddress: BytesLike,
      sourceChain: BigNumberish,
      arg4: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    wormholeRelayer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
