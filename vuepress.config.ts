import { defineUserConfig } from '@vuepress/cli'
import { socialSharePlugin } from 'vuepress-plugin-social-share'

module.exports = {
  title: ' ',
  description: ' ',
  plugins: [
    [
      '@vuepress/plugin-search',
      [socialSharePlugin({
        networks: [`twitter`, `facebook`, `email`, `pinterest`, `linkedin`],
        fallbackImage: `/koda-v3.png`,
        autoQuote: true,
        isPlain: true,
      })],
      { 
        maxSuggestions: 10,
        locales: {
          '/': {
            placeholder: 'Search',
          },
        },
      },
    ],
  ],
  public: 'docs/assets',
  themeConfig: {
    logo: '/koda-v3.png',
    repoLabel: 'kodadot/nft-gallery',
    navbar: [
      {
        
        text: 'Who We Are',
        children: [
          {
            text: 'What is KodaDot?',
            link: '/README.md',
          },
          {
            text: 'How it all Started',
            link: '/beginning.md',
          },
          {
            text: 'Tokens',
            link: '/token/draft.md',
          },
          {
            text:'Tutorials',
            link: '/tutorial-overview.md',
          },
          {
            text: 'Frequently Asked Questions',
            link: '/faq.md',
          },
        ]
      },
         
      {
        text: 'Get Involved',
        children: [
          {
            text: 'Why Should You Contribute?',
            link: '/why-contrib.md'
          },
          {
            text: 'Contributing for Developers',
            link: '/contrib-devs.md'
          },
          {
            text: 'Contributing for Creators',
            link: '/contrib-artists.md'
          },         
          { 
            text: 'Contributing for Helpers',
            link: '/contrib-helpers.md'
          },
          {
            text: 'Ambassador Program',
            link: '/ambassador-program/ambassador-intro.md' 
          },
          {
            text:'Join Us!',
            link: '/hiring.md',
          },
          {
            text:'Resources',
            link: '/resources.md',
          },
        ]
      },

      {
        text: 'Find Us!',
        children: [
          {
            text: 'Kodadot',
            link: 'https://kodadot.xyz',
          },
          {
            text: 'Github',
            link: 'https://github.com/kodadot',
          },
          {
            text: 'Twitter',
            link: 'https://twitter.com/kodadot',
          },
          {
            text: 'Discord',
            link: 'https://discord.gg/kodadot',
          },
          {
            text: 'Instagram',
            link: 'https://www.instagram.com/kodadot.xyz/'
          },
          {
            text: 'Medium',
            link: 'https://medium.com/kodadot'
          },
          {
            text: 'Presskit & Logo',
            link: 'https://github.com/kodadot/kodadot-presskit',
          },
        ]
      }

    ],
  },
}
