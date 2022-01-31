module.exports = {
  title: 'KodaDot Documentation',
  description: 'Better understanding KodaDot',
  public: 'docs/assets',
  themeConfig: {
    navbar: [
      {
        text: 'How to get started',
        children: [
          'how_to_create_wallet.md', 
          'minting.md',
          'how_to_top_up_wallet.md',
          'FAQ.md'
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
        ]
      },
      {
        text: 'KodaDot Developer',
        children: [ 
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
          }
        ]
      }
    ],
  },
}
