import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_ITINERARY } from '../../utils/mutations';
import { QUERY_ITINERARY, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const ItineraryForm = () => {
  const [name, setName] = useState('');

  const [addItinerary, { error }] = useMutation(ADD_ITINERARY, {
    update(cache, { data: { addItinerary } }) {
      try {
        const { itinerary } = cache.readQuery({ query: QUERY_ITINERARY });

        cache.writeQuery({
          query: QUERY_ITINERARY,
          data: { itinerary: [addItinerary, ...itinerary] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, itinerary: [...me.itinerary, addItinerary] } },
      });
    },
  });
  

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addItinerary({
        variables: {
          name,
        },
      });

      setName('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name)
    if (name === 'name') {
      setName(value);
    }
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <h3>Add a leg?</h3>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <input
                name="name"
                placeholder="What are you going?"
                value={name}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></input>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Itinerary
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to add/view your Itinerary. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default ItineraryForm;
