import { Box, Flex, VStack, Heading } from "@chakra-ui/react";
export const PcoHelp = () => {
    return (
        <Box >
            <Flex justifyContent={"center"} alignItems={"center"} py={"100px"}>
                <VStack>
                    <Heading as={"h1"} size={"2xl"} textAlign={"center"} pb={"20px"}>
                        HOW DOES PARTIAL COMMON OWNERSHIP HELP?
                    </Heading>
                    <Box py={"20px"} height={"100%"} borderWidth="1px" borderRadius="lg" bg={"#24042c"} width={"70%"}>
                        <Heading as="h3" fontSize={"24px"} textAlign={"center"} px={"5px"}>
                            In partial common ownership and asset is always on sale. An owner of the asset declares it value at the outset and pays society taxes based on the price.
                            <br /> <br />
                            If the price is too low, they are at risk of loosing the asset before they have a chance to invest in it.Price it too high, to protect it from being sold again and the owner risks paying too high in taxes.
                            <br /> <br />
                            If an agent values the asset more than the orginal owner, they will can purchase the asset and then put a new price on the asset and pay taxes based on this new price. The new owner is incentivized to invest in the asset in order to increase the assets value to what she has placed it at.
                            <br /> <br />
                            This ensures that the property is being allocated to the agents in society most likely to invest in the property and thus striking the perfect balance between Investment Effeciency and Allocative Efficiency.
                        </Heading>
                    </Box>
                </VStack>
            </Flex>
        </Box >
    );
};
