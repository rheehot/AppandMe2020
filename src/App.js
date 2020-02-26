import React from 'react';
import Actions from './Actions/Actions';
import {Provider} from './Context';
import './App.css';
import {Route, NavLink} from 'react-router-dom';
import Footer from './Component/Footer';
import Main from './Component/Main';
import About from './Component/About';
import Members from './Component/Members';
import Apply from './Component/Apply';
import QA from './Component/QA';
import QAWrite from './Component/QAWrite';
import FA from './Component/FA';
import Only from './Component/Only';
import Quiz from './Component/Quiz';

class App extends Actions {

  componentWillMount(){
    console.log("%cApp&Me is Alawys Best!", 'color:pink; font-size:25px;');
    console.log("%cWelcome to App&Me", 'color:green; font-size:25px;');
    console.log("%cHello World@!", 'color:blue; font-size:25px;');
  }

  render(){

    const contextValue = {
      all_users:this.state.users,
      all_posts:this.state.posts,
      get_users:this.fetchUsers,
      insertUser:this.insertUser,
      get_posts:this.fetchPosts,
      insertPost:this.insertPost
  }

    return (
      <Provider value={contextValue}>
        <div className="App">
          <div className="header">
            <ul>
              <li>
                <div className="header-img">로고</div>
                <NavLink to="/">APP &#38; ME</NavLink>
              </li>
              <li>
                <NavLink to="/QA" activeStyle={{color:'#FF48D2'}}>Q&#38;A</NavLink>
              </li>
              <li>
                <NavLink to="/FA" activeStyle={{color:'#FF48D2'}}>F&#38;A</NavLink>
              </li>
              <li>
                <NavLink to="/Apply" activeStyle={{color:'#FF48D2'}}>Apply</NavLink>
              </li>
              <li>
                <NavLink to="/Members" activeStyle={{color:'#FF48D2'}}>Members</NavLink>
              </li>
              <li>
                <NavLink to="/About" activeStyle={{color:'#FF48D2'}}>About</NavLink>
              </li>
              <li>
                <NavLink to="/Only">O</NavLink>
              </li>
            </ul>
          </div>
          <Route path="/" component={Main} exact="true"/>
          <Route path="/About" component={About}/>
          <Route path="/Members" component={Members}/>
          <Route path="/Apply" component={Apply}/>
          <Route path="/FA" component={FA}/>
          <Route path="/QA" component={QA}/>
          <Route path="/Quiz" component={Quiz}/>
          <Route path="/Only" component={Only}/>
          <Route path="/QAWrite" component={QAWrite}/> 
          <Footer/>
        </div>
      </Provider>
    )
  }
}

export default App;
