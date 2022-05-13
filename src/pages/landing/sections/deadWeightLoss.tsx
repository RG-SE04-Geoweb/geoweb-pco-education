import { Box, Flex, Image, Heading, VStack } from "@chakra-ui/react";
import harbergerGraph2 from "../../../constants/images/harbergerGraph2.png";
import harbergerGraph from "../../../constants/images/harbergerGraph.png";
import background from "../../../constants/images/background2.png"

export const DeadWeightLoss = () => {
  return (
    <Box backgroundImage={background}>
      <Flex justifyContent={"center"} alignItems={"center"} py={"100px"} px={"30px"}>
        <VStack>
          <Heading as="h1" size={"2xl"} textAlign={"center"} fontFamily={"slackey"} color={"purple.200"} textShadow='5px 5px #000000' >
            HARBERGER'S <Box as={"span"} color={"whiteAlpha.900"} >TRIANGLE</Box>
          </Heading>
          <Box py={"20px"}>
            <Image src={harbergerGraph} bgColor={"whiteAlpha.900"} height={{ sm: "255px", md: "340px", lg: "425px" }} width={{ sm: "600px", md: "800px", lg: "1000px" }} />
          </Box>
          <Box py={"20px"} height={"100%"} borderWidth="1px" borderRadius="lg" bg={"#24042c"} width={"70%"}>
            <Heading as="h3" fontSize={"24px"} textAlign={"center"} px={"5px"}>
              In a free market, balance is achieved by finding the perfect point between price and quantity being produced.
              <br /> <br />
              Consumer suprlus is the benefit consumers get aboce what they have to pay.
              <br /> <br />
              Producer surplus represents how much more a company can make above its minimum profitable price.
            </Heading>
          </Box>
          <Box py={"20px"} >
            <Image src={harbergerGraph2} bgColor={"whiteAlpha.900"} height={{ sm: "343px", md: "458px", lg: "572px" }} width={{ sm: "600px", md: "800px", lg: "1000px" }} />
          </Box>
          <Box py={"20px"} height={"100%"} borderWidth="1px" borderRadius="lg" bg={"#24042c"} width={"70%"}>
            <Heading as="h3" fontSize={"24px"} textAlign={"center"} px={"5px"}>
              Let's Assume that the optimal amount of money society will pay for a certain product is $1000 (P1). Also, let's assume a company must make 25% in order to produce profitably. So the cost to the company is $750 (P3) to make $250 profit.
              <br /> <br />

              So, let's say the $1000 society is able to spend on the product, and the cost+profit allowed for 100 items being produced, at a price of $10 per unit.
              <br /> <br />

              Now, let's add a 10% tax and keep the assumptin that society is only willing to spend $1000 for this product, however now it is going to cost $11 per unit, which would mean they are only willing to buy aprox. 90 units at this new price. (90 x $11 = $1100)
              <br />
              Q2=90.
              <br /> <br />
              We now have all the info we need to determine the dead weight loss.
            </Heading>
          </Box>
        </VStack>
      </Flex >
    </Box >
  );
};
