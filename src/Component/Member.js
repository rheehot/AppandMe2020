import React, {Component} from 'react';
import './Member.css';

class Member extends Component {
    render(){
        return (
            <div className="member">
                <a href="http://facebook.com" target="_blank"><div className="mem-img">이미지</div></a>
        <div className="mem-name">{this.props.name}</div>
        <div className="mem-major">{this.props.major}</div>
            </div>
        )
    }
}

Member.defaultProps = {
    name: '기본이름'
};

export default Member;