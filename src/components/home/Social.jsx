import React from 'react';
import {UilGithub, UilInstagram, UilLinkedin, UilTwitter} from '@iconscout/react-unicons'

const Social = () => {
    return (
        <div className="home-social">
            <a href="https://github.com/Annubis1709" className="home-social-icon" target={"_blank"}>
                <i><UilGithub /></i>
            </a>
            <a href="https://www.linkedin.com/in/edier-sanchez-sanchez/" className="home-social-icon" target={"_blank"}>
                <i><UilLinkedin /></i>
            </a>
            <a href="https://www.instagram.com/edier_sanz/" className="home-social-icon" target={"_blank"}>
                <i><UilInstagram /></i>
            </a>
            <a href="https://twitter.com/edier_sanz" className="home-social-icon" target={"_blank"}>
                <i><UilTwitter /></i>
            </a>
        </div>
    );
};

export default Social;