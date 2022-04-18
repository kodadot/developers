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
            text: 'Adding funds to your wallet', 
            link: '/tutorials/how-to-top-up-wallet.md' 
          },
          {
            text: 'Airdroping nfts',
            link: '/tutorials/how-to-airdrop.md'
          },
          {
            text: 'Buying NFTs from iOS device',
            link: '/tutorials/how-to-kodadot-phone-ios.md',
          },
          { 
            text: 'Creating a wallet', 
            link: '/tutorials/how-to-create-wallet.md' 
          },
          {
            text: 'Filing bug report',
            link: '/tutorials/how-to-bug-report.md'
          },
          {
            text: 'Fixing keypair error',
            link: '/tutorials/how-to-fix-error-keypair.md',
          },
          { 
            text: 'Minting', 
            link: '/tutorials/how-to-mint.md' 
          },
          {
            text: 'NFTs from scratch',
            link: '/how-to-make-nft.md',
          },
          {
            text: 'Translating KodaDot via Github',
            link: '/tutorials/language-translations.md',
          },
        ],
      },
      {
        text: 'KodaDot',
        children: [
          {
            text: 'Kodadot.xyz',
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
          {
            text: 'Presskit & Logo',
            link: 'https://github.com/kodadot/kodadot-presskit',
          },
          {
            text: 'Ambassador Program',
            link: '/ambassador-program/ambassador-intro.md',
          },
          {
            text: 'Collaboration with Artists',
            link: '/get-featured.md',
          },
          {
            text: 'Frequently asked questions',
            link: '/faq.md',
          },
          {
            text: 'Token $kodao',
            link: '/token/draft.md',
          },
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
          },
          {
            text: 'Translating KodaDot',
            link: '/incentives/translating-kodadot.md',
          },
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
