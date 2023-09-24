import React, { useState } from "react";
import Private from "./Private";
import Profile from "./Profile";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<null>(null);

  //   const handleLogin = () => {
  //     setIsLoggedIn(true)
  //     // if (isLoggedIn) {
  //     //   <Profile />;
  //     // } else {
  //     //   <Login />;
  //     // }
  //   };
  return (
    <div>
      <Private isLoggedIn={true} component={Profile} />
    </div>
  );
};

export default App;
