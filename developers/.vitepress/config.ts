import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { SitemapStream } from 'sitemap'
import { defineConfig } from 'vitepress'

const links = []

// https://vitepress.dev/reference/site-config
export default defineConfig({
  
  // generates sitemap
  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id))
      links.push({
        // you might need to change this if not using clean urls mode
        url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
        lastmod: pageData.lastUpdated
      })
  },

  // generates sitemap
  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({
      hostname: 'https://subwork.xyz/'
    })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    links.forEach((link) => sitemap.write(link))
    sitemap.end()
    await new Promise((r) => writeStream.on('finish', r))
  },
  
  lastUpdated: true,
  title: "KodaDot Developer Documentation",
  description: "Polkadot NFT Marketplace",
  head: [
    [
      'meta',
      { property: 'og:type', content: 'website'}
    ],
    [
      'meta',
      { property: 'og:title', content: 'KodaDot developers guide - An Open Source Polkadot NFT Marketplace'}
    ],
    [
      'meta',
      { property: 'og:image', content: 'https://developers.kodadot.xyz/developers-cover.png'}
    ],
    [
      'meta',
      { property: 'og:description', content: 'Developer documentation for the Open Source Polkadot NFT Marketplace - KodaDot'}
    ],
    [
      'meta',
      { property: 'og:url', content: 'https://developers.kodadot.xyz/'}
    ],
    [
      'meta',
      { name: 'twitter:card', content: 'summary_large_image'}
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.ico',
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/kodadot/developers/edit/main/developers/:path'
    },
    footer: {
      message: 'VitePress generated at SubWork, some pictures from KodaDot',
      copyright: 'Copyright © 2023-present SubWork membas'
    },
    nav: [
      { text: 'Get Started', link: '/get-started/index' },
      { text: 'Swag shop', link: 'https://shop.kodadot.xyz' },
      { text: 'NFT marketplace', link: 'https://kodadot.xyz'},
    ],

    sidebar: [
      {
        text: '🚀 Getting Started',
        link: '/get-started/index',
        collapsed: false,
        items: [
          { text: '❓ What Is Kodadot', link: '/get-started/kodadot-who' },
          { text: '📚 Before You Get Started', link: '/get-started/before-you-get-started' },
          { text: '🌐 Learn More about KodaDot', link: 'https://hello.kodadot.xyz' },
        ],
      },
      {
        text: '💡 Core Concepts',
        collapsed: false,
        link: '/core-concepts/index',
        items: [
          { text: '🖼️ What Are NFTs?', link: '/core-concepts/what-are-nfts' },
          { text: '🌐 What is a Multichain NFT Marketplace?', link: '/core-concepts/what-multichain-nft-marketplace' },
          { text: '🛠️ The KodaDot Stack',
            collapsed: true,
            link: '/core-concepts/kodadot-stack/index',
            items: [
              {
                text: '🔗 IPFS',
                collapsed: true,
                items: [
                  { text: '❓ What is IPFS', link: '/core-concepts/kodadot-stack/ipfs/what-is-ipfs' },
                  { text: '⚡ Faster IPFS Fetch', link: '/core-concepts/kodadot-stack/ipfs/ipfs-fetch-faster' },
                ],
              },
              {
                text: '📊 Indexer',
                collapsed: true,
                items: [
                  { text: '❓ What is an Indexer', link: '/core-concepts/kodadot-stack/indexer/what-is-an-indexer' },
                  { text: '🔧 KodaDot Indexers', link: '/core-concepts/kodadot-stack/indexer/kodadot-indexers' },
                  { text: '🖼️ Retrieve NFT Data', link: '/core-concepts/kodadot-stack/indexer/retrieve-nft-data' },
                ],
              },
            ],
          },
          {
            text: '💸 Ethereum',
            collapsed: true,
            items: [
              { text: '❓ What is Ethereum?', link: '/core-concepts/ethereum/what-is-ethereum' },
              { text: '🖼️ Ethereum NFTs', link: '/core-concepts/ethereum/nft-standards-on-ethereum' },
              { text: '🔖 What is ERC-721?', link: '/core-concepts/ethereum/what-is-erc-721' },
              { text: '🔖 What is ERC-6551?', link: '/core-concepts/ethereum/what-is-erc-6551' },
            ],
          },
          {
            text: '⚙️ Polkadot & Kusama',
            collapsed: true,
            items: [
              { text: '❓ What are Polkadot and Kusama', link: '/core-concepts/polkadot/what-are-polkadot-and-kusama' },
              { text: '🖼️ Polkadot NFTs', link: '/core-concepts/polkadot/polkadot-nfts' },
              { text: '🔁 Transfering NFTs via Chains', link: '/core-concepts/polkadot/transfering-nfts-via-chains' },
              {
                text: '🔗 Parachains',
                items: [
                  { text: '🔧 Substrate Parachains', link: '/core-concepts/polkadot/parachains/substrate-parachains' },
                  { text: '📡 KodaDot Substrate API', link: '/core-concepts/polkadot/parachains/kodadot-substrate-api' },
                ],
              },
            ],
          },
        ],
      },
      {
        text: '🔎 Uniquery',
        collapsed: false,
        link: '/uniquery/index',
        items: [
          { text: '🏬 KodaDot Storefront Fandom', link: '/uniquery/kodadot-storefront-fandom' },
        ],
      },
      {
        text: '📝 Minimark',
        collapsed: false,
        link: '/minimark/index',
      },
      {
        text: '🔎 PolySearch',
        collapsed: false,
        link: '/polysearch/index',

      },
      {
        text: '🔰 How to start contributing to KodaDot?',
        collapsed: true,
        link: '/contributing/index',
        items: [
          { text: '💡 Why should you contribute?', link: '/contributing/why-contribute'},
          { text: '✍️ Contributing', link: '/contributing/contributing'},
          { text: '🔄 Understanding the lifecycle of an issue', link: '/contributing/issue-lifecycle'},
          { text: '🚀 Get started!', link: '/contributing/how-to-start-contributing'},
          { text: '🥇 First time contribution', link: '/contributing/first-time'},
          { text: '💬 Effective communication', link: '/contributing/effective-communication'},
          { text: '🏆 Rewards', link: '/contributing/rewards'},
          { text: '🥇 Leaderboard', link: '/contributing/leaderboard'},
          { text: "💸 KodaDot's Burn Rate", link: '/contributing/burn-rate'},
          { text: '📣 We are Hiring!', link: '/contributing/hiring'},
          { text: '🔍 Contributions Tracker', link: 'https://repo-tracker.com/r/gh/kodadot/nft-gallery'},
          { text: '🤝 For other types of contributions', link: 'https://hello.kodadot.xyz/be-part-of-kodadot/kodadots-programs'},
        ]
      },      
      {
        text: '📄 Other',
        collapsed: false,
        items: [
          { text: '🔮 Upcoming Features', link: '/other/kodadot-upcoming' },
          { text: '🗞️ KodaDot PressKit', link: 'https://github.com/kodadot/kodadot-presskit' },
        ],
      },
    ],
    
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kodadot/developers' },
      { icon: 'twitter', link: 'https://twitter.com/kodadot' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path fill="currentColor" d="M470.435 45.423L16.827 221.249c-18.254 8.188-24.428 24.585-4.412 33.484l116.37 37.173l281.368-174.79c15.363-10.973 31.091-8.047 17.557 4.024L186.053 341.075l-7.591 93.076c7.031 14.371 19.905 14.438 28.117 7.295l66.858-63.589l114.505 86.187c26.595 15.826 41.066 5.613 46.788-23.394l75.105-357.47c7.798-35.705-5.5-51.437-39.4-37.757z"/></svg>'
        },
        link: 'https://t.me/kodadot_eco'
      },
    ]
  }
})



