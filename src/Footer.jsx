import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <React.Fragment>
      <footer className="w-100 bg-left text-center">
        <p>Copyright © {year} All rights reserved</p>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
