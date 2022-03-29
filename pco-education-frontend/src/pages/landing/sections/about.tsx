import React from "react";
import { Box, Image, Heading, HStack, Center } from "@chakra-ui/react";
import placeholderImage from "../../../constants/images/placeholder-image.png";
export const About = () => {
  return (
    <HStack spacing={3}>
      <Box p={15} flex="1">
        <Center>
          <Image src={placeholderImage} />
        </Center>
      </Box>
      <Box p={15} flex="1">
        <Center>
          <Heading fontSize="xl">WTF is a PCO</Heading>
        </Center>
      </Box>
    </HStack>
  );
};
