import { task } from "hardhat/config";

task("add-batch", "Add new batch")
  .addParam("contract", "Contract address")
  .addParam("product", "Product Id")
  .addParam("metadata", "Metada IPFS hash")
  .addOptionalParam("materials", "Ids of token materials used")
  .setAction(async (taskArgs, { ethers }) => {
    console.log(taskArgs);
    const contract = await ethers.getContractAt(
      "Traceability",
      taskArgs.contract
    );

    const [owner] = await ethers.getSigners();

    const tx = await contract.addBatch(
      taskArgs.product,
      taskArgs.materials ? taskArgs.materials.split(",") : [],
      taskArgs.metadata,
      { from: owner.address }
    );
    const receipt = await tx.wait();

    const tokenId = receipt.events
      .filter((e: any) => e.event === "NewBatch")[0]
      ?.args.tokenId?.toString();

    console.info("Added batch. Token Id:", tokenId || 'Not Found');
  });
