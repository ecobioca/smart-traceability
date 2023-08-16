import { task } from "hardhat/config";

task("add-product", "Add new product")
  .addParam("contract", "Contract address")
  .addParam("supplier", "Supplier Id")
  .addParam("holder", "Batches holder address")
  .addParam("metadata", "Metadata IPFS hash")
  .setAction(async (taskArgs, hre) => {
    console.log(taskArgs);
    const contract = await hre.ethers.getContractAt(
      "Traceability",
      taskArgs.contract
    );

    const [owner] = await hre.ethers.getSigners();

    const product = await contract.addProduct(
      taskArgs.supplier,
      taskArgs.holder,
      taskArgs.metadata,
      { from: owner.address }
    );
    await product.wait();

    console.log("Added product", product);
  });
