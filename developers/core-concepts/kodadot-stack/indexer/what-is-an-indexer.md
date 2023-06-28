---
title: Understanding Indexers in Kodadot
head:
  - - meta
    - name: description
      content: Indexers are specialized nodes or processes in a blockchain network designed to extract, interpret, and store the state of the blockchain in a more accessible format. Learn about the importance of indexers in Kodadot, an open-source multichain NFT marketplace, and how they enable the platform to provide up-to-date, accurate information about NFT ownership and transactions across multiple blockchains and NFT standards.
  - - meta
    - name: keywords
      content: Kodadot, indexers, blockchain, NFT, multichain, Polkadot, Kusama, ownership, transactions, infrastructure, open-source
---

# Indexers

In the context of Kodadot, an open-source multichain NFT marketplace, indexers are essential components that play a crucial role in the underlying infrastructure.

## What are Indexers?

Indexers are specialized nodes or processes in a blockchain network designed to extract, interpret, and store the state of the blockchain in a more accessible format. They allow us to efficiently query and fetch relevant data from the blockchain. This capability is vital for applications like Kodadot, where the state of the blockchain (in this case, NFT ownership, metadata, and transaction history) constantly changes and is of utmost importance to the users.

## Why are Indexers Important?

Without indexers, every time an application like Kodadot needed to retrieve information from the blockchain, it would have to parse the entire blockchain history to derive the current state. Given that blockchains can contain millions of blocks and billions of transactions, this is an extremely inefficient process.

Indexers solve this problem by creating a structured index of the blockchain state that can be queried in a manner similar to a standard database. This enables applications to quickly retrieve and update the state information they need without parsing the entire blockchain.

For Kodadot, indexers are even more critical given its multichain nature. It has implemented 9 NFT standards across 6 chains, including its first built on Polkadot/Kusama. Each of these blockchains may have its indexing mechanism and standards, making it complex to maintain a consistent view of the marketplace's state. A well-implemented indexer provides a unified, consistent interface for querying the state across these multiple chains.

## How Do Indexers Work?

Indexers work by listening to the blockchain network for new blocks and transactions. When a new block is added to the blockchain, the indexer processes the block, extracts relevant information, and updates its internal database.

In the context of an NFT marketplace like Kodadot, indexers would pay particular attention to transactions involving NFT transfers. For instance, when an NFT is bought or sold, this event will be detected by the indexer, which then updates the ownership records for the respective NFT.

## In Conclusion

Indexers are a foundational part of Kodadot's architecture. They enable the platform to provide up-to-date, accurate information about NFT ownership and transactions across multiple blockchains and NFT standards. This capability is crucial for maintaining the integrity of the marketplace and providing a seamless experience for users.