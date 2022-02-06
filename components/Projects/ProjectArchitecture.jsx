import { Heading, List, ListItem } from "@chakra-ui/layout";
import React from "react";
import Article from "../Article";

const ProjectArchitecture = ({ architecture, title }) => {
  return (
    <Article>
      <Heading size="lg" mb="0.7rem">
        Architecture
      </Heading>
      <List spacing={2} ml="0.2rem">
        {Object.entries(architecture).map(itemArr => (
          <React.Fragment key={title + "header" + [itemArr[0]]}>
            <Heading size="md">{itemArr[0]}</Heading>
            <ListItem m="1rem 0 1.4rem 0.2rem">{itemArr[1]}</ListItem>
          </React.Fragment>
        ))}
      </List>
    </Article>
  );
};

export default ProjectArchitecture;
