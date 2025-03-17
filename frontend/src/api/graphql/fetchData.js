import client from "./client";
import { GET_CARD_DATA, GET_DATA, GET_HEADING_DATA } from "./queries";

export default async function fetchData() {
  try {
    const [teasersResponse, cardResponse, headingResponse] = await Promise.all([
      client.query({ query: GET_DATA, fetchPolicy: "no-cache" }),
      client.query({
        query: GET_CARD_DATA,
        fetchPolicy: "no-cache",
      }),
      client.query({ query: GET_HEADING_DATA, fetchPolicy: "no-cache" }),
    ]);

    return {
      teasersData: teasersResponse.data || [],
      cardData: cardResponse.data.card || {},
      headingData: headingResponse.data.heading || [],
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { teasersData: [], cardData: {} };
  }
}
