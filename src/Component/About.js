import React from 'react';
import Intro from './Intro';
import './About.css';

const About = () => {
    return (
        <div>
            <Intro title="About" notice1="미림 마이스터고 전공동아리, 앱앤미." notice2="어떤 활동을 하나요?"/>
            <h1>동아리 소개</h1>
            <div>앱앤미는 미림여자정보과학고등학교의 대표적인 전공동아리 중 하나로 다양한 차세대 IT개발 흐름에 따른 기술들을 익히고 연구하며 실제 서비스 구현을 통해 학교 및 사회에 기여하는동아리 입니다. 개발자와 디자이너, 기획자의 협업을 통해 전공실력을 보다 더 키워나갈 수 있을뿐만 아니라 각종 IT 관련 공모전 및 대외 활동을 통해 전공 실력과 발표 경험을 쌓을 수 있습니다. 또한 동아리 담당 전공 선생님과 함께하는 동아리 시간을 활용하여 각의 전공 실력을 기를 수 있습니다.</div>
            <hr/>
            <h1>2019년 활동 이력</h1>
            <table border="1">
                <tr>
                    <td rowSpan="2">3월</td>
                    <td>신입부원 모집</td>
                </tr>
                <tr>
                    <td>Women Tech Makers 참가 및 스텝 활동</td>
                </tr>
                <tr>
                    <td rowSpan="2">4월</td>
                    <td>상반기 스터티(Git/Github, Java)</td>
                </tr>
                <tr>
                    <td>스마틴 앱 챌린지 기획서 작성
                        <br/>
                        *전원 본선 진출
                    </td>
                </tr>
                <tr>
                    <td>5월</td>
                    <td>비즈쿨 마켓 부스 운영</td>
                </tr>
                <tr>
                    <td rowSpan="2">6월</td>
                    <td>Google I/O Extended 2019 Seoul 참가</td>
                </tr>
                <tr>
                    <td>미림 IT쇼, “미림에 이런일이” 개발, 디자인 및 전시</td>
                </tr>
                <tr>
                    <td rowSpan="2">7월</td>
                    <td>스마틴 앱 챌린지 부트캠프 참가</td>
                </tr>
                <tr>
                    <td>하반기 스터디</td>
                </tr>
                <tr>
                    <td>8월</td>
                    <td>메이커페어 준비 및 참가 신청</td>
                </tr>
                <tr>
                    <td>9월</td>
                    <td>스마틴 앱 챌린지 생활부문 대상(DonorPets)</td>
                </tr>
                <tr>
                    <td rowSpan="2">10월</td>
                    <td>동아리 발표회 (VR/AR 전시)</td>
                </tr>
                <tr>
                    <td>메이커페어 부스 전시 및 참가</td>
                </tr>
                <tr>
                    <td>11월</td>
                    <td>미림 소프트웨어 챌린지 2팀 참가(최우수작 선정 1)</td>
                </tr>
            </table>
        </div>
    );
};

export default About;