import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import { useTranslation } from 'react-i18next';

// https://mdbootstrap.com/docs/react/css/colors/

const LTFooter = () => {
  const { t, i18n } = useTranslation();

  return (
    <MDBFooter className="font-small pt-4 mt-4 special-color">
      <MDBContainer fluid className="container text-center text-md-left">
        <MDBRow>
          <MDBCol>
            <h5 className="title">{t('about_us.title')}</h5>
            <p>
              {t('about_us.content')}
            </p>
          </MDBCol>

{/*          <MDBCol md="6">
           <h5 className="title">链接</h5>
            <ul className='mt-0'>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
            </ul>
          </MDBCol>*/}
        </MDBRow>
      </MDBContainer>

      <hr/>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright <a href="https://linktr.cn">{t('title')}</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default LTFooter;
