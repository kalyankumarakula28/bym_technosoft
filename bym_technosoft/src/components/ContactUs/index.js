import "./index.css";
import React from "react";
import SubmitForm from "../SubmitForm";

const ContactUs = () => {
  return (
    < >
      <div className="location-address-container">
        <div>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3805.325948862795!2d78.39325!3d17.4919472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI5JzMxLjAiTiA3OMKwMjMnMzUuNyJF!5e0!3m2!1sen!2sin!4v1692308141735!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="address-container">
          .
          <div className="address">
            <img
              src="https://image3.jdomni.in/banner/06062022/67/10/FF/69558F910337CEE830971710A1_1654495612762.png?output-format=webp"
              alt="contactus-img"
              className="contactus-inner-img"
            />
            <div className="address-block-inner-container">
              <h1 className="address-container-heading">Our Office Address</h1>
              <p className="address-container-info">
                KPHB Colony,Hyderbad,Telangana 500085
              </p>
              <p className="address-container-info">
                Nandini residency flat no.23,Addagutta Society
              </p>
            </div>
          </div>
          <div className="enquiries">
            <img
              src="https://image3.jdomni.in/banner/06062022/B9/7F/F8/987ED4A276DF294049ACB2A593_1654495620715.png?output-format=webp"
              alt=""
              className="contactus-inner-img"
            />
            <div className="address-block-inner-container">
              <h1 className="address-container-heading">Genereal Enquiries</h1>
              <p className="address-container-info">hr@bymtechnosoft.in</p>
            </div>
          </div>
          <div className="callus">
            <img
              src="https://image2.jdomni.in/banner/06062022/2E/4E/A5/ACBFA60042FD0FCE19F8E62FE2_1654495627774.png?output-format=webp"
              alt=""
              className="contactus-inner-img"
            />
            <div className="address-block-inner-container">
              <h1 className="address-container-heading">Call Us</h1>
              <p className="address-container-info">+91-9676444764</p>
            </div>
          </div>
          <div className="timings">
            <img
              src="https://image3.jdomni.in/banner/06062022/03/40/EE/E920A3223580D587892C8B11BF_1654495638658.png?output-format=webp"
              alt=""
              className="contactus-inner-img"
            />
            <div className="address-block-inner-container">
              <h1 className="address-container-heading">Out Timing</h1>
              <p className="address-container-info">
                Mon-Sat:09:30 AM - 6:30 PM
              </p>
              <p className="address-container-info">Sun:Closed</p>
            </div>
          </div>
        </div>
      </div>
      <SubmitForm/>
    </>
  );
};

export default ContactUs;
