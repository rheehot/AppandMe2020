import React, {Component} from 'react';
import './Members.css';
import Member from './Member';

class Mem7 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            memberData: [
                {
                    name: "정민지",
                    major: "뉴미디어소프트웨어과",
                    img: "https://raw.githubusercontent.com/app-and-me/App_and_Me_Website/master/public/img/%EA%B9%80%ED%9A%A8%EA%B2%BD.jpg",
                    url: ""
                },
                {
                    name: "소민지",
                    major: "뉴미디어소프트웨어과",
                    img: "https://raw.githubusercontent.com/app-and-me/App_and_Me_Website/master/public/img/%EA%B9%80%ED%9A%A8%EA%B2%BD.jpg",
                    url: ""
                },
                {
                    name: "이현수",
                    major: "뉴미디어솔루션과",
                    img: "https://raw.githubusercontent.com/app-and-me/App_and_Me_Website/master/public/img/%EA%B9%80%ED%9A%A8%EA%B2%BD.jpg",
                    url: ""
                },
                {
                    name: "서채원",
                    major: "뉴미디어디자인과",
                    img: "https://raw.githubusercontent.com/app-and-me/App_and_Me_Website/master/public/img/%EA%B9%80%ED%9A%A8%EA%B2%BD.jpg",
                    url: ""
                },
                {
                    name: "윤주하",
                    major: "뉴미디어디자인과",
                    img: "https://raw.githubusercontent.com/app-and-me/App_and_Me_Website/master/public/img/%EA%B9%80%ED%9A%A8%EA%B2%BD.jpg",
                    url: ""
                },
                {
                    name: "주선우",
                    major: "뉴미디어디자인과",
                    img: "https://raw.githubusercontent.com/app-and-me/App_and_Me_Website/master/public/img/%EA%B9%80%ED%9A%A8%EA%B2%BD.jpg",
                    url: ""
                }
            ]
        };
    }

    render(){
        return (
            <div>
                {this.state.memberData.map((member, i) => {
                    return (<Member name={member.name}
                                    major={member.major}
                                    img={member.img}
                                    key={i}
                        />);
                    })}
            </div>
        )
    }
}

export default Mem7;