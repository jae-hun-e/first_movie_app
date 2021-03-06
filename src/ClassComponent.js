import React from "react";
// import PropTypes from "prop-types";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }
  state = {
    count: 0,
  };
  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };

  componentDidMount() {
    console.log("component firat mount");
  }
  componentDidUpdate() {
    console.log("component update");
  }
  componentWillUnmount() {
    console.log("good bye");
  }
  render() {
    console.log("rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default ClassComponent;
