import {
  faArrowLeft,
  faArrowRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageSlider from "./imageSlider";
import React, { useEffect, useState } from "react";
import "./slider.css";
import Image from "../../images/ptls.jpeg";
import Image1 from "../../images/home.jpg";
import Image2 from "../../images/hunza.jpeg";
import Image3 from "../../images/new.jpg";
import Image4 from "../../images/new2.jpg";
import Image5 from "../../images/new3.jpg";
import Image6 from "../../images/ptll1.jpeg";
import Image7 from "../../images/ptll2.jpeg";
import Image8 from "../../images/ptll3.jpg";
import Image9 from "../../images/ptll4.jpg";
import Image10 from "../../images/ptll5.jpg";
import Image11 from "../../images/ptll6.jpg";


const Slider = () => {
  // create a state
  const [slides] = useState([
    {
      source: Image3,
    },
    {
      source: Image1,
    },
    {
      source: Image2,
    },
    {
      source: Image3,
    },
    {
      source: Image4,
    },
    {
      source: Image5,
    },
    {
      source: Image6,
    },
    {
      source: Image7,
    },
    {
      source: Image8,
    },
    {
      source: Image9,
    },
    {
      source: Image10,
    }
  ]);

  // analyzing the position
  let [currentPosition, setcurrentPossition] = useState(0);

  // set the position to image
  let currentImage = slides[currentPosition];

  const setBanckgroundRight = () => {
    currentPosition !== slides.length - 1
      ? setcurrentPossition(currentPosition + 1)
      : setcurrentPossition((currentPosition = 0));
    currentImage = slides[currentPosition];
  };
  const setBanckgroundLeft = () => {
    currentPosition !== 0
      ? setcurrentPossition(currentPosition - 1)
      : setcurrentPossition((currentPosition = slides.length - 1));
    currentImage = slides[currentPosition];
  
  };
  var divStyle = {
    backgroundImage: `url(${currentImage.source})`
}


useEffect(()=>{

  // setInterval(setcurrentPossition(Math.floor(Math.random() +3)),10000)
})
  return (
    <>
      <div id="slider" style={divStyle}  className="image_slider">
        <div className="image_slider_container">
          <div className="image_slider_head">
            <h1 className="image_slider_heading">WELCOME</h1>

            <i className="image_slide_icon">
              <FontAwesomeIcon icon={faStar} color="yellow" />
            </i>
            <i className="image_slide_icon">
              <FontAwesomeIcon icon={faStar} color="yellow" />
            </i>
            <i className="image_slide_icon">
              <FontAwesomeIcon icon={faStar} color="yellow" />
            </i>
            <i className="image_slide_icon">
              <FontAwesomeIcon icon={faStar} color="yellow" />
            </i>
            <i className="image_slide_icon">
              <FontAwesomeIcon icon={faStar} color="yellow" />
            </i>
            <p className="image_slider_para">
              Passu is one of the best luxury hotels in our state. We offer
              high-quality <br /> accommodation with a wide variety of rooms,
              additional services, and <br /> amenities available to all our
              guests.
            </p>
          </div>

          <div className="slider_arrow_contents">
            <i style={{    position: 'absolute',
    top: '287px',
    left: '82px'}}>
              <FontAwesomeIcon
                onClick={setBanckgroundLeft}
                icon={faArrowLeft}
                color="white"
              />
            </i>

            <i style={{position: 'absolute',
    top: '287px',
    right: '83px'}}>
              <FontAwesomeIcon
                onClick={setBanckgroundRight}
                icon={faArrowRight}
                color="white"
              />
            </i>
          </div>
        </div>
      </div>
    </>
  );
};
export default Slider;
