import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

// Importe a imagem corretamente
import serApoioImg from "../images/service/ser_apoio.jpg";

const ServicosApoioPage: React.FC = () => {
  return (
    <>
      <Header />

      <Banner
        title="Serviços de Apoio"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Serviços", link: "/servicos" },
          { label: "Serviços de Apoio", link: "/servicos/servicos-de-apoio", active: true }
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
                  <a href="/servicos/servicos-de-apoio" className="active">
                    Serviços Apoio
                  </a>
                </li>
                <li>
                  <a href="/servicos/seguranca-no-transito">Segurança no Trânsito</a>
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
                  <img src={serApoioImg} alt="Serviços de Apoio" />
                </div>
              </div>
              <div className="service-detail-content">
                <h3 className="inner-title">Serviços de Apoio</h3>
                <h4 className="thumb-title">Gestão de Incidentes</h4>
                <p>
                  Contamos com profissionais altamente experientes e capacitados para ajudar as organizações a entenderem as causas de incidentes acontecidos, utilizando ferramentas como ICAM, Árvore de Falhas, Modelo de Causalidade, entre outras.
                </p>
                <h4 className="thumb-title">Normas Regulamentadoras</h4>
                <ul className="box-list">
                  <li>Auditorias de verificação ao atendimento às normas regulamentadoras;</li>
                  <li>Elaboração, implementação e revisão de padrões e procedimentos de atividades rotineiras com foco em segurança ocupacional;</li>
                  <li>Identificação de adequações para atendimento a NR-12;</li>
                  <li>Identificação e mapeamento de espaços confinados NR-33;</li>
                  <li>Elaboração matriz de bloqueios NR-10.</li>
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

export default ServicosApoioPage;
