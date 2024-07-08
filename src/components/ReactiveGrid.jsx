/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { animate, motion, stagger, transform } from "framer-motion";

const ReactiveGrid = ({ containerRef }) => {
  const [gridDimensions, setGridDimensions] = useState({ columns: 0, rows: 0 });
  const gridRef = useRef(null);

  useEffect(() => {
    const updateGrid = () => {
      if (containerRef.current && gridRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const containerHeight = containerRef.current.offsetHeight;

        const tileSize = 50; // Size of each tile
        const columns = Math.floor(containerWidth / tileSize);
        const rows = Math.floor(containerHeight / tileSize);

        setGridDimensions({ columns, rows });

        // Set the grid's dimensions
        gridRef.current.style.width = `${columns * tileSize}px`;
        gridRef.current.style.height = `${rows * tileSize}px`;
      }
    };

    updateGrid();
    window.addEventListener("resize", updateGrid);

    animate(
      ".hero-tiles",
      { background: "#343334" },
      {
        duration: 0.2,
        delay: stagger(0.1, { startDelay: 0.25 }),
      }
    );

    return () => {
      window.removeEventListener("resize", updateGrid);
    };
  }, [containerRef]);

  const dotMotion = {
    rest: {
      background: "#343334",
    },
    hover: {
      scale: 3,
      transition: { duration: 0.2 },
      background: "linear-gradient(to bottom right, var(--a), var(--b))",
    },
  };

  return (
    <div
      ref={gridRef}
      className="hero-tiles"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${gridDimensions.columns}, 50px)`,
        gridTemplateRows: `repeat(${gridDimensions.rows}, 50px)`,
      }}
    >
      {Array.from({ length: gridDimensions.columns * gridDimensions.rows }).map(
        (_, index) => (
          <motion.div
            key={index}
            className="hero-tile"
            initial="rest"
            whileHover="hover"
            variants={dotMotion}
            transition={{ duration: 2 }}
          ></motion.div>
        )
      )}
    </div>
  );
};

export default ReactiveGrid;
