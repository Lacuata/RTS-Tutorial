// import React, { useState } from "react";

// type AuthUser = {
//   name: string;
//   email: string;
// };

// const User = ({ name, email }: AuthUser) => {
//   // UseState Future Value whose value can be a different type in future compared to initial value
//   //AuthUser = future Value | = Or null = initial value which means null o wala / pwede ren True or false as boolean but since we set it to the future value we use AuthUser so when we click handleLogin it automatically turn the type to authUser which is true same to logout
//   const [loginUser, setLoginUser] = useState<AuthUser | null>(null); // means unicon useState type means either user is AuthUser | null  or Null
//   const handleLogin = () => {
//     setLoginUser({
//       name,
//       email,
//     });
//   };
//   const handleLogout = () => {
//     setLoginUser(null);
//   };

//   const loggedInfo = loginUser ? "User Logged In." : "User Logged Out.";
//   return (
//     <div>
//       <button onClick={handleLogin}>Login</button>
//       <button onClick={handleLogout}>Logout</button>
//       {loginUser ? (
//         <div>
//           User name is {name} is {loggedInfo}{" "}
//         </div>
//       ) : (
//         <div>Please Log in {loggedInfo}</div>
//       )}
//       <div>User email is {email} </div>
//     </div>
//   );
// };

// export default User;

// another example we want the user to be never be null in the future example set the user in useEffect hook and let's also asumes you cannot log out in this cases we can if we want to use type assertion to let typescript know that user is always type auth user and won't be null like this

import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = ({ name, email }: AuthUser) => {
  const [loginUser, setLoginUser] = useState<AuthUser>({} as AuthUser); // this is type assertion we use the asked keyword instead of null | authUser  we can just specify type as AuthUserand for initial value we set an empty {} as AuthUser this will allow us to access .name and .email without ? to check

  //   what we're doing is basically telling we know better than  compiler and we are infact lying to typescript that the empty object is of type authuser  it means that we are confident that user will be initialized soon after setup and will always have a value after we can user type assertion like this if not it's better to leave that before
  const handleLogin = () => {
    setLoginUser({
      name,
      email,

      //   if we set name and email as ""
      //   name: "Ciaoo",
      //   email: "ciaoomir@gmail.com",
    });
  };
  //   const handleLogout = () => {
  //     setLoginUser(null);
  //   };

  const loggedInfo = loginUser ? "User Logged In." : "User Logged Out.";
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      {loginUser ? (
        <div>
          User name is {name} is {loggedInfo}{" "}
        </div>
      ) : (
        <div>Please Log in {loggedInfo}</div>
      )}
      <div>User email is {email} </div>
    </div>
  );
};

export default User;
