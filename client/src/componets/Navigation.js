import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Nav({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#login"
          onClick={() => handlePageChange('Login')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Login"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
        >
          Login
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#trips"
          onClick={() => handlePageChange('Trips')}
          // Check to see if the currentPage is `portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Trips' ? 'nav-link active' : 'nav-link'}
        >
          Trips
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#itinerary"
          onClick={() => handlePageChange('Itinerary')}
          // Check to see if the currentPage is `contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Itinerary' ? 'nav-link active' : 'nav-link'}
        >
          Itinerary
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#signup"
          onClick={() => handlePageChange('SignUp')}
          // Check to see if the currentPage is `resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'SignUp' ? 'nav-link active' : 'nav-link'}
        >
          SignUp
        </a>
      </li>
    </ul>
  );
}

export default Nav;