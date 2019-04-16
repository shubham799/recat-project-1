import React, { Component } from 'react';
import './login'
import Login from './login';
import Register from './register';
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    const isLogin = localStorage.getItem('Email_id') ? true : false;
    return (
      <section>
        {/* <div>
          {isLogin && <Login/>}
            <Register isLogin={isLogin}/>
        </div> */}
        <section>
          <Switch>
            <Route name="home" exact path='/' component={Login} />
            <Route name="login" path='/login' component={Login} />
            <Route name="login" path='/register' component={Register} />
          </Switch>
        </section>
      </section>
    );
  }
}

export default App;
