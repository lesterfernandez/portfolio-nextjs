import { Flex } from "@chakra-ui/layout";

const Article = ({ children, ...props }) => {
  return (
    <Flex
      flexDir="column"
      my="3rem"
      as="article"
      justify="center"
      style={{ gap: "0.5rem" }}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default Article;
