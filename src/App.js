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
import FA from './Component/FA';
import Only from './Component/Only';

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
          <Route path="/" component={Main} exact="true"/>
          <Route path="/About" component={About}/>
          <Route path="/Members" component={Members}/>
          <Route path="/Apply" component={Apply}/>
          <Route path="/FA" component={FA}/>
          <Route path="/Only" component={Only}/>
          <Footer/>
        </div>
      </Provider>
    )
  }
}

export default App;
