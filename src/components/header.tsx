import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
} from "@chakra-ui/react";
import { useInjectedProvider } from "../contexts/InjectedProviderContexts";
import { ChevronDownIcon } from "@chakra-ui/icons";
export const Header = () => {
  const { address, requestWallet, disconnectDapp } = useInjectedProvider();
  const handleDisconnect = () => {
    disconnectDapp();
  };

  const handleConnect = () => {
    requestWallet();
  };
  return (
    <Box bg={"lightBlue"}>
      <Flex h={16} justifyContent="flex-end" pt={"10px"} pr={"10px"}>
        {!address ? (
          <Button onClick={handleConnect}>Connect Wallet</Button>
        ) : (
          <Menu offset={[0, 5]} placement="bottom-end">
            <MenuButton
              as={Button}
              color="blackAlpha.900"
              rightIcon={<Icon as={ChevronDownIcon} color="raid" />}
            >
              Connected: {address.substring(2, 6)} ...
              {address.substring(37, 41)}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={handleDisconnect}>
                <Box color="red.500">Disconnect</Box>
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </Flex>
    </Box>
  );
};
