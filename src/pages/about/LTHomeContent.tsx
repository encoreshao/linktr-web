import React from 'react';
import { MDBMask, MDBView } from 'mdbreact';
import logo from './../../images/logo.svg';
import './LTAboutContent.css'

class LTHomeContent extends React.Component<any, any> {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              免费注册账号
            </p>
            <p>
              已经有账号？
              <a
                className="App-link"
                href="/signin"
                target="_blank"
                rel="noopener noreferrer"
              >
                登录
              </a>
            </p>
          </div>
        </header>
      </div>
    );
  }
}

export default LTHomeContent;
