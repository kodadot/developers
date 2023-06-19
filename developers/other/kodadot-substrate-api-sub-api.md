# sub-api

---
[SubApi@Github](https://github.com/kodadot/packages/tree/main/sub-api)

<h1 align="center">sub-api</h1>

<h5 align="center">Substrate API with batteries included</h5>

## Installation

`yarn add @kodadot1/sub-api`

## Docs

### Why this?

In KodaDot, we need to manage the connection to the network of multiple parachain. This is a complicated task, and we need a simple way to do it. The old implementation was easy to use but not easy to manage.

That's why we decided to create a new implementation that is more robust and suitable for the other Dotsama builders.

### What's in the box?

**Factory**

The Factory handles a single connection per each parachain.
To directly connect to a parachain, just call.

```ts
import { ApiFactory } from '@kodadot1/sub-api'
const endpoint = 'wss://kusama-rpc.polkadot.io'
const api = await ApiFactory.useApiInstance(endpoint)
```

**InstaApi**

Feeling a bit adventurous? You can use the `InstaApi` and feel free to manage the connection directly.
Suitable also for an app with a single connection.

```ts
import { InstantApi as Api } from '@kodadot1/sub-api'
const endpoint = 'wss://kusama-rpc.polkadot.io'
const API = await (new API(endpoint)).getInstance()
```

**Helpers**

There is a set of helpers to make your life easier.

```ts
import { balanceOf, currentBlock } from '@kodadot1/sub-api'

const API = await ApiFactory.useApiInstance(endpoint)
const balance = await balanceOf(API, acc)
const block = await currentBlock(API)
console.log(balance, block)
```

**Hooks**

On API Connect hook is available.

```ts
import { onApiConnect } from '@kodadot1/sub-api'
```

**Types**

There is just a set of more readable types.

```ts
export type Extrinsic = SubmittableExtrinsic<'promise'>
```

## Usage Examples

Import Factory object like

```ts
import { ApiFactory } from '@kodadot1/sub-api'
```

Get an API instance for the selected URL and fetch the data in the component.

```ts
async function getChainProperties() {
  const endpoint = 'wss://kusama-rpc.polkadot.io'
  const API = await ApiFactory.useApiInstance(endpoint)
  const { chainSS58, chainDecimals, chainToken } = API.registry
  console.log('[API] Connect <3', { chainSS58, chainDecimals, chainToken })
}
```

Alternatively, you can listen to the `connect` event and get the data only when it is ready.

```ts
import { onApiConnect } from '@kodadot1/sub-api'
```

```ts
const endpoint = 'wss://kusama-rpc.polkadot.io'
onApiConnect(endpoint, async (API) => {
  const block = await API.query.system.number()
  console.log('[API] Connected to', endpoint, 'block', block)
})
```