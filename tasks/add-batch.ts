import { task } from "hardhat/config";

task("add-batch", "Add new batch")
  .addParam("contract", "Contract address")
  .addParam("product", "Product Id")
  .addParam("metadata", "Metada IPFS hash")
  .addOptionalParam("materials", "Ids of token materials used")
  .setAction(async (taskArgs, hre) => {
    console.log(taskArgs);
    const contract = await hre.ethers.getContractAt(
      "Traceability",
      taskArgs.contract
    );

    const [owner] = await hre.ethers.getSigners();

    const tx = await contract.addBatch(
      taskArgs.product,
      taskArgs.materials ? taskArgs.materials.split(",") : [],
      taskArgs.metadata,
      { from: owner.address }
    );
    await tx.wait();

    console.log("Added batch");
  });
