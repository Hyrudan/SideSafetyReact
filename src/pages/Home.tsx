import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "./src/assets/css/bootstrap.min.css";
import "./src/assets/fonts/font-awesome.min.css";
import "./src/assets/css/style.css";
import "./src/assets/css/default-animation.css";
import "./src/assets/fonts/flaticon/flaticon.css";
import "./src/assets/css/range-slider.css";
import "./src/assets/css/color.css";
import "./src/assets/css/responsive.css";
import "./src/assets/css/loader.css";

const App: React.FC = () => {
  return (
    <div className="page-wrapper home-page-3">
      {/* Preloader */}
      <div className="preloader">
        <div id="ajaxloader3">
          <div className="outer"></div>
          <div className="inner"></div>
        </div>
      </div>

      {/* Header */}
      <Header />

      {/* Slider Section */}
      <div id="slider">
        <div className="slider-item">
          <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
              <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <img src="./src/assets/images/slider/2.jpg" alt="Mineração" />
                <div className="carousel-caption">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8">
                        <span>Mineração</span>
                        <p>Desenvolvimento de soluções para segurança na mineração</p>
                        <a className="btn btn-primary margin-top-30" href="/servicos/seguranca-comportamental">
                          Mais
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <img src="./src/assets/images/slider/3.jpg" alt="Setor Portuário" />
                <div className="carousel-caption">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8">
                        <span>Setor Portuário</span>
                        <p>Soluções de controle e prevenção de acidentes</p>
                        <a className="btn btn-primary margin-top-30" href="/servicos/servicos-de-apoio">
                          Mais
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Adicione mais slides se desejar */}
            </div>
          </div>
        </div>
      </div>

      {/* Serviços */}
      <section className="bg-gray our-servic-3 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="section-title-area wow fadeIn" data-wow-delay="300ms" data-wow-duration="500ms">
                <h2 className="section-title">
                  <span className="title-tag">O que oferecemos</span>Nossos Serviços
                </h2>
                <span className="sub-title">
                  Somos uma empresa comprometida em fornecer, implantar e criar soluções de alto valor agregado focadas na segurança dos nossos clientes e seus processos.
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="service-item bg-white text-center wow fadeInDown" data-wow-delay="100ms" data-wow-duration="500ms">
                <div className="service-caption">
                  <span className="flaticon-security-on"></span>
                  <a className="margin-top-20" href="/contact">
                    <h4 className="service-title">EPI</h4>
                  </a>
                  <p>Desenvolvimento, fornecimento e distribuição de equipamentos de segurança pessoal especiais.</p>
                  <a className="btn-link" href="/contact">Mais informações</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="service-item bg-white text-center wow fadeInDown" data-wow-delay="200ms" data-wow-duration="500ms">
                <div className="service-caption">
                  <span className="flaticon-locked-internet-security-padlock"></span>
                  <a className="margin-top-20" href="/contact">
                    <h4 className="service-title">IOT</h4>
                  </a>
                  <p>Soluções tecnológicas para controle, monitoramento e prevenção de acidentes.</p>
                  <a className="btn-link" href="/contact">Mais informações</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="service-item bg-white text-center wow fadeInDown" data-wow-delay="300ms" data-wow-duration="500ms">
                <div className="service-caption">
                  <span className="flaticon-study-certificate"></span>
                  <a className="margin-top-20" href="/contact">
                    <h4 className="service-title">Consultoria</h4>
                  </a>
                  <p>Consultoria e desenvolvimento de soluções tecnológicas.</p>
                  <a className="btn-link" href="/contact">Mais informações</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Especificações */}
      <section className="full-row background-1 overlay-1">
        <div className="container">
          <div className="row">
            <div className="wow zoomIn" data-wow-delay="300ms" data-wow-duration="500ms">
              <div className="col-md-4 col-sm-12">
                <div className="specification-item full-row text-center">
                  <span className="fa fa-circle-o"></span>
                  <strong className="white-line bg-white"></strong>
                  <i className="fa fa-unlock-alt"></i>
                  <h4 className="margin-30 color-white">10 anos de experiência</h4>
                  <p>Equipe internacional e multidisciplinar de profissionais com mais de 10 anos de experiência em diferentes projetos ao redor do mundo.</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="specification-item full-row text-center">
                  <span className="fa fa-circle-o"></span>
                  <strong className="white-line bg-white"></strong>
                  <i className="fa fa-umbrella"></i>
                  <h4 className="margin-30 color-white">100% Cases de sucesso</h4>
                  <p>Nossa equipe tem implementado diferentes tipos de projetos tecnológicos ao redor do mundo focados na segurança patrimonial e pessoal.</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="specification-item full-row text-center">
                  <span className="fa fa-circle-o"></span>
                  <i className="fa fa-shield"></i>
                  <h4 className="margin-30 color-white">Processos mais seguros</h4>
                  <p>Nossa tecnologia e produtos têm ajudado grandes players do mercado internacional a reduzir acidentes e custos operacionais.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Footer Bottom */}
      <div id="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12 col-xs-12">
              <ul className="bottom-nav"></ul>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="copyright">
                <span>
                  &copy; 2017 All Rights Reserved by <a href="#">SIDESAFETY</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
