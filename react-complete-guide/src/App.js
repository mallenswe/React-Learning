import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";
import UserInput from "./BaseSyntaxAssignment/UserInput/UserInput";
import UserOutput from "./BaseSyntaxAssignment/UserOutput/UserOutput";

import ValidationComponent from "./ListConditionalAssignment/ValidationComponent/Validation";
import CharComponent from "./ListConditionalAssignment/CharComponent/Char";

class App extends Component {
  state = {
    people: [
      { id: "p01", name: "Cheeseburger", age: 29 },
      { id: "p02", name: "Jooje", age: 29 },
      {
        id: "p03",
        name: "Chicken Nugget",
        age: Math.floor(Math.random() * 30),
      },
    ],
    otherState: "Some Other Values",
    userName: "Cheeseburger",
    showPeople: false,
    chars: "",
  };

  // switchNameHandler = (newName) => {
  //   // console.log('was clicked');
  //   // DON'T DO THIS: this.state.people[0].age = Math.floor(Math.random() * 30);
  //   this.setState({
  //     people: [
  //       { name: "Cheeseburger", age: Math.floor(Math.random() * 30) },
  //       { name: "Jooje", age: Math.floor(Math.random() * 30) },
  //       { name: newName, age: Math.floor(Math.random() * 30) },
  //     ],
  //   });
  // };

  nameChangedHandler = (event, personId) => {
    const personIndex = this.state.people.findIndex(
      (person) => person.id === personId
    );

    // const person = Object.assign({}, this.state.people[personIndex]);

    const person = {
      ...this.state.people[personIndex],
    };

    person.name = event.target.value;

    const people = [...this.state.people];

    people[personIndex] = person;

    this.setState({ people: people });
    // this.setState({
    //   people: [
    //     { name: "Cheeseburger", age: Math.floor(Math.random() * 30) },
    //     { name: "Jooje", age: Math.floor(Math.random() * 30) },
    //     { name: event.target.value, age: Math.floor(Math.random() * 30) },
    //   ],
    // });
  };

  userNameChangedHandler = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  deletePersonHandler = (personIndex) => {
    // const people = this.state.people.slice();
    const people = [...this.state.people];
    people.splice(personIndex, 1);
    this.setState({ people: people });
  };

  togglePeople = () => {
    const togglePeople = !this.state.showPeople;
    this.setState({ showPeople: togglePeople });
  };

  charChangeHandler = (event) => {
    this.setState({
      chars: event.target.value,
    });
  };

  deleteCharHandler = (charIndex) => {
    const word = [...this.state.chars.split("")];
    word.splice(charIndex, 1);
    this.setState({ chars: word.join("") });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid #234ec4",
      padding: "8px",
      margin: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPeople) {
      persons = (
        <div>
          {this.state.people.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                // click={this.switchNameHandler.bind(this, "Chicken Nugget!")}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

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
      <div className="App">
        <h1>
          I'm a React App
          <span className="App-logo" role="img" aria-label="money tongue emoji">
            🤑
          </span>
          <span className="App-logo" role="img" aria-label="swirling hearts">
            💞
          </span>
        </h1>
        {/* <button
          style={style}
          onClick={() => this.switchNameHandler("French Fries")}
        >
          Switch Name
        </button> */}
        <button style={style} onClick={this.togglePeople}>
          Toggle People
        </button>
        {persons}

        <UserInput
          userName={this.state.userName}
          changed={this.userNameChangedHandler}
        ></UserInput>
        <UserOutput userName={this.state.userName}></UserOutput>
        <div>
          <h4>Lists And Conditionals Assignment</h4>
          <input
            type="text"
            onChange={this.charChangeHandler}
            value={this.state.chars}
          />
          <ValidationComponent
            length={this.state.chars.length}
          ></ValidationComponent>
          {chars}
        </div>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App 💞!!!'))
  }
}

export default App;
