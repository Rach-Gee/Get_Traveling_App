import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './componets/Header';
import Footer from './componets/Foooter';
import Home from './pages/Home';
import Itinerary from './pages/Itinerary';
import Login from './pages/Login';
import Signup from './pages/SignUp'
import SingleTrip from './pages/SingleTrip'

import { ChakraProvider } from "@chakra-ui/react"


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App( Component ) {
  return (
  <ApolloProvider client={client}>
           <ChakraProvider>
    <Router>
    <div className="flex-column justify-flex-start min-100-vh">
      <Header />
      <div className="container">
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/itinerary">
          <Itinerary />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/trip/:tripId">
          <SingleTrip />
        </Route>
        </div>
          <Footer />
        </div>
      </Router>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;