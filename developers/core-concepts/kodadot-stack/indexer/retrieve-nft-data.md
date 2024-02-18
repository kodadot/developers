---
title: How to Retrieve NFT Data using Graphql
head:
  - - meta
    - name: description
      content: Learn how to retrieve NFT data using Graphql in Kodadot.
---

# Introduction

This documentation aims to guide users in fetching NFT data from two available endpoints: Assethub Polkadot and Assethub Kusama. Through GraphQL queries, users can efficiently retrieve NFT data. Additionally, we'll cover how to accomplish similar fetches using a REST API approach.

# Configuration

To begin querying, users must first configure the appropriate endpoint based on the network they wish to access:

- Assethub Polkadot: https://ahp.gql.api.kodadot.xyz
- Assethub Kusama: https://ahk.gql.api.kodadot.xyz

# GraphQL Query Example

Below is a sample GraphQL query to fetch a list of NFTs for a specific account. This query limits the results to 10 NFTs and filters by a specific `currentOwner`.

```graphql
query MyQuery {
  nftEntities(limit: 10, where: {currentOwner_eq: "YourOwnerID"}) {
    id
    name
    meta {
      id
      image
      animationUrl
    }
  }
}
```

Replace `"YourOwnerID"` with the actual owner ID to retrieve relevant data.

## Query Explanation

The query consists of:

- **nftEntities**: The root query to fetch NFT entities.
- **limit**: Specifies the maximum number of entities returned by the query.
- **where**: Provides conditions for filtering the data, in this case by `currentOwner_eq`, which is the NFT owner's ID.
- **id, name, meta**: Determines the fields to be returned. In `meta`, more details such as `id`, `image`, and `animationUrl` are provided, each offering a unique identifier, a link to the NFT image, and an animation URL if available.

## Executing the Query

1. Choose the appropriate endpoint based on the desired network.
2. Use a tool or application that supports GraphQL queries, such as Postman or Apollo Client.
3. Input the above query, modifying `YourOwnerID` as necessary.
4. Execute the query and review the results.

## Using `curl` for a REST API call

Here is how you can use `curl` to make a POST request to the GraphQL endpoint. This example uses the Assethub Polkadot endpoint, but you can replace the URL with the Assethub Kusama endpoint if needed.

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"query":"query MyQuery { nftEntities(limit: 10, where: {currentOwner_eq: \"YourOwnerID\"}) { id name meta { id image animationUrl } } }"}' \
  https://ahp.gql.api.kodadot.xyz
```

Make sure to replace `"YourOwnerID"` with the actual NFT owner's ID you're interested in querying about.

## Using JavaScript `fetch` for a REST API call

When using JavaScript, you can utilize the `fetch` API to perform a similar operation. This example can be run in environments that support `fetch`, such as modern web browsers or Node.js (with a polyfill or built-in support for `fetch`).

```js
// Define the GraphQL query
const query = `
  query MyQuery {
    nftEntities(limit: 10, where: {currentOwner_eq: "YourOwnerID"}) {
      id
      name
      meta {
        id
        image
        animationUrl
      }
    }
  }
`;

// Configure the request
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ query })
};

// Make the fetch call to the Polkadot endpoint (change URL for Kusama if needed)
fetch('https://ahp.gql.api.kodadot.xyz', options)
  .then(response => response.json()) // Parse the JSON response
  .then(data => console.log(data)) // Log the data for inspection
  .catch(error => console.error('Error fetching data:', error));
```

Replace `"YourOwnerID"` with the actual NFT owner's ID. This script sends a POST request with the GraphQL query in the body to the specified endpoint and logs the response to the console.

These examples provide a foundation for fetching NFT data from the Assethub Polkadot and Assethub Kusama endpoints using either curl for command-line-based interactions or JavaScript fetch for web-based projects or scripts.
