module.exports = {
  title: 'KodaDot Documentation',
  description: 'Better understanding KodaDot NFT marketplace',
  plugins: [
    [
      '@vuepress/plugin-search',
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
    navbar: [
      {
        text: 'Overview',
        children: [
          {
            text: 'Who We Are',
            link: '',
          },
          {
            text: 'Tokens',
            link: '/token/draft.md',
          },
          {
            text: 'Frequently Asked Questions',
            link: '/FAQ.md',
          },
        ]
      },
      {
        text: 'Contribute',
        children: [
          {
            text: 'Why Contribute?',
            link: '/developer.md',
          },
          {
            text: 'Installation',
            link: '/first_time.md',
          },      
          {
            text: 'Contributing Guidelines',
            link: 'https://github.com/kodadot/nft-gallery/blob/main/CONTRIBUTING.md'
          },
          {
            text: 'Code of Conduct',
            link: 'https://github.com/kodadot/nft-gallery/blob/main/CODE_OF_CONDUCT.md)'
          },
        ]
      },
      {
        text: 'Find Us',
        children: [
          {
            text: 'Kodadot',
            link: 'https://kodadot.xyz',
          },
          {
            text: 'Discord',
            link: 'https://discord.gg/kodadot',
          },
          {
            text: 'Twitter',
            link: 'https://twitter.com/kodadot',
          },
        ]
      }
    ],
  },
}
