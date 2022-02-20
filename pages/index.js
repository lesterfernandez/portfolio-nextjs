import { CheckCircleIcon } from "@chakra-ui/icons";
import { Heading, Spacer, Text, Wrap } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import Header from "../components/About/Header";
import Article from "../components/Article";

const Home = () => {
  return (
    <>
      <Header />
      <Spacer />

      <Article>
        <Heading size="lg">About Me</Heading>
        <Text fontSize="lg">
          I am a software developer based in Miami, Fl that has a passion for
          using technology to create useful products and solve complex
          problems. I continuously pursue the expansion of my knowledge and
          the improvement of my skills as an engineer. <br />
          <br />
          My most familiar programming languages are TypeScript and
          JavaScript, but I am also familiar with Java, C#, and Python. In my
          freetime I work on side-projects and create YouTube videos about
          programming and technology.
        </Text>
        <Spacer />
        <Text fontSize="lg">
          I am currently majoring in Computer Science at Miami-Dade College.
        </Text>
      </Article>

      <Article>
        <Heading size="lg">
          Technologies I Know
          <CheckCircleIcon color="green.200" mx="0.4rem" pb="2px" />
        </Heading>
        <Wrap spacing="0.5rem" maxW="70%" pt="0.4rem">
          <Tag>JavaScript</Tag>
          <Tag>TypeScript</Tag>
          <Tag>Git</Tag>
          <Tag>React.js</Tag>
          <Tag>Node.js</Tag>
          <Tag>REST</Tag>
          <Tag>PostgreSQL</Tag>
          <Tag>Redis</Tag>
          <Tag>Socket.io</Tag>
          <Tag>Java</Tag>
          <Tag>C#</Tag>
          <Tag>HTML/CSS</Tag>
        </Wrap>
      </Article>
    </>
  );
};

export default Home;
