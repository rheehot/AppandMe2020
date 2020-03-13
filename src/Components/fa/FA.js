import React, {Component} from 'react';
import Intro from '../intro/Intro';
import Item from './FItem'
import './FA.css';

class FA extends Component{
    
    render(){
        return (
            <div className="fa">
                <Intro title="F&#38;A" notice1="앱앤미에 대하여 자주 물어보는 질문들을 정리했어요." notice2="더 궁금한 사항은 Q&#38;A 게시판 또는 앱앤미 페이스북 페이지를 이용해주세요!"/>
                <Item title="Q. 앱앤미는 OO한다던데 정말인가요?" data='asd@asfa@adf@asdf'/>
                <Item title="Q. 숨겨진 힌트는 어디서 찾을 수 있나요?" data='A. 퀴즈의 정답은 앱앤미 지원 웹사이트의 메인페이지에서 찾을 수 있습니다.@힌트를 드리자면 키보드 버튼 중 어떤 것을 누르면 찾을 수 있답니다~!@정답을 찾으신 분은 메인페이지의 “퀴즈 풀기" 버튼을 눌러서 퀴즈 정답을 입력해주세요^^'/>
                <Item title="Q. min" data='A. 퀴즈의 정답은 앱앤미 지원 웹사이트의 메인페이지에서 찾을 수 있습니다.@힌트를 드리자면 키보드 버튼 중 어떤 것을 누르면 찾을 수 있답니다~!@정답을 찾으신 분은 메인페이지의 “퀴즈 풀기" 버튼을 눌러서 퀴즈 정답을 입력해주세요^^'/>
            </div>
        )
    }
};

export default FA;