import React from 'react';
import {Link} from 'react-router-dom';
import './Main.css';

const Main = () => {
    return (
        <div className="main">
            <h1>USER에서 MAKER로 거듭나고자 하는 당신을 위한 최고의 선택, APP &#38; ME</h1>
            <div>2020년, 전공동아리 앱앤미와 함께 할 신입생을 모집합니다.</div>
            <ul>
                <li>신청 기간 : 2020.03.02 - 2020.04.02</li>
                <li>면접 일시 : 추후 공지</li>
                <li>면접 장소 : 추후 공지</li>
                <li>* 면접 전, 지원자들에게 개별 문자로 공지 예정입니다</li>
            </ul>

            <div className="wrap-btn">
                <Link to="/Apply"><div className="btn btn-apply">바로 지원하기</div></Link>
                <Link to="/Quiz"><div  className="btn btn-quiz">퀴즈 풀기</div></Link>
            </div>
            <br/>
        </div>
    );
};

export default Main;