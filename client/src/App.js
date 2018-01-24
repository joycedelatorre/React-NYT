import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import './App.css';
import Jumbotron from "./components/Jumbotron";


const styles ={
  heading:{
    color:"white"
  }
}

class App extends Component {
  state ={
    listOfBooks:[],
    topic:"",
    startYear:"",
    endYear:""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.topic} ${this.state.startYear} ${this.state.endYear}`);
    this.setState({
      topic: "",
      startYear: "",
      endYear:""
    });
  };

  render() {
    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title" style = {styles.heading}>New York Times Article Scrubber</h1>
          <h4 style = {styles.heading}>Search for and annotate articles of interest!</h4>
        </header>
          <h1 className="App-title">Search</h1>
         <form className="form">
          <input
            value={this.state.topic}
            name="topic"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Article Topic"
          />
          <input
            value={this.state.startYear}
            name="startYear"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Start Year"
          />
          <input
            value={this.state.endYear}
            name="endYear"
            onChange={this.handleInputChange}
            type="text"
            placeholder="End Year"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
        <p className="App-intro">
          {/*<header className="App-header">
            <h1 className="App-title" style = {styles.heading}> Article Results</h1>
          </header>*/}
        </p>
      </div>
    );
  }
}

export default App;
