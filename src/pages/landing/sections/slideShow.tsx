import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import ChakraCarousel from "../../../components/chakraCarousel";
const dummyData = [
  "Dead Weight Loss causes strain on Society to Fund Public Goods",
  "Public goods are non rivalous and required by society",
  "Society must pay more to make up for market inefficiency",
  "Other Parts of the economy become harder to access for some",
  "A common Ownership Self-assessed Tax solves this",
];
export const SlideShow = () => {
  return (
    <Box py={"100px"}>
      <ChakraCarousel gap={32}>
        {dummyData.map((text) => (
          <Heading textAlign={"center"}>{text} </Heading>
        ))}
      </ChakraCarousel>
    </Box>
  );
};
