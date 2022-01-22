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
        <Heading size="lg">
          Technologies I Know
          <CheckCircleIcon color="green.200" mx="0.4rem" pb="2px" />
        </Heading>
        <Wrap spacing="0.5rem" maxW="70%" pt="0.4rem">
          <Tag>JavaScript</Tag>
          <Tag>Git</Tag>
          <Tag>React.js</Tag>
          <Tag>REST</Tag>
          <Tag>Node.js</Tag>
          <Tag>Express.js</Tag>
          <Tag>PostgreSQL</Tag>
          <Tag>Redis</Tag>
          <Tag>Socket.io</Tag>
          <Tag>HTML/CSS</Tag>
          <Tag>Java</Tag>
          <Tag>C#</Tag>
        </Wrap>
      </Article>

      <Article>
        <Heading size="lg">About Me</Heading>
        <Text fontSize="lg">
          I am a full stack developer from Miami, Fl. I have a passion for
          programming. My favorite programming languages are TypeScript and
          JavaScript, but I also have experience with C#, Python, and Java.
          In my freetime I work on side-projects and create YouTube videos
          about programming and technology.
        </Text>
        <Spacer />
        <Text fontSize="lg">
          I am currently majoring in Computer Science at Miami-Dade College.
        </Text>
      </Article>
    </>
  );
};

export default Home;
