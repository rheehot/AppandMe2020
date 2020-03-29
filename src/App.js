import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom';
import './App.css';
import Main from './Components/main/Main';
import About from './Components/about/About';
import Apply from './Components/apply/Apply';
import Members from './Components/members/Members';
import FA from './Components/fa/FA';
import Only from './Components/only/Only';
import Footer from './Components/footer/Footer';

class App extends Component {

  componentDidMount(){
    console.log("%c안녕하세요! 퀴즈를 맞춘 것을 축하해요!", 'color:#ffb0b8; font-size:25px;');
    console.log("%c면접이 끝나고 퀴즈를 풀었냐고 물어보면", 'color:#ffb0b8; font-size:25px;');
    console.log("%cHello World! 라고 말해주세요 :D", 'color:#ffb0b8; font-size:25px;');
  }

  render(){

    return (
      <div>
        <div className="App">
          <div className="header">
            <div className="dropdown">
              <div className="header-img"></div>
              <NavLink className="nav-title" to="/"><span className="logo-title">APP &#38; ME</span></NavLink>
              <button className="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <NavLink className="dropdown-item"to="/About" activeStyle={{color:'#ffb0b8', backgroundColor:'#fff'}}>ABOUT</NavLink>
                <NavLink className="dropdown-item"to="/Members" activeStyle={{color:'#ffb0b8', backgroundColor:'#fff'}}>MEMBERS</NavLink>
                <NavLink className="dropdown-item"to="/Apply" activeStyle={{color:'#ffb0b8', backgroundColor:'#fff'}}>APPLY</NavLink>
                <NavLink className="dropdown-item"to="/FA" activeStyle={{color:'#ffb0b8', backgroundColor:'#fff'}}>F&#38;A</NavLink>
              </div>
            </div>
            <ul className="list">
              <li>
                <div className="header-img"></div>
                <NavLink className="nav-title" to="/"><span className="logo-title">APP &#38; ME</span></NavLink>
              </li>
              <li>
                <NavLink className="nav-title"to="/FA" activeStyle={{color:'#ffb0b8'}}>F&#38;A</NavLink>
              </li>
              <li>
                <NavLink className="nav-title"to="/Apply" activeStyle={{color:'#ffb0b8'}}>APPLY</NavLink>
              </li>
              <li>
                <NavLink className="nav-title"to="/Members" activeStyle={{color:'#ffb0b8'}}>MEMBERS</NavLink>
              </li>
              <li>
                <NavLink className="nav-title"to="/About" activeStyle={{color:'#ffb0b8'}}>ABOUT</NavLink>
              </li>
              {/* <li>
                <NavLink to="/Only">O</NavLink>
              </li> */}
            </ul>
          </div>
          <hr/>
          <div className="content">
            <Route path="/" component={Main} exact={true}/>
            <Route path="/About" component={About}/>
            <Route path="/Members" component={Members}/>
            <Route path="/Apply" component={Apply}/>
            <Route path="/FA" component={FA}/>
            <Route path="/Only" component={Only}/>
          </div>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default App;