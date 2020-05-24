import React from 'react';
import { withRouter } from 'react-router';

import logo from './../../images/logo.svg';
import './LTHome.css'

import { MDBBtn } from "mdbreact";

import LTFeaturesPage from './../../components/LTFeaturesPage'

import { useTranslation } from 'react-i18next';

const LTHome = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className='home-intro pt-5 mt-5 text-center'>
      <header className='App-header'>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {t('tip.freeSignUp')}
          </p>
          <p>
            {t('tip.haveAccount')}

            <MDBBtn outline color="cyan" rounded href='/login' tag='a'>
              {t('action.login')}
            </MDBBtn>
          </p>
        </div>
      </header>
      <LTFeaturesPage />
    </div>
  );
}

export default withRouter(LTHome);
