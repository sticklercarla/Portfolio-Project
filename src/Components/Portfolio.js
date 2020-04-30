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
            <div className="portfolio-div">
                <div className="port-side-bar">
                    PORTFOLIO
                </div>
                <div className="video-div">
                    <figure className="video">
                        <YouTube className="vid" videoId="FI3w12LSDto" opts={opts} onReady={this._onReady}/>
                        <figcaption>Are you and actor who needs to keep track of your audition stats? Who was in the room? How did it go? How many callbacks do you get vs how many shows did you book? This app makes visualizing your data easy and fun!</figcaption>
                        
                    </figure>
                    <figure className="video">
                        <YouTube className="vid" videoId="QKzxsU_6vuE" opts={opts} onReady={this._onReady} />
                        <figcaption>Match your favorite Elphabas and keep track of your high scores!</figcaption>
                    </figure>
                    <figure className="video">
                        <YouTube className="vid" videoId="9wNs7G9jcLg" opts={opts} onReady={this._onReady} />
                        <figcaption>Send your friends emojis and receive karma points, because giving makes you feel good!</figcaption>
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