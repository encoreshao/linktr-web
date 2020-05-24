import React from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';

// Import i18n
import './../../utils/i18n';

import LTNavbar from './../../components/LTNavbar'

import LTHome from './../about/LTHome';
import LTAbout from './../about/LTAbout';
import LTHelp from './../about/LTHelp';
import LTSignIn from './../sessions/LTSignIn';
import LTSignUp from './../sessions/LTSignUp';
import LTPricingPlans from './../about/LTPricingPlans'
import LTError from './../../components/LTError';

import LTFooter from './../../components/LTFooter';

const App = () => {
  return (
    <BrowserRouter>
      <LTNavbar />

      <Switch>
        <div className="container pt-5">
          <Route path="/" component={withRouter(LTHome)} exact/>
          <Route path="/about" component={withRouter(LTAbout)} />
          <Route path="/login" component={withRouter(LTSignIn)} />
          <Route path="/signup" component={withRouter(LTSignUp)} />
          <Route path="/help" component={withRouter(LTHelp)} />
          <Route path="/pricing" component={withRouter(LTPricingPlans)} />
          <Route path="/error"  component={withRouter(LTError)} />
         </div>
      </Switch>

      <LTFooter />
    </BrowserRouter>
  );
}

export default App;
