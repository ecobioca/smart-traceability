# Tracebility EVM Smart Contracts

This project enables traceability of supply chains using EVM smart contracts and comes with the smart contracts, a test for that contracts and a sample script that deploys that contract.

Suppliers can create products and their respective batches, recording the transactions of this batch on blockchain.

Each batch created represents a token. The standard token used is the ERC1155 NFT standard and all the metadata should be stored in IPFS.

Each supplier can give permission to a list of managers' addresses to create and transact the batch, in addition to transferring it to other links in the chain.

### Install dependencies:

```shell
yarn install
```

### Compile and run tests:

```shell
yarn hardhat coverage
```

### Deployment

Deploy to Alfajores (Celo Testnet):

```shell
yarn hardhat deploy --network alfajores
```

Deploy to Celo Mainnet:

```shell
yarn hardhat deploy --network celo
```

Deploy to Mumbai (Polygon Testnet):

```shell
yarn hardhat deploy --network mumbai
```

Deploy to Polygon Mainnet:

```shell
yarn hardhat deploy --network polygon
```

Then, copy the deployment address and start using it in your client application!

### Contributing

If you want to contribute to the project, lint code before git pushing / open a pull request.

```shell
yarn eslint '**/*.{js,ts}'
yarn eslint '**/*.{js,ts}' --fix
yarn prettier '**/*.{json,sol,md}' --check
yarn prettier '**/*.{json,sol,md}' --write
yarn solhint 'contracts/**/*.sol'
yarn solhint 'contracts/**/*.sol' --fix
```
