import React from "react";
import Navbar from "./Navbar";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import aaharLogo from "../Images/1.png";
import prakritiLogo from "../Images/2.png";
import sikshaLogo from "../Images/3.png";
import jeevLogo from "../Images/4.png";
import rubaroLogo from "../Images/5.png";
import aaharbg from "../Images/aaharbg.png";
import prakritibg from "../Images/prakritibg.png";
import sikshabg from "../Images/sikshabg.png";
import jeevbg from "../Images/jeevbg.png";
import rubarobg from "../Images/rubarobg.png";
import image1 from "../Images/Image1.jpg";
import image2 from "../Images/Image2.jpg";
import image3 from "../Images/Image3.jpg";
import image4 from "../Images/Image4.jpg";
import image5 from "../Images/Image5.jpg";

const slideImages = [
  {
    url: aaharbg,
  },
  {
    url: prakritibg,
  },
  {
    url: sikshabg,
  },
  {
    url: jeevbg,
  },
  {
    url: rubarobg,
  },
];

const projectArr = [
  {
    name: "Project Aahar",
    moto: "“A healthy meal is the foundation of a healthy life.”",
    desc: "Nutritional food is one of the major basic requirements of life. In Project Aahar our volunteers mobilize healthy cooked meals for homeless and the needy ones. They are provided with food, which is rich in vitamins, proteins and other nutrients so that their body’s basic demands are met.",
    whyImp: [
      "People who follow good eating habits live longer and are less likely to develop life-threatening conditions including heart disease, type 2 diabetes, and obesity.",
      "You need proper nutrition if you want to strengthen your immune system.",
      "A healthy diet enhances wellbeing.",
      "Keeps Your Immune System Strong.",
    ],
    src: aaharLogo,
    bgsrc: aaharbg,
  },
  {
    name: "Project Prakriti",
    moto: "“World is beautiful with plants.”",
    desc: "Our forests, rivers, ocean and soils have provided humans with everything we needed to survive yet it was our selfish acts which has harmed our Mother Nature. As a part of Project Prakriti, our volunteers plant trees and protect the others from being cut down. We also follow Swachh Bharat Abhiyan where our team of volunteers conducts cleanliness drives at public places and spreads awareness about proper disposal of waste that we generate.",
    whyImp: [
      "Trees reduce climate change and clean up our air.",
      "Millions of species that shield humans from sickness find shelter in trees.",
      "Our towns' roadways are cooled by trees.",
      "Water pollution and floods are protected by trees.",
      "In difficult situations, trees provide mental relief.",
    ],
    src: prakritiLogo,
    bgsrc: prakritibg,
  },
  {
    name: "Project Shiksha",
    moto: "”A little help with a little smile gives meaning to human life.”",
    desc: "Education is for everyone but not all have access to it. In Project Shiksha we try to overcome this barrier by providing basic education to the underprivileged kids. Our volunteers also teach them basic life skills, like communication skills, building healthy relationships, thinking critically and creatively, solving problems, focus, and self-control. We also teach them equality and gender neutrality.",
    whyImp: [
      "Rural areas will have a healthier and more sustainable future with education.",
      "Learning more about policies, practises, rights, duties, government programmes, legislation, available benefits, and protective laws will help one better grasp a variety of good outcomes.",
      "It will give disadvantaged people employment and earning options.",
      "It will contribute to the eradication of poverty and hunger in rural areas.",
    ],
    src: sikshaLogo,
    bgsrc: sikshabg,
  },
  {
    name: "Project Jeev",
    moto: "”For animals, with the animals.”",
    desc: "All animals are worthy of being loved and taken care of. Project Jeev is for making sure that our little friends live in a world which knows their worth. Our volunteers also try to fulfill their basic needs including shelter, food, proper handling and health care in case of injury.",
    whyImp: [
      "Because so many animals are harmed due to their usage in entertainment, food, medicine, fashion, scientific research, and as exotic pets, animal welfare is crucial.",
      "Bring the food chain into equilibrium.",
      "Defend the natural world and all living things.",
      "Every animal has a right to a happy existence that includes adequate food, a healthy environment, good health, appropriate behaviour, and a sound mind.",
    ],
    src: jeevLogo,
    bgsrc: jeevbg,
  },
  {
    name: "Project Rubaro",
    moto: "“An initiative for a happy world, for and with everyone.”",
    desc: "Under this project, our volunteers are concerned with raising awareness and providing general education and knowledge regarding topics that are not yet normalized. Women empowerment, menstruation, sex education, equality for all, mental health, rape and harassment are some of the topics which we work on.",
    whyImp: [
      "In order to choose for their needs and expectations, women need have the freedom, faith, and self-worth.",
      "Women's true ability is not recognised since they are paid less and treated in households like slaves and cooks.",
      "Women must have the right to empowerment.",
      "The importance of discussing menstruation stems from its role in eradicating long-standing stigmas and false beliefs.",
    ],
    src: rubaroLogo,
    bgsrc: rubarobg,
  },
];

let slideIndex = 0;
const showSlides = () => {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
};

const projectsCard = document.querySelectorAll(".projects-card");
const projectsCardLogo = document.querySelectorAll(".projects-card-logo");
for (let i = 0; i < projectsCard.length; i++) {
  const text = document.querySelectorAll(".text");
  projectsCard[i].addEventListener("mouseover", () => {
    projectsCardLogo[i].style.zIndex = "-99";
    text[i].style.opacity = "1";
  });
  projectsCard[i].addEventListener("mouseout", () => {
    projectsCardLogo[i].style.zIndex = "99";
    text[i].style.opacity = "0";
  });
}

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    showSlides();
  }, []);

  const loadProject = (e) => {
    const id = e.currentTarget.dataset.id;
    navigate("/projects", {
      state: projectArr[id - 1],
    });
  };

  return (
    <>
      <div className="home-page">
        <div className="image-slider">
          <Navbar />
          <div className="slide-container">
            {slideImages.map((slideImage, index) => (
              <div className="mySlides fade">
                <img
                  src={slideImage.url}
                  alt=""
                  srcset=""
                  className="slide-img"
                />
              </div>
            ))}
          </div>

          <p>
            Achal Welfare Foundation is an initiative that was established on
            December 26, 2019 and took its first step in the path of helping and
            supporting needy people for their welfare and development in
            society.
          </p>
        </div>
        <div className="projects">
          <h1>Projects</h1>
          <div className="projects-cards-container">
            <div className="projects-card" onClick={loadProject} data-id={1}>
              <div className="text">
                "A healthy meal is the foundation of a healthy life"
              </div>
              <div className="projects-card-logo">
                <img src={aaharLogo} alt="" srcset="" />
              </div>
            </div>
            <div className="projects-card" onClick={loadProject} data-id={2}>
              <div className="text">
                "A healthy meal is the foundation of a healthy life"
              </div>
              <div className="projects-card-logo">
                <img src={prakritiLogo} alt="" srcset="" />
              </div>
            </div>
            <div className="projects-card" onClick={loadProject} data-id={3}>
              <div className="text">
                "A healthy meal is the foundation of a healthy life"
              </div>
              <div className="projects-card-logo">
                <img src={sikshaLogo} alt="" srcset="" />
              </div>
            </div>
            <div className="projects-card" onClick={loadProject} data-id={4}>
              <div className="text">
                "A healthy meal is the foundation of a healthy life"
              </div>
              <div className="projects-card-logo">
                <img src={jeevLogo} alt="" srcset="" />
              </div>
            </div>
            <div className="projects-card" onClick={loadProject} data-id={5}>
              <div className="text">
                "A healthy meal is the foundation of a healthy life"
              </div>
              <div className="projects-card-logo">
                <img src={rubaroLogo} alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
        <div className="gallery">
          <div>
            <h1>Gallery</h1>
            <NavLink to="/gallery" className="navlink">
              See All Images...
            </NavLink>
          </div>
          <div className="gallery-images">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
            <img src={image5} alt="" />
          </div>
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

export default Home;
