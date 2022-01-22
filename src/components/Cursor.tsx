import { Box } from "@chakra-ui/layout";
import { MouseEventHandler, MutableRefObject } from "react";

interface Props {
  cursor: MutableRefObject<HTMLDivElement | null>;
  handleClick: MouseEventHandler<HTMLDivElement> | undefined;
  handleRelease: MouseEventHandler<HTMLDivElement> | undefined;
}

const Cursor = ({ cursor, handleClick, handleRelease }: Props) => {
  return (
    <Box
      ref={cursor}
      onMouseDown={handleClick}
      onMouseUp={handleRelease}
      bg="rgba(13, 214, 164, 0.7)"
      // has to be in rem
      sx={{ width: "1.7rem", height: "1.7rem" }}
      borderRadius="100%"
      transformOrigin="100%, 100%"
      transform="translate(-50%, -50%)"
      pos="fixed"
      //   pointerEvents="none"
    />
  );
};

export default Cursor;
