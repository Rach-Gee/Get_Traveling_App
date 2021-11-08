import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

import { Checkbox, CheckboxGroup } from "@chakra-ui/react"

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
      {showTitle && <h3>{title}</h3>}
      {trips &&
        trips.map((trip) => (
          <div key={trip._id} className="card m-2 p-5 btn">
          <Checkbox size="lg" >
            <Link
              className="btn btn-primary btn-block"
              to={`/trip/${trip._id}`}
            ><p>{trip.name}</p>
            </Link>
          </Checkbox>
          </div>

        ))}         
      </>
          ) : (
        <p></p>
      )}
    </div>
  );
};

export default TripList;
