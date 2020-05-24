import React from 'react';
import { withRouter } from 'react-router';
import { MDBContainer } from "mdbreact";
import LTGridCarousel from './../../components/LTGridCarousel'

import { useTranslation } from 'react-i18next';

const LTHelp = () => {
  const { t, i18n } = useTranslation();

  return (
    <MDBContainer fluid className='mt-3 pt-3'>
      <LTGridCarousel />
    </MDBContainer>
  );
}

export default withRouter(LTHelp);
