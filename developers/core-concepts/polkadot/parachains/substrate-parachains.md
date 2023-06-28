---
title: Substrate, Parachains, and the Sub-API
head:
  - - meta
    - name: description
      content: Substrate is a modular blockchain framework that allows developers to build their own specialized blockchains. Parachains are individual blockchains that run in parallel within the larger Polkadot network. The `sub-api` package simplifies the process of managing connections to multiple parachains. Learn about the key features of the `sub-api` package, including the `ApiFactory` and `InstaApi` classes, helper functions, hooks, and types. See a simple example of how to use `sub-api` to connect to a parachain. The `sub-api` package is a powerful tool in the developer's toolbox for building applications on Polkadot, Kusama, and other Substrate-based blockchains.
  - - meta
    - name: keywords
      content: Substrate, Parachains, Sub-API, modular blockchain framework, specialized blockchains, Polkadot network, Cross-Chain Message Passing, interchain functionality, `sub-api` package, `ApiFactory`, `InstaApi`, helper functions, hooks, types, developer's toolbox, Polkadot, Kusama, Substrate-based blockchains
---

# Substrate, Parachains, and the Sub-API

## What is Substrate?

[Substrate](https://substrate.dev/) is a modular blockchain framework that allows developers to build their own specialized blockchains. It's developed by Parity Technologies and is the foundational technology behind [Polkadot](https://polkadot.network/) and [Kusama](https://kusama.network/).

Substrate provides all the core components of a blockchain, such as a database, network handling, consensus mechanism, and a Wasm interpreter, so that developers can focus on designing and implementing their chain's specific features and logic.

One of the key design principles of Substrate is flexibility. It's built to be as generic as possible, allowing for a wide variety of blockchains to be created, from public, permissionless blockchains to private, permissioned ones.

## What are Parachains?

Parachains are individual blockchains that run in parallel within the larger Polkadot network. Each parachain can have its own unique design, token economy, governance mechanism, and use case, while still benefiting from the security and interoperability provided by the Polkadot Relay Chain.

Parachains communicate with each other and the Relay Chain using the Cross-Chain Message Passing (XCMP) protocol, enabling a wide range of interchain functionality. They can share information, perform actions on other chains, and transfer tokens between chains.

## Introduction to Sub-API

Managing connections with multiple parachains can be a complex task due to the different designs, standards, and APIs of each parachain. This is where the [`sub-api`](https://github.com/kodadot/packages/tree/main/sub-api) package comes in.

Developed by KodaDot, `sub-api` is a utility package that simplifies the process of managing connections to multiple parachains. Here are some key features of the `sub-api` package:

- **ApiFactory**: A class that manages a single connection for each parachain.
- **InstaApi**: Provides direct control over connection management, suitable for applications with a single connection.
- **Helpers**: A set of functions that simplify common tasks such as querying account balance or fetching the current block.
- **Hooks**: An `onApiConnect` hook that triggers when the API connects.
- **Types**: Provides more readable type definitions.

Here's a simple example of how to use `sub-api` to connect to a parachain:

```ts
import { ApiFactory } from '@kodadot1/sub-api'

const endpoint = 'wss://kusama-rpc.polkadot.io'
const api = await ApiFactory.useApiInstance(endpoint)
```

The `sub-api` package is a powerful tool in the developer's toolbox for building applications on Polkadot, Kusama, and other Substrate-based blockchains. It makes the task of managing multiple parachain connections more manageable, allowing developers to focus on building the unique features and logic of their applications.