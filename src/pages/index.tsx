import { Box } from "@chakra-ui/layout";
import type { NextPage } from "next";
import Cursor from "../components/Cursor";
import useCursor from "../utils/useCursor";

const Home: NextPage = () => {
  const { cursor, changePosition, handleClick, handleRelease } = useCursor();

  return (
    <Box onMouseMove={changePosition} cursor="none" w="100vw" minH="100vh">
      <Cursor
        cursor={cursor}
        handleClick={handleClick}
        handleRelease={handleRelease}
      />
    </Box>
  );
};

export default Home;
