import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const ItineraryList = ({
itinerary,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!itinerary.length) {
    return <h3>No Itinerary Yet</h3>;
  }

  return (
    <div>
    {Auth.loggedIn() ? (
      <>
      {showTitle && <h3>{title}</h3>}
      {itinerary &&
        itinerary.map((itinerary) => (
          <div key={itinerary._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`${itinerary.name}`}
                >
                  {itinerary.name} from {itinerary.startDate} to {itinerary.endDate}<br />
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{itinerary.details}</p>
            </div>
          </div>
        ))}         
      </>
          ) : (
        <p></p>
      )}
    </div>
  );
};

export default ItineraryList;
