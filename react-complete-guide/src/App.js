import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";
import UserInput from "./BaseSyntaxAssignment/UserInput/UserInput";
import UserOutput from "./BaseSyntaxAssignment/UserOutput/UserOutput";

class App extends Component {
  state = {
    people: [
      { name: "Cheeseburger", age: 29 },
      { name: "Jooje", age: 29 },
      { name: "Chicken Nugget", age: Math.floor(Math.random() * 30) },
    ],
    otherState: "Some Other Values",
    userName: "Cheeseburger",
    showPeople: false,
  };

  switchNameHandler = (newName) => {
    // console.log('was clicked');
    // DON'T DO THIS: this.state.people[0].age = Math.floor(Math.random() * 30);
    this.setState({
      people: [
        { name: "Cheeseburger", age: Math.floor(Math.random() * 30) },
        { name: "Jooje", age: Math.floor(Math.random() * 30) },
        { name: newName, age: Math.floor(Math.random() * 30) },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      people: [
        { name: "Cheeseburger", age: Math.floor(Math.random() * 30) },
        { name: "Jooje", age: Math.floor(Math.random() * 30) },
        { name: event.target.value, age: Math.floor(Math.random() * 30) },
      ],
    });
  };

  userNameChangedHandler = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  togglePeople = () => {
    const togglePeople = !this.state.showPeople;
    this.setState({ showPeople: togglePeople });
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
          <Person
            name={this.state.people[0].name}
            age={this.state.people[0].age}
          />
          <Person
            name={this.state.people[1].name}
            age={this.state.people[1].age}
          >
            My Hobbies: Programming
          </Person>
          <Person
            name={this.state.people[2].name}
            age={this.state.people[2].age}
            click={this.switchNameHandler.bind(this, "Chicken Nugget!")}
            changed={this.nameChangedHandler}
          />
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
        </h1>
        <button
          style={style}
          onClick={() => this.switchNameHandler("French Fries")}
        >
          Switch Name
        </button>
        <button style={style} onClick={this.togglePeople}>
          Toggle People
        </button>
        {persons}

        <UserInput
          userName={this.state.userName}
          changed={this.userNameChangedHandler}
        ></UserInput>
        <UserOutput userName={this.state.userName}></UserOutput>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App 💞!!!'))
  }
}

export default App;
