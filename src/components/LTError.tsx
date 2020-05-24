import React from 'react';
import { MDBContainer, MDBMask, MDBView, MDBRow } from 'mdbreact';
import { withRouter } from 'react-router';

const LTError = () => {
    return (
      <MDBContainer className="mt-5 pt-5 m-auto">
        <MDBRow className='pt-5' />

        <MDBView rounded>
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
            className="img-fluid"
            alt=""
          />
          <MDBMask pattern={0} className="flex-center rgba-teal-slight">
            <h1 className="white-text text-up">Page does not exist!</h1>
          </MDBMask>
        </MDBView>

        <MDBRow className='pt-5' />
     </MDBContainer>
  );
}

export default withRouter(LTError);
