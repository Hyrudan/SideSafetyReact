import React from "react";
import logo from "/assets/images/logo/logo.png";

const Footer: React.FC = () => {
  return (
    <>
      <section id="footer" style={{ paddingBottom: 1, paddingTop: 1 }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-4">
              <div className="footer-widget">
                <img className="nav-logo" src={logo} alt="Logo" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12 col-xs-12">
              <ul className="bottom-nav"></ul>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="copyright">
                <span>
                  &copy; 2017 All Rights Reserved by{" "}
                  <a href="#">SIDESAFETY</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
