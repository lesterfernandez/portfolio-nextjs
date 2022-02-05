import { Heading, Wrap } from "@chakra-ui/react";
import Project from "./Project";

const Projects = ({ projects }) => {
  return (
    <>
      <Heading textAlign="center">Side Projects</Heading>
      <Wrap justify="center" spacing="1.4rem">
        {projects.map(project => (
          <Project
            key={project.label + project.title}
            label={project.label}
            title={project.title}
            src={project.src}
            previewSrc={project.previewSrc}
            demoText={project.demoText}
            demoLink={project.demoLink}
            tags={project.tags}
            architecture={project.architecture}
          />
        ))}
      </Wrap>
    </>
  );
};

export default Projects;
