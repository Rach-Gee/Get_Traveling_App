import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      trips {
        _id
        name
        completed
      }
    }
  }
`;

export const QUERY_TRIPS = gql`
query getTrips {
    trips {
        _id
        name
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
      trips {
        _id
        name
        completed
      }
    }
  }
`;

export const QUERY_ITINERARY = gql`
query getItinerary {
    interary {
        _id
        name
        completed
        date
        details
    }
  }
`;

export const QUERY_SINGLE_TRIP = gql`
  query getSingleTrip($tripId: ID!) {
    thought(tripId: $tripId) {
      _id
      name
      completed
      interary {
        _id
        name
        completed
        date
        details
      }
    }
  }
`;