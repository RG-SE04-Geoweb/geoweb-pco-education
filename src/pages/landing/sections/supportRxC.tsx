import { Box, Flex, HStack, Image, VStack, Heading, Text, Link, Center } from "@chakra-ui/react";
import rXc from "../../../constants/images/rXc.png"
export const SupportRxC = () => {
    return (
        <Box bgColor={"#3c045b"}>
            <Center>
                <Box p="4" width={"85%"}>
                    <HStack>
                        <Flex justifyContent={"center"} alignItems={"center"} py={"100px"} wrap={"wrap"}>
                            <Image src={rXc} boxSize={{ base: "250px", md: "300px", lg: "400px" }} flex={{ md: "1 1 auto", xs: "0 50%" }} p={"20px"} />
                            <VStack flex={{ md: "0 50%" }}>
                                <Heading as={"h1"} fontSize={{ sm: "20px", md: "25px", lg: "40px" }} textAlign={"center"}>
                                    Support the RadicalxChange Foundation
                                </Heading>
                                <Text color={"whiteAlpha.900"} fontSize={{ sm: "15px", md: "18px", lg: "23px" }} textAlign={"center"}>
                                    RadicalxChange (RxC) is a global movement for next-generation political economies. We're committed to advancing plurality, equality, community, and decentralization through upgrading democracy, markets, the data economy, the commons, and identity.
                                </Text>
                                <Link href="https://www.radicalxchange.org/" color="blue.400" target="_blank" >
                                    <Text fontSize={{ sm: "15px", md: "18px" }}>
                                        https://www.radicalxchange.org/
                                    </Text>
                                </Link>
                                <Link href="https://gitcoin.co/grants/63/radicalxchange-foundation" color="blue.400" target="_blank">
                                    <Text fontSize={{ sm: "15px", md: "18px" }}>
                                        RadicalxChange Foundation
                                    </Text>
                                </Link>
                            </VStack>
                        </Flex>
                    </HStack>
                </Box>
            </Center>
        </Box >

    );
};