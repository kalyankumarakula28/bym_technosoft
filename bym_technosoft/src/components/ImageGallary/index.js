import React, { Component } from "react";
import { MdOutlineArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import "./index.css";

const image_urls = [
  "https://image3.jdomni.in/banner/03082023/D3/FB/F2/32A7B559B523B32C63133C0588_1691049858485.jpg?output-format=webp",

  "https://image1.jdomni.in/banner/03082023/7F/94/F1/6CCD70B45C33C98EE32BE9A68E_1691050577034.jpg?output-format=webp",

  "https://image3.jdomni.in/banner/22102020/F7/43/C1/F8C195BB3528A7C73E9F57CAA3_1603373148711.jpg?output-format=webp",

  "https://image3.jdomni.in/banner/03082023/69/A6/26/0AAE3E2E21A2506E0337114A90_1691049948182.jpg?output-format=webp",

  "https://image1.jdomni.in/banner/03082023/81/7F/69/62F0B9B16F5C352D6EFD401D1A_1691050617384.jpg?output-format=webp",

  "https://image3.jdomni.in/banner/03082023/4B/BC/3B/E1A5C1F3079BE3EB39AF045253_1691049994275.jpg?output-format=webp",

  "https://image3.jdomni.in/banner/24082022/C4/28/DA/BEDA2C8DA165BFBA9749C3B48B_1661318022917.jpeg?output-format=webp",

  "https://image2.jdomni.in/banner/24082022/DF/1C/72/C9072EC2711813B438DB7DA968_1661317862628.jpg?output-format=webp",

  "https://image2.jdomni.in/banner/24082022/BC/A4/6B/6C68B24CFB2C3A07F4F9C6B443_1661317804257.jpeg?output-format=webp",

  "https://image3.jdomni.in/banner/06062022/36/1B/42/EE100187F73EF813F67BAD880A_1654495167329.jpg?output-format=webp",

  "https://image2.jdomni.in/banner/06062022/9C/D8/A5/9811905341EEA59416A804191E_1654495087985.jpeg?output-format=webp",

  "https://image3.jdomni.in/banner/06062022/5F/4D/F2/14F6AE38FD9525901A7D8BF0FD_1654495079533.jpeg?output-format=webp",
];

class ImageGallary extends Component {
  state = {
    startIndex: 0,
    endIndex: 9,
  };

  updateForwardIndex = () => {
    const { endIndex } = this.state;
    if (endIndex < image_urls.length) {
      this.setState((prevState) => ({
        startIndex: prevState.startIndex + 9,
        endIndex: prevState.endIndex + 9,
      }));
    }
  };
  updateBackwardIndex = () => {
    const { startIndex } = this.state;
    if (startIndex > 0) {
      this.setState((prevState) => ({
        startIndex: prevState.startIndex - 9,
        endIndex: prevState.endIndex - 9,
      }));
    }
  };
  render() {
    const { startIndex, endIndex } = this.state;
    console.log(startIndex);
    const filteredImageUrls = image_urls.slice(startIndex, endIndex);
    return (
      <div className="gallery-arrow-container">
        <button
          className="arrow-button left-arrow"
          onClick={this.updateBackwardIndex}
        >
          <MdOutlineArrowBackIosNew />
        </button>
        <div className="gallery-container">
          {filteredImageUrls.map((each_img) => {
            return (
              <div className="img-container">
                <img src={each_img} alt="gallery_img" className="gallery_img" />
              </div>
            );
          })}
        </div>
        <button
          className="arrow-button right-arrow"
          onClick={this.updateForwardIndex}
        >
          <MdArrowForwardIos />
        </button>
      </div>
    );
  }
}

export default ImageGallary;
