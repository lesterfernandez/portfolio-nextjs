import { Heading, List, ListItem } from "@chakra-ui/layout";
import Article from "../Article";

const ProjectArchitecture = ({ architecture, title }) => {
  return (
    <Article>
      <Heading size="lg" mb="0.7rem">
        Architecture
      </Heading>
      <List spacing={2} ml="0.2rem">
        {Object.entries(architecture).map(itemArr => (
          <>
            <Heading key={title + "-heading-" + itemArr[0]} size="md">
              {itemArr[0]}
            </Heading>
            <ListItem
              key={title + "-desc-" + itemArr[0]}
              m="1rem 0 1.4rem 0.2rem"
            >
              {itemArr[1]}
            </ListItem>
          </>
        ))}
      </List>
    </Article>
  );
};

export default ProjectArchitecture;
