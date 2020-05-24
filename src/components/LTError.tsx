import React from 'react';
import { MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { withRouter } from 'react-router';

const LTError = () => {
    return (
      <MDBContainer className="mt-5">
        <MDBView rounded>
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
            className="img-fluid"
            alt=""
          />
          <MDBMask pattern={0} className="flex-center rgba-teal-slight">
            <h1 className="white-text">Page does not exist!</h1>
          </MDBMask>
        </MDBView>
     </MDBContainer>
  );
}

export default withRouter(LTError);
