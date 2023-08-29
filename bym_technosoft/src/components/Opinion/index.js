import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

class Opinion extends Component {
  render() {
    const settings = {
      accessbility: true,
      adaptiveHeight: true,
      swipe: true,
      useCSS: true,
      className: "slider-container",
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
    };
    return (
      <Slider {...settings}>
        <div>
          <div className="slider-inner-container">
            <img
              src="https://image1.jdomni.in/banner/06062022/5A/3C/F9/75FDBBBB315BE6D8C49AD85F86_1654495653932.png?output-format=webp"
              alt="quote-img"
              className="quote-img"
            />
            <div className="review-container">
              <h3 className="reviewer-name">Riddi Shukla</h3>
              <p className="review">
                They have helped me a lot with my projects. I’m really thankful
                to them.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="slider-inner-container">
            <img
              src="https://image1.jdomni.in/banner/06062022/5A/3C/F9/75FDBBBB315BE6D8C49AD85F86_1654495653932.png?output-format=webp"
              alt="quote-img"
              className="quote-img"
            />
            <div className="review-container">
              <h3 className="reviewer-name">MiraRajPut</h3>
              <p className="review">
                My go to place whenever I’m in a hurry to submit my college
                thesis. Totally recommended!
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="slider-inner-container">
            <img
              src="https://image1.jdomni.in/banner/06062022/5A/3C/F9/75FDBBBB315BE6D8C49AD85F86_1654495653932.png?output-format=webp"
              alt="quote-img"
              className="quote-img"
            />
            <div className="review-container">
              <h3 className="reviewer-name">Devanshu Soni</h3>
              <p className="review">
                Certainly 5 stars to them. They write the best thesis.
              </p>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}

export default Opinion;
