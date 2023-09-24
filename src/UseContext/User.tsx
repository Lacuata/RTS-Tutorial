// To deal TS with userContext Hook for the future value
import React, { useContext } from "react";
import { UserContext } from "./UserContext";
// 5th step or final step we will use this context
const User = () => {
  // called UserContext
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    if (userContext) {
      // if userContext  is true
      userContext.setUser({
        //setUser to name and email hardcode
        name: "Ciaoo",
        email: "ciaoomir@gmai.com",
      });
    }
  };
  const handleLogout = () => {
    if (userContext) {
      // if userContext is clicked by handleLogout
      userContext.setUser(null); // setUser to null
    }
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {/* userContext? is optional which means we can declare it or not  it's gonna work*/}
      <div>Username is {userContext?.user?.name}</div>
      <div>email is is {userContext?.user?.email}</div>
    </div>
  );
};

export default User;
