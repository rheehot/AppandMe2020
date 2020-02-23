import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom';
import './Members.css';
import Mem7 from './Mem7';
import Mem8 from './Mem8';
import Intro from './Intro';

class Members extends Component{

    render(){
        return (
            <div className="members">
                <Intro title="Members" notice1="여러분과 함께 할 앱앤미 부원들을 소개합니다." notice2="* 사진을 클릭하면 페이스북으로 이동해요."/>
                <ul>
                    <li>
                        <NavLink to="/Members/7th" activeStyle={{color:'#FF48D2'}}>7기</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Members/8th" activeStyle={{color:'#FF48D2'}}>8기</NavLink>
                    </li>
                </ul>
                <Route path="/Members" component={Mem7} exact="true"/>
                <Route path="/Members/7th" component={Mem7}/>
                <Route path="/Members/8th" component={Mem8}/>
            </div>
        )
    }
}

export default Members;