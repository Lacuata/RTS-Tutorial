import React from "react";

// typing an object props
type PersonProfs = {
  name: {
    firstName: string;
    lastName: string;
  };
};

const Person = (props: PersonProfs) => {
  return <div>{props.name.firstName}</div>;
};

export default Person;
