import { expect } from "chai";
import { ethers } from "hardhat";

let ownerAddress: any;
let contract: any;
let previousTx: string;

describe("** Deploy contract", function () {
  it("Should wait for deployment", async function () {
    const Contract = await ethers.getContractFactory("Traceability");

    const [owner] = await ethers.getSigners();
    ownerAddress = owner.address;

    contract = await Contract.deploy();
    await contract.deployed();
  });
});

describe("** Admin: add supplier", function () {
  it("Should add new supplier to contract", async function () {
    const metadata =
      "bafybei8nsoufr2renqzsh347n1x54wcubt5lgkeivez63xvjvplfwhtpym";

    const addSupplierTx = await contract.addSupplier(
      metadata,
      [ownerAddress],
      ownerAddress,
      0
    );
    await addSupplierTx.wait();

    // Get Supplier info, first id is always 1 from counter
    const { metadataUri, managersAddrs, holderAddr, role } =
      await contract.getSupplier(1);
    expect(metadataUri).to.be.equals(metadata);
    expect(managersAddrs[0]).to.be.equals(ownerAddress);
    expect(holderAddr).to.be.equals(ownerAddress);
    expect(role).to.be.equals(0);
  });
});

describe("** Add product", function () {
  it("Should create new product", async function () {
    const supplierId = 1;
    const productCode: string = "0000000000000";
    const metadata: string =
      "bafybei8nsoufr2renqzsh347n1x54wcubt5lgkeivez63xvjvplfwhtpym";

    const receipt = await contract.addProduct(
      supplierId,
      productCode,
      metadata
    );
    await receipt.wait();

    // Get product info, first product id is always 1 from counter
    const { metadataUri } = await contract.getProductOfId(1);
    expect(metadataUri).to.be.equal(metadata);
  });
});

describe("** Add batch", function () {
  it("Should create new batch", async function () {
    // Define NFT data
    const supplierId: number = 1;
    const productId: number = 1;
    const batchCode: string = "202003";
    const materialBatchIds: number[] = [];
    const metadata: string =
      "bafybei8nsoufr2renqzsh347n1x54wcubt5lgkeivez63xvjvplfwhtpym";

    // Mint single NFT
    const receipt = await contract.addBatch(
      supplierId,
      productId,
      batchCode,
      materialBatchIds,
      metadata
    );

    // Wait for network confirmation
    await receipt.wait();

    // Get token id, first batch id is always 1 from counter
    const { metadataUri } = await contract.getBatch(1);

    expect(metadataUri).to.be.equal(metadata);
  });
});

describe("** Add tx to batch", function () {
  it("Should add new tx to batch", async function () {
    const batchId = 1;
    const receiver = "Eval Transport LTDA";
    const timestamp = Date.now();
    const previous =
      "0x0000000000000000000000000000000000000000000000000000000000000000";

    const receipt = await contract.addTx(
      batchId,
      receiver,
      timestamp,
      previous
    );

    const { events } = await receipt.wait();

    previousTx = events[0]?.args?.txId;

    expect(previousTx).to.be.an("string");
  });
});

describe("** Get tx info", function () {
  it("Should get info from tx id", async function () {
    const receiver = "Eval Transport LTDA";

    const txInfo = await contract.getTx(previousTx);
    expect(txInfo.receiver).to.be.equal(receiver);
  });
});

describe("** Add tx to batch and transfer", function () {
  it("Should add new tx to batch and transfer it", async function () {
    const batchId = 1;
    const receiver = "Choco Industry LTDA";
    const receiverAddress = "0x1Ef1d032F1c56494d4668E5B01d21e1AB63b4690";
    const timestamp = Date.now();

    const receipt = await contract.addTxAndTransfer(
      batchId,
      receiver,
      receiverAddress,
      timestamp,
      previousTx
    );
    const { events } = await receipt.wait();

    previousTx = events[0]?.args?.txId;

    expect(previousTx).to.be.an("string");
  });
});

describe("** Get receiver token balance", function () {
  it("Should found new token in the receiver balance", async function () {
    const receiverAddress = "0x1Ef1d032F1c56494d4668E5B01d21e1AB63b4690";
    const tokenId = 1;

    const balance = await contract.balanceOf(receiverAddress, tokenId);
    expect(balance).to.be.equal(1);
  });
});
