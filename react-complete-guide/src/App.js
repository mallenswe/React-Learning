import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  state = {
    people: [
      { name: "Cheeseburger", age: 29 },
      { name: "Jooje", age: 29 },
      { name: "Chicken Nugget", age: Math.floor(Math.random() * 30) },
    ],
    otherState: 'Some Other Values'
  };

  switchNameHandler = () => {
    // console.log('was clicked');
    // DON'T DO THIS: this.state.people[0].age = Math.floor(Math.random() * 30);
    this.setState({
      people: [
        { name: "Cheeseburger", age: Math.floor(Math.random() * 30) },
        { name: "Jooje", age: 29 },
        { name: "Chicken Nugget", age: Math.floor(Math.random() * 30) },
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>I'm a React App <span className="App-logo" role="img" aria-label="money tongue emoji">🤑</span></h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.people[0].name}
          age={this.state.people[0].age}
        />
        <Person name={this.state.people[1].name} age={this.state.people[1].age}>
          My Hobbies: Programming
        </Person>
        <Person
          name={this.state.people[2].name}
          age={this.state.people[2].age}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App 💞!!!'))
  }
}

export default App;
