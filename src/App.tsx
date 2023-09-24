import React from "react";
import "./App.css";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Body from "./components/Body";

function App() {
  // passing an object prop
  const personName = {
    firstName: "Wency",
    lastName: "Lacuata",
  };

  //   passing an array of object
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
      <Person name={personName} />
      <PersonList namelist={nameList} />
      <Status status="Success" />
      {/* children tag  */}
      {/* <Heading>Placeholder text </Heading> */}

      {/* children with another children */}
      <Body>
        <Heading>Body</Heading>
      </Body>
    </div>
  );
}

export default App;
