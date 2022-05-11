import React from "react";
import { Box } from "@chakra-ui/react";
import { Intro } from "./sections/intro";
import { DeadWeightLoss } from "./sections/deadWeightLoss";
import { DeadWeightLossTriangle } from "./sections/deadWeightLossTriangle";
// import { SlideShow } from "./sections/slideShow";
import { MarketInefficiency } from "./sections/marketInefficiency";
import { PcoRealLife } from "./sections/pcoRealLife";
import { PcoHelp } from "./sections/pcoHelp"
import { SupportRxC } from "./sections/supportRxC";
import background from "../../constants/images/background2.png"

import { InputOutput } from "./sections/inputOutput"
export const Landing = () => {
  return (
    <Box >
      <Intro />
      <Box backgroundImage={background}>
        <DeadWeightLossTriangle />
        <DeadWeightLoss />
      </Box>
      <InputOutput />
      <Box backgroundImage={background}>
        <MarketInefficiency />
        <PcoHelp />
      </Box>
      {/* <SlideShow /> */}
      <PcoRealLife />
      <SupportRxC />
    </Box>
  );
};
