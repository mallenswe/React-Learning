import React, { Component } from "react";
// import Radium, { StyleRoot } from "radium";
// import styled from "styled-components";
import "./App.css";

import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
// import Validation from "../components/Validation/Validation";
// import UserName from "../components/UserName/UserName";

// import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

// const StyledButton = styled.button`
//   background-color: ${props => props.toggleColors ? 'red' : '#26b38c'};
//   color: white;
//   font: inherit;
//   border: 1px solid #178849;
//   padding: 8px;
//   margin: 8px;
//   cursor: pointer;
//   &:hover {
//     background-color: ${props => props.toggleColors ? 'salmon' : 'lightgreen'};
//     color: black;
//   }
// `

class App extends Component {
  state = {
    persons: [
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
    showpersons: false,
    chars: "",
  };

  // switchNameHandler = (newName) => {
  //   // console.log('was clicked');
  //   // DON'T DO THIS: this.state.persons[0].age = Math.floor(Math.random() * 30);
  //   this.setState({
  //     persons: [
  //       { name: "Cheeseburger", age: Math.floor(Math.random() * 30) },
  //       { name: "Jooje", age: Math.floor(Math.random() * 30) },
  //       { name: newName, age: Math.floor(Math.random() * 30) },
  //     ],
  //   });
  // };

  nameChangedHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex(
      (person) => person.id === personId
    );

    // const person = Object.assign({}, this.state.persons[personIndex]);

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons: persons });
    // this.setState({
    //   persons: [
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
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglepersons = () => {
    const togglepersons = !this.state.showpersons;
    this.setState({ showpersons: togglepersons });
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
    // const style = {
    //   backgroundColor: "#26b38c",
    //   color: "white",
    //   font: "inherit",
    //   border: "1px solid #178849",
    //   padding: "8px",
    //   margin: "8px",
    //   cursor: "pointer",
    //   ":hover": {
    //     backgroundColor: "lightgreen",
    //     color: "black",
    //   },
    // };

    let persons = null;

    if (this.state.showpersons) {
      persons = <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />

      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "white",
      // };
    }

    return (
      // <StyleRoot>
      <div className="App">
        <Cockpit
          title = {this.props.appTitle}
          showPersons={this.state.showpersons}
          persons={this.state.persons}
          clicked={this.togglepersons}
        />

        {persons}

        {/* <UserName
        
        />

        <Validation

        /> */}
      </div>
      // </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App 💞!!!'))
  }
}

// export default Radium(App);
export default App;
