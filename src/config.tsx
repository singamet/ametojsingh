import AwsIcon from "./icons/AwsIcon";
import AzureIcon from "./icons/AzureIcon";
import CSharpIcon from "./icons/CSharpIcon";
import CssIcon from "./icons/CssIcon";
import DockerIcon from "./icons/Docker";
import DotnetIcon from "./icons/DotnetIcon";
import ExpressIcon from "./icons/ExpressIcon";
import FirebaseIcon from "./icons/FirebaseIcon";
import GithubIcon from "./icons/GithubIcon";
import GitIcon from "./icons/GitIcon";
import HTMLIcon from "./icons/HTMLIIcon";
import JavascriptIcon from "./icons/JavascriptIcon";
import JWTIcon from "./icons/JWTIcon";
import KubernetesIcon from "./icons/KubernetesIcon";
import MongoDBIcon from "./icons/MongoDBIcon";
import NextJSIcon from "./icons/NextJSIcon";
import NodeJSIcon from "./icons/NodeJSIcon";
import PostgresIcon from "./icons/PostgresIcon";
import PostmanIcon from "./icons/PostmanIcon";
import PythonIcon from "./icons/Python";
import ReactIcon from "./icons/ReactIcon";
import RestAPIIcon from "./icons/RestAPIIcon";
import SQLIcon from "./icons/SQLIcon";
import TailwindIcon from "./icons/TailwindIcon";
import TypescriptIcon from "./icons/TypescriptIcon";
import VisualStudioIcon from "./icons/VisualStudioIcon";
import VSCodeIcon from "./icons/VSCodeIcon";

export const sidebarTabs = [
  {
    title: "ABOUT",
    link: "/",
  },
  {
    title: "PROJECTS",
    link: "/projects",
  },
  {
    title: "BUILDS",
    link: "/builds",
  },
  {
    title: "SKILLS",
    link: "/skills",
  },
];
export const projects = [
  {
    title: "Food Ordering App",
    description:
      "An engaging web app for an online food ordering company, offering an intuitive user experience paired with a delectable menu that promises to satisfy every craving.",
    tech: [
      "React",
      "Node JS",
      "MongoDB",
      "Express JS",
      "Json Web Tokens",
      "REST API",
    ],
    images: [
      "./images/food1.png",
      "./images/food2.png",
      "./images/food3.png",
      "./images/food4.png",
      "./images/food5.png",
      "./images/food6.png",
    ],
    link: "https://singametfoodapp.netlify.app/",
  },
  {
    title: "More Brain",
    description:
      "A second brain app. Grow your knowledge base, add important links to come back to and share with others.",
    tech: ["React", "Typecript", "MongoDB", "Express JS", "Json Web Tokens"],
    images: [
      "./images/more-brain.png",
      "./images/brain1.png",
      "./images/brain2.png",
      "./images/brain3.png",
      "./images/brain4.png",
      "./images/brain5.png",
    ],
    link: "https://more-brain.vercel.app/shared/1a4cdcf68342f83",
  },
  {
    title: "Sudoku",
    description:
      "Sudoku made simple—just you, the grid, and endless number-crunching fun!",
    tech: ["Typecript", "React", "CSS"],
    images: ["./images/sudoku.png"],
    link: "https://singamet-sudoku.netlify.app/",
  },
  {
    title: "Weather App",
    description:
      "Simple weather insights, served with a touch of sunshine and sass.",
    tech: ["Javascript", "React", "CSS", "REST API"],
    images: ["./images/weather.png"],
    link: "https://singametweatherapp.netlify.app/",
  },
];
export const builds = [
  {
    title: "Xpense Split",
    description: "Split your expenses amongst your friends/family.",
    tech: [".NET Core", "React", "SQL", "C#", "Json Web Tokens"],
    images: ["./images/xpense-split.png"],
    link: "",
  },
  {
    title: "More Brain",
    description:
      "A second brain app. Grow your knowledge base, add important links to come back to and share with others.",
    tech: ["React", "Typecript", "MongoDB", "Express JS", "Json Web Tokens"],
    images: ["./images/more-brain.png"],
    link: "",
  },
];

export const skills = [
  {
    title: "Languages",
    elements: ["Javascript", "C#", "Python", "Typescript"],
  },
  {
    title: "Front-End",
    elements: ["React", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Back-End",
    elements: ["Node JS", "Next JS", ".NET Core", "REST API"],
  },
  {
    title: "Storage",
    elements: ["MongoDB", "SQL", "Postgres", "Firebase"],
  },
  {
    title: "Tools / Version Control",
    elements: ["VS Code", "Visual Studio", "Postman", "Git", "Github"],
  },
  {
    title: "Dev-Ops - Fundamentals",
    elements: ["Docker", "Kubernetes", "AWS", "Azure"],
  },
];

export const elements = [
  {
    title: "React",
    icon: <ReactIcon className="h-8 w-8" />,
  },
  {
    title: "AWS",
    icon: <AwsIcon className="h-8 w-8" />,
  },
  {
    title: "Azure",
    icon: <AzureIcon className="h-8 w-8" />,
  },
  {
    title: "C#",
    icon: <CSharpIcon className="h-8 w-8" />,
  },
  {
    title: "CSS",
    icon: <CssIcon className="h-8 w-8" />,
  },
  {
    title: "Docker",
    icon: <DockerIcon className="h-8 w-8" />,
  },
  {
    title: ".NET Core",
    icon: <DotnetIcon className="h-8 w-8" />,
  },
  {
    title: "Express JS",
    icon: <ExpressIcon className="h-8 w-8" />,
  },
  {
    title: "Firebase",
    icon: <FirebaseIcon className="h-8 w-8" />,
  },
  {
    title: "Github",
    icon: <GithubIcon className="h-8 w-8" />,
  },
  {
    title: "Git",
    icon: <GitIcon className="h-8 w-8" />,
  },
  {
    title: "HTML",
    icon: <HTMLIcon className="h-8 w-8" />,
  },
  {
    title: "Javascript",
    icon: <JavascriptIcon className="h-8 w-8" />,
  },
  {
    title: "Json Web Tokens",
    icon: <JWTIcon className="h-8 w-8" />,
  },
  {
    title: "Kubernetes",
    icon: <KubernetesIcon className="h-8 w-8" />,
  },
  {
    title: "MongoDB",
    icon: <MongoDBIcon className="h-8 w-8" />,
  },
  {
    title: "Next JS",
    icon: <NextJSIcon className="h-8 w-8" />,
  },
  {
    title: "Node JS",
    icon: <NodeJSIcon className="h-8 w-8" />,
  },
  {
    title: "Postgres",
    icon: <PostgresIcon className="h-8 w-8" />,
  },
  {
    title: "Postman",
    icon: <PostmanIcon className="h-8 w-8" />,
  },
  {
    title: "Python",
    icon: <PythonIcon className="h-8 w-8" />,
  },
  {
    title: "REST API",
    icon: <RestAPIIcon className="h-8 w-8" />,
  },
  {
    title: "SQL",
    icon: <SQLIcon className="h-8 w-8" />,
  },
  {
    title: "Tailwind CSS",
    icon: <TailwindIcon className="h-8 w-8" />,
  },
  {
    title: "Typescript",
    icon: <TypescriptIcon className="h-8 w-8" />,
  },
  {
    title: "Visual Studio",
    icon: <VisualStudioIcon className="h-8 w-8" />,
  },
  {
    title: "VS Code",
    icon: <VSCodeIcon className="h-8 w-8" />,
  },
];
