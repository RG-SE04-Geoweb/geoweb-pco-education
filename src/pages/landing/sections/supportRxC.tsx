import { Box, Flex, HStack, Image, VStack, Heading, Text, Spacer, Link, Center } from "@chakra-ui/react";
import meme from "../../../constants/images/meme.png"
import rXc from "../../../constants/images/rXc.png"
export const SupportRxC = () => {
    return (
        <Box bgColor={"#3c045b"}>
            <Flex justifyContent={"center"} alignItems={"center"} py={"100px"}>
                <Box p="4" width={"40%"}>
                    <Center>

                        <Image src={meme} boxSize={{ sm: "200px", md: "300px", lg: "400px" }} />
                    </Center>
                </Box>
                <Spacer />
                <Box p="4" width={"100%"}>
                    <Center>

                        <HStack w={"900px"}>
                            <Image src={rXc} boxSize={"300px"} />
                            <VStack>
                                <Heading as={"h1"}>
                                    Support the RadicalxChange Foundation
                                </Heading>
                                <Text color={"whiteAlpha.900"} fontSize={"20px"}>
                                    RadicalxChange (RxC) is a global movement for next-generation political economies. We're committed to advancing plurality, equality, community, and decentralization through upgrading democracy, markets, the data economy, the commons, and identity.
                                </Text>
                                <Link href="https://www.radicalxchange.org/" color="blue.400" target="_blank">
                                    <Text fontSize={"20px"}>
                                        https://www.radicalxchange.org/
                                    </Text>
                                </Link>
                                <Link href="https://gitcoin.co/grants/63/radicalxchange-foundation" color="blue.400" target="_blank"><Text fontSize={"20px"}>
                                    RadicalxChange Foundation </Text></Link>
                            </VStack>
                        </HStack>
                    </Center>
                </Box>

            </Flex>
        </Box >
    );
};
