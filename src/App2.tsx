import React from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import Extract from "./components/Extract";
const App = () => {
  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Bruce",
      last: "Ko",
    },
    {
      first: "Bruce",
      last: "Lee",
    },
  ];

  return (
    <div className="App">
      {/* <Button
        handleClick={() => {
          console.log("Button Clicked");
        }}
      /> */}

      {/* and in our handleClick props we can use event parameter in a function body or not if we just want to be specific */}
      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      />

      <Input value="" onChange={(event) => console.log(event)} />

      {/* Passing style as props */}
      {/* <Container styles={{ border: "1px solid black", padding: "1 rem" }} /> */}

      {/* passing the props to external file and export it and import */}
      <Container name="Ciaoo" />

      {/* Extracting types to reuse in multiple components */}
      <Extract names={nameList} />
    </div>
  );
};

export default App;
