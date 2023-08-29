import Header from "./components/Header";
import Services from "./components/Services";
import "./App.css";
import AboutUs from "./components/AboutUs";
import WhyUSCards from "./components/WhyUSCards";
import ImageGallary from "./components/ImageGallary";
import Videos from "./components/Videos";
import Opinion from "./components/Opinion";
import { MdOutlineArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import FooterBottom from "./components/FooterBottom";

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="main-heading">Services</h1>
      <div className="services-cards">
        <Services />
      </div>
      <div className="aboutus-container">
        <AboutUs />
      </div>
      <div className="whyus-container">
        <h1 className="main-heading">Why US</h1>
        <WhyUSCards />
      </div>
      <div>
        <h1 className="main-heading">Gallery</h1>
        <ImageGallary />
      </div>

      <div>
        <h1 className="main-heading">Videos</h1>
        <Videos />
      </div>
      <div className="opinion-container">
        <div>
          <img
            src="https://image3.jdomni.in/banner/14012022/86/A4/A6/D12CEF8ECDCA7A5AD4C49FFCCD_1642138009457.png?output-format=webp"
            alt="opinion-img"
            className="opinion-img"
          />
        </div>
        <div>
          <Opinion />
        </div>
      </div>
      <div className="contact-us-container">
        <h1 className="main-heading">Contact Us</h1>
        <ContactUs />
      </div>
      <div className="footer">
        <Footer />
      </div>
      <div className="footer-bottom">
        <FooterBottom/>
      </div>
    </div>
  );
}

export default App;
