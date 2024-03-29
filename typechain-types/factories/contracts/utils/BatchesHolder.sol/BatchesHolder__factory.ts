/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BatchesHolder,
  BatchesHolderInterface,
} from "../../../../contracts/utils/BatchesHolder.sol/BatchesHolder";

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
  "0x608060405234801561001057600080fd5b5060405161065c38038061065c83398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610082565b600060208284031215610065578081fd5b81516001600160a01b038116811461007b578182fd5b9392505050565b6105cb806100916000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806301ffc9a71461005c57806323300ca4146100845780639ffaa71e1461009f578063bc197c81146100c2578063f23a6e61146100ee575b600080fd5b61006f61006a3660046104e0565b610101565b60405190151581526020015b60405180910390f35b6000546040516001600160a01b03909116815260200161007b565b61006f6100ad36600461050f565b60009081526001602052604090205460ff1690565b6100d56100d03660046103d7565b61012c565b6040516001600160e01b0319909116815260200161007b565b6100d56100fc36600461047d565b610210565b60006001600160e01b03198216635e6555dd60e11b1480610126575061012682610298565b92915050565b600080546001600160a01b0316331461018c5760405162461bcd60e51b815260206004820181905260248201527f53656e6465722069736e277420616e20616c6c6f77656420737570706c69657260448201526064015b60405180910390fd5b60005b84518110156101fd5760018060008784815181106101bd57634e487b7160e01b600052603260045260246000fd5b6020026020010151815260200190815260200160002060006101000a81548160ff02191690831515021790555080806101f590610558565b91505061018f565b5063bc197c8160e01b9695505050505050565b600080546001600160a01b0316331461026b5760405162461bcd60e51b815260206004820181905260248201527f53656e6465722069736e277420616e20616c6c6f77656420737570706c6965726044820152606401610183565b5050506000908152600160208190526040909120805460ff191690911790555063f23a6e6160e01b919050565b60006001600160e01b03198216630271189760e51b148061012657506301ffc9a760e01b6001600160e01b0319831614610126565b80356001600160a01b03811681146102e457600080fd5b919050565b600082601f8301126102f9578081fd5b8135602067ffffffffffffffff8211156103155761031561057f565b8160051b610324828201610527565b83815282810190868401838801850189101561033e578687fd5b8693505b85841015610360578035835260019390930192918401918401610342565b50979650505050505050565b600082601f83011261037c578081fd5b813567ffffffffffffffff8111156103965761039661057f565b6103a9601f8201601f1916602001610527565b8181528460208386010111156103bd578283fd5b816020850160208301379081016020019190915292915050565b600080600080600060a086880312156103ee578081fd5b6103f7866102cd565b9450610405602087016102cd565b9350604086013567ffffffffffffffff80821115610421578283fd5b61042d89838a016102e9565b94506060880135915080821115610442578283fd5b61044e89838a016102e9565b93506080880135915080821115610463578283fd5b506104708882890161036c565b9150509295509295909350565b600080600080600060a08688031215610494578081fd5b61049d866102cd565b94506104ab602087016102cd565b93506040860135925060608601359150608086013567ffffffffffffffff8111156104d4578182fd5b6104708882890161036c565b6000602082840312156104f1578081fd5b81356001600160e01b031981168114610508578182fd5b9392505050565b600060208284031215610520578081fd5b5035919050565b604051601f8201601f1916810167ffffffffffffffff811182821017156105505761055061057f565b604052919050565b600060001982141561057857634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220b172263f49983d4632a80bab89f90f4875e0bd7a5642a53c8bdac1f4f14b943464736f6c63430008040033";

type BatchesHolderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BatchesHolderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BatchesHolder__factory extends ContractFactory {
  constructor(...args: BatchesHolderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    supplierAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BatchesHolder> {
    return super.deploy(
      supplierAddr,
      overrides || {}
    ) as Promise<BatchesHolder>;
  }
  override getDeployTransaction(
    supplierAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(supplierAddr, overrides || {});
  }
  override attach(address: string): BatchesHolder {
    return super.attach(address) as BatchesHolder;
  }
  override connect(signer: Signer): BatchesHolder__factory {
    return super.connect(signer) as BatchesHolder__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BatchesHolderInterface {
    return new utils.Interface(_abi) as BatchesHolderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BatchesHolder {
    return new Contract(address, _abi, signerOrProvider) as BatchesHolder;
  }
}
