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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type VaaKeyStruct = {
  chainId: BigNumberish;
  emitterAddress: BytesLike;
  sequence: BigNumberish;
};

export type VaaKeyStructOutput = [number, string, BigNumber] & {
  chainId: number;
  emitterAddress: string;
  sequence: BigNumber;
};

export interface IWormholeRelayerInterface extends utils.Interface {
  functions: {
    "quoteEVMDeliveryPrice(uint16,uint256,uint256)": FunctionFragment;
    "sendVaasToEvm(uint16,address,bytes,uint256,uint256,(uint16,bytes32,uint64)[],uint16,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "quoteEVMDeliveryPrice",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "sendVaasToEvm",
    values: [
      BigNumberish,
      string,
      BytesLike,
      BigNumberish,
      BigNumberish,
      VaaKeyStruct[],
      BigNumberish,
      string
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "quoteEVMDeliveryPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendVaasToEvm",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IWormholeRelayer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IWormholeRelayerInterface;

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
    quoteEVMDeliveryPrice(
      targetChain: BigNumberish,
      receiverValue: BigNumberish,
      gasLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        nativePriceQuote: BigNumber;
        targetChainRefundPerGasUnused: BigNumber;
      }
    >;

    sendVaasToEvm(
      targetChain: BigNumberish,
      targetAddress: string,
      payload: BytesLike,
      receiverValue: BigNumberish,
      gasLimit: BigNumberish,
      vaaKeys: VaaKeyStruct[],
      refundChain: BigNumberish,
      refundAddress: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  quoteEVMDeliveryPrice(
    targetChain: BigNumberish,
    receiverValue: BigNumberish,
    gasLimit: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      nativePriceQuote: BigNumber;
      targetChainRefundPerGasUnused: BigNumber;
    }
  >;

  sendVaasToEvm(
    targetChain: BigNumberish,
    targetAddress: string,
    payload: BytesLike,
    receiverValue: BigNumberish,
    gasLimit: BigNumberish,
    vaaKeys: VaaKeyStruct[],
    refundChain: BigNumberish,
    refundAddress: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    quoteEVMDeliveryPrice(
      targetChain: BigNumberish,
      receiverValue: BigNumberish,
      gasLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        nativePriceQuote: BigNumber;
        targetChainRefundPerGasUnused: BigNumber;
      }
    >;

    sendVaasToEvm(
      targetChain: BigNumberish,
      targetAddress: string,
      payload: BytesLike,
      receiverValue: BigNumberish,
      gasLimit: BigNumberish,
      vaaKeys: VaaKeyStruct[],
      refundChain: BigNumberish,
      refundAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    quoteEVMDeliveryPrice(
      targetChain: BigNumberish,
      receiverValue: BigNumberish,
      gasLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sendVaasToEvm(
      targetChain: BigNumberish,
      targetAddress: string,
      payload: BytesLike,
      receiverValue: BigNumberish,
      gasLimit: BigNumberish,
      vaaKeys: VaaKeyStruct[],
      refundChain: BigNumberish,
      refundAddress: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    quoteEVMDeliveryPrice(
      targetChain: BigNumberish,
      receiverValue: BigNumberish,
      gasLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sendVaasToEvm(
      targetChain: BigNumberish,
      targetAddress: string,
      payload: BytesLike,
      receiverValue: BigNumberish,
      gasLimit: BigNumberish,
      vaaKeys: VaaKeyStruct[],
      refundChain: BigNumberish,
      refundAddress: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
