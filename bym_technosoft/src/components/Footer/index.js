import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <>
      <div className="usefuk-links">
        <h1 className="footer-heading">USEFUL LINKS</h1>
        <ul>
          <li className="footer-list-item">
            <a href="aa">PRIVACY POLICY</a>
          </li>
          <li className="footer-list-item">
            <a href="a">SERVICES</a>
          </li>

          <li className="footer-list-item">
            <a href="a">WHY US</a>
          </li>

          <li className="footer-list-item">
            <a href="a">VIDEOS</a>
          </li>

          <li className="footer-list-item">
            <a href="a">CONTACT US</a>
          </li>
          <li className="footer-list-item">
            <a href="a">MORE</a>
          </li>
          <li className="footer-list-item">
            <a href="aa">CONTACT US</a>
          </li>
          <li className="footer-list-item">
            <a href="a">LESS</a>
          </li>
        </ul>
      </div>
      <div className="routing-links">
        <ul>
          <li className="footer-list-item">
            <a href="aa">HOME</a>
          </li>

          <li className="footer-list-item">
            <a href="aa">ABOUT US</a>
          </li>

          <li className="footer-list-item">
            <a href="aa">GALLERY</a>
          </li>

          <li className="footer-list-item">
            <a href="aa">TESTIMONALS</a>
          </li>
        </ul>
      </div>

      <div className="footer-address">
        <h1 className="footer-heading">CONTACT</h1>
        <ul>
          <li className="footer-list-item">
            <p className="footer-list-item">Nandini residency Flat</p>
            <p className="footer-list-item">no:203,addgutta society,KPHP</p>
            <p className="footer-list-item">Colony,Hyderabad,500045</p>
            <p className="footer-list-item">Hyderabad</p>
          </li>
          <li className="footer-list-item">
            <a href="aa"> +91-9676444764</a>
          </li>
          <li className="footer-list-item">
            <a href="aa">hr@bymtechnosoft.in</a>
          </li>
        </ul>
      </div>

      <div className="connect">
        <h1 className="footer-heading">CONNECT</h1>
        <a
          target="_blank"
          href="http://www.justdial.com/dt-282G48DWZPW"
          rel="noreferrer"
        >
          <span className="jd-logo">Jd</span>
        </a>
      </div>
    </>
  );
};

export default Footer;
