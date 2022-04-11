import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Landing } from "./pages/landing/landing";
// import { Header } from "./components/header";

const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        color: "whiteAlpha.900"
      },
    }
  }
})

export const App = () => (
  <ChakraProvider theme={theme}>
    {/* <Header /> */}
    <Landing />
  </ChakraProvider>
);
