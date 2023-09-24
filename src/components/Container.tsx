// import React from "react";

// // How to type style as props
// type ContainerProps = {
//   styles: React.CSSProperties; // type properties for passing styles or css
// };

// // const Container = (props: ContainerProps) => {
// //   return <div style={props.styles}>Text content goes here </div>;
// // };

// // export default Container;

// // Props Type Tips in React TS
// // Destructuring props  when defining the component like this

// const Container = ({ styles }: ContainerProps) => {
//   return <div style={styles}>Text content goes here </div>;
// };

// // we can also do this if we have 2 or more props

// export default Container;

// second exporting types moving the type of Props to another file and export it then import it in the file we want to work example  i am gonna create containerProps.tsx and create a type props over there let's copy first the code above

import React from "react";
import { ContainerName } from "./ContainerProps.type"; // import the export type Props from file

const Container = ({ name }: ContainerName) => {
  return <div>{name}</div>;
};

export default Container;
