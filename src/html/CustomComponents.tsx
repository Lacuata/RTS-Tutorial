import React from "react";
import { Greet } from "../components/Greet"; // import Greet from compon/greet
// import components props of ther file like this to access it
const CustomComponents = (props: React.ComponentProps<typeof Greet>) => {
  // then if we type props. we can see the suggestion or autocomplete showing exactly on what in Greet.tsx
  return <div>{props.isLoggedIn}</div>;
};

export default CustomComponents;

// LEt say the type component here are same in our 1 file

// So we're able to extract the prop types from 1 components and use them as prop types for another component in this case from  "../components/Greet";  To the custom component or our current component
