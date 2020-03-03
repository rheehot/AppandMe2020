import React, { Component } from 'react';
import '../styles/css/FItem.css';

class FA extends Component {
    render() {
        const { data } = this.props;
        console.log(data);
        return (
            <div className="frequently">
                {
                    this.props.title === "Q. min" ?
                        (
                            <details open>
                                <summary>{this.props.title}</summary>
                                {
                                    data.split('@').map(line => {
                                        return (<span>{line}<br /></span>)
                                    })
                                }
                            </details>
                        ) :
                        (
                            <details>
                                <summary>{this.props.title}</summary>
                                {
                                    data.split('@').map(line => {
                                        return (<span>{line}<br /></span>)
                                    })
                                }
                            </details>
                        )
                }
                <hr />
            </div>
        )
    }
};

export default FA;