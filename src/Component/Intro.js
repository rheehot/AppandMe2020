import React, { Component } from 'react';
import '../styles/css/Intro.css';

class Intro extends Component {

    render() {
        return (
            <div className="intro">
                <div className="title">{this.props.title}</div>
                <div className="notice">{this.props.notice1}</div>
                <div className="notice">{this.props.notice2}</div>
                <hr />
            </div>
        )
    }

}

export default Intro;