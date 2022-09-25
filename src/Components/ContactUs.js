import React from "react";
import Navbar from "./Navbar";
import contactbg from "../Images/contactbg.jpg";

const ContactUs = () => {
  return (
    <>
      <div className="contact-page">
        <div className="contact-page-hero-section">
          <Navbar />
          <img src={contactbg} alt="" />
        </div>
        <div className="contact-cover">
          <div className="contact">
            <div className="first-section">
              <h1>Contact</h1>
              <div className="about-text">
                The Achal Foundation is a nonprofit organisation. We made the
                initial step toward assisting and supporting those in need for
                their wellbeing and social advancement. In the areas of animal
                welfare, environmental protection, women's welfare, and
                education and feeding initiatives for the less fortunate
                segments of society, we hope to make a difference in our own
                special manner. Take this journey with us.
              </div>
              <div className="location-map">
                <iframe
                  width="100%"
                  height="100%"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=achal%20foundation+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </div>
            <div className="form-section">
              <h1>Contact Us</h1>
              {/* <div className="name"> */}
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
              {/* </div> */}
              {/* <div className="email"> */}
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
              {/* </div> */}
              {/* <div className="phone"> */}
              <label htmlFor="phone">Mobile Number</label>
              <input type="number" name="phone" id="phone" />
              {/* </div> */}
              {/* <div className="message"> */}
              <label htmlFor="msg">Message</label>
              <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
              {/* </div> */}
              <button className="btn send">Send</button>
            </div>
          </div>
          <div className="contact-info">
            <div className="location">
              <i className="fa-solid fa-location-dot"></i>
              <p>
                Achal Welfare Foundation J/G- 43 Ganga Nagar, Near Gargi Girls
                School, Meerut- 250001
              </p>
            </div>
            <div className="email">
              <i className="fa-regular fa-envelope"></i>
              <p>Achal.Welfare.Foundation@gmail.com </p>
            </div>
            <div className="phone">
              <i className="fa-sharp fa-solid fa-phone"></i>
              <p>+91 7428070255</p>
            </div>
            <div className="instagram">
              <i className="fa-brands fa-instagram"></i>
              <p>achal_welfare_foundation</p>
            </div>
          </div>
          <div className="copyright-text">
            <p>
              Copyright 2022 - Achal Welfare Foundation, All Rights Reserved
            </p>
            <div className="back-to-top"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
