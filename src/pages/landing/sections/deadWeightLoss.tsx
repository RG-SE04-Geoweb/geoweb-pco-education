import { Box, Flex, Image, Heading, VStack } from "@chakra-ui/react";
import deadWeightLossImg from "../../../constants/images/harbergerGraph.png";

export const DeadWeightLoss = () => {
  return (
    <Box  >
      <Flex justifyContent={"center"} alignItems={"center"} py={"100px"} px={"30px"}>
        <VStack>

          <Heading as="h1" size={"2xl"} textAlign={'center'}>
            Dead Weight Loss (Harberger's Triangle)
          </Heading>
          <Heading as="h2" fontSize={"24px"} textAlign={"center"} pb={"10px"}>
            The first thing we need to explain to understand Partial Common Ownership is to explain Dead Weight Loss or Harberger's Triangle
          </Heading>
          <Image src={deadWeightLossImg} bgColor={"whiteAlpha.900"} height={{ sm: "170px", md: "255px", lg: "340px" }} width={{ sm: "400px", md: "600px", lg: "800px" }} />
          <Box py={"20px"} height={'100%'} borderWidth='1px' borderRadius='lg' bg={'blackAlpha.400'} width={'70%'}>
            <Heading as="h3" fontSize={"24px"} pt={'20px'} textAlign={'center'} px={'5px'}>
              In a free market, balance is achieved by finding the perfect point between price and quantity being produced.
              <br /> <br />
              Consumer suprlus is the benefit consumers get aboce what they have to pay.
              <br /> <br />
              Producer surplus represents how much more a company can make above its minimum profitable price.
            </Heading>
          </Box>
        </VStack>
      </Flex >
    </Box >
  );
};
