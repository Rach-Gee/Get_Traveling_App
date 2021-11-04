const { gql } = require('apollo-server-express');

const typeDefs = gql`
scalar Date

type User {
    _id: ID
    username: String
    email: String
    password: String
    trips: [Trip]!
  }

  type Trip {
    _id: ID
    name: String
    date: Date
    completed: Boolean
    itinerary: [Itinerary]!
  }

  type Itinerary {
    _id: ID
    name: String
    completed: Boolean
    date: Date
    details: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    trips(username: String): [Trip]
    trip(tripsId: ID!): Trip
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addTrip(name: String!): Trip
    addItinerary(
      name: String!
      completed: Boolean!
      date: Date!
      details: String!
      trip: ID!
    ): Itinerary
    removeTrip(tripsId: ID!): Trip
    removeItinerary(itineraryId: ID!): Itinerary
  }
`;

module.exports = typeDefs;
