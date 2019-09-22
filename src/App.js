import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { id:1, name: 'Max', age: 28 },
      { id:2, name: 'Maximilian', age: 29 },
      { id:3, name: 'Stephanie', age: 26 },
    ],
    showPersons: false
  }
  
  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  nameChangedHandler = (evt, index) => {
    let persons = [...this.state.persons];
    persons[index].name = evt.target.value
    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = index => {
    let persons = [...this.state.persons]
    persons.splice(index, 1)
    this.setState({
      persons: persons
    })
  }

  render() {

    const style = {
      color: 'white',
      backgroundColor: 'green',
      border: '1px solid black',
      cursor: 'pointer',
      padding: '7px',
      marginBottom: '10px',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null

    if(this.state.showPersons){
      persons = (<div>
        { this.state.persons.map((person, index) => {
          return (
            <div key={person.id}>
              <Person
                      deletePerson={this.deletePersonHandler} changed={(evt) => this.nameChangedHandler(evt, index)}
                      name={person.name} age={person.age} index={index} />
            </div>
          )
        } )}
      </div>)
    }

    let classes = ['red', 'bold'].join(' ')

    return (
      <StyleRoot>
        <div className="App">
          <h1 className={classes}> The list of people are {this.state.persons.length} </h1>
          <button onClick={this.togglePersonsHandler} style={style}>
            {this.state.showPersons ? 'Hide' : 'Show'} Names</button>
          { persons }
        </div>
      </StyleRoot>
    )
  }
}

export default Radium(App);

