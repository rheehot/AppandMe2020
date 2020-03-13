import React,{Component} from 'react';
import Intro from '../intro/Intro.js';
import './Apply.css';
// import '../styles/css/fonts.css';
import {AppContext} from '../../Context.js';

class Apply extends Component {
    static contextType = AppContext;

    insertUser = (event) => {
        this.context.insertUser(event,this.code.value,this.name.value,this.self.value,this.why.value,this.text1.value,this.text2.value,this.text3.value,this.text4.value,this.text5.value);
    }

    render(){
        return (
            <div className="apply">
                <Intro title="APPLY" notice1="앱앤미 지원을 결심하셨군요! 좋은 결과 있길 바라요^^" notice2="* 제출 후 수정이 불가하니 성심성의껏 작성해주시면 감사하겠습니다."/>
                <form onSubmit={this.insertUser}>
                    <table   className="font-regular">
                        <tr>
                            <td className="tit font-medium">학번</td>
                            <td className="temp"></td>
                            <td className="tit font-medium">이름</td>
                        </tr>
                        <tr>
                            <td><input type="text" placeholder="학번을 입력해 주세요"></input></td>
                            <td className="temp"></td>
                            <td><input type="text" placeholder="이름을 입력해 주세요"></input></td>
                        </tr>
                        <tr>
                            <td colSpan="3" className="tit font-medium">자기소개</td>
                        </tr>
                        <tr>
                            <td colSpan="3"><input type="text" placeholder="자기소개를 써주세요"></input></td>
                        </tr>
                        <tr>
                            <td colSpan="3" className="tit font-medium" placeholder="지원동기를 써주세요">지원동기</td>
                        </tr>
                        <tr>
                            <td colSpan="3"><input type="text" placeholder="자신을 다섯 글자로 표현해주세요"></input></td>
                        </tr>
                        <tr>
                            <td colSpan="3" className="tit font-medium">다섯글자</td>
                        </tr>
                        <tr>
                            <td colSpan="3"><input type="text" placeholder="자신을 다섯 글자로 표현해주세요!"></input></td>
                        </tr>
                        <tr className="tr-button">
                            <td colSpan="3"><button type="submit" className="font-bold">제출하기</button></td>
                        </tr>
                    </table>
                </form>
            </div>
        );
    }
}
export default Apply;