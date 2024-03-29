/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export declare namespace Products {
  export type ProductStruct = {
    supplierId: BigNumberish;
    holderAddr: string;
    metadataURI: string;
  };

  export type ProductStructOutput = [BigNumber, string, string] & {
    supplierId: BigNumber;
    holderAddr: string;
    metadataURI: string;
  };
}

export declare namespace Suppliers {
  export type SupplierStruct = {
    metadataURI: string;
    managersAddrs: string[];
    role: BigNumberish;
    exists: boolean;
  };

  export type SupplierStructOutput = [string, string[], number, boolean] & {
    metadataURI: string;
    managersAddrs: string[];
    role: number;
    exists: boolean;
  };
}

export interface BatchesInterface extends utils.Interface {
  functions: {
    "addBatch(uint256,uint256[],string)": FunctionFragment;
    "addProduct(uint256,address,string)": FunctionFragment;
    "addTx(uint256,string,uint256,bytes32)": FunctionFragment;
    "addTxAndTransfer(uint256,string,address,uint256,bytes32)": FunctionFragment;
    "balanceOf(address,uint256)": FunctionFragment;
    "balanceOfBatch(address[],uint256[])": FunctionFragment;
    "getBatch(uint256)": FunctionFragment;
    "getManagers(uint256)": FunctionFragment;
    "getNumberOfBatches()": FunctionFragment;
    "getNumberOfTxs()": FunctionFragment;
    "getProduct(uint256)": FunctionFragment;
    "getProductHolder(uint256)": FunctionFragment;
    "getSupplier(uint256)": FunctionFragment;
    "getSupplierIdFromProduct(uint256)": FunctionFragment;
    "getSupplierProducts(uint256)": FunctionFragment;
    "getTx(bytes32)": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "safeTransferFrom(address,address,uint256,uint256,bytes)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "tokenSupply(uint256)": FunctionFragment;
    "tokenURI(uint256)": FunctionFragment;
    "transferBatch(uint256,address)": FunctionFragment;
    "uri(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addBatch"
      | "addProduct"
      | "addTx"
      | "addTxAndTransfer"
      | "balanceOf"
      | "balanceOfBatch"
      | "getBatch"
      | "getManagers"
      | "getNumberOfBatches"
      | "getNumberOfTxs"
      | "getProduct"
      | "getProductHolder"
      | "getSupplier"
      | "getSupplierIdFromProduct"
      | "getSupplierProducts"
      | "getTx"
      | "isApprovedForAll"
      | "safeBatchTransferFrom"
      | "safeTransferFrom"
      | "setApprovalForAll"
      | "supportsInterface"
      | "tokenSupply"
      | "tokenURI"
      | "transferBatch"
      | "uri"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addBatch",
    values: [BigNumberish, BigNumberish[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "addProduct",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "addTx",
    values: [BigNumberish, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addTxAndTransfer",
    values: [BigNumberish, string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfBatch",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getBatch",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getManagers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getNumberOfBatches",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNumberOfTxs",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getProduct",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getProductHolder",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSupplier",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSupplierIdFromProduct",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSupplierProducts",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getTx", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "safeBatchTransferFrom",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenSupply",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenURI",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferBatch",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "uri", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "addBatch", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addProduct", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addTx", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addTxAndTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getBatch", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getManagers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNumberOfBatches",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNumberOfTxs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getProduct", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getProductHolder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSupplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSupplierIdFromProduct",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSupplierProducts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTx", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeBatchTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "uri", data: BytesLike): Result;

  events: {
    "ApprovalForAll(address,address,bool)": EventFragment;
    "NewManager(uint256,address)": EventFragment;
    "NewProduct(uint256)": EventFragment;
    "NewSupplier(uint256)": EventFragment;
    "NewTx(bytes32)": EventFragment;
    "RemovedManager(uint256,address)": EventFragment;
    "RemovedSupplier(uint256)": EventFragment;
    "TransferBatch(address,address,address,uint256[],uint256[])": EventFragment;
    "TransferSingle(address,address,address,uint256,uint256)": EventFragment;
    "URI(string,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewManager"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewProduct"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewSupplier"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewTx"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemovedManager"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemovedSupplier"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferBatch"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferSingle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "URI"): EventFragment;
}

export interface ApprovalForAllEventObject {
  account: string;
  operator: string;
  approved: boolean;
}
export type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean],
  ApprovalForAllEventObject
>;

export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;

export interface NewManagerEventObject {
  supplierId: BigNumber;
  managerAddr: string;
}
export type NewManagerEvent = TypedEvent<
  [BigNumber, string],
  NewManagerEventObject
>;

export type NewManagerEventFilter = TypedEventFilter<NewManagerEvent>;

export interface NewProductEventObject {
  id: BigNumber;
}
export type NewProductEvent = TypedEvent<[BigNumber], NewProductEventObject>;

export type NewProductEventFilter = TypedEventFilter<NewProductEvent>;

export interface NewSupplierEventObject {
  id: BigNumber;
}
export type NewSupplierEvent = TypedEvent<[BigNumber], NewSupplierEventObject>;

export type NewSupplierEventFilter = TypedEventFilter<NewSupplierEvent>;

export interface NewTxEventObject {
  txId: string;
}
export type NewTxEvent = TypedEvent<[string], NewTxEventObject>;

export type NewTxEventFilter = TypedEventFilter<NewTxEvent>;

export interface RemovedManagerEventObject {
  supplierId: BigNumber;
  managerAddr: string;
}
export type RemovedManagerEvent = TypedEvent<
  [BigNumber, string],
  RemovedManagerEventObject
>;

export type RemovedManagerEventFilter = TypedEventFilter<RemovedManagerEvent>;

export interface RemovedSupplierEventObject {
  id: BigNumber;
}
export type RemovedSupplierEvent = TypedEvent<
  [BigNumber],
  RemovedSupplierEventObject
>;

export type RemovedSupplierEventFilter = TypedEventFilter<RemovedSupplierEvent>;

export interface TransferBatchEventObject {
  operator: string;
  from: string;
  to: string;
  ids: BigNumber[];
  values: BigNumber[];
}
export type TransferBatchEvent = TypedEvent<
  [string, string, string, BigNumber[], BigNumber[]],
  TransferBatchEventObject
>;

export type TransferBatchEventFilter = TypedEventFilter<TransferBatchEvent>;

export interface TransferSingleEventObject {
  operator: string;
  from: string;
  to: string;
  id: BigNumber;
  value: BigNumber;
}
export type TransferSingleEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber],
  TransferSingleEventObject
>;

export type TransferSingleEventFilter = TypedEventFilter<TransferSingleEvent>;

export interface URIEventObject {
  value: string;
  id: BigNumber;
}
export type URIEvent = TypedEvent<[string, BigNumber], URIEventObject>;

export type URIEventFilter = TypedEventFilter<URIEvent>;

export interface Batches extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BatchesInterface;

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
    addBatch(
      productId: BigNumberish,
      materialBatchIds: BigNumberish[],
      metadataURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addProduct(
      supplierId: BigNumberish,
      holderAddr: string,
      metadataURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addTx(
      batchId: BigNumberish,
      receiver: string,
      timestamp: BigNumberish,
      previousTx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addTxAndTransfer(
      batchId: BigNumberish,
      receiver: string,
      receiverAddress: string,
      timestamp: BigNumberish,
      previousTx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getBatch(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber[], string, BigNumber] & {
        productId: BigNumber;
        materialBatchIds: BigNumber[];
        metadataURI: string;
        tokenId: BigNumber;
      }
    >;

    getManagers(
      supplierId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[]] & { _managers: string[] }>;

    getNumberOfBatches(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { numberOfBatches: BigNumber }>;

    getNumberOfTxs(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { numberOfTxs: BigNumber }>;

    getProduct(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[Products.ProductStructOutput]>;

    getProductHolder(
      productId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { holderAddress: string }>;

    getSupplier(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[Suppliers.SupplierStructOutput]>;

    getSupplierIdFromProduct(
      productId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { supplierId: BigNumber }>;

    getSupplierProducts(
      supplierId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getTx(
      txId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string] & {
        batchId: BigNumber;
        sender: string;
        receiver: string;
        previousTx: string;
      }
    >;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    tokenSupply(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    tokenURI(id: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    transferBatch(
      id: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    uri(id: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
  };

  addBatch(
    productId: BigNumberish,
    materialBatchIds: BigNumberish[],
    metadataURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addProduct(
    supplierId: BigNumberish,
    holderAddr: string,
    metadataURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addTx(
    batchId: BigNumberish,
    receiver: string,
    timestamp: BigNumberish,
    previousTx: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addTxAndTransfer(
    batchId: BigNumberish,
    receiver: string,
    receiverAddress: string,
    timestamp: BigNumberish,
    previousTx: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(
    account: string,
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balanceOfBatch(
    accounts: string[],
    ids: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getBatch(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber[], string, BigNumber] & {
      productId: BigNumber;
      materialBatchIds: BigNumber[];
      metadataURI: string;
      tokenId: BigNumber;
    }
  >;

  getManagers(
    supplierId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getNumberOfBatches(overrides?: CallOverrides): Promise<BigNumber>;

  getNumberOfTxs(overrides?: CallOverrides): Promise<BigNumber>;

  getProduct(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<Products.ProductStructOutput>;

  getProductHolder(
    productId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getSupplier(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<Suppliers.SupplierStructOutput>;

  getSupplierIdFromProduct(
    productId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSupplierProducts(
    supplierId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getTx(
    txId: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string, string] & {
      batchId: BigNumber;
      sender: string;
      receiver: string;
      previousTx: string;
    }
  >;

  isApprovedForAll(
    account: string,
    operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  safeBatchTransferFrom(
    from: string,
    to: string,
    ids: BigNumberish[],
    amounts: BigNumberish[],
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  safeTransferFrom(
    from: string,
    to: string,
    id: BigNumberish,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  tokenSupply(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  tokenURI(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

  transferBatch(
    id: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  uri(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    addBatch(
      productId: BigNumberish,
      materialBatchIds: BigNumberish[],
      metadataURI: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addProduct(
      supplierId: BigNumberish,
      holderAddr: string,
      metadataURI: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addTx(
      batchId: BigNumberish,
      receiver: string,
      timestamp: BigNumberish,
      previousTx: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    addTxAndTransfer(
      batchId: BigNumberish,
      receiver: string,
      receiverAddress: string,
      timestamp: BigNumberish,
      previousTx: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getBatch(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber[], string, BigNumber] & {
        productId: BigNumber;
        materialBatchIds: BigNumber[];
        metadataURI: string;
        tokenId: BigNumber;
      }
    >;

    getManagers(
      supplierId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getNumberOfBatches(overrides?: CallOverrides): Promise<BigNumber>;

    getNumberOfTxs(overrides?: CallOverrides): Promise<BigNumber>;

    getProduct(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<Products.ProductStructOutput>;

    getProductHolder(
      productId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getSupplier(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<Suppliers.SupplierStructOutput>;

    getSupplierIdFromProduct(
      productId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSupplierProducts(
      supplierId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getTx(
      txId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string] & {
        batchId: BigNumber;
        sender: string;
        receiver: string;
        previousTx: string;
      }
    >;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    tokenSupply(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenURI(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

    transferBatch(
      id: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    uri(id: BigNumberish, overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "ApprovalForAll(address,address,bool)"(
      account?: string | null,
      operator?: string | null,
      approved?: null
    ): ApprovalForAllEventFilter;
    ApprovalForAll(
      account?: string | null,
      operator?: string | null,
      approved?: null
    ): ApprovalForAllEventFilter;

    "NewManager(uint256,address)"(
      supplierId?: null,
      managerAddr?: null
    ): NewManagerEventFilter;
    NewManager(supplierId?: null, managerAddr?: null): NewManagerEventFilter;

    "NewProduct(uint256)"(id?: null): NewProductEventFilter;
    NewProduct(id?: null): NewProductEventFilter;

    "NewSupplier(uint256)"(id?: null): NewSupplierEventFilter;
    NewSupplier(id?: null): NewSupplierEventFilter;

    "NewTx(bytes32)"(txId?: null): NewTxEventFilter;
    NewTx(txId?: null): NewTxEventFilter;

    "RemovedManager(uint256,address)"(
      supplierId?: null,
      managerAddr?: null
    ): RemovedManagerEventFilter;
    RemovedManager(
      supplierId?: null,
      managerAddr?: null
    ): RemovedManagerEventFilter;

    "RemovedSupplier(uint256)"(id?: null): RemovedSupplierEventFilter;
    RemovedSupplier(id?: null): RemovedSupplierEventFilter;

    "TransferBatch(address,address,address,uint256[],uint256[])"(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      ids?: null,
      values?: null
    ): TransferBatchEventFilter;
    TransferBatch(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      ids?: null,
      values?: null
    ): TransferBatchEventFilter;

    "TransferSingle(address,address,address,uint256,uint256)"(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      id?: null,
      value?: null
    ): TransferSingleEventFilter;
    TransferSingle(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      id?: null,
      value?: null
    ): TransferSingleEventFilter;

    "URI(string,uint256)"(
      value?: null,
      id?: BigNumberish | null
    ): URIEventFilter;
    URI(value?: null, id?: BigNumberish | null): URIEventFilter;
  };

  estimateGas: {
    addBatch(
      productId: BigNumberish,
      materialBatchIds: BigNumberish[],
      metadataURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addProduct(
      supplierId: BigNumberish,
      holderAddr: string,
      metadataURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addTx(
      batchId: BigNumberish,
      receiver: string,
      timestamp: BigNumberish,
      previousTx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addTxAndTransfer(
      batchId: BigNumberish,
      receiver: string,
      receiverAddress: string,
      timestamp: BigNumberish,
      previousTx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBatch(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getManagers(
      supplierId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNumberOfBatches(overrides?: CallOverrides): Promise<BigNumber>;

    getNumberOfTxs(overrides?: CallOverrides): Promise<BigNumber>;

    getProduct(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getProductHolder(
      productId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSupplier(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSupplierIdFromProduct(
      productId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSupplierProducts(
      supplierId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTx(txId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenSupply(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenURI(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    transferBatch(
      id: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    uri(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addBatch(
      productId: BigNumberish,
      materialBatchIds: BigNumberish[],
      metadataURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addProduct(
      supplierId: BigNumberish,
      holderAddr: string,
      metadataURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addTx(
      batchId: BigNumberish,
      receiver: string,
      timestamp: BigNumberish,
      previousTx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addTxAndTransfer(
      batchId: BigNumberish,
      receiver: string,
      receiverAddress: string,
      timestamp: BigNumberish,
      previousTx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBatch(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getManagers(
      supplierId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNumberOfBatches(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNumberOfTxs(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getProduct(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProductHolder(
      productId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSupplier(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSupplierIdFromProduct(
      productId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSupplierProducts(
      supplierId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTx(
      txId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenSupply(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenURI(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferBatch(
      id: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    uri(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
