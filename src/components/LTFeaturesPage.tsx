import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBView } from "mdbreact";

import { useTranslation } from 'react-i18next';

const LTFeaturesPage = () => {
  // const newsStyle = {
  //   borderBottom: "1px solid #e0e0e0",
  //   marginBottom: "1.5rem"
  // };
  const { t } = useTranslation();

  return (
    <MDBCard>
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold my-5 text-center">
          {t('tip.onlyOneLink')}
        </h2>
        <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
          {t('tip.takeYouToTheWorld')}
        </p>
        <MDBRow>
          <MDBCol md="12" lg="4" className="mb-lg-0 mb-5">
            <MDBView hover rounded className="z-depth-1-half mb-4">
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" className="waves-light" />
              </a>
            </MDBView>
{/*            <MDBRow className="mb-3">
              <MDBCol size="12">
                <a href="#!">
                  <MDBBadge color="pink">
                    <MDBIcon icon="camera" className="pr-2" aria-hidden="true" />
                    Adventure
                    </MDBBadge>
                </a>
              </MDBCol>
            </MDBRow>*/}
{/*            <div className="d-flex justify-content-between" style={newsStyle}>
              <MDBCol size="11" className="text-truncate pl-0 mb-3">
                <a href="#!" className="font-weight-bold">
                  This is title of the news
                  </a>
              </MDBCol>
              <a href="#!">
                <MDBIcon icon="angle-double-right" />
              </a>
            </div>
            <div className="d-flex justify-content-between" style={newsStyle}>
              <MDBCol size="11" className="text-truncate pl-0 mb-3">
                <a href="#!">24 Food Swaps That Slash Calories.</a>
              </MDBCol>
              <a href="#!">
                <MDBIcon icon="angle-double-right" />
              </a>
            </div>
            <div className="d-flex justify-content-between" style={newsStyle}>
              <MDBCol size="11" className="text-truncate pl-0 mb-3">
                <a href="#!">How to Make a Beet Cocktail?</a>
              </MDBCol>
              <a href="#!">
                <MDBIcon icon="angle-double-right" />
              </a>
            </div>
            <div className="d-flex justify-content-between" style={newsStyle}>
              <MDBCol size="11" className="text-truncate pl-0 mb-3">
                <a href="#!">8 Sneaky Reasons You're Always Hungry.</a>
              </MDBCol>
              <a href="#!">
                <MDBIcon icon="angle-double-right" />
              </a>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <MDBCol size="11" className="text-truncate pl-0 mb-3">
                <a href="#!">5 Pressure Cooker Recipes You Need to Try.</a>
              </MDBCol>
              <a href="#!">
                <MDBIcon icon="angle-double-right" />
              </a>
            </div>*/}
          </MDBCol>

          <MDBCol md="12" lg="4" className="mb-lg-0 mb-5">
            <MDBView hover rounded className="z-depth-1-half mb-4">
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/31.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" className="waves-light" />
              </a>
            </MDBView>
{/*            <MDBRow className="mb-3">
              <MDBCol size="12">
                <a href="#!">
                  <MDBBadge color="deep-orange">
                    <MDBIcon icon="plane" className="pr-2" aria-hidden="true" />
                    Travel
                    </MDBBadge>
                </a>
              </MDBCol>
            </MDBRow>*/}
{/*            <div className="d-flex justify-content-between" style={newsStyle}>
              <MDBCol size="11" className="text-truncate pl-0 mb-3">
                <a href="#!" className="font-weight-bold">
                  This is title of the news
                  </a>
              </MDBCol>
              <a href="#!">
                <MDBIcon icon="angle-double-right" />
              </a>
            </div>
            <div className="d-flex justify-content-between" style={newsStyle}>
              <MDBCol size="11" className="text-truncate pl-0 mb-3">
                <a href="#!">Trends in the blogosphere for 2018.</a>
              </MDBCol>
              <a href="#!">
                <MDBIcon icon="angle-double-right" />
              </a>
            </div>
            <div className="d-flex justify-content-between" style={newsStyle}>
              <MDBCol size="11" className="text-truncate pl-0 mb-3">
                <a href="#!">Where can you eat the best lunch in Warsaw?</a>
              </MDBCol>
              <a href="#!">
                <MDBIcon icon="angle-double-right" />
              </a>
            </div>
            <div className="d-flex justify-content-between" style={newsStyle}>
              <MDBCol size="11" className="text-truncate pl-0 mb-3">
                <a href="#!">What camera is worth taking for holidays?</a>
              </MDBCol>
              <a href="#!">
                <MDBIcon icon="angle-double-right" />
              </a>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <MDBCol size="11" className="text-truncate pl-0 mb-3">
                <a href="#!">Why should you visit Lisbon?</a>
              </MDBCol>
              <a href="#!">
                <MDBIcon icon="angle-double-right" />
              </a>
            </div>*/}
          </MDBCol>

          <MDBCol md="12" lg="4" className="mb-lg-0 mb-5">
            <MDBView hover rounded className="z-depth-1-half mb-4">
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/52.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" className="waves-light" />
              </a>
            </MDBView>
{/*            <MDBRow className="mb-3">
              <MDBCol size="12">
                <a href="#!">
                  <MDBBadge color="success">
                    <MDBIcon icon="leaf" className="pr-2" aria-hidden="true" />
                    Nature
                    </MDBBadge>
                </a>
              </MDBCol>
            </MDBRow>*/}
{/*            <div className="d-flex justify-content-between" style={newsStyle}>
              <MDBCol size="11" className="text-truncate pl-0 mb-3">
                <a href="#!" className="font-weight-bold">
                  This is title of the news
                  </a>
              </MDBCol>
              <a href="#!">
                <MDBIcon icon="angle-double-right" />
              </a>
            </div>
            <div className="d-flex justify-content-between" style={newsStyle}>
              <MDBCol size="11" className="text-truncate pl-0 mb-3">
                <a href="#!">
                  How to recognize the footsteps of wild animals?
                  </a>
              </MDBCol>
              <a href="#!">
                <MDBIcon icon="angle-double-right" />
              </a>
            </div>
            <div className="d-flex justify-content-between" style={newsStyle}>
              <MDBCol size="11" className="text-truncate pl-0 mb-3">
                <a href="#!">National Parks in Poland.</a>
              </MDBCol>
              <a href="#!">
                <MDBIcon icon="angle-double-right" />
              </a>
            </div>
            <div className="d-flex justify-content-between" style={newsStyle}>
              <MDBCol size="11" className="text-truncate pl-0 mb-3">
                <a href="#!">Traveling without littering the planet.</a>
              </MDBCol>
              <a href="#!">
                <MDBIcon icon="angle-double-right" />
              </a>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <MDBCol size="11" className="text-truncate pl-0 mb-3">
                <a href="#!">How to protect rainforests?</a>
              </MDBCol>
              <a href="#!">
                <MDBIcon icon="angle-double-right" />
              </a>
            </div>*/}
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default LTFeaturesPage;
