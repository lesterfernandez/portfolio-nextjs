import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import Nav from "../components/Nav";
import Section from "../components/Section";
import theme from "../components/theme";

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <AnimatePresence exitBeforeEnter initial>
        <Section key={router.asPath}>
          <Component {...pageProps} />
        </Section>
      </AnimatePresence>
    </ChakraProvider>
  );
}

export default MyApp;
