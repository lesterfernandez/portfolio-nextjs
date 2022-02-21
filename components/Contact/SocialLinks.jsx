import Icon from "@chakra-ui/icon";
import { Link, VStack } from "@chakra-ui/layout";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const SocialLinks = ({ ...props }) => {
  return (
    <VStack {...props}>
      <Link target="_blank" href="https://github.com/lesterfernandez">
        <Icon as={FaGithub} w={10} h={10} />
      </Link>
      <Link
        target="_blank"
        href="https://www.youtube.com/channel/UCiMhEZ24whWyR5YL9G2kHDw"
      >
        <Icon as={FaYoutube} w={10} h={10} />
      </Link>
      <Link target="_blank" href="https://www.linkedin.com/in/lester-f/">
        <Icon as={FaLinkedin} w={10} h={10} />
      </Link>
    </VStack>
  );
};

export default SocialLinks;
