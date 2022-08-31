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


### Tasks

#### Add Supplier

Usage: 

```shell
hardhat --network <NETWORK> add-supplier --contract <STRING> --holder <STRING> --manager <STRING> --metadata <STRING>
```

OPTIONS:

  - contract:   Contract address 
  - holder:     Holder address, can be a contract
  - manager:    Addresses of managers, separated by commas
  - metadata:   Metadata IPFS hash

Example:

```shell
yarn hardhat --network alfajores add-supplier --contract 0x5d7D5AEBFe64E72Bd571d24Fc2d8547A2E657cfC --metadata bafybeif5i3ov3n7xjwdeg3gnreeoy7kmumsedu64qd5juzer7pmn47z3oi --manager 0x208eAE2D4f048F35FD7974216f5fa409Dd70d2E1 --holder 0x7cE9254F2c643e2BFD5306361529Db622873A8D8

# Response:
Added supplier, Id: 1
```

#### Get Supplier

Usage: 

```shell
hardhat --network <NETWORK> get-supplier --contract <STRING> --supplier <INT>
```

OPTIONS:

  - contract:    Contract address 
  - supplier:    Supplier Id 

Example:

```shell
yarn hardhat --network alfajores get-supplier --contract 0x5d7D5AEBFe64E72Bd571d24Fc2d8547A2E657cfC --supplier 1

# Response:
id: 1
metadata: bafybeif5i3ov3n7xjwdeg3gnreeoy7kmumsedu64qd5juzer7pmn47z3oi
managers: 0xb10c1E57379aBbA9F54AdAD33681abe4F4Fb0faC
holder: 0x7cE9254F2c643e2BFD5306361529Db622873A8D8
role: Supplier
```

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
