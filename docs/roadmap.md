### What is the roadmap of KodaDot?

KodaDot has started as re-implementation [DotApps.io](https://dotapps.io/) from React to [VueJs by reversing component by component which was awarded by web3 foundation grant](https://vue-polkadot.js.org/).
From here, founders behind KodaDot realized it would be great to recycle gathered knowledge and once winning and participating on few Polkadot and Ethereum hackathon decided to choose grind in NFT space. From here implemented UX friendly UI for Substrapunks, then implemented first unofficial RMRK explorer. 
From here it was opportunity to start seeing KodaDot as ultimate public good. 

## Web3 styled development
- We've took non-traditional turn to develop KodaDot and choosed steer away from traditional web2 development to embrace external participation through bounties and be close to as possible web3 ethos. Turns out, [we have 70+ contributors, 200+ forks](https://github.com/kodadot/nft-gallery) and $50k in paid bounties for external participation. This offers on development more perspective through [collaboration](https://en.wikipedia.org/wiki/Collaboration) and [collective wisdom](https://en.wikipedia.org/wiki/Collective_wisdom). Appart from technical tasks, we paid out for [non-technical bounties](https://github.com/kodadot/nft-gallery/issues?q=is%3Aopen+is%3Aissue+label%3A%22%E2%9C%8D%EF%B8%8F+-+writing%22) as well. Seems system is usable at some scale. 
- Expand on code review guild 
- Code Review Guild [already recieved first payout](https://github.com/kodadot/nft-gallery/discussions/2999) after weeks of experiment 

## Leading NFT analytics platform
- As you've may heard, KodaDot is powered over 100+ GraphQL queries, which helps users navigate through collectibles and on-chain activity and articulate dynamics of NFTs or collectible. 
- Our leading NFT analytics product consists insights 
  - per collection like 
    - History for activity
    - Holders who hold which NFT
    - Flippers to see who exited collection 
  - per user 
    - Holdings to see which NFTs address holds 
    - Sales to see address sales activity 
    - Gains to see which NFT holdigns made profit/loss
  - general insights like
    - number of buys, emotes, floor and max sales, listed and sold items
  - personalized results
    - like how much NFTs owning from particular collection
    - which NFTs are yours 
    - address in collection

## Cross-chain compatibility 
- As our major strenght we choosen to build in Polkadot ecosystem [with ability to leverage XCM](https://wiki.polkadot.network/docs/learn-crosschain), which would enable you to teleport NFT assets between various Polkadot and Kusama parachains to build at much bigger scale and add composability to various NFT assets. Most of future NFT assets won't be visual at all. 
- With each chain we enable users to leverage particular properties or NFT primitives to use in cross-chain Dapps

## Cross-chain thesis
- KodaDot has implemented few NFT standards in Polkadot & Kusama ecosystem and has in roadmap implement few of them to users **offer single interface for best assets mobility** in class with respect on security and composability accross Dotsama ecosystem.
 
### RMRK (Kusama)
- With [RMRK](https://www.rmrk.app/) we've demonstrated versatile capabilities and rock steady implementation, while made public implementation of RMRK to [SubSquid](https://subsquid.io/) and [SubQuery](https://subquery.network/) indexers and [spin up our universal API called UniQuery](https://github.com/kodadot/packages/tree/main/uniquery). 

### Statemine - common good parachain
- As [generic assets parachain](https://guide.kusama.network/docs/kusama-statemine/), which provides functionality for deploying and transfering assets, both Fungible and non-fungible tokens, we implement this into KodaDot to enable users mint truly cross-chain assets within our UI 

### Basilisk NFT marketplace
- Is an independent chain which has the mission to enable frictionless liquidity bootstrapping for new cryptoassets. With this in mind [we've enabled NFT marketplace in Beta](https://github.com/galacticcouncil/amsterdot-bounties-2022/issues/5) on Basilisk Testnet to **create class, mint NFT, set a price, transfer, burn, make an offer, withdraw an offer and accept an offer and add royalty**. 
- With **Basilisk you can fully mint first Substrate-native and trustless NFTs in ecosystem.** This means, it's not EVM-based NFTs and not like RMRKv1 and RMRKv2, which consensus is made on indexers or some centralized GraphQL endpoint.
- Plans are these NFTs can hold positions in Basilisk LBP or other creative use-cases depends Basilisk Governance
- You can [test it on beta version of KodaDot](https://beta.kodadot.xyz/bsx)

### Moonsama (based on MoonRiver)
- [Moonsama are evolving NFTs 2.0](https://moonsama.com/), currently EVM-based NFT collection on MoonRiver which [promise multi-chain support](https://wiki.moonsama.com/litepaper).
- [You can test it on beta version of KodaDot](https://beta.kodadot.xyz/moonsama)

### Astar (WASM NFTs)
- [Astar](https://parachains.info/details/astar/) is Substrate Runtime Module Library and we are looking forward to pivot there **first ink! based NFT Marketplace implemented within KodaDot.** 
- This would create major compatiblity layer for developers writing WASM smart contracts to drive various NFT Dapps usecases within KodaDot in trustless way. 
- This part is work in progress.

### Gear
- [Gear](https://parachains.info/details/gear/) is meant to be highly throughtput WASM parachain, where we are looking forward impleemnt their [gNFT standard](https://wiki.gear-tech.io/examples/gnft-721/) for NFTs 

### Custom store-fronts

- Hence we will try to provide best efforst to community oriented exchanges, we will thrive to help your brand your look and feel you would like to need for your community and further power drive sales of collectibles. 
- [Offering uniquery](https://github.com/kodadot/packages/tree/main/uniquery) with deep liquidity for your integration of NFT products
- If you are interested, best to reach out KodaDot team and we can provide you how we can start with your community

This is WIP document and might expand in future and prior change

### Teleporting NFTs across Polkadot and Kusama parachains
- One of the goals of KodaDot is to help you to teleport assets through various parachains through single interface and drive mobility to your NFTs assets accross Polkadot Ecosystem. 

### Ref
- [Contributing to KodaDot](https://github.com/kodadot/nft-gallery/blob/main/CONTRIBUTING.md)
- [Beyond Verticalization of NFT Marketplaces](https://multicoin.capital/es/2022/06/22/beyond-verticalization-of-nft-marketplaces/)
- [kodadot/nft-gallery](https://github.com/kodadot/nft-gallery)
- [Collaborative Software](https://en.wikipedia.org/wiki/Collaborative_software)
- [Collective wisdom](https://en.wikipedia.org/wiki/Collective_wisdom)
- [Teleporting Assets](https://wiki.polkadot.network/docs/learn-teleport)