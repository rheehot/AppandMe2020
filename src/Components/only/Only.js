import React, { Component } from 'react';
import List from './List';
import './Only.css';
import Fake from './Fake';

class Only extends Component {

  state = {
    key: ''
  }

  render() {
    return (
      <div>
        {
          this.state.key==='asdf'?(<List/>):(<Fake title="준비 중인 페이지입니다. 다른 페이지로 이동해주세요"/>)
        }
        <input 
          type="text"
          name="message"
          onChange={
            (e) => {
              this.setState({
                key: e.target.value
              })
            }
          }
        />
      </div>
    );
  }
}

export default Only;