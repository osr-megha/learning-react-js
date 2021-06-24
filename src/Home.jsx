import React from "react";
//import { NavLink } from "react-router-dom";
import web from "../src/images/img5.jpg";
import Common from "./Common";

const Home = () => {
  return (
    <React.Fragment>
      <Common
        name="Grow your Business with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </React.Fragment>
  );
};

export default Home;
