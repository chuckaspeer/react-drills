import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor (){
  super();

  this.state = {
  
  
}
}

  render() {
    let foods=["spaghetti ", "ice cream ", "sushi ", "bologna ", "cheese "];
         let myFoods = foods.map(food => <li>{food}</li>)
    return (
      <div className="App">
      <ol>
      {myFoods}
      </ol>
      
      </div>
    );
  }
}

export default App;
