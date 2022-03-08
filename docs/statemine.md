# Wen statemine by KodaDot

- One bull run ago we have received a [grant from Kusama Treasury](https://kusama.polkassembly.io/motion/349) to implement Statemine-based NFTs into the KodaDot.

- In this fairy tale, you can learn how it went.

img

- The goal of our grant was to deliver a good user-friendly interface to create, view and make actions with NFTs and Collections. However, to deliver a few RPC calls (credits: [Bruno Skvorc](https://medium.com/u/fa2a9b2b716e?source=post_page-----b35ae13b70ff-----------------------------------)) we met a lot of obstacles on this journey.

**This article is split into three sections:**

- NFT pallet — how does it work
- What have we delivered?
- The technical magic

## Statemine & the NFT pallet

Statemine is a common-good parachain on Kusama network, you can understand is as a chain which helps to maintain the network and is developed solely for these purposes. It holds all fungible and non-fungible tokens for all connected parachains. One of the runtime pallets (chain logic) imported into Statemine is the NFT pallet. 

You can understand the chain logic as a limitation of what can and cannot be done by the chain itself.