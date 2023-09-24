import React from "react";
type statusProps = {
  status: "Success" | "Loading" | "Error";
};

const Status = (props: statusProps) => {
  let message;

  if (props.status === "Loading") {
    message = "Loading...";
  } else if (props.status === "Success") {
    message = "Data fetched sucessfully!";
  } else if (props.status === "Error") {
    message = "Error Fetching Data";
  } else {
    message = "not assignable type";
  }
  // status component
  return (
    <div>
      {/* only render 1 of this status depending on a prop passed in */}
      {/* <h2>Loading...</h2>
      <h2>Data Fetched Sucessfully!</h2>
      <h2>Error Fetching Data</h2> */}

      {/* in tsx  */}
      <h2>Status = {message}</h2>
    </div>
  );
};

export default Status;
