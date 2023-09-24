import React from "react";
import Login from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};

//props if Loged and component to view if logged in
const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  //  so if we want to pass in a component prop use react.Component type and if that component itself accepts props specify the prop type in <angle bracket>
  if (isLoggedIn) {
    // if user is logged return component to view
    return <Component name="Ciaoo" />;
  } else {
    // return login to login
    return <Login />;
  }
  return <div>Private</div>;
};

export default Private;
