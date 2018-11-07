import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultStyle = {color : '#0aa', 'font-size': '44px'};

class Aggregate extends Component {
  render() {
    return (
        //fuck yeah for the spread operator!
      <div>
        <h4 style = {{...defaultStyle, 'font-size' : '24px', width: '50%'}}> fishies </h4>
      </div>
    );
  }
}

class List extends Component {
  render() {
        let cats = [];
        let i = 0;
        while(i < 50) {
          cats.push(<p>cat #{i.toString()}</p>);
          i++;
        }
        return(cats);
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 style={defaultStyle}>TURLE-TITLE</h1>
          <Aggregate/>
          <Aggregate/>
      </div>
    );
  }
}

export default App;
