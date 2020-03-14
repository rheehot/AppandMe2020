import React, {Component} from 'react';
import './Member.css';

class Member extends Component {
    render(){
        const {facebookUrl} = this.props;
        const {img} = this.props;
        
        return (
            <div className="member">
                <a href={facebookUrl} target="blank"><img src={img} alt="member-img" className="mem-img"/></a>
                <div className="mem-name">{this.props.name}</div>
                <div className="mem-major">{this.props.major}</div>
            </div>
        )
    }
}

Member.defaultProps = {
    name: '',
    img: 'https://github.com/Sookhee/App-and-Me-Website2020/blob/master/src/img/default-img.png?raw=true',
    major: ''
};

export default Member;