import React from 'react';
import { withRouter } from 'react-router';
import { MDBContainer } from "mdbreact";
import LTGridCarousel from './../../components/LTGridCarousel'

const LTHelp = () => {
  return (
    <MDBContainer fluid className='mt-3 pt-3'>
      <LTGridCarousel />
    </MDBContainer>
  );
}

export default withRouter(LTHelp);
