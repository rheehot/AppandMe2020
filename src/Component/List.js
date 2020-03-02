import React, {Component} from 'react';
import {AppContext} from '../Context';
import '../styles/css/List.css';

class List extends Component{
    static contextType = AppContext;

    componentDidMount(){
        this.context.get_users();
    }

    handleUpdate = (id) => {
        this.context.handleUpdate(id,this.code.value,this.name.value);
    }

    render(){
        let allUsers;
        let mainData;
        
        const style = {
            height: ((this.context.all_users.length / 4) +1) * 440 + 'px'
        }

        allUsers = this.context.all_users.map(({id,code,name,self,why,t1,t2,t3,t4,t5}) => {
            return (
                <div className="student">
                    <div className="list-title">학번<span className="list-ident">{code}</span>이름 <span className="list-ident">{name}</span></div>
                    <div className="list-title">자기소개</div>
                    <div className="list-cont">{self}</div>
                    <div className="list-title">지원동기</div>
                    <div className="list-cont">{why}</div>
                    <div className="list-title">다섯글자</div>
                    <div>
                        <span className="list-five">{t1}</span>
                        <span className="list-five">{t2}</span>
                        <span className="list-five">{t3}</span>
                        <span className="list-five">{t4}</span>
                        <span className="list-five">{t5}</span>
                    </div>
                </div>
            )
        });

        if(this.context.all_users.length > 0){
            mainData = (
                <div class="apply-data" style={style}>
                    {allUsers}
                    <br/>
                </div>
            );
        }
        else{
            mainData = (
                <div>
                    <p>아직 지원자가 없습니다</p>
                </div>
            );
        }

        return(
            <>
            {mainData}
            </>
        );
    }

}
export default List;