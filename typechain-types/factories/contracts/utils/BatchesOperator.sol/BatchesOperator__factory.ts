/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BatchesOperator,
  BatchesOperatorInterface,
} from "../../../../contracts/utils/BatchesOperator.sol/BatchesOperator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "supplierAddr",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "addOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "batchExists",
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
    name: "getSupplier",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isOperator",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "removeOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516107d13803806107d183398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610082565b600060208284031215610065578081fd5b81516001600160a01b038116811461007b578182fd5b9392505050565b610740806100916000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80639ffaa71e1161005b5780639ffaa71e14610111578063ac8a584a14610134578063bc197c8114610147578063f23a6e611461017357600080fd5b806301ffc9a71461008d57806323300ca4146100b55780636d70f7ae146100d05780639870d7fe146100fc575b600080fd5b6100a061009b366004610627565b610186565b60405190151581526020015b60405180910390f35b6000546040516001600160a01b0390911681526020016100ac565b6100a06100de3660046104fd565b6001600160a01b031660009081526002602052604090205460ff1690565b61010f61010a3660046104fd565b6101b1565b005b6100a061011f36600461064f565b60009081526001602052604090205460ff1690565b61010f6101423660046104fd565b61022b565b61015a61015536600461051e565b610297565b6040516001600160e01b031990911681526020016100ac565b61015a6101813660046105c4565b610346565b60006001600160e01b03198216632cc53c0d60e11b14806101ab57506101ab8261039e565b92915050565b6000546001600160a01b031633146101e45760405162461bcd60e51b81526004016101db90610667565b60405180910390fd5b6001600160a01b03811660009081526002602052604090205460ff16610228576001600160a01b0381166000908152600260205260409020805460ff191660011790555b50565b6000546001600160a01b031633146102555760405162461bcd60e51b81526004016101db90610667565b6001600160a01b03811660009081526002602052604090205460ff1615610228576001600160a01b03166000908152600260205260409020805460ff19169055565b600080546001600160a01b031633146102c25760405162461bcd60e51b81526004016101db90610667565b60005b84518110156103335760018060008784815181106102f357634e487b7160e01b600052603260045260246000fd5b6020026020010151815260200190815260200160002060006101000a81548160ff021916908315150217905550808061032b906106cd565b9150506102c5565b5063bc197c8160e01b9695505050505050565b600080546001600160a01b031633146103715760405162461bcd60e51b81526004016101db90610667565b5050506000908152600160208190526040909120805460ff191690911790555063f23a6e6160e01b919050565b60006001600160e01b03198216635e6555dd60e11b14806101ab57506101ab8260006001600160e01b03198216630271189760e51b14806101ab57506301ffc9a760e01b6001600160e01b03198316146101ab565b80356001600160a01b038116811461040a57600080fd5b919050565b600082601f83011261041f578081fd5b8135602067ffffffffffffffff82111561043b5761043b6106f4565b8160051b61044a82820161069c565b838152828101908684018388018501891015610464578687fd5b8693505b85841015610486578035835260019390930192918401918401610468565b50979650505050505050565b600082601f8301126104a2578081fd5b813567ffffffffffffffff8111156104bc576104bc6106f4565b6104cf601f8201601f191660200161069c565b8181528460208386010111156104e3578283fd5b816020850160208301379081016020019190915292915050565b60006020828403121561050e578081fd5b610517826103f3565b9392505050565b600080600080600060a08688031215610535578081fd5b61053e866103f3565b945061054c602087016103f3565b9350604086013567ffffffffffffffff80821115610568578283fd5b61057489838a0161040f565b94506060880135915080821115610589578283fd5b61059589838a0161040f565b935060808801359150808211156105aa578283fd5b506105b788828901610492565b9150509295509295909350565b600080600080600060a086880312156105db578081fd5b6105e4866103f3565b94506105f2602087016103f3565b93506040860135925060608601359150608086013567ffffffffffffffff81111561061b578182fd5b6105b788828901610492565b600060208284031215610638578081fd5b81356001600160e01b031981168114610517578182fd5b600060208284031215610660578081fd5b5035919050565b6020808252818101527f53656e6465722069736e277420616e20616c6c6f77656420737570706c696572604082015260600190565b604051601f8201601f1916810167ffffffffffffffff811182821017156106c5576106c56106f4565b604052919050565b60006000198214156106ed57634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220d0fdf969c83365b6a7acb3deeb7efc624e97eb00419f05359a948e34acf8a2f864736f6c63430008040033";

type BatchesOperatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BatchesOperatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BatchesOperator__factory extends ContractFactory {
  constructor(...args: BatchesOperatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    supplierAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BatchesOperator> {
    return super.deploy(
      supplierAddr,
      overrides || {}
    ) as Promise<BatchesOperator>;
  }
  override getDeployTransaction(
    supplierAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(supplierAddr, overrides || {});
  }
  override attach(address: string): BatchesOperator {
    return super.attach(address) as BatchesOperator;
  }
  override connect(signer: Signer): BatchesOperator__factory {
    return super.connect(signer) as BatchesOperator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BatchesOperatorInterface {
    return new utils.Interface(_abi) as BatchesOperatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BatchesOperator {
    return new Contract(address, _abi, signerOrProvider) as BatchesOperator;
  }
}
