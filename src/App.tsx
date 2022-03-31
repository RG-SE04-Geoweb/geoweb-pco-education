import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Landing } from "./pages/landing/landing";
export const App = () => (
  <ChakraProvider theme={theme}>
    <Landing />
  </ChakraProvider>
);
