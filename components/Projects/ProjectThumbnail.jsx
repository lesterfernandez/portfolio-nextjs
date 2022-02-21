import { Text, WrapItem } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { chakra } from "@chakra-ui/system";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const MotionBox = chakra(motion.div);

const variants = {
  topInit: {
    y: "-100%",
    opacity: 0,
    transition: {
      type: "easeInOut",
    },
  },
  topAnim: {
    y: "0%",
    opacity: 1,
    transition: {
      type: "easeInOut",
    },
  },
  bottomInit: {
    y: "100%",
    opacity: 0,
    transition: {
      type: "easeInOut",
    },
  },
  bottomAnim: {
    y: "-100%",
    opacity: 1,
    transition: {
      type: "easeInOut",
    },
  },
};
const ProjectThumbnail = ({ label, onOpen, src, previewSrc }) => {
  const [isMediumWidth] = useMediaQuery("(max-width: 1200px)");
  const [isHover, setHover] = useState(isMediumWidth ? true : false);
  return (
    <WrapItem onClick={() => onOpen()}>
      <MotionBox
        outline="4px solid gray"
        w="200px"
        h="200px"
        borderRadius="lg"
        overflow="hidden"
        onHoverStart={() => {
          if (isMediumWidth) return;
          setHover(true);
        }}
        onHoverEnd={() => {
          if (isMediumWidth) return;
          setHover(false);
        }}
        cursor="pointer"
        pos="relative"
      >
        {/* Background image that shows before mouse hover */}
        <Image
          src={src}
          alt="img of project"
          layout="fill"
          className="projectBg"
          placeholder="blur"
        />
        {/* Div that comes in from the top when picture is hovered */}
        <MotionBox
          textAlign="center"
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="100%"
          h="100%"
          variants={variants}
          initial="topInit"
          animate={isHover ? "topAnim" : "topInit"}
          pos="relative"
        >
          <Image
            src={previewSrc}
            alt="img of project"
            layout="fill"
            className="projectBg"
            placeholder="blur"
          />
          <style jsx>{`
            .projectBg .projectBg > * {
              z-index: 2;
            }
          `}</style>
        </MotionBox>

        {/* Div which holds the label text that comes from the bottom */}
        <MotionBox
          textAlign="center"
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="100%"
          h="60px"
          variants={variants}
          initial="bottomInit"
          animate={isHover ? "bottomAnim" : "bottomInit"}
          bgColor="#222b"
          zIndex="4"
        >
          <Text color="white" zIndex="5">
            {label}
          </Text>
        </MotionBox>
      </MotionBox>
    </WrapItem>
  );
};

export default ProjectThumbnail;
