// import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/flutter.png";
import Glasses from "../../img/logo192.png";
import Humble from "../../img/networkAdmin.png";
// import { themeContext } from "../../Context";
import { motion } from "framer-motion";
// import Resume from './resume.pdf';

const Services = () => {
  // context
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span>My Awesome</span>
        <span>services</span>
        <spane>
          Team-oriented Web Developer with 6 Months of freelance experience in creating re usable,
          <br />
          responsive websites. Highly skilled in designing UI templates for
          React Js.
          
        </spane>
        {/* <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a> */}
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Mobile App Developer"}
            detail={"Flutter"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Web Developer"}
            detail={"Html, Css, JavaScript, React"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Hardware & Network"}
            detail={
              "Maintanence of Hardware and Networking components"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;

// import React from 'react'

// const Services = () => {
//   return (
//     <div>Services
//       ServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServices
//       ServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServices
//       ServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServices
//       ServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServices
//       ServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServices
//       ServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServicesServices
//     </div>
//   )
// }

// export default Services
