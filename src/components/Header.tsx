import React from "react";
import logo from "../assets/images/logo/logo.png";

const Header: React.FC = () => {
  return (
    <header id="header-3" className="header">
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-4">
              <div className="top-left">
                <span>
                  Call Us: <a href="#">(+1) 828-376-0532</a>
                </span>
                <form className="language">
                  <span>Language:</span>
                  <select>
                    <option>EN</option>
                    <option>BN</option>
                    <option>UK</option>
                  </select>
                </form>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-8">
              <div className="top-right">
                <ul className="nav navbar-nav">
                  <li className="dropdown">
                    <a
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Help and Support <span className="fa fa-angle-down"></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="how-it-work.html">How It Work</a>
                      </li>
                      <li>
                        <a href="general-support.html">General Support</a>
                      </li>
                      <li>
                        <a href="help-center.html">Help Center</a>
                      </li>
                      <li>
                        <a href="support-article-details.html">
                          Support Article Details
                        </a>
                      </li>
                      <li>
                        <a href="terms-and-condition.html">
                          Terms &amp; Condition
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="flaticon-people">
                    <a href="sign-up.html">Register</a> or
                    <a href="sign-in.html">Sign in</a>
                  </li>
                  <li className="flaticon-bag-outline dropdown">
                    <a
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Cart (03)
                    </a>
                    <ul className="cart-dropdown cart bg-white">
                      <li>
                        <img
                          src="/images/shop/3.png"
                          alt=""
                          style={{ width: 40 }}
                        />
                        <a href="#">
                          {" "}
                          Wireless IP Camera CCTV{" "}
                          <span className="remove">
                            <i className="fa fa-times-rectangle"></i>
                          </span>
                          <br />
                          <p>1 X $5.00</p>
                        </a>
                      </li>
                      <li>
                        <img
                          src="/images/shop/4.png"
                          alt=""
                          style={{ width: 40 }}
                        />
                        <a href="#">
                          {" "}
                          Door Sensors Alarm{" "}
                          <span className="remove">
                            <i className="fa fa-times-rectangle"></i>
                          </span>{" "}
                          <br />
                          <p>1 X $24.00</p>{" "}
                        </a>
                      </li>
                      <li className="total_amount">
                        Sub Total: <span className="margin-left-7">$29.00</span>
                      </li>
                      <li className="cart-dropdown-button">
                        <a className="btn btn-primary" href="#">
                          View Cart
                        </a>
                        <a
                          className="btn btn-primary pull-right"
                          href="#"
                          style={{ marginLeft: 10 }}
                        >
                          Checkout
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-nav">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-default">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="/">
                    <img className="nav-logo" src={logo} alt="Logo" />
                  </a>
                </div>
                <div
                  className="collapse navbar-collapse"
                  id="bs-example-navbar-collapse-1"
                >
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <a href="index.php">Home</a>
                    </li>
                    <li className="dropdown">
                      <a
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        href="#"
                      >
                        Produtos
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="safetyplus-sistema-reconhecimento.php">
                            SafetyPlus
                          </a>
                        </li>
                        <li>
                          <a href="loose-wheel-indicator-dip.php">
                            Ind. Porca Solta
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        href="#"
                      >
                        Serviços
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="seguranca-comportamental.php">
                            Segurança Comportamental
                          </a>
                        </li>
                        <li>
                          <a href="gestao-e-gerencamento-de-riscos.php">
                            Gestão de Riscos
                          </a>
                        </li>
                        <li>
                          <a href="servicos-de-apoio.php">
                            Serviços Apoio
                          </a>
                        </li>
                        <li>
                          <a href="seguranca-no-transito.php">
                            Segurança no Trânsito
                          </a>
                        </li>
                        <li>
                          <a href="bem-estar.php">Bem estar</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="about-us.php">Empresa</a>
                    </li>
                    <li>
                      <a href="contact.php">Contato</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
