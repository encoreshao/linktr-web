import React, { Fragment } from 'react';
import { withRouter } from 'react-router';
import { MDBContainer, MDBInput, MDBBtn, MDBRow, MDBCol, MDBView, MDBMask, MDBAnimation } from "mdbreact";

import logo from './../../images/logo.svg';

import { useTranslation } from 'react-i18next';

const LTSignIn = () => {
  const { t } = useTranslation();
  const email     = t('model.user.email.label');
  const password   = t('model.user.password.label');

  return (
    <MDBContainer fluid className='container mt-5 pt-5'>
      <MDBRow className="pb-2">
        <MDBCol lg="12" className="text-center">
          <MDBAnimation type="bounce" infinite>
            <img className="img-fluid" src={logo} style={{ height: "100px" }} alt="logo" />
          </MDBAnimation>
        </MDBCol>
      </MDBRow>

      <hr />
      <MDBRow className="pt-5 pb-5 m-auto">
        <MDBCol lg="6">
          <h2 className="text-left cyan-text">
            {t('tip.gotoManagementPage')}
          </h2>
          <hr className="cyan"/>

          <MDBView hover zoom rounded className="cyan-text">
            <MDBInput label={email} background outline icon="envelope" type="email" />
            <MDBInput label={password} background outline icon="lock" type="password" />
            <Fragment>
              <MDBBtn gradient="cyan accent-3" rounded>
                <span className="white-text">{t('action.login')}</span>
              </MDBBtn>
            </Fragment>
          </MDBView>
        </MDBCol>

        <MDBCol lg='6'>
          <MDBView hover zoom rounded>
            <img
              src="https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
              className="img-fluid"
              alt="LinkTR.cn"
            />
            <MDBMask className="flex-center purple-gradient">
              <h3 className='text-center'>
                <MDBBtn outline rounded tag='a' href='/signup' color='yellow'>
                  {t('action.signupAccount')}
                </MDBBtn>
              </h3>
            </MDBMask>
          </MDBView>
        </MDBCol>
      </MDBRow>
      <hr />

      <MDBRow className='pt-2' />
    </MDBContainer>
  );
}

export default withRouter(LTSignIn);
