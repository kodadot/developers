# docs
We need to document our KodaDot engine running at https://kodadot.xyz with repository at https://github.com/kodadot/nft-gallery/
It's accessible at https://docs.kodadot.xyz


### Requirements
- Having GIT client, we reccomend using [Github Desktop](https://desktop.github.com/)
- Installed [NodeJs](https://nodejs.org/en/), we reccomend to use LTS version

### To run it locally

- clone git repository locally, best through Github Desktop
  - OR in command line, run `git@github.com:kodadot/docs.git` 
- enter directory `docs/`
- in command line run commands bellow

```bash
yarn
yarn docs:dev
```

- Then navigate to the https://localhost:8080 
- You'll see preview of your current **docs** running

### How to Edit
- Anytime you edit **\*.md** file, hit save and you should see new rendered version in your browser

#### Deployment
```bash
yarn docs:build
```

# How to add and modify?

Learn at https://v2.vuepress.vuejs.org/guide/markdown.html



### Migration KodaDot knowledge base from other sources
Our old resources to be migrated here

- https://kodadot.gitbook.io/
- https://github.com/kodadot/nft-gallery/wiki
