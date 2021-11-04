import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      trip {
        _id
        name
        date
        completed
      }
    }
  }
`;

export const QUERY_TRIPS = gql`
query getTrips {
    trip {
        _id
        name
        date
        completed
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      trip {
        _id
        name
        date
        completed
      }
    }
  }
`;
