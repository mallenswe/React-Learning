import React from "react";

import classes from "./Cockpit.css";

const cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = "btn btn-toggle";
  } else {
    btnClass = "btn";
  }

  if (props.persons.length <= 2) {
    assignedClasses.push("red");
  }

  if (props.persons.length <= 1) {
    assignedClasses.push("bold");
  }

  return (
    <div className="Cockpit">
      <h1>
        I'm a React App
        <span className="App-logo" role="img" aria-label="money tongue emoji">
          🤑
        </span>
        <span className="App-logo" role="img" aria-label="swirling hearts">
          💞
        </span>
      </h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      {/* <button
        style={style}
        onClick={() => this.switchNameHandler("French Fries")}
      >
        Switch Name
      </button> */}
      {/* <button style={style} onClick={this.togglepersons}>
          Toggle persons
        </button> */}
      {/* <StyledButton toggleColors={this.state.showpersons} onClick={this.togglepersons}>
          Toggle persons
        </StyledButton> */}
      <button className={btnClass} onClick={props.clicked}>
        Toggle persons
      </button>
    </div>
  );
};

export default cockpit;
