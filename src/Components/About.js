import React from "react";
import profilePic from '../assets/images/CarlaStickler_1002.jpg'

const About = () => {

    return (
        <div className='About'>
            <h1 className="left-panel" id="fixed">ABOUT</h1>

            <div className="right-panel">
                <img className="profile-pic" src={profilePic} alt="headshot" />
                ​<p>
                    Carla Stickler is a woman of many talents. She is a full stack web developer who has spent over 10 years performing in Broadway musicals, most notably, Wicked, as the understudy for Elphaba. Carla recently completed Flatiron School's 15-week software engineering bootcamp and is now a technical coach for Flatiron helping other students realize their dreams of becoming a software engineer. She likes to build responsive websites with lots of personality!
                </p>
                <div className="skills">
                    <div>
                        <h2>Frontend</h2>
                        <ul>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>CSS</li>
                            <li>HTML5</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Backend</h2>
                        <ul>
                            <li>Ruby</li>
                            <li>Rails</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>PostegreSQL</li>
                            <li>MongoDB</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Design</h2>
                        <ul>
                            <li>Figma</li>
                            <li>Sketch</li>
                            <li>Illustrator</li>
                            <li>Photoshop</li>
                        </ul>
                    </div>
                </div>
            </div>
                
            
        </div>
    )
}

export default About