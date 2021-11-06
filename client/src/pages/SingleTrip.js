import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import TripList from '../componets/ItineraryList';
import TripForm from '../componets/ItineraryForm';

import { QUERY_SINGLE_TRIP } from '../utils/queries';

const SingleTrip = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { tripId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_TRIP, {
    // pass URL parameter
    variables: { tripId: tripId },
  });

  const trip = data?.trip || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {trip.name} <br />
        <span style={{ fontSize: '1rem' }}>
          Legs... {trip.name}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {trip.name}
        </blockquote>
      </div>      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <TripForm tripID={trip._id} />
      </div>
      <div className="my-5">
        <TripList itinaray={trip.itinaray} />
      </div>
    </div>
  );
};

export default SingleTrip;