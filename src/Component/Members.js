import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom';
import './Members.css';
import Mem7 from './Mem7';
import Mem8 from './Mem8';
import Intro from './Intro';

class Members extends Component{

    render(){
        return(
            <div className="members">
                <Intro title="MEMBERS" notice1="여러분과 함께 할 앱앤미의 부원들을 소개합니다." notice2="* 사진을 클릭하면 페이스북으로 이동해요^^"/>
                <div className="wrap-link">
                    <NavLink to="/Members" activeStyle={{color:'#ffb0b8'}} exact="true">7기 앱앤미</NavLink>
                    <div className="link-br"></div>
                    <NavLink to="/Members/8th" activeStyle={{color:'#ffb0b8'}}>8기 앱앤미</NavLink>
                </div>
                <Route path="/Members" component={Mem7} exact="true"/>
                <Route path="/Members/8th" component={Mem8}/>

                <br/>
            </div>
        )
    }
}

export default Members;