import { expect } from "chai";
import { ethers } from "hardhat";

let ownerAddress: any;
let contract: any;

describe("Admin: add supplier", function () {
  it("Should add new supplier to contract", async function () {
    const Contract = await ethers.getContractFactory("Traceability");
    
    const [owner] = await ethers.getSigners();
    ownerAddress = owner.address

    const metadata = "bafybei8nsoufr2renqzsh347n1x54wcubt5lgkeivez63xvjvplfwhtpym"

    contract = await Contract.deploy();
    await contract.deployed();

    const addSupplierTx = await contract.addSupplier(metadata, [ownerAddress], ownerAddress, 0);
    await addSupplierTx.wait();

    // Get Supplier info, first id is always 1 from counter
    const { metadataUri, managersAddrs, holderAddr, role } = await contract.getSupplier(1);
    expect(metadataUri).to.be.equals(metadata);
    expect(managersAddrs[0]).to.be.equals(ownerAddress);
    expect(holderAddr).to.be.equals(ownerAddress);
    expect(role).to.be.equals(0);
  });
});

describe("Add product", function () {
  it("Should create new product", async function () {
    
    const supplierId = 1;
    const productCode: string = "0000000000000";
    const metadata: string = "bafybei8nsoufr2renqzsh347n1x54wcubt5lgkeivez63xvjvplfwhtpym";

    const receipt = await contract.addProduct(supplierId, productCode, metadata);
    await receipt.wait();

    // Get product info, first product id is always 1 from counter
    const { metadataUri } = await contract.getProductOfId(1);
    expect(metadataUri).to.be.equal(metadata);
  });
});

describe("Add batch", function () {
  it("Should create new batch", async function () {
    
    // Define NFT data
    const supplierId: number = 1;
    const productId: number = 1;
    const batchCode: string = "202003"; 
    const materialBatchIds: number[] = [];
    const metadata: string = "bafybei8nsoufr2renqzsh347n1x54wcubt5lgkeivez63xvjvplfwhtpym" 

    // Mint single NFT
    const receipt = await contract.addBatch(supplierId, productId, batchCode, materialBatchIds, metadata);

    // Wait for network confirmation
    await receipt.wait();

    // Get token id, first batch id is always 1 from counter
    const { metadataUri } = await contract.getBatch(1);

    expect(metadataUri).to.be.equal(metadata);
  });
});