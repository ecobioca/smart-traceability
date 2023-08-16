/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Suppliers, SuppliersInterface } from "../../contracts/Suppliers";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "supplierId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "managerAddr",
        type: "address",
      },
    ],
    name: "NewManager",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "NewSupplier",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "supplierId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "managerAddr",
        type: "address",
      },
    ],
    name: "RemovedManager",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "RemovedSupplier",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "supplierId",
        type: "uint256",
      },
    ],
    name: "getManagers",
    outputs: [
      {
        internalType: "address[]",
        name: "_managers",
        type: "address[]",
      },
    ],
    stateMutability: "view",
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
    name: "getSupplier",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "metadataURI",
            type: "string",
          },
          {
            internalType: "address[]",
            name: "managersAddrs",
            type: "address[]",
          },
          {
            internalType: "enum Suppliers.Role",
            name: "role",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "exists",
            type: "bool",
          },
        ],
        internalType: "struct Suppliers.Supplier",
        name: "",
        type: "tuple",
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
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
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
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "tokenSupply",
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
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
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
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040805160208101909152600081526200002c8162000033565b506200012f565b8051620000489060029060208401906200004c565b5050565b8280546200005a90620000f2565b90600052602060002090601f0160209004810192826200007e5760008555620000c9565b82601f106200009957805160ff1916838001178555620000c9565b82800160010185558215620000c9579182015b82811115620000c9578251825591602001919060010190620000ac565b50620000d7929150620000db565b5090565b5b80821115620000d75760008155600101620000dc565b600181811c908216806200010757607f821691505b602082108114156200012957634e487b7160e01b600052602260045260246000fd5b50919050565b611a85806200013f6000396000f3fe608060405234801561001057600080fd5b50600436106100b35760003560e01c8063a22cb46511610071578063a22cb46514610176578063c87b56dd14610101578063e0620e1d14610189578063e3be9da0146101a9578063e985e9c5146101c9578063f242432a1461020557600080fd5b8062fdd58e146100b857806301ffc9a7146100de5780630e89341c146101015780632693ebf2146101215780632eb2c2d6146101415780634e1273f414610156575b600080fd5b6100cb6100c636600461142f565b610218565b6040519081526020015b60405180910390f35b6100f16100ec366004611523565b6102af565b60405190151581526020016100d5565b61011461010f366004611562565b610301565b6040516100d5919061172e565b6100cb61012f366004611562565b60009081526003602052604090205490565b61015461014f3660046112ec565b6103a3565b005b610169610164366004611458565b61043a565b6040516100d591906116ed565b6101546101843660046113f5565b61059c565b61019c610197366004611562565b6105ab565b6040516100d59190611818565b6101bc6101b7366004611562565b61074a565b6040516100d591906116da565b6100f16101d73660046112ba565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b610154610213366004611392565b61081a565b60006001600160a01b0383166102895760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201526a65726f206164647265737360a81b60648201526084015b60405180910390fd5b506000908152602081815260408083206001600160a01b03949094168352929052205490565b60006001600160e01b03198216636cdb3d1360e11b14806102e057506001600160e01b031982166303a24d0760e21b145b806102fb57506301ffc9a760e01b6001600160e01b03198316145b92915050565b600081815260046020526040902080546060919061031e906118e5565b80601f016020809104026020016040519081016040528092919081815260200182805461034a906118e5565b80156103975780601f1061036c57610100808354040283529160200191610397565b820191906000526020600020905b81548152906001019060200180831161037a57829003601f168201915b50505050509050919050565b6001600160a01b0385163314806103bf57506103bf85336101d7565b6104265760405162461bcd60e51b815260206004820152603260248201527f455243313135353a207472616e736665722063616c6c6572206973206e6f74206044820152711bdddb995c881b9bdc88185c1c1c9bdd995960721b6064820152608401610280565b61043385858585856108a1565b5050505050565b6060815183511461049f5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b6064820152608401610280565b6000835167ffffffffffffffff8111156104c957634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156104f2578160200160208202803683370190505b50905060005b84518110156105945761055985828151811061052457634e487b7160e01b600052603260045260246000fd5b602002602001015185838151811061054c57634e487b7160e01b600052603260045260246000fd5b6020026020010151610218565b82828151811061057957634e487b7160e01b600052603260045260246000fd5b602090810291909101015261058d8161194d565b90506104f8565b509392505050565b6105a7338383610aa8565b5050565b6105d4604080516080810182526060808252602082015290810160008152600060209091015290565b600082815260066020526040908190208151608081019092528054829082906105fc906118e5565b80601f0160208091040260200160405190810160405280929190818152602001828054610628906118e5565b80156106755780601f1061064a57610100808354040283529160200191610675565b820191906000526020600020905b81548152906001019060200180831161065857829003601f168201915b50505050508152602001600182018054806020026020016040519081016040528092919081815260200182805480156106d757602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116106b9575b5050509183525050600282015460209091019060ff16600381111561070c57634e487b7160e01b600052602160045260246000fd5b600381111561072b57634e487b7160e01b600052602160045260246000fd5b815260029190910154610100900460ff16151560209091015292915050565b6000818152600660205260409020600201546060908290610100900460ff166107ac5760405162461bcd60e51b815260206004820152601460248201527314dd5c1c1b1a595c881b9bdd08185b1b1bddd95960621b6044820152606401610280565b6000838152600660209081526040918290206001018054835181840281018401909452808452909183018282801561080d57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116107ef575b5050505050915050919050565b6001600160a01b038516331480610836575061083685336101d7565b6108945760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260448201526808185c1c1c9bdd995960ba1b6064820152608401610280565b6104338585858585610b89565b81518351146109035760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b6064820152608401610280565b6001600160a01b0384166109295760405162461bcd60e51b815260040161028090611789565b3360005b8451811015610a2c57600085828151811061095857634e487b7160e01b600052603260045260246000fd5b60200260200101519050600085838151811061098457634e487b7160e01b600052603260045260246000fd5b602090810291909101810151600084815280835260408082206001600160a01b038e1683529093529190912054909150818110156109d45760405162461bcd60e51b8152600401610280906117ce565b6000838152602081815260408083206001600160a01b038e8116855292528083208585039055908b16825281208054849290610a119084906118b6565b9250508190555050505080610a259061194d565b905061092d565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610a7c929190611700565b60405180910390a4610a92818787878787610cc1565b610aa0818787878787610e94565b505050505050565b816001600160a01b0316836001600160a01b03161415610b1c5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b6064820152608401610280565b6001600160a01b03838116600081815260016020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b038416610baf5760405162461bcd60e51b815260040161028090611789565b336000610bbb85610fff565b90506000610bc885610fff565b90506000868152602081815260408083206001600160a01b038c16845290915290205485811015610c0b5760405162461bcd60e51b8152600401610280906117ce565b6000878152602081815260408083206001600160a01b038d8116855292528083208985039055908a16825281208054889290610c489084906118b6565b909155505060408051888152602081018890526001600160a01b03808b16928c821692918816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4610ca8848a8a86868a610cc1565b610cb6848a8a8a8a8a611058565b505050505050505050565b60005b8351811015610e8b576001600160a01b038616610d5257828181518110610cfb57634e487b7160e01b600052603260045260246000fd5b602002602001015160036000868481518110610d2757634e487b7160e01b600052603260045260246000fd5b602002602001015181526020019081526020016000206000828254610d4c91906118b6565b90915550505b6001600160a01b038516610dd757828181518110610d8057634e487b7160e01b600052603260045260246000fd5b602002602001015160036000868481518110610dac57634e487b7160e01b600052603260045260246000fd5b602002602001015181526020019081526020016000206000828254610dd191906118ce565b90915550505b60036000858381518110610dfb57634e487b7160e01b600052603260045260246000fd5b602002602001015181526020019081526020016000205460001415610e79576040518060200160405280600081525060046000868481518110610e4e57634e487b7160e01b600052603260045260246000fd5b602002602001015181526020019081526020016000209080519060200190610e77929190611122565b505b80610e838161194d565b915050610cc4565b50505050505050565b6001600160a01b0384163b15610aa05760405163bc197c8160e01b81526001600160a01b0385169063bc197c8190610ed89089908990889088908890600401611637565b602060405180830381600087803b158015610ef257600080fd5b505af1925050508015610f22575060408051601f3d908101601f19168201909252610f1f91810190611546565b60015b610fcf57610f2e611994565b806308c379a01415610f685750610f436119ac565b80610f4e5750610f6a565b8060405162461bcd60e51b8152600401610280919061172e565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e20455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b6064820152608401610280565b6001600160e01b0319811663bc197c8160e01b14610e8b5760405162461bcd60e51b815260040161028090611741565b6040805160018082528183019092526060916000919060208083019080368337019050509050828160008151811061104757634e487b7160e01b600052603260045260246000fd5b602090810291909101015292915050565b6001600160a01b0384163b15610aa05760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e619061109c9089908990889088908890600401611695565b602060405180830381600087803b1580156110b657600080fd5b505af19250505080156110e6575060408051601f3d908101601f191682019092526110e391810190611546565b60015b6110f257610f2e611994565b6001600160e01b0319811663f23a6e6160e01b14610e8b5760405162461bcd60e51b815260040161028090611741565b82805461112e906118e5565b90600052602060002090601f0160209004810192826111505760008555611196565b82601f1061116957805160ff1916838001178555611196565b82800160010185558215611196579182015b8281111561119657825182559160200191906001019061117b565b506111a29291506111a6565b5090565b5b808211156111a257600081556001016111a7565b80356001600160a01b03811681146111d257600080fd5b919050565b600082601f8301126111e7578081fd5b813560206111f482611892565b6040516112018282611920565b8381528281019150858301600585901b87018401881015611220578586fd5b855b8581101561123e57813584529284019290840190600101611222565b5090979650505050505050565b600082601f83011261125b578081fd5b813567ffffffffffffffff8111156112755761127561197e565b60405161128c601f8301601f191660200182611920565b8181528460208386010111156112a0578283fd5b816020850160208301379081016020019190915292915050565b600080604083850312156112cc578182fd5b6112d5836111bb565b91506112e3602084016111bb565b90509250929050565b600080600080600060a08688031215611303578081fd5b61130c866111bb565b945061131a602087016111bb565b9350604086013567ffffffffffffffff80821115611336578283fd5b61134289838a016111d7565b94506060880135915080821115611357578283fd5b61136389838a016111d7565b93506080880135915080821115611378578283fd5b506113858882890161124b565b9150509295509295909350565b600080600080600060a086880312156113a9578081fd5b6113b2866111bb565b94506113c0602087016111bb565b93506040860135925060608601359150608086013567ffffffffffffffff8111156113e9578182fd5b6113858882890161124b565b60008060408385031215611407578182fd5b611410836111bb565b915060208301358015158114611424578182fd5b809150509250929050565b60008060408385031215611441578182fd5b61144a836111bb565b946020939093013593505050565b6000806040838503121561146a578182fd5b823567ffffffffffffffff80821115611481578384fd5b818501915085601f830112611494578384fd5b813560206114a182611892565b6040516114ae8282611920565b8381528281019150858301600585901b870184018b10156114cd578889fd5b8896505b848710156114f6576114e2816111bb565b8352600196909601959183019183016114d1565b509650508601359250508082111561150c578283fd5b50611519858286016111d7565b9150509250929050565b600060208284031215611534578081fd5b813561153f81611a36565b9392505050565b600060208284031215611557578081fd5b815161153f81611a36565b600060208284031215611573578081fd5b5035919050565b6000815180845260208085019450808401835b838110156115b25781516001600160a01b03168752958201959082019060010161158d565b509495945050505050565b6000815180845260208085019450808401835b838110156115b2578151875295820195908201906001016115d0565b60008151808452815b81811015611611576020818501810151868301820152016115f5565b818111156116225782602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b0386811682528516602082015260a060408201819052600090611663908301866115bd565b828103606084015261167581866115bd565b9050828103608084015261168981856115ec565b98975050505050505050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a0608082018190526000906116cf908301846115ec565b979650505050505050565b60208152600061153f602083018461157a565b60208152600061153f60208301846115bd565b60408152600061171360408301856115bd565b828103602084015261172581856115bd565b95945050505050565b60208152600061153f60208301846115ec565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b6020808252602a908201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60408201526939103a3930b739b332b960b11b606082015260800190565b60208152600082516080602084015261183460a08401826115ec565b90506020840151601f19848303016040850152611851828261157a565b91505060408401516004811061187557634e487b7160e01b83526021600452602483fd5b806060850152506060840151151560808401528091505092915050565b600067ffffffffffffffff8211156118ac576118ac61197e565b5060051b60200190565b600082198211156118c9576118c9611968565b500190565b6000828210156118e0576118e0611968565b500390565b600181811c908216806118f957607f821691505b6020821081141561191a57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8201601f1916810167ffffffffffffffff811182821017156119465761194661197e565b6040525050565b600060001982141561196157611961611968565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b600060033d11156119a957600481823e5160e01c5b90565b600060443d10156119ba5790565b6040516003193d81016004833e81513d67ffffffffffffffff81602484011181841117156119ea57505050505090565b8285019150815181811115611a025750505050505090565b843d8701016020828501011115611a1c5750505050505090565b611a2b60208286010187611920565b509095945050505050565b6001600160e01b031981168114611a4c57600080fd5b5056fea2646970667358221220e4e77ae10990256c69368f6f47fc2b762d8cf992a0ceb393ff10398796e2dd7c64736f6c63430008040033";

type SuppliersConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SuppliersConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Suppliers__factory extends ContractFactory {
  constructor(...args: SuppliersConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Suppliers> {
    return super.deploy(overrides || {}) as Promise<Suppliers>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Suppliers {
    return super.attach(address) as Suppliers;
  }
  override connect(signer: Signer): Suppliers__factory {
    return super.connect(signer) as Suppliers__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SuppliersInterface {
    return new utils.Interface(_abi) as SuppliersInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Suppliers {
    return new Contract(address, _abi, signerOrProvider) as Suppliers;
  }
}