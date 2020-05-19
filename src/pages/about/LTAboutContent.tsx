import React from 'react';
import { MDBMask, MDBView } from 'mdbreact';
import logo from './../../images/logo.svg';
import './LTAboutContent.css'

class LTAboutContent extends React.Component<any, any> {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <MDBView src="https://images.unsplash.com/photo-1528668638375-51eae2f5b1ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3306&q=80">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
              <div className='App-logo'>
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
            </MDBMask>
          </MDBView>
        </header>
      </div>
    );
  }
}

export default LTAboutContent;
