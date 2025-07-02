import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

// Importe a imagem do produto corretamente
import dipLooseWheelIndicatorImg from "../images/products/dip-loose-wheel-indicator.jpg";

const LooseNutIndicatorPage: React.FC = () => {
  return (
    <>
      <Header />

      <Banner
        title="Indicador de Porca Solta"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Produtos", link: "/produtos" },
          { label: "Nut Indicator DIP", link: "/produtos/indicador-porca", active: true }
        ]}
      />

      <section className="full-row">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-md-3 col-sm-5">
              <ul className="about-category-nav">
                <li>
                  <a href="/produtos/safetyplus-sistema-reconhecimento">SafetyPlus</a>
                </li>
                <li>
                  <a href="/produtos/indicador-porca" className="active">
                    Indicador Porca
                  </a>
                </li>
              </ul>
              <div className="get-quote bg-gray padding30 margin-top-30">
                <h4 className="inner-title">Contato</h4>
                <p>Para maiores informações entre em contato</p>
                <a className="btn btn-primary" href="/contact">
                  Contato
                </a>
              </div>
            </div>
            {/* Conteúdo principal */}
            <div className="col-md-9 col-sm-8">
              <div className="row">
                <div className="col-md-12">
                  <img
                    src={dipLooseWheelIndicatorImg}
                    style={{ width: 420 }}
                    alt="Dip Loose Wheel Indicator"
                  />
                </div>
              </div>
              <div className="service-detail-content">
                <h3 className="inner-title">Indicador de Porca Solta</h3>
                <ul className="box-list">
                  <li>
                    Fornece meios simples e visuais para confirmar o torque adequado da roda em segundos.
                  </li>
                  <li>
                    Reduz o risco de incidentes por desprendimento de roda. (Proteger o público, ajudar a evitar danos materiais).
                  </li>
                  <li>
                    Reduza seus custos de manutenção, eliminando ajustes desnecessários.
                  </li>
                  <li>
                    Identifique rapidamente uma roda quente, possivelmente causada por falha do rolamento ou travagem do freio.
                  </li>
                  <li>
                    Diminua o tempo de inatividade do equipamento.
                  </li>
                  <li>
                    Facilita inspeções oficiais na estrada.
                  </li>
                  <li>
                    Claramente visível à noite e em mau tempo (chuva, neve, lama).
                  </li>
                  <li>
                    Fácil de instalar.
                  </li>
                  <li>
                    Custa apenas alguns dólares por roda.
                  </li>
                  <li>
                    Retorno do investimento só na economia de procedimento de re-ajuste desnecessário.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default LooseNutIndicatorPage;
