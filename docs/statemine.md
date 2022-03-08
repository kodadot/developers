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

Statemine is a **[common-good parachain](https://medium.com/polkadot-network/common-good-parachains-an-introduction-to-governance-allocated-parachain-slots-88e01812160d)** on Kusama network, you can understand is as a chain which helps to maintain the network and is developed solely for these purposes. It holds all fungible and non-fungible tokens for all connected parachains. One of the runtime pallets (chain logic) imported into Statemine is the NFT pallet. 

::: tip What is a
.
:::


What is chain logic?
- You can understand the chain logic as a limitation of what can and cannot be done by the chain itself.

This pallet (which is technically called "Unique") consists of two main entities: **Classes** and **Instances**.

You can imagine Class as a collection that holds a list of NFTs
On the other hand, Instance represents the exact single NFT.

Both Class and Instance have a metadata field to store hyperlinks to the IPFS or other decentralized storage (like PermaFrost). On top of that, each entity can store attributes to add different traits for the tokens. What?? Ok, let's go through the buzzwords

What are metadata?
"Metadata" simply means "data about data".

If you take a digital photo, your camera stores a bunch of metadata in the EXIF format, which includes things like the date and time of the photo, whether the flash was used and so on. Metadata about an MP3 includes things like the song title, artist and album.