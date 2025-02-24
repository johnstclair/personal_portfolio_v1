import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* eslint-disable react/prop-types */

function Project({
  click,
  reference,
  useReference,
  header,
  paragraph,
  author,
  imagePath,
  imageWidth,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <motion.div
        ref={ref}
        className="tile"
        transition={{ duration: 0.25 }}
        style={{ scale: isInView ? 1 : 0 }}
      >
        {useReference ? (
          <button onClick={() => (location.href = reference)}>
            <img className="project-image" src={imagePath} width={imageWidth} />
          </button>
        ) : (
          <button onClick={click}>
            <img className="project-image" src={imagePath} width={imageWidth} />
          </button>
        )}
        <h1>{header}</h1>
        <h3>{author}</h3>
        <p>{paragraph}</p>
      </motion.div>
    </>
  );
}

export default Project;

/* 
grid effect
maybe blur -> like danny garcia
*/
