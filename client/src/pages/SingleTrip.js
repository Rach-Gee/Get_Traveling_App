import React from 'react';
import { Link } from 'react-router-dom';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import ItineraryList from '../componets/ItineraryList';
import ItineraryForm from '../componets/ItineraryForm';

import { QUERY_SINGLE_TRIP } from '../utils/queries';

const SingleTrip = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { tripId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_TRIP, {
    // pass URL parameter
    variables: { tripsId: tripId },
  });

  const trip = data?.trip || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="">
        {trip.name} <br />
        <span style={{ fontSize: '1rem' }}>
          {trip.name}
        </span>
      </h3>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <ItineraryForm tripID={trip._id} />
      </div>
      <div className="my-5">
        <ItineraryList itinerary={trip.itinerary} />
      </div>
    </div>
  );
};

export default SingleTrip;