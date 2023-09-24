import React from "react";
import { Name } from "./Extract.type";

type PersonNameListProps = {
  names: Name[]; // we called the Nameabove with[] means name: Name[array] name is type Name[array] or name is an array
};

const Extract = (props: PersonNameListProps) => {
  return (
    <div>
      {props.names.map((name) => (
        <li>{name.first}</li>
      ))}
      {/* since it an array we need to iterate it or map it this code below not gonna work  */}
      {/* {props.first} */}
    </div>
  );
};

export default Extract;
