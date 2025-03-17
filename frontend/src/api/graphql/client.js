import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_STRAPI_URL + "/graphql",
    cache: new InMemoryCache(),  
    credentials: 'same-origin',
    headers:{
      'Authorization': `Bearer ${process.env.NEXT_STRAPI_BEARER_TOKEN}`
    }  
  });
  
export default client