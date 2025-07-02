import React from "react";

const Banner: React.FC = () => {
  return (
    <section id="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="banner-content">
              <h1 className="page-titile">SafetyPlus</h1>
              <ul className="banner-nav pull-right">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-angle-right"></span>
                  </a>
                </li>
                <li>
                  <a href="#">Produtos</a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-angle-right"></span>
                  </a>
                </li>
                <li className="active">
                  <a href="#">SafetyPlus</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
