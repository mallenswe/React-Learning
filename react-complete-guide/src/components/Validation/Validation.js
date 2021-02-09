import React from "react";

import ValidationComponent from "../../ListConditionalAssignment/ValidationComponent/Validation";
import CharComponent from "../../ListConditionalAssignment/CharComponent/Char";


const validation = (props) => {
    let chars = null;
    let charDivStyle = {
      margin: "32px",
    };
    if (this.state.chars) {
      chars = (
        <div style={charDivStyle}>
          {this.state.chars.split("").map((char, index) => {
            return (
              <CharComponent
                char={char}
                key={index}
                click={() => this.deleteCharHandler(index)}
              />
            );
          })}
        </div>
      );
    }
  return (
    <div>
      <h4>Lists And Conditionals Assignment</h4>
      <input
        type="text"
        onChange={this.charChangeHandler}
        value={props.chars}
      />
      <ValidationComponent
        length={props.chars.length}
      ></ValidationComponent>
      {chars}
    </div>
  );
};

export default validation;
