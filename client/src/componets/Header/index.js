import React from "react";
import { Box, Stack, Image } from "@chakra-ui/react"
import plane from '../images/plane.png'

const Header = () => (
  <header>
    <Stack 
      spacing={5} 
      direction="row">
        <Image src={plane} 
        alt="world map"
        />
      <Box
      >
      <br /> <br /> <br /> <br /> <br /> <br /> 
      <p className="headerFont">~ not all who wander are lost </p>
      </Box>
    </Stack>
  </header>
);

export default Header;