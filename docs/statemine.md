# Wen statemine by KodaDot

- One bull run ago we have received a [grant from Kusama Treasury](https://kusama.polkassembly.io/motion/349) to implement Statemine-based NFTs into the KodaDot.

- In this fairy tale, you can learn how it went.

![1](/statemine/fractanary.jpeg)

- The goal of our grant was to deliver a good user-friendly interface to create, view and make actions with NFTs and Collections. However, to deliver a few RPC calls (credits: [Bruno Skvorc](https://medium.com/u/fa2a9b2b716e?source=post_page-----b35ae13b70ff-----------------------------------)) we met a lot of obstacles on this journey.

**This article is split into three sections:**

- NFT pallet — how does it work
- What have we delivered?
- The technical magic

## Statemine & the NFT pallet

Statemine is a **[common-good parachain](https://medium.com/polkadot-network/common-good-parachains-an-introduction-to-governance-allocated-parachain-slots-88e01812160d)** on [Kusama network](https://kusama.network/), you can understand is as a chain which helps to maintain the network and is developed solely for these purposes. It holds all fungible and non-fungible tokens for all connected parachains. One of the runtime pallets (chain logic) imported into Statemine is the NFT pallet. 

::: tip What is chain logic?
You can understand chain logic as a limitation of what can and cannot be done by the chain itself.
:::

This pallet (which is technically called "Unique") consists of two main entities: **Classes** and **Instances**.

You can imagine Class as a collection that holds a list of NFTs. On the other hand, Instance represents the exact single NFT.

Both Class and Instance have a metadata field to store hyperlinks to the IPFS or other decentralized storage (like PermaFrost). On top of that, each entity can store attributes to add different traits for the tokens. What?? Ok, let's go through the buzzwords:


::: tip What are metadata?
If you take a digital photo, your camera stores a bunch of metadata in the EXIF format, which includes things like the date and time of the photo, whether the flash was used and so on. Metadata about an MP3 includes things like the song title, artist and album.
:::


::: tip What is IPFS?
IPFS is a distributed system for storing and accessing files, websites, applications, and data.
:::

::: tip What are traits?
Trait could be understood as a specific part of nft which is unique. For example some collections of 10,000 NFTs have thousands of different traits which specify each nft.
:::

Isn’t that ineffective to hold many bytes on the chain? That is an excellent and valid question. The truth is that when you create Class or Instance or add metadata, you have to lock some amount of KSM. Is it possible to get the KSM back? Sure, when you burn the Class or Instance, your KSM will be returned.

## KodaDot on Statemine: What have we delivered?

We’ve made a straightforward UI for users to create their collections (classes) and then mint their lovely non-fungible tokens (instances) on Statemine. For the sake of clarity, we will refer to Classes as collection and Instances will be referred to as NFTs.

### Create Class - Collection

Let’s mint our first collection (aka class). All we need is an image to represent our class, a cool name and a description. As we see in the figure below we decided to mint our first KodaDot logo as the image of our collection then name our collection as Kodadot and as you know we are a carbon-neutral NFT platform.

![1](/statemine/1.png)

### Create NFT

When our collection is ready, we can create some NFTs. The process of creating the NFT/Instance is exactly the same as in the collection. The image below shows that first, we need to select a collection (in our case KodaDot), image, name and description. Moreover, if we click on the “Show on-chain attributes”, we can really add some attributes to the NFT 👀. These attributes are stored on the chain in the form of key-value a requires a bit of KSM. We have to be careful not to run out of KSM.

### Gaming NFT on KodaDot

We’ve been thinking about this quite long-term and can tell that we are preparing for GameFi to be run on Statemine with help of KodaDot. Right now we’ve opened gates for anyone to add traits and we are playing with further experimentation for [MetaPrime.network](https://metaprime.network/)

![2](/statemine/2.png)

### Minted NFT on Statemine / Westmint

Tada 🎉 we made it! We have our shiny new NFT ready. Let’s look at the NFT detail. The main portion of our screen is taken by the art itself. Under the image, we can see the information we added during the mint. The middle section under the image is dedicated to the important ownership data, such as the under which collection we minted the creator’s address, address of the current owner and delegator’s address. On the bottom right we have the panel with available actions for the currently logged user. Because we are the owners of the NFT we can now send it, burn it or delegate.


![3](/statemine/3.png)
- View the [NFT](https://kodadot.xyz/westmint/gallery/0-2)

### Action panel

Whenever you are owner of particular NFT, you can SEND, CONSUME (BURN), Delegate and erase metadata (Trash icon)

![4](/statemine/4.png)

#### Delegator

Who is the delegator anyway? We can delegate our NFT to another address that is able to send our NFT. Imagine that as asking our friend to take be our trusted third party.

#### Submit delegate

We are going to delegate this token to the friend. All we just need to do is to insert her address and hit submit button.

#### Fancy addons

From the other fancy features on the action panel, we can show the QR code for the NFT, copy the current URL to the clipboard spawn a sharing modal. The last feature on the panel (very dangerous), will show us a modal with a possibility to remove all attributes and the metadata. Proceed with caution as adding metadata is an only one-way operation available only at minting operation.

#### Collection detail

From the NFT detail and action panel, we can move to the Collection detail. We see all the important information as the creator, name, image and the list of NFTs in the collection. As the additional perk of this screen, KodaDot UI allows you to transfer ownership of the collection to someone else!

![5](/statemine/5.png)

#### Transfer collection

Clicking on the paper plane icon on the right side of the screen we will spawn a dialogue where we just put the address of the future owner. After the submission, the blockchain magic happens and voila the collection is no longer us.

![6](/statemine/6.png)