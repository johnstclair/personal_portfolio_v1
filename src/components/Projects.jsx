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
            reference={""}
            useReference={false}
            header={"Anzz - WIP"}
            paragraph={
              "Anzz is a small project I'm working on in school to learn Godot Mono (C#).  It is a simulation where ants use pheromones to gather food as efficiently as possible, it should be available to play by mid June."
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
