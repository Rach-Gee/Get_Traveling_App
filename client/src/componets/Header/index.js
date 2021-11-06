import React from "react";
import { Heading, Box } from "@chakra-ui/react"



const Header = () => (
  <header>
    <Box 
        w="100%"
        h="200px"
        bgGradient={[
          "linear(to-tr, teal.300, yellow.400)",
          "linear(to-t, blue.200, teal.500)",
          "linear(to-b, orange.100, purple.300)",
        ]}
     >
      <Heading 
        size="lg" 
        fontSize="50px" 
        pt='50'
        color="tomato" 
        textAlign="center"> 
        The World is Colourful When You Travel 
      </Heading>
    </Box>



  <br />
  </header>
);

export default Header;