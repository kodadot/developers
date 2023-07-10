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
      hostname: 'https://howtonft.guide/'
    })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    links.forEach((link) => sitemap.write(link))
    sitemap.end()
    await new Promise((r) => writeStream.on('finish', r))
  },

  lastUpdated: true,
  title: "How To NFT Guide",
  description: "A comprehensive guide into world of NFTs",
  head: [
    [
      'meta',
      { property: 'og:type', content: 'website' }
    ],
    [
      'meta',
      { property: 'og:title', content: 'How to create and buy NFTs' }
    ],
    [
      'meta',
      { property: 'og:image', content: 'https://howtonft.guide/howtonft_waifu.jpg' }
    ],
    [
      'meta',
      { property: 'og:description', content: 'Comprehensive guide to understand NFT ecosystem' }
    ],
    [
      'meta',
      { property: 'og:url', content: 'https://howtonft.guide' }
    ],
    [
      'meta',
      { name: 'twitter:card', content: 'summary_large_image' }
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.ico',
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Be mindful which NFTs you are accumulating ',
      copyright: 'Copyright © 2023-present Degenerative NFT holders'
    },
    nav: [
      { text: 'Get Started', link: '/how-to-create-nfts.md' },
      { text: 'NFT Merchandise Shop', link: 'https://shop.kodadot.xyz' },
      { text: 'NFT marketplace', link: 'https://kodadot.xyz' },
    ],

    sidebar: [
      {
        text: 'How to Create NFTs',
        link: '/how-to-create-nfts.md',
        collapsed: false,
        // items: [
        //   { text: '❓ What Is Kodadot', link: '/get-started/kodadot-who' },
        //   { text: '📚 Before You Get Started', link: '/get-started/before-you-get-started' },
        //   { text: '🌐 Learn More about KodaDot', link: 'https://hello.kodadot.xyz' },
        // ],
      },
      {
        text: 'How to Buy NFTs',
        link: '/how-to-buy-nfts.md',
        collapsed: false,
        // items: [
        //   { text: '❓ What Is Kodadot', link: '/get-started/kodadot-who' },
        //   { text: '📚 Before You Get Started', link: '/get-started/before-you-get-started' },
        //   { text: '🌐 Learn More about KodaDot', link: 'https://hello.kodadot.xyz' },
        // ],
      },
    ],

    socialLinks: [
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path fill="currentColor" d="M470.435 45.423L16.827 221.249c-18.254 8.188-24.428 24.585-4.412 33.484l116.37 37.173l281.368-174.79c15.363-10.973 31.091-8.047 17.557 4.024L186.053 341.075l-7.591 93.076c7.031 14.371 19.905 14.438 28.117 7.295l66.858-63.589l114.505 86.187c26.595 15.826 41.066 5.613 46.788-23.394l75.105-357.47c7.798-35.705-5.5-51.437-39.4-37.757z"/></svg>'
        },
        link: 'https://t.me/kodadot_eco'
      },
    ]
  }
})