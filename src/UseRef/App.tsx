import React from "react";
import DomRef from "./DomRef";
import MuttableRef from "./MuttableRef";

const App = () => {
  return (
    <div>
      <DomRef />
      <MuttableRef />
    </div>
  );
};

export default App;

// when it comes to useRef there are 2 primarily scenarios
// read-only ref for a dom element
// mutable value which behave like instance variable
