import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import Nav from "../components/Nav";
import theme from "./theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Nav />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
