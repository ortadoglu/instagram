import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <div className="App-header">
            <li><Link to='/'>Home</Link></li>
        </div>
    );
  }
}

export default Header