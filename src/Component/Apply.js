import React,{Component} from 'react';
import Intro from './Intro';
import './Apply.css';
import {AppContext} from '../Context';

class Apply extends Component {
    static contextType = AppContext;

    insertUser = (event) => {
        this.context.insertUser(event,this.user_name.value,this.user_email.value,this.self.value,this.why.value,this.text1.value,this.text2.value,this.text3.value,this.text4.value,this.text5.value);
    }

    render(){
        return (
            <div class="apply">
                <Intro title="Apply" notice1="앱앤미 지원을 결심하셨군요! 좋은 결과 있길 바라요^^" notice2="* 제출 후 수정이 불가하니 성심성의껏 작성해주시면 감사하겠습니다."/>
                <form onSubmit={this.insertUser}>
                    <table border="1">
                        <tr>
                            <td>학번</td>
                            <td><input type="text" name="user_name" ref={(val) => this.user_name = val} className="form-control"></input></td>
                            <td>이름</td>
                            <td><input type="text" name="user_email" ref={(val) => this.user_email = val} className="form-control"></input></td>
                        </tr>
                        <tr>
                            <td>자기소개</td>
                            <td colSpan="3"><input type="text" name="self" ref={(val) => this.self = val} className="form-control"></input></td>
                        </tr>
                        <tr>
                            <td>지원동기</td>
                            <td colSpan="3"><input type="text" name="why" ref={(val) => this.why = val} className="form-control"></input></td>
                        </tr>
                        <tr>
                            <td>5글자 표현</td>
                            <td colSpan="3">
                                <input type="text" className="five" name="text1" ref={(val) => this.text1 = val} className="form-control"></input>
                                <input type="text" className="five" name="text2" ref={(val) => this.text2 = val} className="form-control"></input>
                                <input type="text" className="five" name="text3" ref={(val) => this.text3 = val} className="form-control"></input>
                                <input type="text" className="five" name="text4" ref={(val) => this.text4 = val} className="form-control"></input>
                                <input type="text" className="five" name="text5" ref={(val) => this.text5 = val} className="form-control"></input>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="4"><button type="submit" className="" onClick={() => alert('처리중입니다\n잠시만 기다려주세요')}>제출하기</button></td>
                        </tr>
                    </table>
                </form>
            </div>
        );
    }
}
export default Apply;