import React from "react";
import Navbar from "./Navbar";
import directorImage from "../Images/Director_Image.jpg";
import teamImage1 from "../Images/Team_member_1.png";
import teamImage2 from "../Images/Team_member_2.png";
import teamImage3 from "../Images/Team_member_3.png";
import teamImage4 from "../Images/Team_member_4.png";

const AboutUs = () => {
  return (
    <>
      <div className="about-page">
        <Navbar />
        <div className="about-details">
          <div className="founder-and-mission">
            <div className="founder-and-director">
              <h1>Founder & Director</h1>
              <p>
                I spent my 17th birthday in an orphanage, and after seeing the
                children there, their love, and their smiles, I realised that
                there was a lot that could be done for them and other children.
                That is when I founded the NGO; initially, I worked by myself,
                and then gradually, others joined. However, these new members
                only stayed for a few days or months; this is still the case
                today. The thing that kept me going was my unwavering
                determination to help people and improve society. — Soumay Singh
                Rawat
              </p>
            </div>
            <div className="our-mission">
              <h1>Our Mission</h1>
              <p>
                The idea is to give back to the people who need it the most. We
                aspire to bring a change in our own unique way in the fields of
                Animal Welfare, Environmental Protection, Women Welfare, and
                Education & Feeding Programs for the lesser fortunate sections
                of the society.
              </p>
            </div>
          </div>
          <div className="founder-img">
            <img src={directorImage} alt="" />
            <p>Founder & Director- Mr. Soumay Singh Rawat</p>
          </div>
        </div>
        <div className="scores">
          <div className="score-card">
            <p>130+</p>
            <p>Kids have been taught so far</p>
          </div>
          <div className="score-card">
            <p>350+</p>
            <p>Trees have been planted till date</p>
          </div>
          <div className="score-card">
            <p>100+</p>
            <p>Animals have been fed thus far</p>
          </div>
        </div>
        <div className="future-goals">
          <h1>Future Goals</h1>
          <p>
            Keeping in mind the motto, Achal tends to plan it's future goals and
            workings. As there are five projects running each project has it's
            own set of goals and working patterns. Achal's goal for future
            endeavours are setting up the projects and running them to its full
            strength. It also plans to Collobrate with other NGOs, social
            entities and other social personal and expand its working areas. It
            tends to bring all the people who believe in doing good, are ready
            to bring the change and be the changemaker under one common roof for
            the development and betterment of the society.
          </p>
        </div>
        <div className="our-team">
          <h1>Our Team</h1>
          <div className="our-team-cards">
            <div className="our-team-card">
              <img src={teamImage1} alt="" />
              <h3>Yukti Goyal</h3>
              <p>
                Head of Rubaro <br /> 9650953987
              </p>
            </div>
            <div className="our-team-card">
              <img src={teamImage2} alt="" />
              <h3>Sonal Tyagi</h3>
              <p>
                Head of Shiksha <br /> 9560234534
              </p>
            </div>
            <div className="our-team-card">
              <img src={teamImage3} alt="" />
              <h3>Ishita Sharma</h3>
              <p>
                Head of Jeev <br /> 8795300236
              </p>
            </div>
            <div className="our-team-card">
              <img src={teamImage4} alt="" />
              <h3>Shweta Sharma</h3>
              <p>
                Head of Design Departmentbr <br /> 7678677248
              </p>
            </div>
          </div>
        </div>
        <div className="copyright-text">
          <p>Copyright 2022 - Achal Welfare Foundation, All Rights Reserved</p>
          <div className="back-to-top"></div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
