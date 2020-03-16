import React from 'react';
import {Link} from 'react-router-dom';
import './Main.css';
// import '../styles/css/fonts.css';

const Main = () => {
    return (
        <div className="main">
            <div className="cont-tit font-regular">USER에서 MAKER로 거듭나고자 하는</div>
            <div className="cont-tit font-regular">당신을 위한 최고의 선택, APP & ME.</div>
            <div className="cont-sub-tit font-regular">2020년, 전공동아리 앱앤미와 함께 할 신입생을 모집합니다.</div>
            <div className="cont-cont font-regular">신청기간: 2020.03.09 - 2020.03.09</div>
            <div className="cont-cont font-regular">면접일시: 2020.03.09</div>
            <div className="cont-cont font-regular">면접장소: 앱창작터 1실</div>
            <div className="cont-cont font-regular">* 위 내용은 지원자들에게 개별 문자로 공지할 예정입니다.</div>
            <div className="wrap-btn">
                <Link className="btn-apply" to="/Apply"><div>지원하기</div></Link>
            </div>
            <div className="background-img"></div>
            <div className="background-layer"></div>
        </div>
    );
};

export default Main;