import { VStack } from "@chakra-ui/layout";
import Projects from "../../components/Projects/Projects";

const Portfolio = ({ projects }) => {
  return (
    <VStack spacing="3rem" py="4rem">
      <Projects projects={projects} />
    </VStack>
  );
};

export default Portfolio;

export async function getStaticProps() {
  return {
    props: {
      projects: [
        {
          label: "Real-Time Messenger",
          title: "Live Chat App",
          description:
            "A chat web app where users can log in, add friends, see their status, and communicate with them in real time. I built this application for fun and to challenge myself.",
          challenges: [{}],
          demoText: "Live Demo",
          demoLink: "https://lester-whatsapp.netlify.app",
          sourceLink: "https://bit.ly/lester_messenger_code",
          tags: [
            "NodeJS",
            "React",
            "SocketIO",
            "ExpressJS",
            "Redis",
            "PostgreSQL",
            "Dokku",
            "Digital Ocean",
            "Lets Encrypt",
          ],
          architecture: {
            "Front End":
              "The front-end uses React.js along with React Router to implement client-side routing. It uses Formik and Yup to do client-side form validation. Front-end authorization is done with the help of the React Context api. However, because front-end code is vulnerable, every user action is verified on the back-end.",
            "Back End":
              "Written in Node.js, the back-end for this application uses Socket.io for real-time communication and express-session for server-side user sessions. User submitted forms are validated through Yup. The MVC paradigm is implemented in order follow project management best practices.",
            Database:
              "Redis is used for rate limiting and to store conversations. While user accounts are stored in PostgreSQL.",
            "Web Hosting":
              "While the front-end is hosted on Netlify, the server and databases are hosted on Digital Ocean. The back-end is configured with a Lets Encrypt HTTPS certificate tied to the NGinx reverse proxy. The Dokku PaaS is used for continuous deployment.",
          },
        },
        {
          label: "Personal Micro Blog",
          title: "Personal Micro Blog",
          description:
            "A public micro-blogging platform where users can log in and share their thoughts with others. I built this application to learn how to build and design a consumable API.",
          challenges: [{}],
          demoText: "Live Demo",
          demoLink: "https://social-media-react-4.netlify.app/",
          sourceLink: "https://bit.ly/lester_microblog_code",
          tags: [
            "NodeJS",
            "PostgreSQL",
            "ExpressJS",
            "PassportJS",
            "Google OAuth 2.0",
            "ReactJS",
            "React Router",
            "React Query",
            "JavaScript",
          ],
          architecture: {
            "Front End":
              "React is used along with modern features such as React Context and Hooks. Client-Side Routing is done with React Router v6.",
            "Data Caching":
              "Data is frequently being requested from the back-end, so in order to keep a good user experience server-side data is cached on the client. This is done with React Query and results in users only seeing a loading screen on the first request.",
            "Back End":
              "NodeJS is used as the server-side language, along with ExpressJS as the back-end framework. Routing is used to keep the files small and maintainable.",
            Authentication:
              "Users are authenticated through Google OAuth 2.0. PassportJS helps reduce redundancy in the code. Express-session stores user sessions and sets a cookie on the client's browser.",
            Database:
              "All user accounts are stored and managed in a PostgreSQL database. Relations are used to tie user accounts to their posts.",
          },
        },
        {
          label: "IOS Mobile Game",
          title: "Cubed Up",
          description:
            "A multiplayer/single-player mobile game with a global leaderboard so users can compete against each other in real time. I undertook. I built this app with the goal of improving my skills as a software engineer. It was with this project that I first learned about the client-server model.",
          challenges: [
            { "Dedicated server": "test" },
            { "Using libraries": "test" },
            { "Project management": "test" },
            { "Systems design": "test" },
          ],
          demoText: "App Listing",
          demoLink: "https://apple.co/3xwOm58",
          sourceLink: "",
          tags: [
            "C#",
            "Unity",
            "Mirror Multiplayer Framework",
            "Playfab PaaS",
            "OOP",
          ],
          architecture: {
            Authentication:
              "Players can sign up or log into previous accounts. The PlayFab API is used to implement user Authentication.",
            Multiplayer:
              "I wrote custom dedicated C# servers for players to connect to. The servers are written using the Mirror framework. They are containerized with Docker and hosted on Microsoft PlayFab.",
            "Global Leaderboard":
              "Using PlayFab's API I implemented a leaderboard where players can see where they rank and if they made it to the top 10 players world-wide.",
            Code: "This app was coded in C# using the Unity Framework. It implements an Object-Oriented programming paradigm. This results in the codebase being maintable and easy to expand upon.",
          },
        },
      ],
    },
  };
}
