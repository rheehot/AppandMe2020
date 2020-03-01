import React, {Component} from 'react';
import './Member.css';

class Member extends Component {
    render(){
        
        const {facebookUrl} = this.props;
        const {img} = this.props;
        return (
            <div className="member">
                <a href={facebookUrl} target="blank"><img src={img} className="mem-img"/></a>
                <div className="mem-name">{this.props.name}</div>
                <div className="mem-major">{this.props.major}</div>
            </div>
        )
    }
}

Member.defaultProps = {
    name: '기본이름',
    img: 'https://raw.githubusercontent.com/Sookhee/App_and_Me_Website2020/master/public/img/default-img.png?token=ALJWDNLFFFK3AOTY3VPB34K6LPLF6'
};

export default Member;