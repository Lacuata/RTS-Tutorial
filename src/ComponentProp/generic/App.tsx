import React from "react";
import List from "./Generic";

const App = () => {
  return (
    <div className="App">
      {/* array of string */}
      {/* <List
        items={["Batman", "Superman", "Victor Magtangol"]}
        onClick={(item) => console.log(item)}
      /> */}
      {/* array of numbers List of number and handle the click on each number */}
      {/* <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}

      {/* Comment out the first 2 list we're gonna mentioning object id  */}

      {/* array of objects we're gonna add the type using generics  */}
      <List
        items={[
          {
            first: "Ciaoo",
            last: "Mir",
            // all wwe have todo is add id
            id: 1,
          },
          {
            first: "Eimi",
            last: "Fukuda",
            id: 2,
          },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
};

export default App;

// Generic props is a typescript feauture that are very useful when building react components
