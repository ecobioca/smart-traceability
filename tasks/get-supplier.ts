import { task, types } from "hardhat/config";

const Roles = ["Supplier", "Manufacturer", "Distributor", "Retailer"];

task("get-supplier", "Get supplier by id")
  .addParam("contract", "Contract address", undefined, types.string)
  .addParam("supplier", "Supplier Id", undefined, types.int)
  .setAction(async (taskArgs, hre) => {
    const contract = await hre.ethers.getContractAt(
      "Traceability",
      taskArgs.contract
    );

    const [owner] = await hre.ethers.getSigners();

    const supplier = await contract.getSupplier(taskArgs.supplier, {
      from: owner.address,
    });

    if (!supplier.exists) {
      console.log("Supplier not found");
      return;
    }

    console.log(
      `id: ${taskArgs.supplier}\nmetadata: ${supplier.metadataURI}\nmanagers: ${
        supplier.managersAddrs
      }\nrole: ${Roles[supplier.role]}`
    );
  });
