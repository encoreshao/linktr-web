import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol,  MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";

import { useTranslation } from 'react-i18next';

const LTJumbotronPage = () => {
  const { t } = useTranslation();

  return (
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="p-0">
            <MDBCardImage
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(134).jpg"
            />
            <MDBCardBody>
              <MDBCardTitle className="h3">链</MDBCardTitle>
              <MDBCardText>
                {t('tip.nearestWithWorld')}
              </MDBCardText>
              <MDBBtn outline color="cyan" rounded href='/signup' tag='a'>
                {t('action.joinUs')}
              </MDBBtn>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default LTJumbotronPage;
