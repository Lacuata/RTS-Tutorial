// Working with TS and Rect Context useContext we're gonna use to view the context value also friendly reminder this video is not about context api itself but rather typing the context api

import React from "react";
import ThemeContextProvider from "./ThemeContext";
import Box from "./Box";
// step 4 import user and userContext
import User from "./User";
import UserContextProvider from "./UserContext";

const App = () => {
  return (
    <div>
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}

      {/* UserContext TS to deal with future Value */}
      {/* step4-b wrap user to userContextProvider */}
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
};

export default App;
