import { ChakraProvider, theme } from "@chakra-ui/react";
import { Landing } from "./pages/landing/landing";
import { InjectedProvider } from "./contexts/InjectedProviderContexts";
export const App = () => (
  <ChakraProvider theme={theme}>
    <InjectedProvider>
      <Landing />
    </InjectedProvider>
  </ChakraProvider>
);
