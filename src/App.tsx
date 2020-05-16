import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          免费注册账号
        </p>
        <p>
          已经有账号？
          <a
            className="App-link"
            href="/sessions/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            登录
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
