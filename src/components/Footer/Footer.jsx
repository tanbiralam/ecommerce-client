import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            At RegalChronos, we curate an exceptional selection of timepieces
            that transcend the ordinary and epitomize opulence and refinement.
            Our passion for horology drives us to showcase a range of watches
            that blend tradition and innovation, making a statement of timeless
            elegance. Explore our carefully chosen collection and experience the
            pinnacle of luxury in every tick and tock.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              RegalChronos Watch Store 123 Royal Avenue Elegant City, Luxeville
              Postal Code: L1X 0YZ
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: (555) 123-4567</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: store@regalchronos.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Analog Watches</span>
          <span className="text">Digital Watches</span>
          <span className="text">Quartz Watches</span>
          <span className="text">Automatic Watches Earbuds</span>
          <span className="text">Women Watches</span>
          <span className="text">Kid Watches</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">
             @RegalChronos 2022 CREATED BY TANBIR. PREMIUM E-COMMERCE WEBSITE.
          </span>
          <img src={Payment} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
