import React, {Component} from 'react';
import './FItem.css';

class FA extends Component{
    render(){
        const {data} = this.props;
        const {stat} = this.props;
        console.log(data);
        return (
            <div className="frequently">
                <details $stat>
                    <summary>{this.props.title}</summary>
                    {
                    data.split('@').map( line => {
                        return (<span>{line}<br/></span>)
                    })
                    }
                </details>
            </div>
        )
    }
};

export default FA;