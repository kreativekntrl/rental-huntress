import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($email: String!, $password: String!) {
    createUser(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const ADD_FAVORITE = gql`
  mutation addFavorite($id: ID!) {
    addFavorite(_id: $id) {
      _id
      email
      favorites {
        cityName
        descr
        _id
        price
        rentalImg
      }
    }
  }
`;

export const REMOVE_FAVORITE = gql`
  mutation removeFavorite($id: ID!) {
    removeFavorite(_id: $id) {
      _id
      email
      favorites {
        cityName
        descr
        _id
        price
        rentalImg
      }
    }
  }
`;
