import React from 'react';
import Actions from './Actions/Actions';
import {Provider} from './Context';
import {Route, NavLink} from 'react-router-dom';
import './App.css';
import Main from './Components/main/Main';
import About from './Components/about/About';
import Apply from './Components/apply/Apply';
import Members from './Components/members/Members';
import FA from './Components/fa/FA';
import Only from './Components/only/Only';
import Footer from './Components/footer/Footer';

class App extends Actions {

  componentDidMount(){
    console.log("%c안녕하세요! 퀴즈를 맞춘 것을 축하해요!", 'color:#ffb0b8; font-size:25px;');
    console.log("%c면접이 끝나고 퀴즈를 풀었냐고 물어보면", 'color:#ffb0b8; font-size:25px;');
    console.log("%cHello World! 라고 말해주세요 :D", 'color:#ffb0b8; font-size:25px;');
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
          <div className="header font-medium">
            <ul>
              <li>
                <div className="header-img"></div>
                <NavLink className="nav-title" to="/App-and-Me-Website2020/"><span className="logo-title font-bold">APP &#38; ME</span></NavLink>
              </li>
              <li>
                <NavLink className="nav-title"to="/App-and-Me-Website2020/FA" activeStyle={{color:'#ffb0b8'}}>F&#38;A</NavLink>
              </li>
              <li>
                <NavLink className="nav-title"to="/App-and-Me-Website2020/Apply" activeStyle={{color:'#ffb0b8'}}>APPLY</NavLink>
              </li>
              <li>
                <NavLink className="nav-title"to="/App-and-Me-Website2020/Members" activeStyle={{color:'#ffb0b8'}}>MEMBERS</NavLink>
              </li>
              <li>
                <NavLink className="nav-title"to="/App-and-Me-Website2020/About" activeStyle={{color:'#ffb0b8'}}>ABOUT</NavLink>
              </li>
              {/* <li>
                <NavLink to="/Only">O</NavLink>
              </li> */}
            </ul>
          </div>
          <div className="hr"></div>
          <div className="content">
            <Route path="/App-and-Me-Website2020/" component={Main} exact={true}/>
            <Route path="/App-and-Me-Website2020/About" component={About}/>
            <Route path="/App-and-Me-Website2020/Members" component={Members}/>
            <Route path="/App-and-Me-Website2020/Apply" component={Apply}/>
            <Route path="/App-and-Me-Website2020/FA" component={FA}/>
            <Route path="/App-and-Me-Website2020/Only" component={Only}/>
          </div>
          <Footer/>
        </div>
      </Provider>
    )
  }
}

export default App;