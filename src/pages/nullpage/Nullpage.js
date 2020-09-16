import React, { Component } from 'react';
import './Nullpage.css';

//the page for when the result isn't found
export default class Nullpage extends Component {
  render() {
    return (
      <div className="Nullpage">
        <h1>404 Not found!!!</h1>
      </div>
    )
  }
}
