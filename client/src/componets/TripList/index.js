import React from 'react';
import { Link } from 'react-router-dom';

const TripList = ({
trips,
  title,
  showTitle = true,
  showUsername = true,
}) => {
//   if (!trips.length) {
//     return <h3>No Trips Yet</h3>;
//   }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {trips &&
        trips.map((trip) => (
          <div key={trip._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${trip.name}`}
                >
                  {trip.name} <br />
                  <span style={{ fontSize: '1rem' }}>
                    leaving on {trip.date}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                  leaving on {trip.date}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{trip.name}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/trip/${trip._id}`}
            >
            </Link>
          </div>
        ))}
    </div>
  );
};

export default TripList;
