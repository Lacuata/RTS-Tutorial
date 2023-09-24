import React, { useState } from "react";

const LoggedIn = () => {
  const [login, setLogin] = useState<boolean>(true);
  const handleLogin = () => {
    setLogin(true);
  };
  const handleLogout = () => {
    setLogin(false);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is{login ? "User Logged In." : "User Logged Out."}</div>
    </div>
  );
};

export default LoggedIn;
