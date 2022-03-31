import { Box, Flex, Image } from "@chakra-ui/react";
import deadWeightLossImg from "../../../constants/images/dead-weight-loss.png";
export const DeadWeightLoss = () => {
  return (
    <Box>
      <Flex justifyContent={"center"} alignItems={"center"} py={"100px"}>
        <Image src={deadWeightLossImg} />
      </Flex>
    </Box>
  );
};
