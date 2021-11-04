import React from 'react';
import { useQuery } from '@apollo/client';

import TripList from '../componets/TripList';
import TripForm from '../componets/TripForm';

import { QUERY_TRIPS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_TRIPS);
  const itinerary = data?.itinerary || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <TripForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <TripList
            itinerary={itinerary}
              title="Trips..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;