import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardUp, MDBAvatar, MDBCardBody, MDBIcon } from "mdbreact";

const LTTestimonials = () => {
  return (
    <MDBContainer>
      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">
          Testimonials
        </h2>
        <p className="dark-grey-text w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
          error amet numquam iure provident voluptate esse quasi, veritatis
          totam voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard testimonial>
              <MDBCardUp color="info" />
              <MDBAvatar className="mx-auto white">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                  alt=""
                  className="rounded-circle img-fluid"
                />
              </MDBAvatar>
              <MDBCardBody>
                <h4 className="font-weight-bold mb-4">John Doe</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <MDBIcon icon="quote-left" className="pr-2" />
                  Lorem ipsum dolor sit amet eos adipisci, consectetur
                  adipisicing elit.
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-lg-0 mb-4">
            <MDBCard testimonial>
              <MDBCardUp gradient="blue" />
              <MDBAvatar className="mx-auto white">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                  alt=""
                  className="rounded-circle img-fluid"
                />
              </MDBAvatar>
              <MDBCardBody>
                <h4 className="font-weight-bold mb-4">Anna Aston</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <i className="fa fa-quote-left pr-2" />
                  Neque cupiditate assumenda in maiores repudiandae mollitia
                  architecto.
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-lg-0 mb-4">
            <MDBCard testimonial>
              <MDBCardUp className="indigo" />
              <MDBAvatar className="mx-auto white">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                  alt=""
                  className="rounded-circle img-fluid"
                />
              </MDBAvatar>
              <MDBCardBody>
                <h4 className="font-weight-bold mb-4">Maria Kate</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <i className="fa fa-quote-left pr-2" />
                  Delectus impedit saepe officiis ab aliquam repellat rem unde
                  ducimus.
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
}

export default LTTestimonials;
