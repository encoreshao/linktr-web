import React from 'react';
import { withRouter } from 'react-router';
import { MDBContainer, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";
import LTImagesCarousel from './../../components/LTImagesCarousel'

import { useTranslation } from 'react-i18next';

const LTAbout = () => {
  const { t } = useTranslation();

  return (
    <MDBContainer fluid className='container mt-5 pt-5 text-center'>
      <LTImagesCarousel />
      <MDBCardBody>
        <MDBCardTitle>
          {t('pricing.title')}
        </MDBCardTitle>
        <MDBCardText>
          {t('tip.nearestWithWorld')}
        </MDBCardText>
        <MDBBtn outline color="cyan" rounded href='/signup' tag='a'>
          {t('action.joinUs')}
        </MDBBtn>
      </MDBCardBody>
    </MDBContainer>
  );
}

export default withRouter(LTAbout);
