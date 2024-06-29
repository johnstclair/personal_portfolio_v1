import { useNavigate } from "react-router-dom";

import Navbar from "./Navbar";
import Project from "./Project";

import htmlImg from "/src/assets/html.png";
import antsImg from "/src/assets/ants.png";
import armImg from "/src/assets/arm.png";

function Projects() {
  const navigate = useNavigate();

  const redirectSite = (page) => {
    navigate(page);
  };

  return (
    <>
      <Navbar />
      <div className="projects section" id="projects">
        <h1>Projects - Images link to project</h1>
        <div className="tileSection">
          <Project
            click={() => redirectSite("/")}
            reference={"https://github.com/johnstclair/TAADDA_CPU"}
            useReference={true}
            header={"T.A.A.D.D.A CPU"}
            paragraph={
              "One of my more recent and time consuming projects, was building and designing a virtual computer, with an special ARM-like architecture."
            }
            imagePath={armImg}
            imageWidth={"100%"}
          />
          <Project
            click={() => redirectSite("/")}
            reference={"https://gangagames.itch.io/anzz"}
            useReference={true}
            header={"Anzz"}
            paragraph={
              "Anzz is a small, silly project I worked on for school to learn Godot Mono (C#).  It's a simulation where ants utilize pheromones to gather food as efficiently as possible. I've stopped devolpment on it, but I may continue in the future."
            }
            imagePath={antsImg}
            imageWidth={"100%"}
          />
          <Project
            click={() => redirectSite("/")}
            reference={""}
            useReference={false}
            header={"Personal Portfolio"}
            paragraph={
              "This website! I have used my knowledge of Javascript, HTML, CSS and React to create my very own personal portfolio!"
            }
            imagePath={htmlImg}
            imageWidth={"100%"}
          />
        </div>
      </div>
    </>
  );
}

export default Projects;

/* 
more technical font
*/
