---
title: NFT Standards on Ethereum
head:
  - - meta
    - name: description
      content: Ethereum has various NFT standards. Notable standards include ERC-721, ERC-1155, ERC-998, and ERC-6551.
---


# NFT Standards on Ethereum

Ethereum's flexible smart contract functionality has allowed for the creation of various standards for NFTs, or non-fungible tokens. These standards provide guidelines for creating interchangeable tokens on the Ethereum platform. Here are a few of the notable ones:

### ERC-721

ERC-721 was the first standard for representing non-fungible digital assets on the Ethereum blockchain. Each ERC-721 token is unique and can represent ownership over an asset, both digital (like a CryptoKitty) and physical (like a deed to a house). The metadata associated with each token, including the asset's name, description, and any other specific attributes, are stored on the blockchain, providing proof of ownership and provenance.

For more details, see the [ERC-721 standard on the Ethereum Improvement Proposals website](https://eips.ethereum.org/EIPS/eip-721).
Check out [what is ERC-721](/core-concepts/ethereum/what-is-erc-721) for more information.

### ERC-1155

ERC-1155 is a more complex standard that allows for the creation of both fungible (interchangeable) and non-fungible tokens. It enables a single contract to produce any number of tokens, each with unique properties, which can reduce the complexity and gas costs associated with deploying individual contracts for each token type.

You can learn more about this standard by visiting the [ERC-1155 proposal on the Ethereum Improvement Proposals website](https://eips.ethereum.org/EIPS/eip-1155).

### ERC-998

ERC-998 is an extension of the ERC-721 standard that allows for the composition of non-fungible tokens. That means an ERC-998 token can own other ERC-721 or ERC-20 tokens. This standard opens the door for "crypto assets" that can carry other assets with them when they're traded or sold.

You can read more on the [ERC-998 standard proposal](https://eips.ethereum.org/EIPS/eip-998).

### ERC-6551 (Nested NFTs)

ERC-6551, a newer proposal, introduces the concept of nested NFTs. This standard allows for an NFT to contain other NFTs within it, opening up new possibilities for complex, layered digital assets. It's currently in draft status.

Check out the [what is ERC-6551](/core-concepts/ethereum/what-is-erc-6551) for more information.

These are just a few examples of the different standards available on Ethereum for creating and managing NFTs. Developers are continuously proposing new standards to address the evolving needs and use cases of the NFT community.