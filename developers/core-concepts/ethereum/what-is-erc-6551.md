# ERC-6551: A New NFT Token Standard

ERC-6551 is a new token standard for non-fungible tokens (NFTs) that enhances the functionality and value of NFTs by granting them smart contract capabilities. This page will provide an overview of the ERC-6551 standard, explain its workings and potential use cases, and discuss some of its challenges and limitations.

## What is ERC-6551?

ERC-6551 functions as a smart contract wallet. This means that ERC-6551 tokens can hold other tokens and NFTs in a similar manner as a regular smart contract wallet. These so-called token-bound accounts (TBAs) are created and managed through a permissionless registry that is compatible with existing ERC-721 NFTs. The standard is co-authored by Benny Giang, a founding member of Dapper Labs, known for its work on the ERC-721 token standard and early projects like CryptoKitties.

## How Does ERC-6551 Work?

ERC-6551 resolves the limitations of standard ERC-721 NFTs which are limited in their scope and functionality. While they can be owned and transferred, they cannot hold other assets or interact with other smart contracts.

ERC-6551 introduces a permissionless registry that is compatible with existing ERC-721 NFTs. The registry, which acts as a factory and a directory for TBAs, enables anyone to create a TBA for any ERC-721 token by calling a function on the registry and paying a small fee. This results in the creation of a proxy contract that represents the TBA for the token. The proxy contract inherits all the properties and metadata of the original ERC-721 token, and also implements the EIP-1271 standard. This allows it to sign messages and verify signatures on behalf of the token, enabling interaction with other smart contracts and accounts on the Ethereum network.

## Use Cases of ERC-6551 in the NFT Space

### Composability

ERC-6551 enhances composability by allowing the bundling of an NFT with its related assets. This means all associated tokens and NFTs will be transferred along with the ERC-6551 NFT during a sale or transfer.

### Identity

With ERC-6551, each NFT can have its own identity and interact independently with DApps, regardless of the wallet holding it. This opens up possibilities for loyalty programs and in-game rewards based on an NFT's past behavior.

### Provenance

ERC-6551 allows for improved provenance, enabling a more comprehensive view of an asset’s transaction history or utility beyond the proof of ownership.

### Dependency

ERC-6551 tokens can own other assets or tokens and interact with other platforms or smart contracts, enhancing their functionality and value.

## Challenges and Limitations

While ERC-6551 introduces exciting possibilities for NFTs, it also presents challenges. These include getting support from existing NFT projects and platforms, ensuring security to prevent exploits by hackers, and providing a user-friendly and intuitive experience despite the increased complexity introduced by the new standard.

## Conclusion

Despite the challenges, ERC-6551 has the potential to revolutionize the world of NFTs by giving each ERC-721 token a smart contract wallet that can own assets and interact with applications. This new level of interactivity and dynamism could open up new possibilities in gaming, art, and identity.

For further reading, please refer to the official EIP proposal on the Ethereum website:

- [ERC-6551 Proposal](https://eips.ethereum.org/EIPS/eip-6551)