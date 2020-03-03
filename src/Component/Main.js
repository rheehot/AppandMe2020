import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/css/Main.css';

const Main = () => {
    return (
        <div className="main">
            <div className="main-title">
            USER에서 MAKER로 거듭나고자 하는
            <br/>
            당신을 위한 최고의 선택, APP &#38; ME.
            </div>
            <ul>
                <li>2020년, 전공동아리 앱앤미와 함께 할 신입생을 모집합니다.</li>
                <li>신청기간: 2020.03.09 - 2020.03.09</li>
                <li>면접일시: 2020.03.09</li>
                <li>면접장소: 앱창작터 1실</li>
                <li>* 위 내용은 지원자들에게 개별 문자로 공지할 예정입니다.</li>
            </ul>

            <div className="wrap-btn">
                <Link to="/Apply"><div className="btn btn-apply">지원하기</div></Link>
            </div>
            <div className="main-img"></div>
            <div className="main-img-layer"></div>
        </div>
    );
};

export default Main;