**Uniquery Documentation V1**

KodaDot now has its’ own graphQL builder for our Subquery and SubSquid!

The queries we now support are:

- nftById 
- nftListByOwner 
- nftListByIssuer 
- nftListCollectedBy
- nftListSoldBy 
- nftListByCollectionId
- nftListForSale
- collectionById 
- collectionListByOwner 
- collectionListByIssuer

Since queries in Subquery and SubSquid are written a bit differently, you can see the variables and parameters for each queries in the [SubqueryClient.ts](https://github.com/kodadot/packages/blob/main/uniquery/src/clients/SubqueryClient.ts) and [SquidClient.ts](https://github.com/kodadot/packages/blob/main/uniquery/src/clients/SquidClient.ts) files!

In this walkthrough, we will be using the Fetch API to send our query object! Here’s a [playground](https://graphqlbin.com/) you can test your endpoints with using our endpoint URL: https://app.gc.subsquid.io/beta/rubick/006/graphql

```bash

const client = getClient('subquery')
const query = client.collectionListByIssuer('A_VALID_KSM_ADDRESS')

fetch('https://app.gc.subsquid.io/beta/rubick/006/graphql', {
  method: 'POST',
  body: JSON.stringify(query)
})
  .then(res => res.json())
  .then(result => console.log(result))

```

To use Uniquery in any of your projects, you have to:

1. Install Uniquery 
``` bash
# Using npm
npm install @kodadot1/kodapi

or

# Using yarn
yarn install @kodadot1/kodapi

or

# Using pnpm
pnpm install @kodadot1/kodapi
```
2. Import our package on the top of your file:
```bash 
# Using ECMAScript modules (ESM)
import getClient from '@kodadot1/kodapi'

or

# Using CommonJS
const getClient = require('@kodadot1/kodapi')
```
Now, we want to choose our query object. Possible query objects are listed in the beginning. In this walkthrough, we'll be using `collectionListByIssuer`

```bash
const client = getClient('subquery')
const query = client.collectionListByIssuer('VALID_KSM_ADDRESS')
```
The reason why we have `const client = getClient('subquery')` is because now we're actively incorporating Uniquery into this project. This is the codes way of saying "Hey, lets now pull information from our import from KodaDot's API!".

The reason why we have `const query = client.collectionListByIssuer('VALID_KSM_ADDRESS')` is because we're going to pass the `const query` object through FETCH. The `client.collectionListByIssuer('VALID_KSM_ADDRESS')` part is the codes way of saying "Let's query some data (which is `collectionListByIssuer`) from KodaDot's API (which is represented by `client`). What is in the parenthesis is the parameters that your query requires in order to gather data. You can find what parameters are needed/optional by looking for your query in either [SubqueryClient.ts](https://github.com/kodadot/packages/blob/main/uniquery/src/clients/SubqueryClient.ts) or [SquidClient.ts](https://github.com/kodadot/packages/blob/main/uniquery/src/clients/SquidClient.ts).

Lastly, we pass our object through the FETCH API!

```bash
fetch('https://app.gc.subsquid.io/beta/rubick/006/graphql', {
  method: 'POST',
  body: JSON.stringify(query)
})
  .then(res => res.json())
  .then(result => console.log(result))
```

If you're unfamiliar with the FETCH API, you can read more about it [here](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) but our setup is how we startup the fetch quest!

fetch() can take in optional parameters apart from the path you want to get information from (which is the first parameter). In this case we decided to use `method: 'POST'` which is the action that's to be performed on the data you're pulling and `body: JSON.stringify(query)` which will turn your query into a JSON string. 

Lastly, this part:

```bash
.then(res => res.json())
  .then(result => console.log(result))
```
is where (if the request is successful), the promise will turn into a Response object and then into actual data through `res.json()`. 

`.then(result => console.log(result)` will wait until the promise is resolved and will pass the results of your query to the console.


This is what it looks like all together:

```bash
import getClient from '@kodadot1/kodapi'

const client = getClient('subquery')
const query = client.collectionListByIssuer('vikiival')

fetch('https://app.gc.subsquid.io/beta/rubick/006/graphql', {
  method: 'POST',
  body: JSON.stringify(query)
})
  .then(res => res.json())
  .then(result => console.log(result))
```


Happy Building!