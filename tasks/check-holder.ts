import { task } from "hardhat/config";

task("check-holder", "Check product holder")
  .addParam("contract", "Contract address")
  .addParam("holder", "Holder address")
  .setAction(async (taskArgs, hre) => {
    console.log(taskArgs);
    const contract = await hre.ethers.getContractAt(
      "Traceability",
      taskArgs.contract
    );

    // should revert if contract holder does not implement ERC1155Receiver interface
    await contract._doSafeHolderFullCheck(taskArgs.holder);

  });
