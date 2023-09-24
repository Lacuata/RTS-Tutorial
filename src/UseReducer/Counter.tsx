import React, { useReducer } from "react";

type CounterState = {
  count: number;
};

type updateAction = {
  type: "increment" | "decrement";
  payload: number; // and the payload is a number
};

type ResetAction = {
  type: "reset"; //ignore the payload
};
// without payload update it to value of update | Reset so it's gonna work without a payload
type CounterAction = updateAction | ResetAction;

// with payload
// type CounterAction = {
//   //   type: string; // we can see it in our swtich that our type action is a string
//   //   we can also specific in our type that is only for "increment" | 'decrement' other types is gonna be error like this
//   type: "increment" | "decrement" | "reset"; //this means only increment or decrement type are allowed or we can add more what type we want so when we try to change the type in button other than incre and decre it's gonna throw an error
//   payload: number; // and the payload is a number
// };

const initialState = { count: 0 }; // initial state that set count = 0

function reducer(state: CounterState, action: CounterAction) {
  // need to specify the type of state and actions  state object with 1 property count value is a number
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const increment = () => dispatch({ type: "increment", payload: 10 });
  const decrement = () => dispatch({ type: "decrement", payload: 10 });
  const reset = () => dispatch({ type: "reset" });

  return (
    <div>
      Count: {state.count}
      {/* <button onClick={() => dispatch({ type: "increment", payload: 10 })}> */}
      <button onClick={increment}>Increment 10</button>
      {/* <button onClick={() => dispatch({ type: "decrement", payload: 10 })}> */}
      <button onClick={decrement}>Decrement 10</button>
      {/* <button onClick={() => dispatch({ type: "reset", payload: 0 })}>
        Reset
      </button> */}
      {/* Or we can do it without a payload */}
      {/* <button onClick={() => dispatch({ type: "reset" })}> */}
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
