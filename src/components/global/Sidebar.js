import React, { Component } from 'react';

export default class Sidebar extends Component {
  render() {
    return (
      <div className={this.props.className}>
          <a href="#/hot">
            <span role="img" aria-label="hot">
              🔥
            </span>
            Hot
          </a>
          <a href="#/funny">
            <span role="img" aria-label="funny">
              😂
            </span>
            Funny
          </a>
          <a href="#/gaming">
            <span role="img" aria-label="gaming">
              🎮
            </span>
            Gaming
          </a>
          <a href="#/sports">
            <span role="img" aria-label="sports">
              ⚽️
            </span>
            Sports
          </a>
          <a href="#/cool">
            <span role="img" aria-label="cool">
              🕶
            </span>
            Cool
          </a>
          <a href="#/tech">
            <span role="img" aria-label="tech">
              🖥
            </span>
            Tech
          </a>
          <a href="#/cars">
            <span role="img" aria-label="cars">
              🏎
            </span>
            Cars
          </a>
          <a href="#/politics">
            <span role="img" aria-label="politics">
              ⚖️
            </span>
            Politics
          </a>
        </div>
    )
  }
}
