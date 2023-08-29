import "./index.css";
import Button from "../Button";
import { BsTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { BiPhone } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import { FiUser } from "react-icons/fi";
import { MdExpandLess } from "react-icons/md";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-upper-container">
        <div className="social-contact-container">
          <div className="social-wrapper">
            <ul className="social-list-icons">
              <li className="social-icon">
                <a target="_blank" href="tel:6309429379" rel="noreferrer">
                  <BsTelephoneFill size={"16px"} color="#3d3d3b" />
                </a>
              </li>
              <li className="social-icon email-icon">
                <a
                  target="_blank"
                  href="mailto:bymtechnosoft@gmail.com"
                  rel="noreferrer"
                >
                  {" "}
                  <IoIosMail size={"20px"} color="#3d3d3b" />
                </a>
              </li>
              <li className="social-icon">
                <a
                  target="_blank"
                  href="http://www.justdial.com/dt-282G48DWZPW"
                  rel="noreferrer"
                >
                  <span className="just-dial">Jd</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="contact-wrapper">
            <ul className="contact-info-container">
              <li>
                <a target="_blank" href="#f">
                  <BiPhone size={"20px"} color="#3d3d3b" />
                </a>
              </li>
              <li>
                <a target="_blank" href="#f">
                  <p className="contact-details">+91-9676444764</p>
                </a>
              </li>
            </ul>
            <ul className="contact-info-container">
              <li>
                <a target="_blank" href="#f">
                  <CiMail size={"20px"} color="#3d3d3b" />
                </a>
              </li>
              <li>
                <a target="_blank" href="#f">
                  <p className="contact-details">hr@bymtechnosoft.in</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="location-login-signup-container">
          <div className="location-container">
            <ul className="location-list-container">
              <li>
                <a target="_blank" href="#f">
                  <SlLocationPin size={"20px"} color="#3d3d3b" />
                </a>
              </li>
              <li>
                <a target="_blank" href="#f">
                  <p className="location-name">KPHB Colony</p>
                </a>
              </li>
            </ul>
          </div>
          <div className="login-signup-container">
            <ul className="login-signup-list-container">
              <li className="login-singup-list-item">
                <a href="f" target="_blank" className="login-icon-container">
                  <FiUser size={"20px"} color="#3d3d3b" />
                  <span className="login">Log In</span>
                </a>
              </li>
              <li className="login-singup-list-item">|</li>
              <li className="login-singup-list-item">
                <a href="f" target="_blank">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header-secondary-container">
        <div className="headers-items-part1-container">
          <ul className="headers-items-part1-list-container">
            <li className="hedaer-secondary-list-item">
              <a href="rr">HOME</a>
            </li>
            <li className="hedaer-secondary-list-item">
              <a href="rr">SERVICES</a>
            </li>
            <li className="hedaer-secondary-list-item">
              <a href="rr">ABOUT US</a>
            </li>
            <li className="hedaer-secondary-list-item">
              <a href="rr">WHY US</a>
            </li>
          </ul>
        </div>
        <div className="headers-items-part2-container">
          <div className="header-secondary-logo-container">BT</div>
          <div>
            <p className="bym-logo-name">Bym Technosoft</p>
          </div>
        </div>
        <div className="headers-items-part3-container">
          <ul className="headers-items-part3-list-container">
            <li className="hedaer-secondary-list-item">
              <a href="rr">GALLERY</a>
            </li>
            <li className="hedaer-secondary-list-item">
              <a href="rr">VIDEOS</a>
            </li>
            <li className="hedaer-secondary-list-item">
              <a href="rr">TESTIMONALS</a>
            </li>

            <li className="hedaer-secondary-list-item dropdown-container">
              <a href="kk" className="dropdown">
                MORE{" "}
                <span>
                  <MdExpandLess />
                </span>
              </a>
              <div className="dropdown-content">
                <a href="oo">Contact Us</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="template-content-container">
        <div className="template-content-inner-container">
          <h1 className="template-content-heading">Leading and Trusted</h1>
          <p className="template-content-paragraph">
            JAVA,TESTING,DOT NET,SCIENCE,POWER BI,SPLUNK,WEB LOGIC & WAS
            <br /> Training Institues
          </p>

          <button className="btn-element">Enquire Now</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
