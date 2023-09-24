import React, { Component } from "react";
// step 1 define props and state types
type CounterProps = {
  message?: string;
};

type CounterState = {
  count: number;
};

// step 2 connect this type to class component like this and that how we do it
export default class Counter extends Component<CounterProps, CounterState> {
  static defaultProps: CounterProps = {
    message: "The Count Value is: ", // Provide your default message here
  };

  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}

// Class component in tsx
