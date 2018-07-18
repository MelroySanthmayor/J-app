import React, { Component } from 'react';
import User from './components/User'
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
      <nav>
        <header id="header">Jewellery Collection</header>
      </nav>
        <User/>
      </div>
    );
  }
}

export default App;
