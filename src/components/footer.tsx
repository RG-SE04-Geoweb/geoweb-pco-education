import React from "react";
import { Box, Text, Image, Flex } from "@chakra-ui/react";
import geoWebLogo from "../constants/images/geoWebLogo.png"
import s4Logo from "../constants/images/s4Logo.png"

export const Footer = () => {
  return <Box bgColor={'whiteAlpha.900'}>
    <Flex justifyContent={'center'} alignItems={'center'}>
      <Image src={geoWebLogo} boxSize='50px' />
      <Text px={'5px'}>
        Special Thanks to Geo-Web for Sponsoring this web page as part of Raid Guild Season 04 Cohort!
      </Text>
      <Image src={s4Logo} boxSize='50px' />
    </Flex>
  </Box>;
};
