import React, {Component} from 'react';
import './Members.css';
import Member from './Member';

class Mem8 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            memberData: [
                {name: "이수빈", major: "뉴미디어소프트웨어과"},
                {name: "함형연", major: "뉴미디어소프트웨어과"},
                {name: "김아라", major: "뉴미디어솔루션과"},
                {name: "맹수연", major: "뉴미디어솔루션과"},
                {name: "권유빈", major: "뉴미디어디자인과"},
                {name: "오연서", major: "뉴미디어디자인과"}
            ]
        };
    }

    render(){
        return (
            <div>
                {this.state.memberData.map((member, i) => {
                    return (<Member name={member.name}
                                    major={member.major}
                                    key={i}
                        />);
                    })}
            </div>
        )
    }
}

export default Mem8;