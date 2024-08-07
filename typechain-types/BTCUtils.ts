/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface BTCUtilsInterface extends utils.Interface {
  functions: {
    "DIFF1_TARGET()": FunctionFragment;
    "ERR_BAD_ARG()": FunctionFragment;
    "RETARGET_PERIOD()": FunctionFragment;
    "RETARGET_PERIOD_BLOCKS()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DIFF1_TARGET",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ERR_BAD_ARG",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "RETARGET_PERIOD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "RETARGET_PERIOD_BLOCKS",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "DIFF1_TARGET",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ERR_BAD_ARG",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "RETARGET_PERIOD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "RETARGET_PERIOD_BLOCKS",
    data: BytesLike
  ): Result;

  events: {};
}

export interface BTCUtils extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BTCUtilsInterface;

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
    DIFF1_TARGET(overrides?: CallOverrides): Promise<[BigNumber]>;

    ERR_BAD_ARG(overrides?: CallOverrides): Promise<[BigNumber]>;

    RETARGET_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;

    RETARGET_PERIOD_BLOCKS(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  DIFF1_TARGET(overrides?: CallOverrides): Promise<BigNumber>;

  ERR_BAD_ARG(overrides?: CallOverrides): Promise<BigNumber>;

  RETARGET_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

  RETARGET_PERIOD_BLOCKS(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    DIFF1_TARGET(overrides?: CallOverrides): Promise<BigNumber>;

    ERR_BAD_ARG(overrides?: CallOverrides): Promise<BigNumber>;

    RETARGET_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    RETARGET_PERIOD_BLOCKS(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    DIFF1_TARGET(overrides?: CallOverrides): Promise<BigNumber>;

    ERR_BAD_ARG(overrides?: CallOverrides): Promise<BigNumber>;

    RETARGET_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    RETARGET_PERIOD_BLOCKS(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DIFF1_TARGET(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ERR_BAD_ARG(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    RETARGET_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    RETARGET_PERIOD_BLOCKS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
