import { gql } from "@apollo/client";

export const ME = gql`
  query getMe {
    me {
      _id
      email
      favorites
    }
  }
`;
export const GET_RENTALS = gql`
  query getRentals {
    rentals {
      _id
      cityName
      descr
      price
      rentalImg
    }
  }
`;
