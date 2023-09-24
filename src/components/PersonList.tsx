import React from "react";

type NamelistProps = {
  // to define the array of object is we need to {object} and [string]
  namelist: {
    first: string;
    last: string;
  }[];
};

const PersonList = (props: NamelistProps) => {
  return (
    <div>
      <span>Typing an array in TS</span>
      <div>
        {props.namelist.map((name) => (
          <h2>
            {name.first} {name.last}
          </h2>
        ))}
        {/* since it's from array we can do the code below what we need to do is map it over or iterate */}
        {/* <h2>{props.namelist.first} Wayne</h2>
        <h2>{props.namelist.first} Ko</h2>
        <h2>{props.namelist.first} Lee</h2> */}
      </div>
    </div>
  );
};

export default PersonList;
