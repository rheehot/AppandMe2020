import React, {Component} from 'react';
import styled from 'styled-components';
import './Member.css';

class Member extends Component {
    render(){
        
        const {facebookUrl} = this.props;
        const {img} = this.props;
        return (
            <div className="member">
                <a href={facebookUrl} target="_blank"><img src={img} className="mem-img"/></a>
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