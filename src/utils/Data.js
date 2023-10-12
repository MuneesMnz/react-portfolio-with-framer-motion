import { FaReact, FaNode, FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";

export const Skills = [
  {
    id: 0,
    tech: "React JS",
    icon: <FaReact />,
  },
  {
    id: 1,
    tech: "Node JS",
    icon: <FaNode />,
  },
  {
    id: 2,
    tech: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    id: 3,
    tech: "Javascript",
    icon: <SiJavascript />,
  },
];

export const ProjectDetailes = [
  {
    id: 0,
    project_name: "Restaurant App",
    project_desc:
      "accusantium ratione blanditiis rerum corrupti commodi, incidunt,nulla eligendi nemo animi reiciendis! Vero adipisci rerumrepellendus. Lorem ipsum dolor sit amet consectetur adipisicingelit. Tempora, obcaecati? Voluptatibus consequatur inventore sitofficiis, unde corporis error accusantium vel?",
    tect_stack: ["React JS", "Tailwind", "Firebase"],
    project_img: Project1,
    project_url: "https://www.google.com",
    reverse: false,
  },
  {
    id: 1,
    project_name: "Animax ",
    project_desc:
      "accusantium ratione blanditiis rerum corrupti commodi, incidunt,nulla eligendi nemo animi reiciendis! Vero adipisci rerumrepellendus. Lorem ipsum dolor sit amet consectetur adipisicingelit. Tempora, obcaecati? Voluptatibus consequatur inventore sitofficiis, unde corporis error accusantium vel?",
    tect_stack: ["React JS", "Firebase"],
    project_img: Project2,
    project_url: "https://www.google.com",
    reverse: true,
  },
];
export const navLinks = [
  {
    id: 0,
    name: "Home",
    href: "Home",
  },
  {
    id: 1,
    name: " My Skills",
    href: "Skills",
  },
  {
    id: 0,
    name: "Mt Projects",
    href: "Project",
  },
  {
    id: 0,
    name: "Contact",
    href: "Contact",
  },
];
