import React, {Component} from 'react';
import {AppContext} from '../Context';
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
                    <td>{writer}</td>
                    <td>{title}</td>
                    <td>
                        <button className="" onClick={() => this.context.editMode(id)}>Edit</button>
                        <button onClick={() => this.context.handleDelete(id)} className="">Delete</button>
                    </td>
                </tr>
            );
        });

        if(this.context.all_posts.length > 0){
            mainData = (
                <table className="">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
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
            </>
        );
    }

}
export default QAList;