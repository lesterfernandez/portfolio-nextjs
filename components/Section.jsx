import { Container } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { motion } from "framer-motion";

const MotionContainer = motion(Container);

const variants = {
  hidden: { opacity: 0, x: 75 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -75 },
};

const Section = ({ children }) => {
  const [isLargeScreen] = useMediaQuery("(min-width: 800px)");
  if (isLargeScreen)
    return (
      <MotionContainer
        as="section"
        maxW="container.sm"
        py="1rem"
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        sx={{ position: "relative", overflow: "hidden" }}
        transition={{ duration: 0.4, type: "easeInOut" }}
      >
        {children}
      </MotionContainer>
    );
  else
    return (
      <Container
        as="section"
        maxW="container.sm"
        py="1rem"
        sx={{ position: "relative", overflow: "hidden" }}
      >
        {children}
      </Container>
    );
};

export default Section;
