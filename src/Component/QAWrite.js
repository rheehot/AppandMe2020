import React,{Component} from 'react';
import {AppContext} from '../Context';


class QAWrite extends Component {
    static contextType = AppContext;

    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this); // i think you are missing this
     }
     
     goBack(){
         this.props.history.goBack();
     }
     

    insertPost = (event) => {
        this.context.insertPost(event,this.writer.value,this.title.value,this.cont.value);
    }

    render(){
        return (
            <form onSubmit={this.insertPost}>
            <div className="">
                <div className="">
                    <label className="">writer</label>
                    <input type="text" name="writer" ref={(val) => this.writer = val} className="" placeholder="Name"/>
                </div>
                <div className="">
                    <label className="">Title</label>
                    <input type="text" name="title" ref={(val) => this.title = val} className="" placeholder="Email"/>
                </div>
                <div className="">
                    <label className="">Content</label>
                    <input type="text" name="cont" ref={(val) => this.cont = val} className="" placeholder="Email"/>
                </div>
                <div className="">
                    <button type="submit" className="" onClick={this.goBack}>Add user</button>
                </div>
            </div>
        </form>  
        );
    }
}
export default QAWrite;