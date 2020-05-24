import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBContainer
} from "mdbreact";

class LTGridCarousel extends Component {
  render() {
    const images = [
      "https://mdbootstrap.com/img/Photos/Slides/img%20(137).jpg",
      "https://mdbootstrap.com/img/Others/documentation/img(115)-mini.jpg",
      "https://mdbootstrap.com/img/Others/documentation/img(116)-mini.jpg",
      "https://mdbootstrap.com/img/Others/documentation/img(117)-mini.jpg",
      "https://mdbootstrap.com/img/Others/documentation/img(118)-mini.jpg",
      "https://mdbootstrap.com/img/Others/documentation/img(129)-mini.jpg"
    ];

    return (
      <MDBContainer>
        <MDBRow>
          {[images[0]].map(
            (url: any, index: number) => (
              <MDBCol md="12" className="mb-3">
                <img src={url} className="img-fluid z-depth-1" alt="" />
              </MDBCol>
            )
          )}
        </MDBRow>
        <MDBRow>
          {[images[4], images[5]].map(
            (url: any, index: number) => (
              <MDBCol md="6" className="mb-3">
                <img src={url} className="img-fluid z-depth-1" alt="" />
              </MDBCol>
            )
          )}
        </MDBRow>
        <MDBRow>
          {[images[1], images[2], images[3]].map(
            (url: any, index: number) => (
              <MDBCol lg="4" md="12" className="mb-3">
                <img src={url} className="img-fluid z-depth-1" alt="" />
              </MDBCol>
            )
          )}
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default LTGridCarousel;
