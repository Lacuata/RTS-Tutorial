import React, { Component } from "react";
import Counter from "./Counter";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Counter message="Count: " /> */}
        <Counter message=" The Count is: " />
      </div>
    );
  }
}
