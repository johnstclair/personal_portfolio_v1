import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import logoImgJS from "/src/assets/JsSvgParts/JS.svg";
import logoImgLines from "/src/assets/JsSvgParts/Lines.png";
import logoImgBorder from "/src/assets/JsSvgParts/Border.svg";

// eslint-disable-next-line react/prop-types
function Navbar({ skills, aboutMe, hero }) {
  const navigate = useNavigate();

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 50,
      behavior: "smooth",
    });
  };

  const routeChange = (path, elementRef) => {
    navigate(path);

    scrollToSection(elementRef);
  };

  const vars = {
    initial: {
      width: "0%",
    },
    hover: {
      width: "100%",
    },
  };

  return (
    <>
      <div className="topnav">
        <motion.button
          className="logo"
          onClick={() => routeChange("/#hero", hero)}
          initial="initial"
          whileHover="hover"
        >
          JS
          <motion.div variants={vars}>
            <br />
          </motion.div>
        </motion.button>

        <motion.button
          onClick={() => routeChange("/projects")}
          initial="initial"
          whileHover="hover"
        >
          Projects
          <motion.div variants={vars}>
            <br />
          </motion.div>
        </motion.button>

        <motion.button
          onClick={() => routeChange("/#skills", skills)}
          initial="initial"
          whileHover="hover"
        >
          Skills
          <motion.div variants={vars}>
            <br />
          </motion.div>
        </motion.button>

        <motion.button
          onClick={() => routeChange("/#aboutMe", aboutMe)}
          initial="initial"
          whileHover="hover"
        >
          About Me
          <motion.div variants={vars}>
            <br />
          </motion.div>
        </motion.button>
      </div>
    </>
  );
}

export default Navbar;
