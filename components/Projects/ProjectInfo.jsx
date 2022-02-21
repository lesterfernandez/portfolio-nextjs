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
import { Box, VStack } from "@chakra-ui/react";
import { Tag } from "@chakra-ui/tag";
import Image from "next/image";
import Article from "../Article";

const ProjectInfo = ({
  description,
  isOpen,
  onClose,
  title,
  previewSrc,
  tags,
  architecture,
  demoText,
  demoLink,
  sourceLink,
  challenges,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      scrollBehavior="inside"
      size="xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="1.7rem">{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box boxSize="300px" mx="auto" rounded="lg" overflow="hidden">
            <Image
              src={previewSrc}
              objectFit="cover"
              placeholder="blur"
              alt="project preview img"
            />
          </Box>
          <VStack pt="1rem">
            {demoText && demoText.length > 1 && (
              <HStack justify="center">
                <Text>{demoText}</Text>
                <LinkIcon />{" "}
                <Link
                  textDecoration="underline"
                  href={demoLink}
                  target="_blank"
                  wordBreak={"break-word"}
                >
                  {demoLink}
                </Link>
              </HStack>
            )}
            {sourceLink && sourceLink.length > 1 && (
              <HStack justify="center">
                <Text>Source Code</Text>
                <LinkIcon />{" "}
                <Link
                  textDecoration="underline"
                  href={sourceLink}
                  target="_blank"
                  wordBreak={"break-word"}
                >
                  {sourceLink}
                </Link>
              </HStack>
            )}
          </VStack>
          <Article>
            <Heading size="lg">Description</Heading>
            <Text>{description}</Text>
          </Article>
          <Article>
            <Heading size="lg">Challenges Faced</Heading>
            {challenges.map(obj =>
              Object.entries(obj).map((arr, idx) => (
                <Box py="2" key={"chal-" + idx + "-" + arr[0]}>
                  <Heading as="p" size="md" key={"title-" + arr[0]} py="1">
                    {arr[0]}
                  </Heading>
                  <Text key={"desc-" + arr[1]}>{arr[1]}</Text>
                </Box>
              ))
            )}
          </Article>
          <Article my="0" m="1.2rem 0 3rem">
            <Heading size="lg">Technologies Used</Heading>
            <Wrap>
              {tags.map((tag, idx) => (
                <Tag key={title + "-tag-" + idx}>{tag}</Tag>
              ))}
            </Wrap>
          </Article>
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
