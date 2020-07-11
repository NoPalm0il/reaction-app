import React, { Component } from 'react';
import RouterComponent from './Router';
import AuthComponent from './Auth';

export default class App extends Component {
  render() {
    return (
      <AuthComponent>
        <RouterComponent />
      </AuthComponent>
    )
  }
}
