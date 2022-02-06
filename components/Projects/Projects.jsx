import { Heading, Wrap } from "@chakra-ui/react";
// photo imports
import cubedUpIconPic from "../../public/cubedupicon.png";
import cubedUpPreview from "../../public/ipadscreenshot.png";
import twitterCloneFeedPic from "../../public/twitterclonefeed.png";
import twitterCloneLanding from "../../public/twitterclonelanding.png";
import whatsappConvo from "../../public/whatsappconvo.png";
import whatsappLogin from "../../public/whatsapplogin.png";
import Project from "./Project";

const Projects = ({ projects }) => {
  return (
    <>
      <Heading textAlign="center">Side Projects</Heading>
      <Wrap justify="center" spacing="1.4rem">
        {projects.map((project, idx) => (
          <Project
            key={project.label + project.title}
            label={project.label}
            title={project.title}
            src={
              idx == 0
                ? whatsappLogin
                : idx == 1
                ? twitterCloneLanding
                : idx == 2
                ? cubedUpIconPic
                : null
            }
            previewSrc={
              idx == 0
                ? whatsappConvo
                : idx == 1
                ? twitterCloneFeedPic
                : idx == 2
                ? cubedUpPreview
                : null
            }
            demoText={project.demoText}
            demoLink={project.demoLink}
            sourceLink={project.sourceLink}
            tags={project.tags}
            architecture={project.architecture}
          />
        ))}
      </Wrap>
    </>
  );
};

export default Projects;
