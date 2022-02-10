module.exports = {
  title: 'KodaDot Documentation',
  description: 'Better understanding KodaDot',
  public: 'docs/assets',
  themeConfig: {
    navbar: [
      {
        text: 'Tutorials',
        children: [
          { 
            text: 'Creating a wallet', 
            link: '/tutorials/how_to_create_wallet.md' 
          },
          { 
            text: 'Minting', 
            link: '/tutorials/how_to_mint.md' 
          },
          { 
            text: 'Adding $KSM to your wallet',
            link: '/tutorials/how_to_create_wallet.md' 
          },
          {
            text: 'Filing bug report',
            link: '/tutorials/how_to_bug_report.md'
          },
          {
            text: 'Airdroping nfts',
            link: '/tutorials/how_to_airdrop.md'
          },
          {
            text: 'NFTs from scrach',
            link: 'how-to-make-nft.md',
          },
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
            text: 'Meta_Hours (GitHub)',
            link: 'https://github.com/kodadot/nft-gallery/discussions/categories/meta-hours'
          },         
          {
            text: 'Meta_hours dedicated page',
            link: 'meta_hours.md',
          },
          {
            text: 'Presskit & Logo',
            link: 'https://github.com/kodadot/kodadot-presskit',
          },
          {
            text: 'Writings',
            link: 'writings.md',
          },
          {
            text: 'Frequently asked questions',
            link: 'faq.md',
          },
        ]
      },
      {
        text: 'KodaDot Developer',
        children: [
          {
            text: 'Why you should contribute to KodaDot?',
            link: 'developer.md',
          },
          {
            text: 'Meta_hours - bi-weekly digest of development progress',
            link: 'meta_hours.md',
          },
          { 
            text: 'nft-gallery/issues',
            link: 'https://github.com/kodadot/nft-gallery/issues'
          },
          {
            text: 'nft-gallery/pulls',
            link: 'https://github.com/kodadot/nft-gallery/pulls' 
          },
          {
            text: 'nft-gallery/code',
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
