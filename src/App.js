import React, { Component } from 'react';
import BadC from './components/bad.c'
import GoodC from './components/good.c'
import Message from './components/message.c'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Bad Component
        <BadC />
        <p>*------------------------------------*</p>
        Good Component
        <GoodC />
        <p>*------------------------------------*</p>
        {/* Message
        <Message /> */}
      </div>
    );
  }
}

export default App;
