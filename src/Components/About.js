import React from "react";
import profilePic from '../assets/images/CarlaStickler_1002.jpg'

const About = () => {

    return (
        <div className='About'>
            <img className="profile-pic" src={profilePic} alt="headshot" />

            <div className="about-div">
                ​Carla Stickler is a woman of many talents. She is a full stack web developer who has spent over 10 years performing in Broadway musicals, most notably, Wicked, as the understudy for Elphaba. Carla recently completed Flatiron School's 15-week software engineering bootcamp and is now a technical coach for Flatiron helping other students realize their dreams of becoming a software engineer. She likes to build responsive websites with lots of personality!
            </div>
            
        </div>
    )
}

export default About