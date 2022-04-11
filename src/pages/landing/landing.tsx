import React from "react";
import { Box } from "@chakra-ui/react";
import { Intro } from "./sections/intro";
import { About } from "./sections/about";
import { DeadWeightLoss } from "./sections/deadWeightLoss";
import { SlideShow } from "./sections/slideShow";
import { MarketInefficiency } from "./sections/marketInefficiency";
import { PcoRealLife } from "./sections/pcoRealLife";
import background from "../../constants/images/background2.png"

export const Landing = () => {
  return (
    <Box backgroundImage={`url(${background})`}>
      <Intro />
      <About />
      <DeadWeightLoss />
      <SlideShow />
      <MarketInefficiency />
      <PcoRealLife />
    </Box>
  );
};
