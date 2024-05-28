import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import logoImg from "/src/assets/JS_Logo_No_Bg.png";

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
        <button className="logo" onClick={() => routeChange("/#hero", hero)}>
          <img alt="Logo" src={logoImg} />
        </button>

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
