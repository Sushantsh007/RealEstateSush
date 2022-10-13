import React from "react";
import "./About.css";
import { MdBrandingWatermark, MdPlayCircle } from "react-icons/md";
import Aboutbanner from "../Images/about-banner.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div
          className="about-banner img-holder"
          style={{width: 600,height: 700}}
        >
          <img
            src={Aboutbanner}
            width="600"
            height="700"
            loading="lazy"
            alt="about banner"
            className="img-cover"
          />

          <button className="play-btn" aria-label="play video">
            <div>
            <MdPlayCircle />
            </div>
          </button>
        </div>

        <div className="about-content">
          <h2 className="h2 section-title">Efficiency. Transparency. Control.</h2>

          <p className="section-text">
            Hously developed a platform for the Real Estate marketplace that
            allows buyers and sellers to easily execute a transaction on their
            own. The platform drives efficiency, cost transparency and control
            into the hands of the consumers. Hously is Real Estate Redefined.
          </p>

          <a href="#" className="btn btn-primary">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
