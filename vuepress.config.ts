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
            text: 'Adding funds to your wallet', 
            link: '/tutorials/how_to_top_up_wallet.md' 
          },
          { 
            text: 'Minting', 
            link: '/tutorials/how_to_mint.md' 
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
            text: 'NFTs from scratch',
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
            text: 'Meta_hours',
            link: 'meta-hours.md',
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
            text: 'Collaborate with us',
            link: 'get_featured.md',
          },
          {
            text: 'Frequently asked questions',
            link: 'faq.md',
          },
        ]
      },
      {
        text: 'KodaDot Development',
        children: [
          {
            text: 'Why you should contribute to KodaDot?',
            link: 'developer.md',
          },
          {
            text: 'Incentives to participate',
            link: 'incentives.md',
          },
          {
            text: 'Meta_hours - digest on progress',
            link: 'meta-hours.md',
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
