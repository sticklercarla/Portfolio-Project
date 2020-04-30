import React from "react";
import Typing from 'react-typing-animation';

const Home = () => {

    return (
        <div className='Home'>
            <Typing speed={100}>
                <span>Hi! I'm Carla, </span>
                <span>a singer</span>
                <Typing.Backspace count={7} />
                <span>n actor</span>
                <Typing.Backspace count={7} />
                <span> ceramic artist</span>
                <Typing.Backspace count={14} />
                <span>fullstack developer from Brooklyn</span>
            </Typing>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Home