import React, { Component } from 'react';

export default class Sidebar extends Component {
  render() {
    return (
      <div className={this.props.className}>
          <a href="#/">
            <span role="img" aria-label="hot">
              🔥
            </span>
            Hot
          </a>
          <a href="#/">
            <span role="img" aria-label="funny">
              😂
            </span>
            Funny
          </a>
          <a href="#/">
            <span role="img" aria-label="gaming">
              🎮
            </span>
            Gaming
          </a>
          <a href="#/">
            <span role="img" aria-label="sports">
              ⚽️
            </span>
            Sports
          </a>
          <a href="#/">
            <span role="img" aria-label="cool">
              🕶
            </span>
            Cool
          </a>
          <a href="#/">
            <span role="img" aria-label="tech">
              🖥
            </span>
            Tech
          </a>
          <a href="#/">
            <span role="img" aria-label="cars">
              🏎
            </span>
            Cars
          </a>
          <a href="#/">
            <span role="img" aria-label="politics">
              ⚖️
            </span>
            Politics
          </a>
        </div>
    )
  }
}
