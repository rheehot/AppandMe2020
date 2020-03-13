import React, { Component } from 'react';
import './Intro.css';
// import '../styles/css/fonts.css';

class Intro extends Component {

    render() {
        return (
            <div className="intro">
                <div className="wrap-intro">
                    <div className="title font-bold">{this.props.title}</div>
                    <div className="notice font-regular">{this.props.notice1}<span className="pink-color">{this.props.name}</span></div>
                    <div className="notice font-regular">{this.props.notice2}</div>
                    <hr />
                </div>
            </div>
        )
    }

}

export default Intro;