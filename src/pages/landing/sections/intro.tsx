import { Box, Flex, Heading, VStack, AspectRatio } from "@chakra-ui/react";

export const Intro = () => {
  return (
    <Box bg={"blue.500"}>
      <Flex justifyContent={"center"} alignItems={"center"} py={"100px"}>
        <VStack>
          <Heading color={"green.300"} as="h2" size={"3xl"}>
            Partial Common Ownership
          </Heading>
          <Heading pt={"40px"} color={"whiteAlpha.800"}>
            Lorem Ipsum a bunch of times
          </Heading>
          <AspectRatio
            minWidth={{ base: "300px", md: "400px", lg: "600px" }}
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
