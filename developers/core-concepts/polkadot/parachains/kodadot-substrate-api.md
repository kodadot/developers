---
title: KodaDot Substrate API Overview
head:
  - - meta
    - name: description
      content: The `sub-api` is a powerful utility developed by KodaDot for managing connections with multiple parachains in a network. This documentation provides an overview of its key features and shows how to use them effectively. Learn how to install the `sub-api` package, use the `ApiFactory` and `InstaApi` classes, leverage helper functions, hooks, and types, and see usage examples for fetching chain properties and listening for the `connect` event. The `sub-api` package is an integral part of KodaDot's developer toolbox and should simplify the task of connecting to and interacting with multiple parachains.
  - - meta
    - name: keywords
      content: KodaDot, Substrate API, sub-api, utility, connections, parachains, network, overview, features, installation, ApiFactory, InstaApi, helper functions, hooks, types, usage examples, chain properties, connect event, developer toolbox, connecting, interacting
---

# Sub API

The `sub-api` is a powerful utility developed by KodaDot for managing connections with multiple parachains in a network. This documentation provides an overview of its key features and shows how to use them effectively.

To use it check out the documentation in the following link: [SubApi@Github](https://github.com/kodadot/packages/tree/main/sub-api)

## Installation

To add the `sub-api` package to your project, use the following command:

```
yarn add @kodadot1/sub-api
```

## Features

### ApiFactory

The `ApiFactory` class is responsible for establishing and managing a connection to a parachain. The example below demonstrates how to establish a connection to a parachain:

```ts
import { ApiFactory } from '@kodadot1/sub-api'

const endpoint = 'wss://kusama-rpc.polkadot.io'
const api = await ApiFactory.useApiInstance(endpoint)
```

### InstaApi

The `InstaApi` class provides you with direct control over the connection management process. This class is suitable for applications requiring only a single connection:

```ts
import { InstantApi as Api } from '@kodadot1/sub-api'

const endpoint = 'wss://kusama-rpc.polkadot.io'
const API = await (new API(endpoint)).getInstance()
```

### Helpers

The `sub-api` package comes with a set of helper functions that make common tasks easier:

```ts
import { balanceOf, currentBlock } from '@kodadot1/sub-api'

const API = await ApiFactory.useApiInstance(endpoint)
const balance = await balanceOf(API, acc)
const block = await currentBlock(API)
console.log(balance, block)
```

### Hooks

The package provides an `onApiConnect` hook that gets triggered when the API connects:

```ts
import { onApiConnect } from '@kodadot1/sub-api'
```

### Types

More readable type definitions are provided in the `sub-api` package. For instance, `SubmittableExtrinsic<'promise'>` is exported as `Extrinsic`.

## Usage Examples

Here is an example demonstrating how to fetch chain properties using the `ApiFactory`:

```ts
import { ApiFactory } from '@kodadot1/sub-api'

async function getChainProperties() {
  const endpoint = 'wss://kusama-rpc.polkadot.io'
  const API = await ApiFactory.useApiInstance(endpoint)
  const { chainSS58, chainDecimals, chainToken } = API.registry
  console.log('[API] Connect <3', { chainSS58, chainDecimals, chainToken })
}
```

In the following example, the `onApiConnect` hook is used to listen for the `connect` event and retrieve data when the connection is ready:

```ts
import { onApiConnect } from '@kodadot1/sub-api'

const endpoint = 'wss://kusama-rpc.polkadot.io'
onApiConnect(endpoint, async (API) => {
  const block = await API.query.system.number()
  console.log('[API] Connected to', endpoint, 'block', block)
})
```

These examples should provide you with a solid foundation to start using the `sub-api` package in your application. The `sub-api` package is an integral part of KodaDot's developer toolbox and should simplify the task of connecting to and interacting with multiple parachains.