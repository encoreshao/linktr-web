import React from 'react';
import { withRouter } from 'react-router';
import { MDBContainer } from "mdbreact";
import LTGridCarousel from './../../components/LTGridCarousel'

const LTHelp = () => {
  return (
    <MDBContainer fluid className='container mt-5 pt-5'>
      <LTGridCarousel />
    </MDBContainer>
  );
}

export default withRouter(LTHelp);
