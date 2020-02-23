import React, {Component} from 'react';
import Intro from './Intro';
import './Apply.css';

class Apply extends Component{
    
    render(){
        return (
            <div className="apply">
                <Intro title="Apply" notice1="앱앤미 지원을 결심하셨군요!" notice2="성심성의껏 작성해주시면 감사하겠습니다. 좋은 결과 있길 바라요^^"/>
                <form onSubmit={this.insertUser}>
                    <table border="1">
                        <tr>
                            <td>학번</td>
                            <td><input type="text" name="uid"></input></td>
                            <td>이름</td>
                            <td><input type="text" name="name"></input></td>
                        </tr>
                        <tr>
                            <td>자기소개</td>
                            <td colSpan="3"><input type="text" name="self"></input></td>
                        </tr>
                        <tr>
                            <td>지원동기</td>
                            <td colSpan="3"><input type="text" name="why"></input></td>
                        </tr>
                        <tr>
                            <td>5글자 표현</td>
                            <td colSpan="3">
                                <input type="five" className="five"></input>
                                <input type="five" className="five"></input>
                                <input type="five" className="five"></input>
                                <input type="five" className="five"></input>
                                <input type="five" className="five"></input>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="4"><button type="submit">제출하기</button></td>
                        </tr>
                    </table>
                </form>
            </div>
        )
    }
};

export default Apply;