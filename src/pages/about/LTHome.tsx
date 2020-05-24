import React from 'react';
import { withRouter } from 'react-router';
import logo from './../../images/logo.svg';
import { MDBCard, MDBBtn } from "mdbreact";

import LTFeaturesPage from './../../components/LTFeaturesPage'
import './LTHome.css'

import { useTranslation } from 'react-i18next';

const LTHome = () => {
  const { t } = useTranslation();

  return (
    <section className="home-intro">
      <MDBCard className='home-header pt-5 mt-5 text-center'>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <MDBBtn outline color="cyan" rounded href='/signup' tag='a'>
              {t('tip.freeSignUp')}
            </MDBBtn>
          </p>
          <p>
            {t('tip.haveAccount')}

            <MDBBtn rounded gradient="aqua" tag='a' href='/login'>
              {t('action.login')}
            </MDBBtn>
          </p>
        </div>
      </MDBCard>

      <LTFeaturesPage />
    </section>
  );
}

export default withRouter(LTHome);
