import React from "react";
import { Box } from "@chakra-ui/react";
import { Intro } from "./sections/intro";
import { About } from "./sections/about";
import { DeadWeightLoss } from "./sections/deadWeightLoss";
import { MarketInefficiency } from "./sections/marketInefficiency";
export const Landing = () => {
  return (
    <Box>
      <Intro />
      <About />
      <DeadWeightLoss />
      <MarketInefficiency />
    </Box>
  );
};
