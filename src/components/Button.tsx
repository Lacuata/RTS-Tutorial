import React from "react";
// passing an event as profs in TS click and change event
// type ButtonProps = {
//   handleClick: () => void; //doesn't return anything void undefined means
// };

// another variant of this click handler  is when we need the event passed in to our  click handle but what exactly this type event ? for that once again we need to rely in react type event: React.MouseEvent
type ButtonProps = {
  //   handleClick: (event: React.MouseEvent) => void; //doesn't return anything void undefined means
  //   to be more specific we can include the html of it like saying this is a button click by adding <HTMLButtonElement>
  //   handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;

  //   also if we want to have an id  like this but we need to pass the event and id in button and in the props in app.tsx
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button = (props: ButtonProps) => {
  return (
    <div>
      <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
    </div>
  );
};

export default Button;
