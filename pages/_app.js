import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import Nav from "../components/Nav";
import Section from "../components/Section";
import theme from "../components/theme";

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Lester Fernandez</title>
        <meta
          name="description"
          content="Portfolio website for Lester Fernandez, a software development."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
