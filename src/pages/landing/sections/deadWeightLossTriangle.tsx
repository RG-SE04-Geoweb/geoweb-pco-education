import { Box, Flex, Image, Heading, VStack } from "@chakra-ui/react";
import harbergerGraph from "../../../constants/images/harbergerGraph.png";

export const DeadWeightLossTriangle = () => {
    return (
        <Box height={"570px"} >
            <Flex justifyContent={"center"} alignItems={"center"} py={"100px"} px={"30px"} >
                <VStack>
                    <Heading as="h1" size={"2xl"} textAlign={"center"} fontFamily={"slackey"} color={"purple.200"} textShadow='5px 5px #000000'>
                        HARBERGER'S
                    </Heading>
                    <Heading as="h1" size={"2xl"} textAlign={"center"} fontFamily={"slackey"} textShadow='5px 5px #000000'>
                        TRIANGLE
                    </Heading>
                    <Heading as="h2" fontSize={"24px"} textAlign={"center"} pb={"10px"}>
                        The first thing we need to explain to understand Partial Common Ownership is to explain Dead Weight Loss or Harberger"s Triangle
                    </Heading>
                    <Box pb={"20px"}>
                        <Image src={harbergerGraph} bgColor={"whiteAlpha.900"} height={{ sm: "255px", md: "340px", lg: "425px" }} width={{ sm: "600px", md: "800px", lg: "1000px" }} />
                    </Box>
                </VStack>
            </Flex >
        </Box >
    );
};
