import React from "react";
import { Box } from "@chakra-ui/react";
import { Intro } from "./sections/intro";
import { DeadWeightLoss } from "./sections/deadWeightLoss";
import { SlideShow } from "./sections/slideShow";
import { MarketInefficiency } from "./sections/marketInefficiency";
import { PcoRealLife } from "./sections/pcoRealLife";

export const Landing = () => {
  return (
    <Box >
      <Intro />
      <DeadWeightLoss />
      <SlideShow />
      <MarketInefficiency />
      <PcoRealLife />
    </Box>
  );
};
