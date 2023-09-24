import React from "react";
import { RandomNumber } from "./RandomNumber";

const App = () => {
  return (
    <div>
      {/* isPositive={true}  = isPositve if value is true why we didn't declare isNega and isZero because our positive is true so they are not allowed*/}
      <RandomNumber value={10} isPositive />{" "}
      {/* if we want to set our nega or isZero to true remove positve and put the props we want to set as true */}
      {/* but in some case we can intend the component to be used what we're gonna do is restrict them or the props if we also set isNega and zero to true means if isPositive is passed in or true isNegative and Zero should not be disallowed similar restrictions with the other 2 props set to true to do that go to randomNumber */}
    </div>
  );
};

export default App;
