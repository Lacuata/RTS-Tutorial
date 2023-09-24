import React from "react";
import Toast from "./Toast";

const App = () => {
  return (
    <div>
      <Toast position="Center" />
      {/* it can also have a problem if the position is Center-Center  which bring us in another feature in TS which is the exclude keyword for the position props we can specify the Exclude<> after we're done in Toast.tsx we can just specify Center as Center-Center*/}
    </div>
  );
};

export default App;
