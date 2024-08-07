/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  AbstractTBTCDepositor,
  AbstractTBTCDepositorInterface,
} from "../AbstractTBTCDepositor";

const _abi = [
  {
    inputs: [],
    name: "SATOSHI_MULTIPLIER",
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
    name: "bridge",
    outputs: [
      {
        internalType: "contract IBridge",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tbtcVault",
    outputs: [
      {
        internalType: "contract ITBTCVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class AbstractTBTCDepositor__factory {
  static readonly abi = _abi;
  static createInterface(): AbstractTBTCDepositorInterface {
    return new utils.Interface(_abi) as AbstractTBTCDepositorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AbstractTBTCDepositor {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AbstractTBTCDepositor;
  }
}
