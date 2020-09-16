import React, { Component } from 'react';
import "./Sidebar.css";
 
//the sidebar that shows all of the categories available in memes
//choosing each one will bring the user to that specific array of memes (ex.: 'Funny' memes)
export default class Sidebar extends Component {
  render() {
    return (
      <div className={this.props.className}>
        {/*the category Hot that shows the memes which are considered by the user "hot" */}
          <a href="#/hot">
            <span role="img" aria-label="hot">
              🔥
            </span>
            Hot
          </a>
          {/*the category funny, for the "funny" memes*/}
          <a href="#/funny">
            <span role="img" aria-label="funny">
              😂
            </span>
            Funny
          </a>
          {/*the gaming category, destined to "gaming" related memes*/}
          <a href="#/gaming">
            <span role="img" aria-label="gaming">
              🎮
            </span>
            Gaming
          </a>
          {/*for the "sports" section*/}
          <a href="#/sports">
            <span role="img" aria-label="sports">
              ⚽️
            </span>
            Sports
          </a>
          {/*for the more ambiguous but "cool" memes*/}
          <a href="#/cool">
            <span role="img" aria-label="cool">
              🕶
            </span>
            Cool
          </a>
          {/*technology based memes are in this category*/}
          <a href="#/tech">
            <span role="img" aria-label="tech">
              🖥
            </span>
            Tech
          </a>
          {/*private category referring only cars*/}
          <a href="#/cars">
            <span role="img" aria-label="cars">
              🏎
            </span>
            Cars
          </a>
          {/*the category to discuss "politics" using memes*/}
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
