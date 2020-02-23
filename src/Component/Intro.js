import React, {Component} from 'react';
import './Intro.css';

class Intro extends Component{

    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div>{this.props.notice1}</div>
                <div>{this.props.notice2}</div>
                <hr/>
            </div>
        )
    }
    
}

export default Intro;