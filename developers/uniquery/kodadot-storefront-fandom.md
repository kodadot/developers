---
title: Fandom
head:
  - - meta
    - name: description
      content: Fandom is a Deno-based app, built with Fresh and powered by Uniquery, showcasing KodaDot's GraphQL API for querying data from the blockchain. Click here to check it out!
---


# Fandom

[Fandom@Github](https://github.com/kodadot/fandom)


# Kodadot Fandom Shop

Built with [Deno](https://deno.land/) and
[Fresh](https://fresh.deno.dev/), powered by [Uniquery](https://github.com/kodadot/uniquery) and deployed to the edge with [Deno Deploy](https://deno.com/deploy).

This app was built for showcasing [Uniquery](https://github.com/kodadot/uniquery), KodaDot's GraphQL API, for querying data from the blockchain. It's a simple shop that uses Uniquery to fetch NFTs from the blockchain via the [SubSquid indexer](http://subsquid.io).

## Screen Shot

![Screen Shot](https://github.com/kodadot/fandom/raw/main/static/screen_shot.png)

## Develop locally

- Clone the repository
- Set up the `CHAIN` variable in the `.env,` follows `.env.example`.
- Start the project in local mode:
  ```bash
  deno task start
  ```

## Deploy to global

Sign in to [dash.deno.com](https://dash.deno.com), create a new project, and then link to your clone repository version. Please ensure add `CHAIN.` variable:

![Screen Shot 2](https://github.com/kodadot/fandom/raw/main/static/screen_shot_2.png)