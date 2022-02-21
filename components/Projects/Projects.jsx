import { Heading, Wrap } from "@chakra-ui/react";
// photo imports
import cubedUpIconPic from "../../public/cubedupicon.png";
import cubedUpPreview from "../../public/ipadscreenshot.png";
import {
  default as sortingMain,
  default as sortingPreview,
} from "../../public/sorting1.png";
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
        {projects.map(project => (
          <Project
            challenges={project.challenges}
            description={project.description}
            key={project.label + project.title}
            label={project.label}
            title={project.title}
            src={getSrcPic(project.title)}
            previewSrc={getPreviewPic(project.title)}
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

const projectPics = {
  "Sorting Visualizer": {
    preview: sortingPreview,
    main: sortingMain,
  },
  "Live Chat App": {
    preview: whatsappConvo,
    main: whatsappLogin,
  },
  "Personal Micro Blog": {
    preview: twitterCloneFeedPic,
    main: twitterCloneLanding,
  },
  "Cubed Up": {
    preview: cubedUpPreview,
    main: cubedUpIconPic,
  },
};

const getSrcPic = title => {
  return projectPics[title].main;
};

const getPreviewPic = title => {
  return projectPics[title].preview;
};

export default Projects;
