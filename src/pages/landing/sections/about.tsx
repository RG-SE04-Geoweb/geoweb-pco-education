import React from "react";
import { Box, Image, Heading, HStack, Center } from "@chakra-ui/react";
import tragedyOTC from "../../../constants/images/tragedyOfTheCommons.png";
export const About = () => {
  return (
    <Box py={"100px"}>
      <HStack spacing={3}>
        <Box p={15} pl={"50px"} flex="1">
          <Center>
            <Image src={tragedyOTC} />
          </Center>
        </Box>
        <Box p={15} flex="1">
          <Center>
            <Heading fontSize="xl">WTF is a PCO</Heading>
          </Center>
        </Box>
      </HStack>
    </Box>
  );
};
