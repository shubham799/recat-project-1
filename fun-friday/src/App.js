import React, { Component } from 'react';
import './login/login'
import Login from './login/login';
import Register from './register'

class App extends Component {
  render() {
    const isLogin = localStorage.getItem('Email_id') ? true : false;
    return (
      <div>
         {isLogin && <Login/>}
          <Register/>
      </div>
    );
  }
}

export default App;
