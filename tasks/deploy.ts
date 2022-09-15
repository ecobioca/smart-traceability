import { task } from "hardhat/config";

task("deploy", "Full contract deploy", async (taskArgs, hre) => {
  if (hre.network.name == "hardhat") {
    console.error("Please select a network");
    return;
  }

  // Call compile manually to make sure everything is compiled
  await hre.run("compile");

  // We get the contract to deploy
  const Contract = await hre.ethers.getContractFactory("Traceability");

  const contract = await Contract.deploy();

  await contract.deployed();

  console.info("Traceability contract deployed to:", contract.address);
});
