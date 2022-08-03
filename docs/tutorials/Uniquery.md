**Uniquery Documentation V1**

KodaDot now has its’ own graphQL builder for our Subquery and SubSquid! !

The queries we now support are:

- nftById 
- nftListByOwner 
- nftListByIssuer 
- nftListCollectedBy
- nftListSoldBy 
- nftListByCollectionId
- nftListForSale
 - collectionById 
- collectionListByOwner 
- collectionListByIssuer

Since queries in Subquery and SubSquid are written a bit differently, you can see the variables and parameters for each queries in the SubqueryClient.ts and SquidClient.ts files!

We’ve made the queries as easy as possible for new developers to read, but to familiarise yourself with it, let’s go through one query:  collectionListByIssuer


In this tutorial, we will be using the Fetch API to send our query object! Here’s a playground you can test your endpoints with! https://graphqlbin.com/
