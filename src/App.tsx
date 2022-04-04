import { ChakraProvider, theme } from "@chakra-ui/react";
import { Landing } from "./pages/landing/landing";
import { Header } from "./components/header";
export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <Landing />
  </ChakraProvider>
);
