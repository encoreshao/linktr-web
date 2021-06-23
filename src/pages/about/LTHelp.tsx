import React from 'react';
import { withRouter } from 'react-router-dom';
import { MDBContainer } from "mdbreact";
import LTGridCarousel from './../../components/LTGridCarousel';

const LTHelp = () => {
  return (
    <MDBContainer fluid className='text-center'>
      <LTGridCarousel />
    </MDBContainer>
  );
}

export default withRouter(LTHelp);
