import React from "react";
type BodyProps = {
  children: React.ReactNode; // to pass the child component props on another component and called it here or pass it here
};
const Body = (props: BodyProps) => {
  // another example of children using this body we're gonna render it from headings tag
  return <div>{props.children}</div>;
};

export default Body;
