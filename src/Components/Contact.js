import React from "react";
import ReactContactForm from 'react-mail-form';

const Contact = () => {

    return (
        <div className='Contact'>
            <h1 className="left-about-panel" id="fixed">
                CONTACT
            </h1>
            <div className="contact-cont">
                <div className="icons">
                    <a href="https://github.com/sticklercarla" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="https://medium.com/from-the-stage-to-the-screen" target="_blank" rel="noopener noreferrer">Medium</a>
                    <a href="https://www.linkedin.com/in/carlastickler/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://twitter.com/sticklercarla" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://www.instagram.com/sticklercarla/" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
                <div>
                    <ReactContactForm className="email" contentsPlaceholder="Like my work? Want to collaborate? Just wanna say hi? Let's see what ya got!" contentsMaxLength="600" titleMaxLength="30"  to="carlastickler@gmail.com" buttonText="Email me!" />
                </div>
                
            </div>
        </div>
    )
}

export default Contact