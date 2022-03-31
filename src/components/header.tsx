import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useState } from "react";

declare var window: any;

export const Header = () => {
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
  let handleDisconnect = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setAddressState("");
  };
  window.ethereum.on("accountsChanged", function (accounts: Array<string>) {
    setAddressState(accounts[0]);
  });
  return (
    <Box bg={"lightblue"}>
      <Flex h={16} justifyContent="flex-end" pt={"10px"} pr={"10px"}>
        {!address ? (
          <Button onClick={handleSubmit}>Connect Wallet</Button>
        ) : (
          <Menu>
            <MenuButton as={Button} color="blackAlpha.900">
              Connected: {address.substring(2, 6)} ...
              {address.substring(37, 41)}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={handleDisconnect}>Disconnect</MenuItem>
            </MenuList>
          </Menu>
        )}
      </Flex>
    </Box>
  );
};
