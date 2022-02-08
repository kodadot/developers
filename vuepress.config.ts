module.exports = {
  title: 'KodaDot Documentation',
  description: 'Better understanding KodaDot',
  public: 'docs/assets',
  themeConfig: {
    navbar: [
      {
        text: 'How to get started',
        children: [
          { 
            text: 'How to create wallet', 
            link: '/tutorials_ss/how_to_create_wallet.md' 
          },
          { 
            text: 'How to mint', 
            link: '/tutorials_ss/how_to_mint.md' 
          },
          { 
            text: 'How to top up your wallet',
            link: '/tutorials_ss/how_to_create_wallet.md' 
          },
          'FAQ.md',
        ],
      },
      {
        text: 'KodaDot',
        children: [
          {
            text: 'kodadot.xyz',
            link: 'https://kodadot.xyz'
          },
          {
            text: 'Discord',
            link: 'https://discord.gg/kodadot',
          },
          {
            text: 'Twitter',
            link: 'https://twitter.com/kodadot',
          },
          {
            text: 'Meta_Hours',
            link: 'https://github.com/kodadot/nft-gallery/discussions/categories/meta-hours'
          },
          {
            text: 'Presskit & Logo',
            link: 'https://github.com/kodadot/kodadot-presskit',
          },
        ]
      },
      {
        text: 'KodaDot Developer',
        children: [
          'developer.md',
          'meta_hours.md',
          { 
            text: 'kodadot/nft-gallery/issues',
            link: 'https://github.com/kodadot/nft-gallery/issues'
          },
          {
            text: 'kodadot/nft-gallery/pulls',
            link: 'https://github.com/kodadot/nft-gallery/pulls' 
          },
          {
            text: 'kodadot/nft-gallery/code',
            link: 'https://github.com/kodadot/nft-gallery'
          },
          {
            text: 'Learn more about contributing',
            link: 'https://github.com/kodadot/nft-gallery/blob/main/CONTRIBUTING.md'
          },
        ]
      }
    ],
  },
}
