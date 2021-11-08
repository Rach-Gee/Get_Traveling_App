import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

import { Checkbox, Box, Heading, } from "@chakra-ui/react"

const TripList = ({
trips,
  title,
  showTitle = true,
}) => {
  if (!trips.length) {
    return <h3>No Trips Yet</h3>;
  }

  return (
    <div>
    {Auth.loggedIn() ? (
      <>
      {trips &&
        trips.map((trip) => (
        <Box
        p={5}
        shadow="md"
        borderWidth="1px"
        borderRadius="md">
          <div key={trip._id} className="card m-2 btn">
          <Checkbox size="lg" >
            <Link
              className="btn btn-primary btn-block"
              to={`/trip/${trip._id}`}
            >
            <Heading size="lg">{trip.name}</Heading>
            </Link>
          </Checkbox>
          </div>
        </Box>
        ))}        
      </>
          ) : (
        <p></p>
      )}
    </div>
  );
};

export default TripList;
