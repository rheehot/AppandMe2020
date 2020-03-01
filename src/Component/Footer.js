import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="wrap-footer-link">
                <a href="https://www.facebook.com/APPandME2012/" target="blank" className="footer-link facebook"></a>
                <a href="https://www.facebook.com/APPandME2012/" target="blank" className="footer-link youtube"></a>
            </div>
            <div className="footer-text">contact : 010-0000-0000 또는 앱앤미 페이스북</div>
            <div className="footer-text">Copyright © 2020 APP&#38;ME. All Right Reserved.</div>
        </div>
    );
};

export default Footer;