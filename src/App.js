import React, { Component } from 'react';
import './App.css';
import Header from './Header/header.js';
import MainBody from './Body/body.js';

class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <MainBody />
        </div>
    );
  }
}

export default App;
