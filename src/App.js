import React, { Component, Fragment } from 'react';
import Landing from './Components/Landing';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Landing />
        <div className="footer">
          <img src="https://i.imgur.com/qj2Ypu1.png" />
          <img src="https://i.imgur.com/7s2Baq5.png" />
          <img src="https://i.imgur.com/859B69I.png" />
        </div>
        <img className="green_1" src="https://i.imgur.com/j13wMos.png" />
        <img className="blue_1" src="https://i.imgur.com/It5dTas.png" />
        <img className="blue_2" src="https://i.imgur.com/It5dTas.png" />
      </div>
    );
  }
}

export default App;
