import { Button } from "@chakra-ui/button";
import { LinkIcon } from "@chakra-ui/icons";
import { Heading, HStack, Link, Text, Wrap } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Box } from "@chakra-ui/react";
import { Tag } from "@chakra-ui/tag";
import Image from "next/image";
import Article from "../Article";
import ProjectArchitecture from "./ProjectArchitecture";

const ProjectInfo = ({
  isOpen,
  onClose,
  title,
  previewSrc,
  tags,
  architecture,
  demoText,
  demoLink,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      scrollBehavior="inside"
      size="md"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="1.7rem">{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box boxSize="200px" mx="auto" rounded="lg" overflow="hidden">
            <Image
              src={previewSrc}
              objectFit="cover"
              placeholder="blur"
              alt="project preview img"
            />
          </Box>
          <HStack justify="center" py="1rem">
            <Text>{demoText}</Text>
            <LinkIcon />{" "}
            <Link textDecoration="underline" href={demoLink} target="_blank">
              {demoLink}
            </Link>
          </HStack>
          <Article my="0" m="1.2rem 0 3rem">
            <Heading size="lg">Technologies Used</Heading>
            <Wrap>
              {tags.map((tag, idx) => (
                <Tag key={title + "-tag-" + idx}>{tag}</Tag>
              ))}
            </Wrap>
          </Article>
          <ProjectArchitecture title={title} architecture={architecture} />
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose} colorScheme="blue">
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProjectInfo;
