import React from 'react';
import '../styles/css/Footer.css';
import '../styles/css/fonts.css';
import facebookLogo from '../facebook.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="wrap-contact font-regular">
                <div className="contact">
                    <div>CONTACT</div>
                    <div>010-0000-0000</div>
                    <div>s2018s38@gmail.com</div>
                </div>
                <div className="contact">
                    <div>CONTACT</div>
                    <div>010-0000-0000</div>
                    <div>s2018s38@gmail.com</div>
                </div>
            </div>
            <a href="https://www.facebook.com/APPandME2012/" target="blank"><img src={facebookLogo}></img></a>
        </div>
    );
};

export default Footer;