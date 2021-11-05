import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TRIP = gql`
  mutation addTrip($name: String!) {
    addTrip(name: $name) {
      _id
      name
      completed
    }
    itinerarys {
      _id
      name
      completed
      date
      details
}
  }
`;

export const ADD_ITINERARY = gql`
  mutation addItinerary($tripId: ID!, $name: String!) {
    addItinerary(tripId: $tripId, name: $name) {
      _id
      name
      completed
      comments {
        _id
        name
        completed
        date
        details
      }
    }
  }
`;



