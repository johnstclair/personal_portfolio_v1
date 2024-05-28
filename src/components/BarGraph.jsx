import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// eslint-disable-next-line react/prop-types
function BarGraph({ data }) {
  const base = data;

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
        <p>
          <h1>{base[0]}</h1> <br /> <br />
          {base[1].map((item) => {
            return (
              <>
                {item[0]}
                <div>
                  <motion.div
                    className="skill-bar"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item[1]}%` }}
                    transition={{ duration: 0.75 }}
                  >
                    <div className="bar-words">{item[2]}</div>
                    <br />
                  </motion.div>
                </div>
              </>
            );
          })}
        </p>
      </motion.div>
    </>
  );
}

export default BarGraph;
