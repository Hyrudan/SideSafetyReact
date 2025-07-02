import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

// Importe as imagens corretamente
import serTransitoImg from "../images/service/ser_transito.jpg";
import serTransitoGraph1 from "../images/service/ser_transito_graph1.jpg";

const SegurancaTransitoPage: React.FC = () => {
  return (
    <>
      <Header />

      <Banner
        title="Segurança no Trânsito"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Serviços", link: "/servicos" },
          { label: "Segurança no Trânsito", link: "/servicos/seguranca-no-transito", active: true }
        ]}
      />

      <section className="full-row bg-gray">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-md-3 col-sm-5">
              <ul className="about-category-nav">
                <li>
                  <a href="/servicos/seguranca-comportamental">Seg. Comportamental</a>
                </li>
                <li>
                  <a href="/servicos/gestao-e-gerencamento-de-riscos">Gestão de Riscos</a>
                </li>
                <li>
                  <a href="/servicos/servicos-de-apoio">Serviços Apoio</a>
                </li>
                <li>
                  <a href="/servicos/seguranca-no-transito" className="active">
                    Segurança no Trânsito
                  </a>
                </li>
                <li>
                  <a href="/servicos/bem-estar">Bem-estar</a>
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
                  <img src={serTransitoImg} alt="Segurança no Trânsito" />
                </div>
              </div>
              <div className="service-detail-content">
                <h3 className="inner-title">Segurança no Trânsito</h3>
                <p>
                  Para que uma organização tome ações bem direcionadas que previnam os incidentes com veículos motorizados e salvaguardem os funcionários, ativos e mercadorias, é preciso primeiro identificar os perigos existentes e avaliar os riscos presentes enquanto dirigem. Entender os fatores que podem contribuir à ocorrência de eventos indesejados são etapas fundamentais de um programa eficaz de segurança no trânsito.
                </p>
                <p>
                  Na SideSafety ajudamos sua organização a entender de melhor forma os possíveis fatores que podem contribuir ou ser a causa de eventos, por meio de:
                </p>
                <p>
                  Elaboração, implementação e revisão de padrões de segurança no trânsito.
                </p>
                <p>
                  Elaboração de Rotogramas: mapeamento das rotas utilizadas pelas organizações, nas quais se realiza um levantamento das condições e riscos existentes ao longo da via, para logo serem plasmadas em documento vivo de uso dos motoristas da empresa. Este mapeamento adverte antecipadamente as possíveis interferências e cuidados a serem levados em conta no momento de circular pelas vias, ou a definição de novas rotas alternativas que atendam as necessidades das organizações de forma segura.
                </p>
                <img src={serTransitoGraph1} style={{ width: 711 }} alt="Rotograma" />
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

export default SegurancaTransitoPage;
