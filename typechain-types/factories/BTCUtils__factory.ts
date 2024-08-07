/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BTCUtils, BTCUtilsInterface } from "../BTCUtils";

const _abi = [
  {
    inputs: [],
    name: "DIFF1_TARGET",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ERR_BAD_ARG",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RETARGET_PERIOD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RETARGET_PERIOD_BLOCKS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60d9610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060515760003560e01c8063056e04ec1460565780638cc715691460715780638db69e60146079578063d4258ca7146081575b600080fd5b605f6212750081565b60405190815260200160405180910390f35b605f6107e081565b605f60001981565b605f7bffff00000000000000000000000000000000000000000000000000008156fea264697066735822122021d85f11f64ed44ffba59bfc6b4a327f00d51e8e91ca784a048d3729db01b37f64736f6c63430008110033";

type BTCUtilsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BTCUtilsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BTCUtils__factory extends ContractFactory {
  constructor(...args: BTCUtilsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BTCUtils> {
    return super.deploy(overrides || {}) as Promise<BTCUtils>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BTCUtils {
    return super.attach(address) as BTCUtils;
  }
  connect(signer: Signer): BTCUtils__factory {
    return super.connect(signer) as BTCUtils__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BTCUtilsInterface {
    return new utils.Interface(_abi) as BTCUtilsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BTCUtils {
    return new Contract(address, _abi, signerOrProvider) as BTCUtils;
  }
}
