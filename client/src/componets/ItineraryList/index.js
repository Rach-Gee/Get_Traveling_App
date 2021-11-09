import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const ItineraryList = ({
itinerary,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  // function getDateFromstring(){
  //   return itinerary.startDate.split('T').slice(-1)[0]
  // }


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
          <div key={itinerary._id} className="card ml-5 mr-5">
            <h4 className="card-header p-2 m-0">
              {showUsername ? (
                <div
                  className=""
                  to={`${itinerary.name}`}
                >
                  {itinerary.name} from {itinerary.startDate} to {itinerary.endDate}<br />
                </div>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                  </span>
                </>
              )}
            </h4>
            <div className="card-body p-2">
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
