import React, {Component} from 'react';
import Intro from './Intro';
import Item from './FItem'

class FA extends Component{
    
    render(){
        return (
            <div>
                <Intro title="F&#38;A" notice1="앱앤미에 대하여 자주 물어보는 질문들을 정리했어요." notice2="더 궁금한 사항은 Q&#38;A 게시판 또는 앱앤미 페이스북 페이지를 이용해주세요!"/>
                <Item/>
            </div>
        )
    }
};

export default FA;