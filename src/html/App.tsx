import React from "react";
import Button from "./Button";

const App = () => {
  return (
    <div>
      <Button variant="primary" onClick={() => console.log("Clicked")}>
        {/* <div>Button</div> // old since we want string only removve div don't need it anymore*/}
        Primary Button
        {/* let say we want to restrict children type to just string */}
      </Button>
    </div>
  );
};

export default App;
