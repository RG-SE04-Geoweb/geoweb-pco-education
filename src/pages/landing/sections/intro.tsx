import React from "react";
import { useState } from "react";
import { Box, Flex, Heading, VStack, AspectRatio } from "@chakra-ui/react";
export const Intro = () => {
  return (
    <Box bg={"lightBlue"}>
      <Flex justifyContent={"center"} alignItems={"center"} py={"100px"}>
        <VStack>
          <Heading>Lorem Ipsum</Heading>
          <Heading pt={"40px"}>Lorem Ipsum a bunch of times</Heading>
          <AspectRatio
            minWidth={{ base: "200px", md: "300px", lg: "500px" }}
            ratio={16 / 9}
          >
            <iframe
              title="PCO"
              src="https://www.youtube.com/embed/iq1Qvr8iOuQ"
              allowFullScreen
            />
          </AspectRatio>
        </VStack>
      </Flex>
    </Box>
  );
};
