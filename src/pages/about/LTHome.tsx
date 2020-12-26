import React from 'react';
import { withRouter } from 'react-router-dom';
import logo from './../../images/logo.svg';
import { MDBContainer, MDBCard, MDBBtn } from "mdbreact";

import LTFeaturesPage from './../../components/LTFeaturesPage'
import './LTHome.css'

import { useTranslation } from 'react-i18next';

const LTHome = () => {
  const { t } = useTranslation();

  return (
    <MDBContainer fluid className='mt-5 pt-3'>
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
      </section>
      <LTFeaturesPage />
    </MDBContainer>
  );
}

export default withRouter(LTHome);
