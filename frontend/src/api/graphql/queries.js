import { gql } from "@apollo/client";

const GET_DATA = gql`
  query {
    teasers {
      heading
      description
      buttontext
      bannerImage {
        url
      }
    }
  }
`;

const GET_CARD_DATA = gql`
  query {
    card{
      adityaCardComponent {
        cardTitle
        cardDescription
      }
    }
  }
`;

const GET_HEADING_DATA = gql`
  query {
    heading {
      Heading {
        headingtext
        description
        Texttype
        headingboldtype
      }
    }
  }
`;

export {GET_HEADING_DATA, GET_DATA, GET_CARD_DATA}
