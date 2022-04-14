import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import ChakraCarousel from "../../../components/chakraCarousel";
import { slideShowList } from "../../../constants/data/slideShowData";
export const SlideShow = () => {
  return (

    <Box py={"100px"} >
      <ChakraCarousel gap={32}>
        {slideShowList.map((text) => (
          <Heading textAlign={"center"} marginTop={"130px"}>{text} </Heading>
        ))}
      </ChakraCarousel>
    </Box >
  );
};
