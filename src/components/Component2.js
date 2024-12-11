import React from "react";
import { useSpring, animated } from "react-spring";

const Component2 = ({ toggle }) => {
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { delay: 1000, duration: 1500 },
  });

  return (
    <animated.div style={styles}>
      <div style={c2Style}>
        <h1>Component 2</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
          nobis adipisci eum minima deserunt at porro, veritatis officia commodi
          itaque voluptates vel suscipit assumenda soluta ipsa voluptatibus
          laudantium labore harum?
        </p>
        <button style={btn} onClick={toggle}>
          Toggle Component 3
        </button>
      </div>
    </animated.div>
  );
};
const c2Style = {
  background: "slateblue",
  color: "white",
  padding: "1.5rem",
};
const btn = {
  background: "#333",
  color: "#fff",
  padding: "1rem 2rem",
  border: "none",
  textTransform: "upperCase",
  margin: "15px 0",
};
export default Component2;
