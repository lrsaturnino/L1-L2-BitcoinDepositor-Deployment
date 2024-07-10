/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  L2BitcoinDepositor,
  L2BitcoinDepositorInterface,
} from "../L2BitcoinDepositor";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "bytes4",
            name: "version",
            type: "bytes4",
          },
          {
            internalType: "bytes",
            name: "inputVector",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "outputVector",
            type: "bytes",
          },
          {
            internalType: "bytes4",
            name: "locktime",
            type: "bytes4",
          },
        ],
        indexed: false,
        internalType: "struct IBridgeTypes.BitcoinTxInfo",
        name: "fundingTx",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "fundingOutputIndex",
            type: "uint32",
          },
          {
            internalType: "bytes8",
            name: "blindingFactor",
            type: "bytes8",
          },
          {
            internalType: "bytes20",
            name: "walletPubKeyHash",
            type: "bytes20",
          },
          {
            internalType: "bytes20",
            name: "refundPubKeyHash",
            type: "bytes20",
          },
          {
            internalType: "bytes4",
            name: "refundLocktime",
            type: "bytes4",
          },
          {
            internalType: "address",
            name: "vault",
            type: "address",
          },
        ],
        indexed: false,
        internalType: "struct IBridgeTypes.DepositRevealInfo",
        name: "reveal",
        type: "tuple",
      },
      {
        indexed: true,
        internalType: "address",
        name: "l2DepositOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "l2Sender",
        type: "address",
      },
    ],
    name: "DepositInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
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
    inputs: [
      {
        internalType: "address",
        name: "_l1BitcoinDepositor",
        type: "address",
      },
    ],
    name: "attachL1BitcoinDepositor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_wormholeRelayer",
        type: "address",
      },
      {
        internalType: "address",
        name: "_l2WormholeGateway",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "_l1ChainId",
        type: "uint16",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes4",
            name: "version",
            type: "bytes4",
          },
          {
            internalType: "bytes",
            name: "inputVector",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "outputVector",
            type: "bytes",
          },
          {
            internalType: "bytes4",
            name: "locktime",
            type: "bytes4",
          },
        ],
        internalType: "struct IBridgeTypes.BitcoinTxInfo",
        name: "fundingTx",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "fundingOutputIndex",
            type: "uint32",
          },
          {
            internalType: "bytes8",
            name: "blindingFactor",
            type: "bytes8",
          },
          {
            internalType: "bytes20",
            name: "walletPubKeyHash",
            type: "bytes20",
          },
          {
            internalType: "bytes20",
            name: "refundPubKeyHash",
            type: "bytes20",
          },
          {
            internalType: "bytes4",
            name: "refundLocktime",
            type: "bytes4",
          },
          {
            internalType: "address",
            name: "vault",
            type: "address",
          },
        ],
        internalType: "struct IBridgeTypes.DepositRevealInfo",
        name: "reveal",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "l2DepositOwner",
        type: "address",
      },
    ],
    name: "initializeDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "l1BitcoinDepositor",
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
    inputs: [],
    name: "l1ChainId",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "l2WormholeGateway",
    outputs: [
      {
        internalType: "contract IL2WormholeGateway",
        name: "",
        type: "address",
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
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes[]",
        name: "additionalVaas",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "sourceAddress",
        type: "bytes32",
      },
      {
        internalType: "uint16",
        name: "sourceChain",
        type: "uint16",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "receiveWormholeMessages",
    outputs: [],
    stateMutability: "payable",
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
    inputs: [],
    name: "wormholeRelayer",
    outputs: [
      {
        internalType: "contract IWormholeRelayer",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001961001e565b6100dd565b600054610100900460ff161561008a5760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff908116146100db576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b61108b806100ec6000396000f3fe6080604052600436106100bc5760003560e01c80637ebef52911610074578063da25b7251161004e578063da25b725146101d7578063e1551fc9146101f7578063f2fde38b1461021757600080fd5b80637ebef529146101655780638da5cb5b14610185578063aa82e33b146101b757600080fd5b8063529dca32116100a5578063529dca321461011d578063642dc03314610130578063715018a61461015057600080fd5b806312622e5b146100c157806331446c46146100fb575b600080fd5b3480156100cd57600080fd5b506066546100e390600160a01b900461ffff1681565b60405161ffff90911681526020015b60405180910390f35b34801561010757600080fd5b5061011b610116366004610add565b610237565b005b61011b61012b366004610bc8565b610347565b34801561013c57600080fd5b5061011b61014b366004610cd1565b6105ab565b34801561015c57600080fd5b5061011b6105fd565b34801561017157600080fd5b5061011b610180366004610d41565b610611565b34801561019157600080fd5b506033546001600160a01b03165b6040516001600160a01b0390911681526020016100f2565b3480156101c357600080fd5b5060665461019f906001600160a01b031681565b3480156101e357600080fd5b5060655461019f906001600160a01b031681565b34801561020357600080fd5b5060675461019f906001600160a01b031681565b34801561022357600080fd5b5061011b610232366004610add565b610896565b61023f610926565b6067546001600160a01b03161561029d5760405162461bcd60e51b815260206004820181905260248201527f4c3120426974636f696e204465706f7369746f7220616c72656164792073657460448201526064015b60405180910390fd5b6001600160a01b0381166103185760405162461bcd60e51b8152602060048201526024808201527f4c3120426974636f696e204465706f7369746f72206d757374206e6f7420626560448201527f20307830000000000000000000000000000000000000000000000000000000006064820152608401610294565b6067805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6065546001600160a01b031633146103a15760405162461bcd60e51b815260206004820152601e60248201527f43616c6c6572206973206e6f7420576f726d686f6c652052656c6179657200006044820152606401610294565b60665461ffff838116600160a01b90920416146104265760405162461bcd60e51b815260206004820152602960248201527f536f7572636520636861696e206973206e6f742074686520657870656374656460448201527f204c3120636861696e00000000000000000000000000000000000000000000006064820152608401610294565b6067546001600160a01b0316836001600160a01b0316146104af5760405162461bcd60e51b815260206004820152603760248201527f536f757263652061646472657373206973206e6f74207468652065787065637460448201527f6564204c3120426974636f696e206465706f7369746f720000000000000000006064820152608401610294565b83516001146105265760405162461bcd60e51b815260206004820152603060248201527f45787065637465642031206164646974696f6e616c20564141206b657920666f60448201527f7220746f6b656e207472616e73666572000000000000000000000000000000006064820152608401610294565b60665484516001600160a01b0390911690635d21a59690869060009061054e5761054e610d7b565b60200260200101516040518263ffffffff1660e01b81526004016105729190610d91565b600060405180830381600087803b15801561058c57600080fd5b505af11580156105a0573d6000803e3d6000fd5b505050505050505050565b336001600160a01b0316816001600160a01b03167f69a2a6d267e87f99180657174ca85389598d457ba949435ee4940f621bb849cf85856040516105f0929190610ea2565b60405180910390a3505050565b610605610926565b61060f6000610980565b565b600054610100900460ff16158080156106315750600054600160ff909116105b8061064b5750303b15801561064b575060005460ff166001145b6106bd5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610294565b6000805460ff1916600117905580156106e0576000805461ff0019166101001790555b6106e86109df565b6001600160a01b0384166107645760405162461bcd60e51b815260206004820152602660248201527f576f726d686f6c6552656c6179657220616464726573732063616e6e6f74206260448201527f65207a65726f00000000000000000000000000000000000000000000000000006064820152608401610294565b6001600160a01b0383166107e05760405162461bcd60e51b815260206004820152602860248201527f4c32576f726d686f6c654761746577617920616464726573732063616e6e6f7460448201527f206265207a65726f0000000000000000000000000000000000000000000000006064820152608401610294565b6065805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0386811691909117909155606680549185167fffffffffffffffffffff0000000000000000000000000000000000000000000090921691909117600160a01b61ffff8516021790558015610890576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50505050565b61089e610926565b6001600160a01b03811661091a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610294565b61092381610980565b50565b6033546001600160a01b0316331461060f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610294565b603380546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16610a4a5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610294565b61060f600054610100900460ff16610ab85760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610294565b61060f33610980565b80356001600160a01b0381168114610ad857600080fd5b919050565b600060208284031215610aef57600080fd5b610af882610ac1565b9392505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610b3e57610b3e610aff565b604052919050565b600082601f830112610b5757600080fd5b813567ffffffffffffffff811115610b7157610b71610aff565b610b84601f8201601f1916602001610b15565b818152846020838601011115610b9957600080fd5b816020850160208301376000918101602001919091529392505050565b803561ffff81168114610ad857600080fd5b600080600080600060a08688031215610be057600080fd5b853567ffffffffffffffff80821115610bf857600080fd5b610c0489838a01610b46565b9650602091508188013581811115610c1b57600080fd5b8801601f81018a13610c2c57600080fd5b803582811115610c3e57610c3e610aff565b8060051b610c4d858201610b15565b918252828101850191858101908d841115610c6757600080fd5b86850192505b83831015610ca357823586811115610c855760008081fd5b610c938f8983890101610b46565b8352509186019190860190610c6d565b809a505050505050505060408601359250610cc060608701610bb6565b949793965091946080013592915050565b6000806000838503610100811215610ce857600080fd5b843567ffffffffffffffff811115610cff57600080fd5b850160808188031215610d1157600080fd5b935060c0601f1982011215610d2557600080fd5b50602084019150610d3860e08501610ac1565b90509250925092565b600080600060608486031215610d5657600080fd5b610d5f84610ac1565b9250610d6d60208501610ac1565b9150610d3860408501610bb6565b634e487b7160e01b600052603260045260246000fd5b600060208083528351808285015260005b81811015610dbe57858101830151858201604001528201610da2565b506000604082860101526040601f19601f8301168501019250505092915050565b80357fffffffff0000000000000000000000000000000000000000000000000000000081168114610ad857600080fd5b6000808335601e19843603018112610e2657600080fd5b830160208101925035905067ffffffffffffffff811115610e4657600080fd5b803603821315610e5557600080fd5b9250929050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b80356bffffffffffffffffffffffff1981168114610ad857600080fd5b60e0815260007fffffffff0000000000000000000000000000000000000000000000000000000080610ed386610ddf565b1660e0840152610ee66020860186610e0f565b6080610100860152610efd61016086018284610e5c565b915050610f0d6040870187610e0f565b85830360df1901610120870152610f25838284610e5c565b9250505081610f3660608801610ddf565b16610140850152915050823563ffffffff8116808214610f5557600080fd5b806020850152505060208301357fffffffffffffffff00000000000000000000000000000000000000000000000081168114610f9057600080fd5b7fffffffffffffffff0000000000000000000000000000000000000000000000008116604084015250610fc560408401610e85565b6bffffffffffffffffffffffff198116606084015250610fe760608401610e85565b6bffffffffffffffffffffffff19811660808401525061100960808401610ddf565b7fffffffff00000000000000000000000000000000000000000000000000000000811660a08401525061103e60a08401610ac1565b6001600160a01b03811660c084015250939250505056fea26469706673582212203e746659b06816485daa8325529d7269caa79c6338423537c0ecdcc0b7d0af7664736f6c63430008110033";

type L2BitcoinDepositorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: L2BitcoinDepositorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class L2BitcoinDepositor__factory extends ContractFactory {
  constructor(...args: L2BitcoinDepositorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<L2BitcoinDepositor> {
    return super.deploy(overrides || {}) as Promise<L2BitcoinDepositor>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): L2BitcoinDepositor {
    return super.attach(address) as L2BitcoinDepositor;
  }
  connect(signer: Signer): L2BitcoinDepositor__factory {
    return super.connect(signer) as L2BitcoinDepositor__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): L2BitcoinDepositorInterface {
    return new utils.Interface(_abi) as L2BitcoinDepositorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L2BitcoinDepositor {
    return new Contract(address, _abi, signerOrProvider) as L2BitcoinDepositor;
  }
}
