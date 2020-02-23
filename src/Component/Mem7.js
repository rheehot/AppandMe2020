import React, {Component} from 'react';
import Member from './Member';
import './Mem.css';

class Mem7 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            memberData: [
                {
                    name: "정민지",
                    major: "뉴미디어소프트웨어과",
                    img: "https://raw.githubusercontent.com/Sookhee/App_and_Me_Website2020/master/public/img/%EC%A0%95%EB%AF%BC%EC%A7%80.jpg?token=ALJWDNPPV45WIIDE5OUUIP26LOUV6",
                    facebookUrl: "https://www.facebook.com/MinjiJeong02"
                },
                {
                    name: "소민지",
                    major: "뉴미디어소프트웨어과",
                    //img: "",
                    facebookUrl: "https://www.facebook.com/profile.php?id=100009610962191"
                },
                {
                    name: "이현수",
                    major: "뉴미디어솔루션과",
                    //img: "",
                    facebookUrl: "https://www.facebook.com/profile.php?id=100009075758105"
                },
                {
                    name: "서채원",
                    major: "뉴미디어디자인과",
                    img: "https://raw.githubusercontent.com/Sookhee/App_and_Me_Website2020/master/public/img/%EC%84%9C%EC%B1%84%EC%9B%90.jpg?token=ALJWDNMEIEUMPVBUFIE6G526LPKK2",
                    facebookUrl: "https://www.facebook.com/profile.php?id=100009601390266"
                },
                {
                    name: "윤주하",
                    major: "뉴미디어디자인과",
                    //img: "",
                    facebookUrl: "https://www.facebook.com/profile.php?id=100000911379372"
                },
                {
                    name: "주선우",
                    major: "뉴미디어디자인과",
                    img: "https://raw.githubusercontent.com/Sookhee/App_and_Me_Website2020/master/public/img/%EC%A3%BC%EC%84%A0%EC%9A%B0.jpg?token=ALJWDNOW6HA6PZU2COVKDAC6LOUYW",
                    facebookUrl: "https://www.facebook.com/profile.php?id=100004550599183"
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

export default Mem7;