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
            "A web app where users can log in, add friends, see their friend's status, and communicate in real time. I built this application for fun and to challenge myself.",
          challenges: [
            {
              "Real-Time Data Flow":
                "This application needed real-time data communication between the server and clients in order to keep the user experience up to par. To solve this problem I decided to use websockets to communicate instead of HTTP.",
            },
            {
              "Persistent Chats":
                "There were many options I had to consider when deciding how to make user conversations persist between sessions. Ultimately, I decided on Redis to store user's messages as this allowed for sub-millisecond read and writes. This solution works but could become cumbersome if the user base grew as the messages could take up too much space in RAM. Therefore this solution would need to be modified to support a large user base.",
            },
            {
              Hosting:
                "In all my previous project I had used a PaaS to do the hosting for me. Therefore, I decided to take it upon myself to finally learn how to host a backend myself. I rented a Digital Ocean Linux private server and used SSH to connect to it. I had to learn the basics of NGINX in order to use a Let's Encrypt HTTPS certificate.",
            },
          ],
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
          challenges: [
            {
              "Implicit Login":
                "I architected my front-end to send a request on the first load to attempt to log the user in. This allowed for a seamless user experience and didn't compromise on security as I used secure HTTP-only cookies.",
            },
            {
              Authentication:
                "I wanted to implement OAuth for this project and focused on Google OAuth. I had to learn the OAuth protocol and flow. Eventually, I was able to follow the protocol and used OAuth to authenticate users and then create their session in the back-end.",
            },
          ],
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
            "A multiplayer/single-player mobile game with a global leaderboard so users can compete against each other in real time. I built this app with the goal of improving my skills as a software engineer.",
          challenges: [
            {
              "Dedicated server":
                "When it came to implementing multiplayer into my game I faced many roadblocks. I didn't know anything about the client-server model and had a lot to learn. Through lots of perseverance I was able to build my own dedicated server using C# that serves clients and acts as a mediator.",
            },
            {
              "Project management":
                "I implemented object oriented principles like polymorphism and inheritance. These were new concepts to me and I learned them because I was looking for a way to reduce redundancy in my codebase. This taught me a lot about project management.",
            },
            {
              Hosting:
                "I was using the Microsoft's PlayFab hosting to host my dedicated servers. But in order to support autoscaling I had to containerize my server. This led to me learning how to use Docker and upload an image to Docker Hub. ",
            },
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
        },
      ],
    },
  };
}
