import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "KodaDot developers",
  description: "One Stop Shop for Polkadot NFTs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Swag shop', link: 'https://shop.kodadot.xyz' },
      { text: 'NFT marketplace', link: 'https://kodadot.xyz'},
    ],

    sidebar: [
      {
        text: 'KodaDot builders tech stack',
        items: [
          { text: 'Sub-Api', link: '/kodadot-substrate-api-sub-api' },
          { text: 'Uniquery', link: '/kodadot-api-uniquery' },
          { text: 'Minimark', link: '/kodadot-minter-minimark'},
          { text: 'PolySearch', link: '/kodadot-search-polysearch'},
          { text: 'Fandom', link: '/kodadot-storefront-fandom'}
        ]
      },
      {
        text: 'Funding your hack',
        items: [
          { text: 'Grants', link: 'https://github.com/kodadot/grants'}
        ]
      },
      {
        text: 'Branding Kit',
        items: [
          { text: 'KodaDot PressKit', link: 'https://github.com/kodadot/kodadot-presskit' }
        ]
      },
      {
        text: 'Learn more about KodaDot',
        items: [
          { text: 'Hello', link: 'https://hello.kodadot.xyz' },
          { text: 'Be part of KodaDot', link: 'https://hello.kodadot.xyz/be-part-of-kodadot/kodadots-programs'}
        ]
      }
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