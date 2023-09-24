import React, { useRef, useEffect } from "react"; //invoke useRef

const DomRef = () => {
  // for DomReferences specify the DOM element type
  const inputRef = useRef<HTMLInputElement>(null); // set inputRef as useRef(null) and passing null

  //   access the dom element with useEffecthook
  useEffect(() => {
    inputRef.current?.focus(); //focus on inputRef since focus is error we need to specify the type of focus since it was declared or called in the input get the type of the input
  }, []);
  return (
    <div>
      {/* we set the inputRef as ref in input */}
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default DomRef;

// this file contains a component where we use the ref hook to focus an input element when component mounts
