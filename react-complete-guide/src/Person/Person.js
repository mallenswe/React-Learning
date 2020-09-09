import React from "react";
// import Radium from 'radium';
import styled from "styled-components";
import "./Person.css";

const StyledDiv = styled.div`
  background-color: #f1f1f1;
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  box-shadow: 0 2px 3px rgba(1, 1, 1, 0.3);
  width: 60%;
  margin: 15px auto;
  padding: 8px;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const person = (props) => {
  // const style = {
  //   "@media (min-width: 500px)": {
  //     width: "450px",
  //   },
  // };
  return (
    // <div className="Person" style={style}>
    <StyledDiv>
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} years old!
      </p>
      <p>
        <small>{props.children}</small>
      </p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
  );
};

// export default Radium(person);
export default person;
