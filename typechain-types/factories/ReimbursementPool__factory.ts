/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ReimbursementPool,
  ReimbursementPoolInterface,
} from "../ReimbursementPool";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_staticGas",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxGasPrice",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "thirdPartyContract",
        type: "address",
      },
    ],
    name: "AuthorizedContract",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "withdrawnAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "FundsWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newMaxGasPrice",
        type: "uint256",
      },
    ],
    name: "MaxGasPriceUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "refundAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "SendingEtherFailed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newStaticGas",
        type: "uint256",
      },
    ],
    name: "StaticGasUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "thirdPartyContract",
        type: "address",
      },
    ],
    name: "UnauthorizedContract",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
    ],
    name: "authorize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isAuthorized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxGasPrice",
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
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gasSpent",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "refund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxGasPrice",
        type: "uint256",
      },
    ],
    name: "setMaxGasPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_staticGas",
        type: "uint256",
      },
    ],
    name: "setStaticGas",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "staticGas",
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
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
    ],
    name: "unauthorize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "withdrawAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610aff380380610aff83398101604081905261002f9161009a565b6100383361004a565b600180556003919091556004556100be565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080604083850312156100ad57600080fd5b505080516020909101519092909150565b610a32806100cd6000396000f3fe6080604052600436106100d55760003560e01c8063b6a5d7de1161007f578063f0b37c0411610059578063f0b37c04146101ff578063f2fde38b1461021f578063fa09e6301461023f578063fe9fbb801461025f57600080fd5b8063b6a5d7de146101a9578063d2fa635e146101c9578063e25b5345146101e957600080fd5b8063715018a6116100b0578063715018a61461014c5780637ad226dc146101615780638da5cb5b1461018157600080fd5b8062f714ce146100e15780633de39c11146101035780633e2174041461012c57600080fd5b366100dc57005b600080fd5b3480156100ed57600080fd5b506101016100fc366004610936565b61029f565b005b34801561010f57600080fd5b5061011960045481565b6040519081526020015b60405180910390f35b34801561013857600080fd5b50610101610147366004610962565b610445565b34801561015857600080fd5b50610101610489565b34801561016d57600080fd5b5061010161017c366004610936565b61049d565b34801561018d57600080fd5b506000546040516001600160a01b039091168152602001610123565b3480156101b557600080fd5b506101016101c436600461097b565b61066b565b3480156101d557600080fd5b506101016101e4366004610962565b6106c7565b3480156101f557600080fd5b5061011960035481565b34801561020b57600080fd5b5061010161021a36600461097b565b610704565b34801561022b57600080fd5b5061010161023a36600461097b565b61075d565b34801561024b57600080fd5b5061010161025a36600461097b565b6107ed565b34801561026b57600080fd5b5061028f61027a36600461097b565b60026020526000908152604090205460ff1681565b6040519015158152602001610123565b6102a76107ff565b814710156102fc5760405162461bcd60e51b815260206004820152601d60248201527f496e73756666696369656e7420636f6e74726163742062616c616e636500000060448201526064015b60405180910390fd5b6001600160a01b03811661035c5760405162461bcd60e51b815260206004820152602160248201527f5265636569766572277320616464726573732063616e6e6f74206265207a65726044820152606f60f81b60648201526084016102f3565b604080518381526001600160a01b03831660208201527f6141b54b56b8a52a8c6f5cd2a857f6117b18ffbf4d46bd3106f300a839cbf5ea910160405180910390a16000816001600160a01b03168360405160006040518083038185875af1925050503d80600081146103ea576040519150601f19603f3d011682016040523d82523d6000602084013e6103ef565b606091505b50509050806104405760405162461bcd60e51b815260206004820152601460248201527f4661696c656420746f2073656e6420457468657200000000000000000000000060448201526064016102f3565b505050565b61044d6107ff565b60038190556040518181527fa86b6e9a406df021f05f513a796a1d5bea0bd3e18fe1d3f6082a3cccfc898d14906020015b60405180910390a150565b6104916107ff565b61049b6000610859565b565b6104a56108c1565b3360009081526002602052604090205460ff1661052a5760405162461bcd60e51b815260206004820152602760248201527f436f6e7472616374206973206e6f7420617574686f72697a656420666f72206160448201527f20726566756e640000000000000000000000000000000000000000000000000060648201526084016102f3565b6001600160a01b03811661058a5760405162461bcd60e51b815260206004820152602160248201527f5265636569766572277320616464726573732063616e6e6f74206265207a65726044820152606f60f81b60648201526084016102f3565b60006004543a1061059d5760045461059f565b3a5b9050600081600354856105b291906109cc565b6105bc91906109e5565b90506000836001600160a01b03168260405160006040518083038185875af1925050503d806000811461060b576040519150601f19603f3d011682016040523d82523d6000602084013e610610565b606091505b505090508061065b57604080518381526001600160a01b03861660208201527fd955712c3ae4c3c40451db84ea0c4531c61cc0ea75c13fe9168ae0e07d71e050910160405180910390a15b50505061066760018055565b5050565b6106736107ff565b6001600160a01b038116600081815260026020908152604091829020805460ff1916600117905590519182527f2c74592fddad593c2c4403101ce9b30930711ab87571268ddd1e1989ee1d7917910161047e565b6106cf6107ff565b60048190556040518181527fa7a07f821dfdfca8e4baa9ccc4bbe7b782baac5946918bd19f1c9c761db414109060200161047e565b61070c6107ff565b6001600160a01b038116600081815260026020908152604091829020805460ff1916905590519182527fe195aa139c7c69ba98f719c94aecd784e12fabc0789ef81335150078bc087317910161047e565b6107656107ff565b6001600160a01b0381166107e15760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016102f3565b6107ea81610859565b50565b6107f56107ff565b6107ea478261029f565b6000546001600160a01b0316331461049b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102f3565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6002600154036109135760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016102f3565b6002600155565b80356001600160a01b038116811461093157600080fd5b919050565b6000806040838503121561094957600080fd5b823591506109596020840161091a565b90509250929050565b60006020828403121561097457600080fd5b5035919050565b60006020828403121561098d57600080fd5b6109968261091a565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b808201808211156109df576109df61099d565b92915050565b80820281158282048414176109df576109df61099d56fea2646970667358221220c8896c759109347f2e6c60b28aaee6e46a1b4c0a8ffced2a75f4ec3e18c2948664736f6c63430008110033";

type ReimbursementPoolConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReimbursementPoolConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ReimbursementPool__factory extends ContractFactory {
  constructor(...args: ReimbursementPoolConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _staticGas: BigNumberish,
    _maxGasPrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ReimbursementPool> {
    return super.deploy(
      _staticGas,
      _maxGasPrice,
      overrides || {}
    ) as Promise<ReimbursementPool>;
  }
  getDeployTransaction(
    _staticGas: BigNumberish,
    _maxGasPrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _staticGas,
      _maxGasPrice,
      overrides || {}
    );
  }
  attach(address: string): ReimbursementPool {
    return super.attach(address) as ReimbursementPool;
  }
  connect(signer: Signer): ReimbursementPool__factory {
    return super.connect(signer) as ReimbursementPool__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReimbursementPoolInterface {
    return new utils.Interface(_abi) as ReimbursementPoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReimbursementPool {
    return new Contract(address, _abi, signerOrProvider) as ReimbursementPool;
  }
}
