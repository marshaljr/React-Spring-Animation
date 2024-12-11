import React from "react";
import { useSpring, animated } from "react-spring";
// import { Spring, config } from "react-spring";
export default function Component1() {
  const styles = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1, marginTop: 0 },
  });
  const counterStyles = useSpring({
    from: { number: 0 },
    to: { number: 10 },
    config: { duration: 10000 },
  });
  return (
    <animated.div style={styles}>
      <div style={c1Style}>
        <h1>Component 1</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
          nobis adipisci eum minima deserunt at porro, veritatis officia commodi
          itaque voluptates vel suscipit assumenda soluta ipsa voluptatibus
          laudantium labore harum?
        </p>
        <animated.div style={counter}>
          {counterStyles.number.to((val) => Math.floor(val))}
        </animated.div>
      </div>
    </animated.div>
  );
}
const c1Style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem",
};
const counter = {
  background: "#333",
  textAlign: "center",
  width: "50px",
  height: "40px",
  borderRadius: "50%",
  margin: "1rem auto",
  display: "flex",
  justifyContent: "center",
  paddingTop: "4px",
  fontSize: "30px",
};
