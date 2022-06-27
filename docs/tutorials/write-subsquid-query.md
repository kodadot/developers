## How to write a SubSquid Query


SubSquid queries may be intimidating at first, but all that's happening is that you're searching for data through defined values that YOU set. We'll teach you HOW to set those values along with other actions you can use to further specify what you're querying for.

#### Here are some examples of GraphQL queries that can be performed on an existing squid with an existing schema:

## General Querying

We'll start off with a general query. These types of queries search through a data store and returns whatever search matches your defined field values. 
```graphql
query {
  KodaDotContributors {
    githubName
    ksmAddress
  }
}
```
In this example, you're fetching the githubName and ksmAddress of **all** the KodaDotContributors in the database. The reason why you are returning **all** of the queries that match is because you don't have defined field values that your queries have to fulfill.

## Specifying Query Results

If you want to become more specific with your queries, we use the “where” keyword. The "where" keyword is where you begin to specify your field values, telling GraphQL to only return results based on your values.

Here are some field values you can use to narrow down your query results:

### AND (&&) or OR (||) operators

```graphql
query {
  nftMarketplace(where: { blockchain: "PolkaDot" && network: "Kusama" }) {
    name
  }
}
```
This query is fetching nftMarketplaces that are on the PolkdaDot blockchain AND Kusama network and returning their name.

### Equality Operators(_eq)

```graphql
query {
  nftMarketplace(where: { name: "KodaDot" }) {
    blockchain
    network
  }
}
```

This query is fetching a nftMarketplace that has a name equal to KodaDot and returns the blockchain and network they're on.


### Comparative Operators 
such as _gt (greater than), _lt (less than), _gte (greater than or equal to), _lte (less than or equal to) 

They are used with the types Int, BigInt, Float, and DataTime.

```graphql
query {
  nfts(where: { marketplace: "KodaDot" && publishedOn_gte: "2022-05-27" }) {
    title
    dayCreated
  }
}
```
This query is fetching nfts that are on the KodaDot marketplace and created before May 27, 2022 and returns the title and the day that the NFT was created.

### Text Search Operators
such as _contains, _startsWith, _endsWith

```graphql
query {
  nfts(where: { marketplace: "KodaDot" && title_endsWith: "!" }) {
    title
  }
}
```

This query is fetching nfts that are on the KodaDot marketplace and ends with an exclamation point(!) and returns the title of the NFT.


### orderBy

orderBy is a keyword to sort the search results in ascending or descending order.
When using ```orderBy``` in a query, the value that you want to be ordered needs to be in the query itself:

```graphql
query QueryName {
  <entity>Connection(before: <endCursor>, orderBy: <fieldNameToOrderBy>_ASC) {
    pageInfo {
      endCursor
      hasNextPage
    }
    edges {
      node {
        <anyOtherField>
        <fieldNameToOrderBy>
      }
    }
  }
}
```

### Sort Operators
such as _ASC or _DESC

```graphql
query {
  nfts(orderBy: [title_ASC]) {
    id
    title
  }
}
```

This query is fetching a list of nfts in ascending order.

You can use _ASC and _DESC together like this: 

```graphql
query {
  nfts(orderBy: [title_ASC, publishedOn_DESC]) {
    id
    title
  }
}
```
This query is fetching a list of nfts with titles in asecending order on the published date in decending order.


### Limit and Offset

Limit specifies how the limit of results you want and offset specifies the place in your data that you want to start from. 

```graphql
query {
  nfts(limit: 5, offset: 5) {
    title
    dateCreated
  }
}
```

This query is fetching the first 5 NFTs in your data store right after the 5th NFT and returns the title and the date the NFT was created. The first 5 NFTs will start from the 6th NFT.

### Cursor Based Pagination

This is much better for larger data sets than offset. Cursor based pagination returns a pointer from the dataset and then results after that pointer. This is considered to be more beneficial than offset because if items are being added to the dataset, the reference point of the cursor will continue to present the "next" cursor regardless of it recently being added or not. Opposed to offset where there is a chance that a result would be skipped due to the change in position since offset works with datasets that are already established rather than continually updating ones.

```graphql
query {
  nftConnection(where: { isPink_eq: true }) {
    totalCount
    edges {
      node {
        id
        title
      }
    }
  }
}
```

This query fetches a list of nfts where isPink is true and returns not only their count, but their pointer. 

In cursor based pagination, with every entity in the input schema, a query is generated as follows:
"(entityName) + Connection"

This is considered a Connection, an object that contains edges and nodes. ``` edges ``` are relatioships between two nodes that hold an edge type, and  ``` nodes ``` are an edge type and objects. In this example, the node is the object of each nftConnection item.

### First and Last Operators

```first``` fetches the number of entities from the beginning of the result set and ```last``` fetches the number of entities from the end of the result set.

```graphql
query {
  nfts(first: 5) {
    edges {
      node {
        id
        title
      }
    }
  }
}
```

This query fetches the first 5 nfts with their pointer.

### Page Info Object
returns information that you can use in your queries to easily navigate your dataset

```graphql
pageInfo {
  startCursor
  endCursor
  hasNextPage
  hasPreviousPage
}
```

- startCursor is the cursor of the first node in  ```nodes```
- endCursor is the cursor of the last node in ```nodes```
- hasNextPage is  used to determine if there are more edges after the defined field values set by the user
- hasPreviousPage is used to determine if there are more edges before the defined field values set by the user

### Before and After Operators

The before and after operators deal with startCursor and endCursor.

```graphql
query FirstBatchQ {
  nftConnection(first: 10, orderBy: createdAt_ASC) {
    pageInfo {
      endCursor
      hasNextPage
    }
    edges {
      node {
        id
        handle
        createdAt
      }
    }
  }
}

query SecondBatchQ {
  nftConnection(after: <endCursor>, orderBy: createdAt_ASC) {
    pageInfo {
      endCursor
      hasNextPage
    }
    edges {
      node {
        id
        handle
        createdAt
      }
    }
  }
}
```

The first query is fetching the first 10 nfts in ascending order based on the time they were created and in.

The second query is fetching the next 10 channels in ascending order based on the last nft the first query ended off on (indicated by ```after: <endcursor>```).



