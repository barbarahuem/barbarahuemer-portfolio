import "./Projects.css";

import { Link } from "react-router";

import pöllhuber from "../assets/images/pöllhuber.webp";
import mocoro from "../assets/images/mocoro.webp";
import nutrix from "../assets/images/nutrix.webp";
import photoApp from "../assets/images/photo-app.webp";

function Projects() {
  const projects = [
    {
      name: "Pöllhuber Holz",
      description:
        "Website for local woodsupplier Pöllhuber Holz for ordering products. Built with React, TypeScript and desingned with Figma.",
      image: pöllhuber,
      link: "https://www.poellhuber-holz.at/",
    },
    {
      name: "Mocoro",
      description:
        "An order terminal for a modular cocktail robot. Built with ReactNative, TypeScript and desingned with Figma.",
      image: mocoro,
      link: "",
    },
    {
      name: "Nutrix",
      description:
        "A nutrition app with meal suggestions. Built with Vue and desingned with Figma.",
      image: nutrix,
      link: "",
    },
    {
      name: "Destructive Design",
      description:
        "Project that explores destructive design inspired by the physical world in a digital space.",
      image: photoApp,
      link: "",
    },
  ];

  return (
    <div className="projects">
      <div>
        <h1>Projects</h1>
        <p>
          Here are some of the projects I have worked on. They range from{" "}
          <span>web applications</span> to <span>design experiments</span>, each
          reflecting a different aspect of my skills and interests. I enjoy
          taking on new challenges and learning from each project, whether it’s
          a client work or a personal exploration. If you want to know more
          about any of these projects or have an idea for a collaboration, feel
          free to reach out! I’m always open to new opportunities and
          connections in the tech and design world.
        </p>
      </div>
      <div className="projects_grid">
        {projects.map((project, index) => (
          <div key={index} className="grid_item">
            <div className="image_container">
              <img
                src={project.image}
                alt={`Project ${project.description}`}
                loading="lazy"
                width={800}
                height={450}
              />
            </div>
            <div className="project_description">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              {project.link && <Link to={project.link}>View Project</Link>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
