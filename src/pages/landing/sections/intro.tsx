import React from "react";
import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  VStack,
  AspectRatio,
  Button,
  Image,
} from "@chakra-ui/react";
declare var window: any;

export const Intro = () => {
  const [address, setAddressState] = useState("");
  const connectUsersMeta = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    return accounts[0];
  };
  let handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let account = await connectUsersMeta();
    setAddressState(account);
  };

  window.ethereum.on("accountsChanged", function (accounts: Array<string>) {
    setAddressState(accounts[0]);
  });
  return (
    <Box bg={"lightBlue"}>
      <Flex h={16} justifyContent="flex-end" pt={"10px"} pr={"10px"}>
        {!address ? (
          <Button onClick={handleSubmit}>Connect Wallet</Button>
        ) : (
          <Button fontSize={15}>
            Connected: {address.substring(2, 6)} ...
            {address.substring(37, 41)}
          </Button>
        )}
      </Flex>
      <Flex justifyContent={"center"} alignItems={"center"} py={"100px"}>
        <VStack>
          <Heading>Lorem Ipsum</Heading>
          <Heading pt={"40px"}>Lorem Ipsum a bunch of times</Heading>
          <AspectRatio
            minWidth={{ base: "200px", md: "300px", lg: "500px" }}
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
    </Box>
  );
};
