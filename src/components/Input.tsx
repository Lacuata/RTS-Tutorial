import React from "react";
// second example of event handler passing props
type InputProps = {
  value: string;
  onChange: (event: React.ChangeEvent) => void;
};
const Input = (props: InputProps) => {
  // this input element need 2 props inputValue nad onChange handler

  //   or via handleEvent like this
  const handleEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value); // to use the .value declare the HTMLInputElement of input to get access of vvalue of it
  };

  return (
    <div>
      <input
        type="text"
        // onChange={(event) => console.log(event.target.value)}
        onChange={handleEvent}
        value={props.value}
      />
    </div>
  );
};

export default Input;
