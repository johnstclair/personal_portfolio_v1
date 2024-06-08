import { useRef, useEffect } from "react";

import Navbar from "./Navbar";
import Type from "./Type";

import BarGraph from "./BarGraph";

import logoImgJS from "/src/assets/JsSvgParts/JS.svg";
import logoImgLines from "/src/assets/JsSvgParts/Lines.png";
import logoImgBorder from "/src/assets/JsSvgParts/Border.svg";

function Home() {
  const skills = useRef(null);
  const aboutMe = useRef(null);
  const hero = useRef(null);

  useEffect(() => {
    const hashFragment = window.location.hash;
    if (hashFragment) {
      const targetElement = document.getElementById(hashFragment.slice(1));
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: "smooth",
        });
      }
    }
  }, []);

  return (
    <>
      <Navbar skills={skills} aboutMe={aboutMe} hero={hero} />

      <div className="hero" ref={hero}>
        <img
          alt="Logo"
          src={logoImgJS}
          width="40%"
          className="leftImage"
          style={{
            zIndex: 2,
            marginLeft: ".65%",
            marginTop: ".1%",
            // filter:
            //  "invert(70%) sepia(13%) saturate(731%) hue-rotate(87deg) brightness(195%) contrast(90%)",
          }}
        />

        <img
          alt="Logo"
          src={logoImgLines}
          width="25%"
          className="leftImage"
          style={{
            zIndex: 1,
            marginTop: "9.6%",
            marginLeft: "8%",
            // filter:
            //  "invert(93%) sepia(27%) saturate(386%) hue-rotate(352deg) brightness(492%) contrast(86%)",
          }}
        />
        <img
          alt="Logo"
          src={logoImgBorder}
          width="40%"
          className="leftImage"
          style={{
            zIndex: 2,
            // filter:
            //  "invert(70%) sepia(13%) saturate(731%) hue-rotate(87deg) brightness(195%) contrast(90%)",
          }}
        />
        <h1>John St. Clair</h1>
        <p>
          <Type />
        </p>
      </div>
      <div className="about-me section" ref={aboutMe} id="aboutMe">
        <h1>About Me</h1>
        <p>
          Hi Everyone,
          <br /> <br />
          {
            "I'm John St. Clair, a student who enjoys computers and learning new things. In the past I have worked with languages such as Javascript, HTML, CSS, Python, C, C# and Java. I have used tools such as Godot, Unity, Github and the MERN stack. I have experience with electrical engineering and programming microcontrollers such as Arduino’s and Raspberry Pi’s."
          }
        </p>
      </div>
      <div className="skills section" ref={skills} id="skills">
        <h1>Skills</h1>
        <div className="tileSection">
          <BarGraph
            data={[
              "Langauges",
              [
                ["Python3", 90, "Expert"],
                ["Javascript", 75, "Expert"],
                ["C#", 70, "Decent"],
                ["Java", 65, "Decent"],
                ["C", 40, "Novice"],
              ],
            ]}
          />
          <BarGraph
            data={[
              "Technologies",
              [
                ["Godot", 91, "Expert"],
                ["MERN Stack", 74, "Decent"],
                ["Terminal", 74, "Decent"],
                ["Arduino", 65, "Decent"],
                ["Unity", 45, "Novice"],
              ],
            ]}
          />
          <BarGraph
            data={[
              "Skills",
              [
                ["Software Devolpment", 92, "Experienced"],
                ["Game Design", 85, "Experienced"],
                ["Collaborative Programming", 70, "Decent"],
                ["Communications", 65, "Decent"],
                ["Documentation", 55, "Decent"],
              ],
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
