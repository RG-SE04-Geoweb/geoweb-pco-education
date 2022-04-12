import { Box, Flex, Image, VStack, Heading, Text } from "@chakra-ui/react";
import marketInefficiency from "../../../constants/images/marketInefficiency.png";

export const MarketInefficiency = () => {
  return (
    <Box >
      <Flex justifyContent={"center"} alignItems={"center"} py={"100px"}>
        <VStack>
          <Heading as={"h1"} size={"2xl"} textAlign={'center'}>
            WTF Causes Market Ineffeciency
          </Heading>
          <Heading as={"h2"} size={"lg"} textAlign={'center'}>
            It is really anything that places strain on free markets, including the following:
          </Heading>

          <Image src={marketInefficiency} width={{ sm: "600px", md: "700px", lg: "800px" }} height={{ sm: "394px", md: "460px", lg: "526px" }} />
          < Box py={"20px"} height={'100%'} borderWidth='1px' borderRadius='lg' bg={'blackAlpha.400'} width={'70%'}>

            <Heading as={"h3"} size={"lg"} textAlign={'center'} >
              Investment Efficiency
            </Heading>
            <Heading as={"h3"} size={"md"} textAlign={'center'} py={'10px'}>
              The ability for an owner to invest in their property to increase its value
            </Heading>
            <Text
              color="whiteAlpha.900" textAlign={'center'} px={'5px'}>
              In our current system, owners can hold onto their property, holding out for a higher price, even if they choose not to use it. This creates high investment efficiency, where owners invest in their property to increase its value.
            </Text>
          </Box>
          <Box py={"20px"} height={'100%'} borderWidth='1px' borderRadius='lg' bg={'blackAlpha.400'} width={'70%'}>

            <Heading as={"h3"} size={"lg"} textAlign={'center'}>
              Allocative Efficiency
            </Heading>
            <Heading as={"h3"} size={"md"} textAlign={'center'} py={'10px'}>
              In a system that creates high allocative efficiency, assets are distributed to the owners that are most likely to deploy them.

            </Heading>
            <Text
              color="whiteAlpha.900" textAlign={'center'} px={'5px'}>
              Common Ownership Self-assessed Tax (Haberger Tax) aims to find the optimal allocative efficiency by creating the market conditions for maximum asset and property usage. Investment efficiency is reduced for the benefit of increasing allocative efficiency.
            </Text>
          </Box>

        </VStack>
      </Flex>
    </Box >
  );
};
