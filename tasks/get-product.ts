import { task } from "hardhat/config";

task("get-product", "Get product from id")
  .addParam("contract", "Contract address")
  .addParam("id", "Product id")
  .setAction(async (taskArgs, hre) => {
    console.log(taskArgs);
    const contract = await hre.ethers.getContractAt(
      "Traceability",
      taskArgs.contract
    );

    const [owner] = await hre.ethers.getSigners();

    const tx = await contract.getProduct(taskArgs.id, {
      from: owner.address,
    });

    console.log("Product:", tx);
  });
