// UseState is greate for simple state values however if we  have complex state logic where the next state depends on the prev State we use useReducer

import React from "react";
// import LoggedIn from "./state/LoggedIn";
import User from "./state/User";

const App = () => {
  return (
    <div>
      {/* <LoggedIn /> */}
      {/* <User name="Ciaoo" email="ciaoomir@gmail.com" /> */}

      {/* for assertion type */}
      {/* <User name="" email="" /> */}
      <User name="Ciaoo" email="ciaoomir@gmail.com" />
    </div>
  );
};

export default App;
