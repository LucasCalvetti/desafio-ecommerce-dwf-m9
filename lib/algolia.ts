import algoliasearch from "algoliasearch";

const client = algoliasearch(process.env.ALGOLIA_DB_ID, process.env.ALGOLIA_API_KEY);
export const productsIndex = client.initIndex("products");
