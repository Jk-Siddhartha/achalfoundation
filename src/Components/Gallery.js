import React from "react";
import { useEffect } from "react";
import Navbar from "./Navbar";
import aaharbg from "../Images/aaharbg.png";
import prakritibg from "../Images/prakritibg.png";
import sikshabg from "../Images/sikshabg.png";
import jeevbg from "../Images/jeevbg.png";
import rubarobg from "../Images/rubarobg.png";
import { useState } from "react";

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

const imageArr = [
  aaharbg,
  prakritibg,
  sikshabg,
  jeevbg,
  rubarobg,
  aaharbg,
  prakritibg,
  sikshabg,
  jeevbg,
  rubarobg,
];

const Gallery = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    showSlides();
    loadImages();
  }, []);

  const loadImages = () => {
    setImages(imageArr);
  };

  return (
    <>
      <div className="gallery-page">
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
        <div className="images-container">
          <h1>
            <span>OUR GALLERY</span>
          </h1>
          <div className="images">
            {images.map((curr) => (
              <a href={curr}>
                <img src={curr} alt="" srcset="" />
              </a>
            ))}
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

export default Gallery;
