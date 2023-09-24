// step 1 create context by importing
import { useState, createContext } from "react";

export type AuthUser = {
  name: string;
  email: string;
};

//step 2 create components provide user value start with props
type userContextProvidedProps = {
  children: React.ReactNode;
};

// step 3-a specify type of contextValue
type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

// set or provide createcontext as null since we don't know the value outside of component
// export const UserContext = createContext<UserContextType | null>(null); //meaning of this the context type is null initially however in the future it could be user context

// this is assertion type to to specify the userContext as usercontextType this allow us to get rid or remove of the null check or this (?) against user context
export const UserContext = createContext({} as UserContextType); //meaning of this the context type is null initially however in the future it could be user context type this is step 3-b

// type this is step 3-b
// the userContext is managing authentication state of user = user should be able to log in and log out if they're logged user provide information like name

// next we define the providedComponents
const UserContextProvider = ({ children }: userContextProvidedProps) => {
  // for our example we want context to provide a function which can be used to log in and log out as well as an object that is of type auth user if they;re logged in

  const [user, setUser] = useState<AuthUser | null>(null);
  //   return userContext.Provider and the child also pass the value to the userContext of the state which is user and set user and we need to specify it
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

// If you think about it a Context always has to be created outside of component whereas its future value will always be set inside a component so there is that gap  needs to be plugged in and the type assertion is how you do it
