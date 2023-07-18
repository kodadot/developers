import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Polkadot NFTs Insights",
  description: "NFT insights by KodaDot",
  appearance: false,
  
  head: [
    [
      'meta',
      { property: 'og:type', content: 'website' }
    ],
    [
      'meta',
      { property: 'og:title', content: 'Polkadot NFTs Insights' }
    ],
    // [
    //   'meta',
    //   { property: 'og:image', content: 'https://developers.kodadot.xyz/developers-cover.png' }
    // ],
    [
      'meta',
      { property: 'og:description', content: 'Polkadot NFT Insights by KodaDot' }
    ],
    [
      'meta',
      { property: 'og:url', content: 'https://nftinsights.kodadot.xyz/' }
    ],
    [
      'meta',
      { name: 'twitter:card', content: 'summary_large_image' }
    ]
  ],
  
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'RMRK2', link: '/kusama-relay-chain-rmrk2-nfts' },
      { text: 'Kusama Assets Hub', link: '/kusama-assets-hub' },
      { text: 'Data Dump', link: '/nft-data' },
      { text: 'Swag shop', link: 'https://shop.kodadot.xyz' },
      { text: 'NFT marketplace', link: 'https://kodadot.xyz' },
    ],
    
    sidebar: [
      {
        text: 'Polkadot NFTs ',
        items: [
          { text: 'Kusama NFTs - RMRK2', link: '/kusama-relay-chain-rmrk2-nfts' },
          { text: 'Kusama Assets Hub', link: '/kusama-assets-hub' },
          { text: 'Basilisk NFTs', link: '/basilisk-nfts' },
          { text: 'Data Dump', link: '/nft-data' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kodadot/developers' },
      { icon: 'github', link: 'https://github.com/kodadot/nft-gallery' },
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
