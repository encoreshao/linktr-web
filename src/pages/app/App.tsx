import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';

import LTNavbar from './../../components/LTNavbar'

import LTHome from './../about/LTHome';
import LTAbout from './../about/LTAbout';
import LTSignIn from './../sessions/LTSignIn';
import LTError from './../../components/LTError';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <LTNavbar />
        <Switch>
          <Route path="/" component={withRouter(LTHome)} exact />
          <Route path="/links" component={withRouter(LTAbout)} />
          <Route path="/signin" component={withRouter(LTSignIn)} />
          <Route path="/error"  component={withRouter(LTError)} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
