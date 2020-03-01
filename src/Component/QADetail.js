import React,{Component} from 'react';

class QADetail extends Component{
    render(){
        return(
            <div>
                {this.props.location.state.title}
            </div>
        )
    }
}


export default QADetail; 