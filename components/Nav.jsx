import { Button, IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import {
  ChatIcon,
  HamburgerIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Container,
  Divider,
  Heading,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import Link from "next/link";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Container py="1rem" maxW="container.lg">
        <HStack
          justifyContent={{ base: "space-between", md: "space-evenly" }}
        >
          <Box
            display={{ base: "inline-block", md: "flex" }}
            style={{ gap: "2.8rem" }}
          >
            <Heading as="h1" size="md">
              Lester Fernandez
            </Heading>
            <Box display={{ base: "none", md: "inline" }} mr="auto">
              <HStack spacing="1.7rem">
                <Link href="/">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact Me</Link>
              </HStack>
            </Box>
          </Box>

          <HStack spacing="0.5rem">
            <Spacer />
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? (
                <MoonIcon color="purple.900" />
              ) : (
                <SunIcon color="yellow.500" />
              )}
            </Button>
            <Box display={{ md: "none" }}>
              <Menu id="menu-tabs" isLazy>
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant="outline"
                  id="menu-burger-btn"
                />
                <MenuList id="menu-list">
                  <Link href="/" passHref>
                    <MenuItem id="menu-item-1">
                      <Text>About</Text>
                    </MenuItem>
                  </Link>
                  <Link href="/projects" passHref>
                    <MenuItem id="menu-item-2">
                      <Text>Projects</Text>
                    </MenuItem>
                  </Link>
                  <Link href="/contact" passHref>
                    <MenuItem id="menu-item-3">
                      <>
                        <Text>Contact Me</Text>
                        <ChatIcon ml="auto" />
                      </>
                    </MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            </Box>
          </HStack>
        </HStack>
      </Container>
      <Divider />
    </>
  );
};

export default Nav;
