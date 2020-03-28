import React,{Component} from 'react';
import Intro from '../intro/Intro.js';
import Axios from 'axios';
import './Apply.css';
import {AppContext} from '../../Context.js';

class Apply extends Component {
    static contextType = AppContext;

    insertUser = (event) => {
        event.preventDefault();
        event.persist();
        // var url = 'http://10.96.122.37/add-post.php';
        var url = 'https://appandme.run.goorm.io/add-user.php';

        Axios.post(
            url,
            { 
                code:this.code.value,
                name:this.name.value,
                self:this.self.value,
                why:this.why.value,
                five:this.five.value
            }
        )
        .then(function (response){
            alert('hey!');
            if(response.data.success === 1){
                // this.setState({
                //     users:[
                //         {"id":response.data.id,"code":code,"name":name,"self":self,"why":why,"five":five},
                //         ...this.state.users
                //     ]
                // });
                event.target.reset();
                alert(response.data.msg);
            }
            else{
                alert(response.data.msg);
            }
        })
        .catch(function (error) {
            alert("error : " + error);
        });
        // // alert('click!');
        // this.context.insertUser(event,this.code.value,this.name.value,this.self.value,this.why.value,this.five.value);
    }

    render(){
        return (
            <div className="apply">
                <Intro title="APPLY" notice1="앱앤미 지원을 결심하셨군요! 좋은 결과 있길 바라요^^" notice2="* 제출 후 수정이 불가하니 성심성의껏 작성해주시면 감사하겠습니다."/>
                <form onSubmit={this.insertUser}>
                    <table className="font-regular">
                        <thead>
                            
                        </thead>
                        <tbody>
                            <tr>
                                <td className="tit font-medium">학번</td>
                                <td className="temp"></td>
                                <td className="tit font-medium">이름</td>
                            </tr>
                            <tr>
                                <td><textarea className="textarea" name="code" rows="2" maxLength="4" ref={(val) => this.code = val} placeholder="학번을 입력해 주세요"></textarea></td>
                                <td className="temp"></td>
                                <td><textarea className="textarea" name="name" rows="1" maxLength="6" ref={(val) => this.name = val} placeholder="이름을 입력해 주세요"></textarea></td>
                            </tr>
                            <tr>
                                <td colSpan="3" className="tit font-medium">자기소개</td>
                            </tr>
                            <tr>
                                <td colSpan="3"><textarea className="textarea" name="self" maxLength="200" ref={(val) => this.self = val} placeholder="자기소개를 써주세요"></textarea></td>
                            </tr>
                            <tr>
                                <td colSpan="3" className="tit font-medium" placeholder="지원동기를 써주세요">지원동기</td>
                            </tr>
                            <tr>
                                <td colSpan="3"><textarea className="textarea" name="why" maxLength="200" ref={(val) => this.why = val} placeholder="자신을 다섯 글자로 표현해주세요"></textarea></td>
                            </tr>
                            <tr>
                                <td colSpan="3" className="tit font-medium">다섯글자</td>
                            </tr>
                            <tr>
                                <td colSpan="3"><textarea className="textarea" maxLength="5" name="five" ref={(val) => this.five = val} placeholder="자신을 다섯 글자로 표현해주세요!"></textarea></td>
                            </tr>
                            <tr className="tr-button">
                                <td colSpan="3"><button type="submit" className="font-bold" onClick={this.insertUser}>제출하기</button></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
}
export default Apply;