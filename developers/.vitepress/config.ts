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
  title: "KodaDot developers",
  description: "One Stop Shop for Polkadot NFTs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/kodadot/docs/edit/main/docs/:path'
    },
    footer: {
      message: 'VitePress generated at SubWork, some pictures from KodaDot',
      copyright: 'Copyright © 2023-present SubWork membas'
    },
    nav: [
      { text: 'Get Started', link: '/get-started' },
      { text: 'Swag shop', link: 'https://shop.kodadot.xyz' },
      { text: 'NFT marketplace', link: 'https://kodadot.xyz'},
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Overview', link: '/get-started/index' },
          { text: 'Before You Get Started', link: '/get-started/before-you-get-started' },
          { text: 'Who Is Kodadot', link: '/get-started/kodadot-who' },
          { text: 'Learn More about KodaDot', link: 'https://hello.kodadot.xyz' },

        ],
      },
      {
        text: 'Core Concepts',
        items: [
          { text: 'What Are NFTs', link: '/core-concepts/what-are-nfts' },
          { text: 'Multichain NFT Marketplace', link: '/core-concepts/what-multichain-nft-marketplace' },
          {
            text: 'IPFS',
            items: [
              { text: 'What is IPFS', link: '/core-concepts/ipfs/what-is-ipfs' },
              { text: 'Faster IPFS Fetch', link: '/core-concepts/ipfs/ipfs-fetch-faster' },
            ],
          },
          {
            text: 'Polkadot & Kusama',
            items: [
              { text: 'What are Polkadot and Kusama', link: '/core-concepts/polkadot/what-are-polkadot-and-kusama' },
              { text: 'Polkadot NFTs', link: '/core-concepts/polkadot/polkadot-nfts' },
              { text: 'Transfering NFTs via Chains', link: '/core-concepts/polkadot/transfering-nfts-via-chains' },
              {
                text: 'Parachains',
                items: [
                  { text: 'Substrate Parachains', link: '/core-concepts/polkadot/parachains/substrate-parachains' },
                  { text: 'KodaDot Substrate API', link: '/core-concepts/polkadot/parachains/kodadot-substrate-api' },
                ],
              },
            ],
          },
          {
            text: 'Indexer',
            items: [
              { text: 'What is an Indexer', link: '/core-concepts/indexer/what-is-an-indexer' },
              { text: 'KodaDot Indexers', link: '/core-concepts/indexer/kodadot-indexers' },
            ],
          },
        ],
      },
      {
        text: 'Uniquery',
        items: [
          { text: 'Overview', link: '/uniquery/index' },
          { text: 'KodaDot Storefront Fandom', link: '/uniquery/kodadot-storefront-fandom' },
        ],
      },
      {
        text: 'Minimark',
        items: [
          { text: 'Overview', link: '/minimark/index' },
        ],
      },
      {
        text: 'PolySearch',
        items: [
          { text: 'Overview', link: '/polysearch/index' },
        ],
      },
      {
        text: 'Other',
        items: [
          { text: 'Upcoming Features', link: '/other/kodadot-notification-webhook-mailing-custodial-wallet' },
          { text: 'KodaDot PressKit', link: 'https://github.com/kodadot/kodadot-presskit' },
          { text: 'Be part of KodaDot', link: 'https://hello.kodadot.xyz/be-part-of-kodadot/kodadots-programs'}

        ],
      },
    ],
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kodadot/docs' },
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



