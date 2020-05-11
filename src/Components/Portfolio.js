import React from "react";
import YouTube from 'react-youtube';

class Portfolio extends React.Component {

    render() {
        const opts = {
          height: '390',
          width: '640',
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
          },
        };
     
        return (
            <div className="Portfolio">
                <h1 className="left-panel" id="fixed">
                    PORTFOLIO
                </h1>
                <div className="right-panel">
                    <figure className="video">
                        <YouTube className="vid" videoId="FI3w12LSDto" opts={opts} onReady={this._onReady}/>
                        <figcaption>Are you and actor who needs to keep track of your audition stats? Who was in the room? How did it go? How many callbacks do you get vs how many shows did you book? This app makes visualizing your data easy and fun!</figcaption>
                        <div>
                            <a href="https://github.com/sticklercarla/broadway-life-front-end" target="_blank" rel="noopener noreferrer">Github Frontend</a>
                            <a href="https://github.com/sticklercarla/broadway-life-api" target="_blank" rel="noopener noreferrer">Github Backend</a>
                            <a href="https://broadway-audition-life-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">View Live</a>
                        </div>
                    </figure>
                    <figure className="video">
                        <YouTube className="vid" videoId="QKzxsU_6vuE" opts={opts} onReady={this._onReady} />
                        <figcaption>Match your favorite Elphabas and keep track of your high scores!</figcaption>
                        <div>
                            <a href="https://github.com/sticklercarla/Wicked-Match-Game" target="_blank" rel="noopener noreferrer">Github Frontend</a>
                            <a href="https://github.com/sticklercarla/Wicked-Match-Game-API" target="_blank" rel="noopener noreferrer">Github Backend</a>
                            <a href="https://wicked-match-game.herokuapp.com/" target="_blank" rel="noopener noreferrer">View Live</a>
                        </div>
                    </figure>
                    <figure className="video">
                        <YouTube className="vid" videoId="9wNs7G9jcLg" opts={opts} onReady={this._onReady} />
                        <figcaption>Send your friends emojis and receive karma points, because giving makes you feel good!</figcaption>
                        <div>
                        <a href="https://github.com/sticklercarla/Karma" target="_blank" rel="noopener noreferrer">Github</a>
                        </div>
                    </figure>
                </div>
            </div>
        )
      }
     
      _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
}

export default Portfolio