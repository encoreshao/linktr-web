import React from 'react';
import { withRouter } from 'react-router';
import { MDBContainer } from "mdbreact";
import LTJumbotronPage from './../../components/LTJumbotronPage'
import LTImagesCarousel from './../../components/LTImagesCarousel'

const LTAbout = () => {
  return (
    <MDBContainer fluid className='mt-3 pt-3'>
      <LTImagesCarousel />
      <LTJumbotronPage />
    </MDBContainer>
  );
}

export default withRouter(LTAbout);
