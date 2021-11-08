import React from "react";
import { Box, Stack, Image } from "@chakra-ui/react"
import plane from '../images/plane.png'

import Auth from '../../utils/auth';

const Header = () => {
  return (
  <div>
  {Auth.loggedIn() ? (
    <>
  <header className="header">
    <Stack 
      spacing={5} 
      direction="row">
        <Image className="bg" src={plane} 
        alt="world map"
        />
      <Box
      >
      <br /> <br /> <br /> <br /> <br /> <br /> 
      <p className="headerFont">~ not all who wander are lost </p>
      </Box>
    </Stack>
    <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
  </header>
  </>
  ) : (
    <p></p>
  )}
  </div>
)};

export default Header;