---
title: Understanding the KodaDot Tech Stack
head:
  - - meta
    - name: description
      content: KodaDot relies on a range of application frameworks and technologies to keep our platform operational. This document provides a high-level overview of the key elements of our tech stack, designed to help developers new to the project familiarize themselves with our infrastructure. Learn about the frontend framework NuxtJS, the indexer SubSquid, serverless functions, infrastructure providers like Netlify and Cloudflare Pages, data storage using IPFS and nft.storage, and specific packages in the KodaDot ecosystem like vuex-options and sub-api. For more detailed information, reference the original KodaDot Frontier article and join the Discord community for additional help.
  - - meta
    - name: keywords
      content: KodaDot, tech stack, application frameworks, NuxtJS, VueJS, SPA, statically generated, server-side rendered, lifecycle hooks, community modules, SubSquid, blockchain data, RMRK implementation, serverless functions, API endpoints, Netlify, Cloudflare Pages, infrastructure costs, IPFS, nft.storage, vuex-options, sub-api, developer efficiency, Substrate API, KodaDot Frontier article, Discord community
---

# Understanding the KodaDot Tech Stack

KodaDot relies on a range of application frameworks and technologies to keep our platform operational. This document provides a high-level overview of the key elements of our tech stack, designed to help developers new to the project familiarize themselves with our infrastructure.

Check out [KodaDot's NFT marketplace repository](https://github.com/kodadot/nft-gallery) to get a quick overview on how the project is structured.

## Frontend Framework: NuxtJS
NuxtJS is our frontend framework of choice. It is an abstraction layer over VueJS, making it simpler to create a web application. It offers handy features like easy setup for SPA, statically generated, or server-side rendered applications. In addition, it provides additional lifecycle hooks (e.g. `asyncData()`) with specialized views and an array of community modules.

Our codebase is structured in an opinionated manner, enabling new developers to quickly get acquainted. Developers familiar with AngularJS or ReactJS will find the transition relatively easy.

To learn more about NuxtJS, check out their [official documentation](https://nuxtjs.org/docs).

## Indexers: SubSquid
SubSquid is a service used for accessing indexed and queryable blockchain data. It eliminates the overhead of building a custom backend for Polkadot, Substrate, and Avalanche projects. At KodaDot, we use a custom implementation of the SubSquid indexer as our primary API for the RMRK implementation.

To understand more about indexers, read through the [SubSquid documentation](https://docs.subsquid.io/).

To understand more about indexers, go to the page [What is an indexer?](/core-concepts/kodadot-stack/indexer/what-is-an-indexer)

## Serverless Functions
Serverless functions help us abstract server-side logic into isolated functions, making it easy to access through API endpoints. This includes tasks like receiving keys and pinning.

For more information about serverless functions, you can refer to this [guide](https://www.cloudflare.com/learning/serverless/what-is-serverless/).

## Infrastructure Providers
We use Netlify on our test environment and Cloudflare Pages in production. Both services allow us to host our website statically, optimizing page speed and keeping infrastructure costs low.

Learn more about [Netlify](https://www.netlify.com/docs/) and [Cloudflare Pages](https://developers.cloudflare.com/pages/).

## Data Storage
In line with our preference for decentralized solutions, we heavily rely on IPFS for our data storage needs, using nft.storage as a pinning service.

Learn more about [IPFS](https://docs.ipfs.io/) and [nft.storage](https://nft.storage/)

## Packages
Specific packages in the KodaDot ecosystem, such as vuex-options and sub-api, are used to boost developer efficiency and provide a singleton wrapper for the Substrate API, respectively.

Find out more about these packages in the KodaDot [repository](https://github.com/kodadot).

## Conclusion
We hope this overview provides useful insights into the KodaDot tech stack. For more detailed information, please reference the original [KodaDot Frontier article](https://blog.kodadot.xyz/the-tech-stack-at-kodadot-8a83880f8624) and feel free to join our [Discord community](https://discord.com/invite/kodadot) if you have further questions or need additional help.
