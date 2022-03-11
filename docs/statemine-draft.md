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

#### Teleport

One of the features we have implemented is teleport. Teleport allows us to send our tokens between the parachain and the relay chain. The teleport interface is delightfully simple. All we need to know is who is the recipient of the tokens and the amount of the tokens we want to transfer. How do we know to which chain am I sending the funds? In the figure below we see that the app shows where we are teleporting assets. To swap the source and destination chain we use the smart way of the route prefixes which we describe in the later section.

![7](/statemine/7.png)

### Technical difficulties

As what Bruno called a few calls it is more difficult under the hood. The backbone of the app is the indexer hosted by SubQuery. We use the indexer as a discovery service. In other words for listing all available NFTs, getting a list of collections created by us and also a paginated list of NFTs owned by a particular address. As it is not necessary to run an indexer against the Statemine as we can read all the data from the chain, some queries will be computationally expensive for the client’s device. Moreover, we would completely lose the NFT’s history (wen create, send, burn). As a side effect, we would love to see other teams leverage Statemine’s indexer and build something.

### Ordered data

How do we know the data are correct? Well, we learned that the hard way 😅.
By definition of SubQuery, the events are processed by the order they have defined in the project.yml and not by the way they were included in the block so when we made a batch that makes freeze, thaw, freeze the result in the indexer was that NFT is frozen, but the reality was quite the opposite.

![8](/statemine/8.png)

### Delayed delivery

Moreover, in the meantime of finishing the statemine implementation, we were upgrading our single page application to the Nuxt. The migration brought a lot of changes for the UI as well as the application itself is much faster. I highly recommend you to read the [Koda 2.0 article](https://medium.com/kodadot/kodadot-2-0-beta-d136f6ff139).

::: tip What is Nuxt?
Nuxt is a fantastic choice for teams building a production-grade product on the web.
:::

We wanted that the Statemine integration should be already written in Nuxt, which has slowed the development process on the one hand, but on the flip-side, the code is not in the state that will be unusable in a couple of weeks.

### Two parallel connected RPC nodes

The third major challenge was how to connect two parallelly connected RPC nodes to one client. As we internally still use kodadot1/packages this seems like a major decision: rewrite sub-API, to manage multiple connections.

::: tip What is RPC node?
As an RPC is the most straightforward API in which developers can communicate with servers to execute code remotely, they are very similar to function calls, only that they occur between two separate systems. 
:::

We decided not to take this path and rather rethink how we can make the app seamless for the user and the app extendable for the other future OSS contributors.
Therefore we’ve hacked internally called a prefixed based routing. Depending on which route we are app decides automatically on the background which node should we connect and which indexer should be used.
As the model example:

- Every page which has /statemine/ in the path, tells that we need a Statemine node and indexer in order to work.
- Alternatively, /rmrk/prefix uses the Kusama node

Whenever you visit /teleport from the RMRK prefix it is for the reason that you want to teleport your KSM to the Statemine. This saves a lot of future hassle with connecting other Kusama-based parachains

![10](/statemine/10.png)

What we left out from the grant is the embeddable component. In the past using single page application we were able to do it, but it showed up as a security issue. Therefore, we would like to propose a security bounty to the Kusama council for the team that is able to spot and tackle security issues.

![11](/statemine/11.png)

- As you can see on the graph, KodaDot has currently the highest security grade for the secure headers