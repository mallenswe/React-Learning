import React from "react";

import UserInput from "../../BaseSyntaxAssignment/UserInput/UserInput";
import UserOutput from "../../BaseSyntaxAssignment/UserOutput/UserOutput";

// import UserInput from "../../BaseSyntaxAssignment/UserInput/UserInput";


const username = (props) => {
  return (
    <div>
      <UserInput
        userName={this.state.userName}
        changed={this.userNameChangedHandler}
      ></UserInput>
      <UserOutput userName={this.state.userName}></UserOutput>
    </div>
  );
};

export default username;
