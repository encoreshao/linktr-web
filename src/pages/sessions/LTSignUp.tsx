import React, { Fragment } from 'react';
import { withRouter } from 'react-router';
import {
  MDBContainer, MDBInput, MDBBtn, MDBRow, MDBCol,
  MDBView, MDBMask, MDBAnimation
} from "mdbreact";

import logo from './../../images/logo.svg';

import { useTranslation } from 'react-i18next';

const LTSignUp = () => {
  const { t } = useTranslation();
  const email     = t('model.user.email.label');
  const password   = t('model.user.password.label');
  const confirmation_password   = t('model.user.confirmation_password.label');

  return (
    <MDBContainer fluid className='mt-5 pt-5'>
      <MDBRow className="pb-2">
        <MDBCol lg="12" className="text-center">
          <MDBAnimation type="bounce" infinite>
            <img className="img-fluid" src={logo} style={{ height: "100px" }} alt="logo" />
          </MDBAnimation>
        </MDBCol>
      </MDBRow>

      <hr/>
      <MDBRow className="pt-5 pb-5 m-auto">
        <MDBCol lg='6'>
          <MDBView hover zoom rounded>
            <img
              src="https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
              className="img-fluid"
              alt=""
            />
            <MDBMask className="flex-center purple-gradient">
              <h3 className='text-center'>
                <p className='yellow-text'>{t('tip.haveAccount')}</p>
                <br />
                <MDBBtn outline rounded tag='a' href='/login' color='yellow'>
                  {t('action.login')}
                </MDBBtn>
              </h3>
            </MDBMask>
          </MDBView>
        </MDBCol>

        <MDBCol lg="6">
          <h2 className="text-left cyan-text">
            {t('tip.freeSignUp')}
          </h2>
          <hr className="cyan"/>

          <MDBView hover zoom rounded className="cyan-text">
            <MDBInput label={email} background outline type="email" />
            <MDBInput label={password} background outline type="password" />
            <MDBInput label={confirmation_password} background outline type="confirmation_password" />
            <Fragment>
              <MDBBtn gradient="cyan accent-3" rounded>
                <span className="white-text">{t('action.signup')}</span>
              </MDBBtn>
            </Fragment>
          </MDBView>
        </MDBCol>
      </MDBRow>
      <hr/>

      <MDBRow className='pt-2'>
      </MDBRow>
    </MDBContainer>
  );
}

export default withRouter(LTSignUp);
