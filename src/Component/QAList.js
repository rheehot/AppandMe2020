import React, {Component} from 'react';
import {AppContext} from '../Context';
import {Link} from 'react-router-dom';
import Intro from './Intro';

class QAList extends Component{
    static contextType = AppContext;

    componentDidMount(){
        this.context.get_posts();
    }

    handleUpdate = (id) => {
        this.context.handleUpdate(id,this.writer.value,this.title.value,this.cont.value,this.reply.value,this.writetime.value);
    }

    render(){
        let allPosts;
        let mainData;
        
        allPosts = this.context.all_posts.map(({id,writer,title,cont,reply,writetime}) => {
            return (
                <tr>
                    <td>{id}</td>
                    <td><Link to={{
                        pathname: "/QADetail",
                        state:{
                            id:`${title}`,
                            title:`${title}`
                        }
                    }}>{title}</Link></td>
                    <td>{writer}</td>
                    <td>{writetime}</td>
                </tr>
            );
        });

        if(this.context.all_posts.length > 0){
            mainData = (
                <table className="">
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성시간</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allPosts}
                    </tbody>
                </table>
            );
        }
        else{
            mainData = (
                <div className="" role="alert">
                    <h4 className="">로딩 중 입니다. 잠시만 기다려주세요!</h4>
                </div>
            );
        }
        return(
            <>
            <Intro title="Q&A" notice1="앱앤미에 대한 궁금한 점들을 물어보면 부원들이 직접 답변 달아드려요." notice2="개인적인 질문은 앱앤미 페이스북 페이지를 이용해도 된답니다."/>
            {mainData}
            <Link to="/QAWrite">작성</Link>
            </>
        );
    }

}
export default QAList;