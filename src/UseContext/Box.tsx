import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; //themeContext is the const variable we created that are value is createContext(theme)
// step 3 wrap box component with the provider
const Box = () => {
  const theme = useContext(ThemeContext); // to use the ThemeContext using useContext
  // now we can now add the style props from theme.ts
  return (
    <div
      style={{
        backgroundColor: theme.primary.main, // this is connect to theme.ts that are primary.main same to color
        color: theme.primary.text,
      }}
    >
      Theme Context
    </div>
  );
};

export default Box;

// this is complete example usage of useContext in typescript we got it done without having write any context typscript
