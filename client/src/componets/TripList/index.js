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
    <div className="col-12 ">
      <div className="row ">
    {Auth.loggedIn() ? (
      <>
      {trips &&
        trips.map((trip) => (
        <Box
        className="tripCard1"
        shadow="2xl"
        borderWidth="1px"
        borderRadius="md">
          <div key={trip._id} className="tripCard m-5 btn">
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
    </div>
  );
};

export default TripList;
