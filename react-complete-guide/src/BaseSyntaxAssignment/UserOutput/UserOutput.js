import React from "react";
import "./UserOutput.css";

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>UserName: {props.userName}</p>
      <p>Change the user name with the input.</p>
    </div>
  );
};

export default userOutput;
