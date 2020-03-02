import React, {Component} from 'react';
import '../styles/css/Fake.css';

class Fake extends Component{

    render(){
        return (
            <div className="fake">
                <h1>{this.props.title}</h1>
                <hr/>
            </div>
        )
    }
    
}

export default Fake;