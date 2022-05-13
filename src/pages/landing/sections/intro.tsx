import { Box, Flex, Heading, VStack, AspectRatio } from "@chakra-ui/react";
import introBackground from "../../../constants/images/introBackground.png"
import "@fontsource/slackey"

export const Intro = () => {
  return (
    <Box height={"834px"} backgroundImage=
      {introBackground}>
      <Flex justifyContent={"center"} alignItems={"center"} py={"100px"}>
        <VStack>
          <Heading color={"whiteAlpha.900"} as="h1" size={"3xl"} pb={"10px"} fontFamily={"slackey"} textShadow='5px 5px #800080'>
            WTF is <Box as="span" textColor={"purple.200"}>PCO</Box>?
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
    </Box >
  );
};
