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
    logo: '/KODA_v3.png',
    repo: 'https://github.com/kodadot/nft-gallery',
    repoLabel: 'kodadot/nft-gallery',
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
            link: '/how-to-make-nft.md',
          },
        ],
      },
      {
        text: 'KodaDot',
        children: [
          {
            text: 'Collaborate with us',
            link: '/get_featured.md',
          },
          {
            text: 'Frequently asked questions',
            link: '/faq.md',
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
            text: 'Token $kodao',
            link: '/token/draft.md',
          },
          {
            text: 'Presskit & Logo',
            link: 'https://github.com/kodadot/kodadot-presskit',
          },
          {
            text: 'Writings',
            link: '/writings.md',
          },
          {
            text: 'kodadot.xyz',
            link: 'https://kodadot.xyz'
          }
        ]
      },
      {
        text: 'Incentives',
        children: [
          {
            text: 'Incentives',
            link: '/incentives/incentives.md',
          },
          {
            text: 'Incentivized Bug Reporting',
            link: '/incentives/incentivized-bug-reporting.md',
          },
          {
            text: 'Incentivized Development',
            link: '/developer.md',
          },
          {
            text: 'Incentivized QA',
            link: '/incentives/incentivized-qa.md',
          }
        ]
      },
      {
        text: 'KodaDot Development',
        children: [
          {
            text: 'Why you should contribute to KodaDot?',
            link: '/developer.md',
          },
          {
            text: 'Meta_hours - digest on progress',
            link: '/meta-hours.md',
          },
          {
            text: 'Meta_Hours (GitHub)',
            link: 'https://github.com/kodadot/nft-gallery/discussions/categories/meta-hours'
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
