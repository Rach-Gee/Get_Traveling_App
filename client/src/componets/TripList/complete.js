import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { COMPLETE_TRIP_UPDATE } from '../../utils/mutations';
import { QUERY_TRIPS } from '../../utils/queries';

import { QUERY_TRIPS, QUERY_ME } from '../../utils/queries';

function CompleteTripUpdate() {

    const [complete, setComplete] = useState('');

    const [updadetComplete, { error }] = useMutation(COMPLETE_TRIP_UPDATE, {
        update(cache, { data: { updadetComplete } }) {
          try {
            const { trip } = cache.readQuery({ query: QUERY_TRIPS });
    
            cache.writeQuery({
              query: QUERY_TRIPS,
              data: { trip: [updadetComplete, ...trip] },
            });
          } catch (e) {
            console.error(e);
          }
    
          // update me object's cache
          const { me } = cache.readQuery({ query: QUERY_ME });
          cache.writeQuery({
            query: QUERY_ME,
            data: { me: { ...me, trips: [...me.trips, updadetComplete] } },
          });
        },
      });
      
    
      const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const { data } = await updadetComplete({
            variables: {
              complete,
            },
          });
    
          setComplete('');
        } catch (err) {
          console.error(err);
        }
      };
    
      const handleChange = (event) => {
        const { complete, value } = event.target;
        if (complete === 'complete') {
            setComplete(value);
        }
      };
    };
    

export default CompleteTripUpdate;