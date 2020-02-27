import React, {Component} from 'react';
import {AppContext} from '../Context';
import {Link} from 'react-router-dom';

class QAList extends Component{
    static contextType = AppContext;

    componentDidMount(){
        this.context.get_posts();
    }

    handleUpdate = (id) => {
        this.context.handleUpdate(id,this.writer.value,this.title.value,this.cont.value);
    }

    render(){
        let allPosts;
        let mainData;
        
        allPosts = this.context.all_posts.map(({id,writer,title,cont}) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{writer}</td>
                    <td><Link to="/QADetail">{title}</Link></td>
                </tr>
            );
        });

        if(this.context.all_posts.length > 0){
            mainData = (
                <table className="">
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>작성자</th>
                            <th>제목</th>
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
                    <h4 className="">No Post Found!</h4>
                    <hr/>
                    <p>Please Insert Some Posts.</p>
                </div>
            );
        }
        return(
            <>
            {mainData}
            <Link to="/QAWrite">작성</Link>
            </>
        );
    }

}
export default QAList;