---
title: Polysearch
head:
  - - meta
    - name: description
      content: Polysearch is a tool for searching collections and NFTs across KodaDot. Learn more.
---


# Polysearch

[Github](https://github.com/kodadot/workers/tree/main/polysearch)

Polysearch is a tool for searching collections and NFTs across KodaDot.
Written in alha D1 Cloudflare Workers, it is a serverless, distributed.

### API

API has basically `/search` endpoint available for `GET` and `POST` requests.

- GET `/search?/search?table=collections&q=sub0&limit=2`
- POST `/search`
  - body: `{ table: 'collections', search: 'sub0', limit: 2 }`

Available fields:

```ts
export type SearchQuery = {
  table: 'collections' | 'items'
  search: string
  chain?: string
  limit: number
  offset: number
}
```


### Development

1. Install wrangler and dependencies

```bash
npm install;
npm install -g wrangler
```

2. init database 
```bash
wrangler d1 execute search --local --file=./schema.sql
```

> Note: that `search` is name of the database


3. run local server
```bash
wrangler dev --local --persist
```

Your worker will run at `http://localhost:8787/`

