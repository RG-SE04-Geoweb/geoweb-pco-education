import { Box, Flex, Heading, VStack, AspectRatio } from "@chakra-ui/react";
import background from "../../..//constants/images/background.png"


export const Intro = () => {
  return (
    <Box backgroundImage={background} height={"834px"}
    >
      <Flex justifyContent={"center"} alignItems={"center"} py={"100px"}>
        <VStack>
          <Heading color={"whiteAlpha.900"} as="h2" size={"3xl"} pb={"10px"}>
            WTF is PCO
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
