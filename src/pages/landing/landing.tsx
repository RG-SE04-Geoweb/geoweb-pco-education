import React from "react";
import { Box } from "@chakra-ui/react";
import { Header } from "../../components/header";
import { Intro } from "./sections/intro";
import { About } from "./sections/about";

export const Landing = () => {
  return (
    <Box>
      <Header />
      <Intro />
      <About />
    </Box>
  );
};
