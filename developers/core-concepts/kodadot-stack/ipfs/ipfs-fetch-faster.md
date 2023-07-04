---
title: Accelerating IPFS Data Fetching in KodaDot
head:
  - - meta
    - name: description
      content: KodaDot is a robust NFT platform that leverages both decentralized and centralized technologies to optimize user experience and ensure data persistence. Learn how KodaDot enhances the speed of fetching data from the InterPlanetary File System (IPFS) using Cloudflare Images and a backup IPFS gateway, and how this innovative approach balances the principles of decentralization with the need for efficient data delivery.
---

# Accelerating IPFS Data Fetching in KodaDot

KodaDot is a robust NFT platform that leverages both decentralized and centralized technologies to optimize user experience and ensure data persistence. Here, we take a closer look at how KodaDot enhances the speed of fetching data from the InterPlanetary File System (IPFS) using Cloudflare Images and a backup IPFS gateway.

## Understanding IPFS

The [InterPlanetary File System (IPFS)](https://ipfs.io/) is a distributed file system that seeks to connect all computing devices with the same system of files. IPFS is an integral part of KodaDot's infrastructure, serving as a decentralized method for data storage. This ensures the persistence of data related to the NFTs minted through the platform, safeguarding against data loss in the event of localized outages or issues.

## Cloudflare Images

To optimize the delivery of the large number of images associated with each NFT, KodaDot incorporates [Cloudflare Images](https://developers.cloudflare.com/images/) into its tech stack. Cloudflare Images streamline image management and delivery at scale. It optimizes image files for each user's device and browser, reducing file size without compromising visual quality. This feature significantly enhances the speed of image delivery, improves page load times, and leads to an overall superior user experience.

## How KodaDot Implements Cloudflare Images with IPFS

When an NFT is minted through KodaDot, the associated image is uploaded to IPFS. However, to improve the delivery speed of these images, KodaDot employs a Cloudflare Worker that pushes a copy of all newly pinned images from IPFS to Cloudflare Images. 

When a user accesses an NFT on KodaDot's platform, the image isn't fetched directly from IPFS. Instead, an optimized version of the image is delivered from Cloudflare Images. This hybrid approach reduces bandwidth usage and ensures that users can access the platform efficiently, even during high traffic periods.

## The Role of the IPFS Gateway

While Cloudflare Images serve to optimize delivery, the IPFS gateway plays a vital role as a backup mechanism. In the event of any issues with Cloudflare Images, KodaDot can retrieve the image directly from the IPFS nodes, ensuring uninterrupted data availability.

## Conclusion

By leveraging the capabilities of both IPFS and Cloudflare Images, KodaDot effectively balances the principles of decentralization with the need for efficient data delivery. The result is a resilient, efficient system that provides a seamless and optimized user experience.

Check out our article ["Decentralized Meets Optimized: KodaDot's Implementation of Cloudflare Images and Backup IPFS Gateway"](https://medium.com/kodadot/decentralized-optimized-kodadot-cloudflare-1a2b3c4d567e) for a detailed look into this innovative approach.
