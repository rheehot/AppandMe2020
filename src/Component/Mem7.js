import React, {Component} from 'react';
import './Members.css';
import Member from './Member';

class Mem7 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            memberData: [
                {name: "정민지", major: "뉴미디어소프트웨어과"},
                {name: "소민지", major: "뉴미디어소프트웨어과"},
                {name: "이현수", major: "뉴미디어솔루션과"},
                {name: "서채원", major: "뉴미디어디자인과"},
                {name: "윤주하", major: "뉴미디어디자인과"},
                {name: "주선우", major: "뉴미디어디자인과"}
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

export default Mem7;