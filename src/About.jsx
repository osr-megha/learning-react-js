import React from "react";
//import { NavLink } from "react-router-dom";
import web from "../src/images/img3.jpg";
import Common from "./Common";

const About = () => {
  return (
    <React.Fragment>
      <Common
        name="Welcome to about page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </React.Fragment>
  );
};

export default About;
