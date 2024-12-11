import React, { Component } from "react";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import { Transition, animated } from "react-spring";

export default class App extends Component {
  state = {
    showComponent3: false,
  };
  toggle = () => {
    this.setState((prevState) => ({
      showComponent3: !prevState.showComponent3,
    }));
  };

  render() {
    return (
      <div>
        <Component1 />
        <Component2 toggle={this.toggle} />
        <Transition
          items={this.state.showComponent3}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
          config={{ duration: 2000 }}>
          {(styles, item) =>
            item && (
              <animated.div style={styles}>
                <Component3 />
              </animated.div>
            )
          }
        </Transition>
      </div>
    );
  }
}
