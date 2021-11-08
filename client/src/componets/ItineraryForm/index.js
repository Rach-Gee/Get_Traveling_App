import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_ITINERARY } from '../../utils/mutations';
import { QUERY_ITINERARY, QUERY_ME } from '../../utils/queries';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Auth from '../../utils/auth';

const ItineraryForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [endDate, setEndDate] = useState(new Date());

  const location = useLocation();

  function getTripIdFromUrl(){
    return location.pathname.split('/').slice(-1)[0]
  }

  const [addItinerary, { error }] = useMutation(ADD_ITINERARY)

  // TODO: FIX THIS!
  // const [addItinerary, { error }] = useMutation(ADD_ITINERARY, {
  //   update(cache, { data: { addItinerary } }) {
  //     try {
  //       const itinerary  = cache.readQuery({ query: QUERY_ITINERARY }) || {};
        

  //       cache.writeQuery({
  //         query: QUERY_ITINERARY,
  //         data: { itinerary: [addItinerary, ...itinerary] },
  //       });
  //     } catch (e) {
  //       console.error(e);
  //     }

  //     // update me object's cache
  //     const { me } = cache.readQuery({ query: QUERY_ME });
  //     cache.writeQuery({
  //       query: QUERY_ME,
  //       data: { me: { ...me, itinerary: [...me.itinerary, addItinerary] } },
  //     });
  //   },
  // });
  

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addItinerary({
        variables: {
          startDate,
          endDate,
          name,
          details,
          completed: false,
          trip: getTripIdFromUrl(),
        },
      });

      setName('');
      setStartDate('');
      setEndDate('');
      setDetails('');
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

  const handleChange1 = (event) => {
    const { name, value } = event.target;
    console.log('value', value)
    console.log(event.target);
    console.log(details)
    if (name === 'details') {
      setDetails(value);
    }
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              {/* <input onInput= /> */}
              <input
                name="name"
                placeholder="Title?"
                value={name}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></input>
            </div>

            <div className="col-12 col-lg-9">
              <input
                name="details"
                placeholder="Description?"
                value={details}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onInput={handleChange1}
              ></input>
            </div>

            <div className="col-12 col-lg-9">
            <div> 
              <p> Date From </p>
                <DatePicker
                  selected={startDate}
                  className="form-input w-100"
                  selectsStart
                  startDate={startDate}
                  endDate={endDate} // add the endDate to your startDate DatePicker now that it is defined
                  onChange={date => setStartDate(date)}
                />
                <p> Date To </p>
                <DatePicker
                  selected={endDate}
                  className="form-input w-100"
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  onChange={date => setEndDate(date)}
                />
              </div>
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
