import React, { useState } from 'react';
import Nav from './Navigation';
import Login from '../pages/Login';
import Footer from './Footer';
import Header from "./Header";
// import Portfolio from './pages/Portfolio';
// import ContactMe from './pages/ContactMe';
// import Resume from './pages/Resume';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('#login');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    // if (currentPage === 'Portfolio') {
    //   return <Portfolio />;
    // }
    // if (currentPage === 'ContactMe') {
    //   return <ContactMe />;
    // }
    // if (currentPage === 'Resume') {
    //   return <Resume />;
    // }
     return <Login />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}
