import React from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import ChakraCarousel from "../../../components/chakraCarousel";
import background from "../../../constants/images/background2.png"
import { slideShowList } from "../../../constants/data/slideShowData";
export const SlideShow = () => {
  return (
    <Box py={"100px"} height={"50%"}>
      <ChakraCarousel gap={32}>
        {slideShowList.map((text) => (
          <Heading textAlign={"center"} marginTop={"130px"}>{text} </Heading>
        ))}
      </ChakraCarousel>
    </Box >
  );
};
