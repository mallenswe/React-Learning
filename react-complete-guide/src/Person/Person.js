import React from "react";

const person = (props) => {
  return (
    <div>
      <p>
        I'm {props.name} and I'm {props.age} years old!
      </p>
      <small>{props.children}</small>
    </div>
  );
};

export default person;
