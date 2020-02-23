import React, {Component} from 'react';
import './Mem.css';
import Member from './Member';

class Mem8 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            memberData: [
                {
                    name: "이수빈",
                    major: "뉴미디어소프트웨어과",
                    img: "https://github.com/Sookhee/App_and_Me_Website2020/blob/master/public/img/%EC%9D%B4%EC%88%98%EB%B9%88.jpg?raw=true",
                    facebookUrl: "https://www.facebook.com/profile.php?id=100005096685966"
                },
                {
                    name: "맹수연",
                    major: "뉴미디어소프트웨어과",
                    img: "",
                    facebookUrl: "https://www.facebook.com/profile.php?id=100011719852951"
                },
                {
                    name: "김아라",
                    major: "뉴미디어솔루션과",
                    img: "https://raw.githubusercontent.com/Sookhee/App_and_Me_Website2020/master/public/img/%EA%B9%80%EC%95%84%EB%9D%BC.png?token=ALJWDNO5OLB5HYHKKOKL4QS6LOU7A",
                    facebookUrl: "https://www.facebook.com/profile.php?id=100034567932008"
                },
                {
                    name: "함형연",
                    major: "뉴미디어솔루션과",
                    img: "",
                    facebookUrl: "https://www.facebook.com/profile.php?id=100008652840731"
                },
                {
                    name: "권유빈",
                    major: "뉴미디어디자인과",
                    img: "https://github.com/Sookhee/App_and_Me_Website2020/blob/master/public/img/%EA%B6%8C%EC%9C%A0%EB%B9%88.jpg?raw=true",
                    facebookUrl: "https://www.facebook.com/profile.php?id=100024626683649"
                },
                {
                    name: "오연서",
                    major: "뉴미디어디자인과",
                    img: "",
                    facebookUrl: "https://www.facebook.com/profile.php?id=100009078326333"
                }
            ]
        };
    }

    render(){
        return (
            <div className="mems">
                {this.state.memberData.map((member, i) => {
                    return (<Member name={member.name}
                                    major={member.major}
                                    img={member.img}
                                    facebookUrl={member.facebookUrl}
                                    key={i}
                        />);
                    })}
            </div>
        )
    }
}

export default Mem8;