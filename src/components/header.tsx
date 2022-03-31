import { Box, Flex, HStack, IconButton, Stack } from "@chakra-ui/react";
import { Logo } from "./logo";

declare var window: any;

export const Header = () => {
  return (
    <Box>
      <Flex h={16} justifyContent="flex-end">
        Hello
      </Flex>
    </Box>
  );
};
