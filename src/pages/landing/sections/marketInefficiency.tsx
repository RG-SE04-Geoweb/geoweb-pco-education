import { Box, Flex, Image } from "@chakra-ui/react";
import marketInefficiency from "../../../constants/images/marketInefficiency.png";
export const MarketInefficiency = () => {
  return (
    <Box>
      <Flex justifyContent={"center"} alignItems={"center"} py={"100px"}>
        <Image src={marketInefficiency} />
      </Flex>
    </Box>
  );
};
