const { AuthenticationError } = require('apollo-server-express');
const { Itinerary, Trips, User } = require('../models');
const { signToken } = require('../utils/auth');
const { GraphQLScalarType } = require('graphql');

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  parseValue(value) {
    return new Date(value);
  },
  serialize(value) {
    return value.toISOString();
  },
})

const resolvers = {
  Date: dateScalar,

  Query: {
    users: async () => {
      return User.find().populate('trips');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('trips');
    },
    trips: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Trips.find(params);
    },
    trip: async (parent, { tripsId }) => {
      return Trips.findOne({ _id: tripsId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('trips');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addTrip: async (parent, { name }, context) => {
      if (context.user) {
        const trip = await Trips.create({
          name,
        });
            console.log(trip)
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { trips: trip._id } }
        );
        return trip;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addItinerary: async (parent, { name, completed, date, details }, context) => {
      if (context.user) {
        return Itinerary.findOneAndUpdate(
          { _id: tripsId },
          {
            $addToSet: {
              itinerary: { name, completed, date, details },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeTrip: async (parent, { tripsId }, context) => {
      if (context.user) {
        const trips = await Trips.findOneAndDelete({
          _id: tripsId,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { trips: trips._id } }
        );

        return trips;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeItinerary: async (parent, { tripsId, itineraryId }, context) => {
      if (context.user) {
        return Trips.findOneAndUpdate(
          { _id: tripsId },
          {
            $pull: {
              itinerary: {
                _id: itineraryId,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers 
