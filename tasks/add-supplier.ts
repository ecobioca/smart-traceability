import { task, types } from "hardhat/config";

task("add-supplier", "Add new supplier")
  .addParam("contract", "Contract address", undefined, types.string)
  .addParam("metadata", "Metadata IPFS hash", undefined, types.string)
  .addParam("manager", "Manager address", undefined, types.string)
  .setAction(async (taskArgs, hre) => {
    const contract = await hre.ethers.getContractAt(
      "Traceability",
      taskArgs.contract
    );

    const [owner] = await hre.ethers.getSigners();

    const tx = await contract.addSupplier(
      taskArgs.metadata,
      [taskArgs.manager],
      0,
      { from: owner.address }
    );
    const receipt = await tx.wait();

    const supplierId = receipt.events
      .filter((e: any) => e.event === "NewSupplier")[0]
      ?.args.id?.toString();

    console.info("Added supplier, Id:", supplierId || 'Not Found');
  });
