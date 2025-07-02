import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

// Importe a imagem corretamente
import serComportamentalImg from "../images/service/ser_comportamental.jpg";

const SegurancaComportamentalPage: React.FC = () => {
  return (
    <>
      <Header />

      <Banner
        title="Segurança Comportamental"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Serviços", link: "/servicos" },
          { label: "Segurança Comportamental", link: "/servicos/seguranca-comportamental", active: true }
        ]}
      />

      <section className="full-row bg-gray">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-md-3 col-sm-5">
              <ul className="about-category-nav">
                <li>
                  <a href="/servicos/seguranca-comportamental" className="active">
                    Seg. Comportamental
                  </a>
                </li>
                <li>
                  <a href="/servicos/gestao-e-gerencamento-de-riscos">Gestão de Riscos</a>
                </li>
                <li>
                  <a href="/servicos/servicos-de-apoio">Serviços Apoio</a>
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
                  <img src={serComportamentalImg} alt="Segurança Comportamental" />
                </div>
              </div>
              <div className="service-detail-content">
                <h3 className="inner-title">Segurança Comportamental</h3>
                <p>
                  As pessoas são o principal valor para as organizações, e por consequência a integridade física e mental delas.
                </p>
                <p>
                  Para isso elas realizam grandes esforços para manter seus empregados e patrimônio seguros.
                </p>
                <p>
                  Porém, a supervisão das práticas de <em>segurança diretivas</em>, em algum momento, se torna pouco sustentável, já que as empresas devem realizar inúmeros esforços para fazer com que as pessoas respeitem e sigam as regras estabelecidas de forma correta. Ainda assim, muitas vezes acontecem violações que podem terminar em eventos indesejados com consequências graves.
                </p>
                <p>
                  Para que a <em>segurança diretiva</em> consiga seus objetivos, é necessário que muitos líderes e funcionários do SESMT dediquem mais tempo à supervisão das atividades que estão sendo conduzidas, verificando se estão sendo executadas de forma segura e de acordo com as diretrizes estabelecidas.
                </p>
                <p>
                  Ainda assim, muitas vezes a liderança e SESMT não são suficientes para fazer esse trabalho por si só.
                </p>
                <p>
                  Para que a segurança se torne sustentável, precisamos trabalhar fortemente o comportamento dos trabalhadores, fazendo com que eles tornem a segurança um valor que seja parte do cotidiano.
                </p>
                <p>
                  Uma mudança comportamental requer grande esforço de todos os níveis da organização e para isso, é necessário abordar o processo de mudanças de uma forma cooperativa, dinâmica e com uso de ferramentas simples.
                </p>
                <p>
                  Para poder começar mudanças nos trabalhadores, precisamos entregar conhecimento (gestão de riscos, SGI, processos, objetivos em mente, etc.) e ao mesmo tempo é necessário recompensar e reconhecer as mudanças que as pessoas estão apresentando.
                </p>
                <p>
                  Na SideSafety ajudamos sua organização a entender melhor quais passos são necessários para começar a extensa jornada de mudança comportamental, usando uma equipe de Psicólogos e expertos em Segurança Ocupacional com uma vasta experiência.
                </p>
                <h4 className="thumb-title">Todos para um, um para todos</h4>
                <p>
                  Programa focado na cooperação ativa de todos os indivíduos da organização, baseado no comportamento de instinto natural sobre a sobrevivência.
                </p>
                <h4 className="thumb-title">Liderança Visível e Percebida (VFL)</h4>
                <p>
                  Ferramenta de verificação comportamental que procura aproximar a liderança aos empregados, fazendo abordagens nas quais os comportamentos seguros são reconhecidos e simultaneamente procurar soluções para os comportamentos inseguros.
                </p>
                <h4 className="thumb-title">Ver e Agir</h4>
                <p>
                  Com foco no bloqueio de comportamentos e condições inseguras, a ferramenta tem como objetivo fazer com que toda uma organização se empodere dos processos de segurança e possa colocar barreiras sob ações que possam provocar um incidente.
                </p>
                <a href="/produtos/safetyplus-sistema-reconhecimento">
                  <h4 className="thumb-title">Safety Plus</h4>
                </a>
                <p>
                  De acordo com pesquisas, as pessoas tendem a começar mudanças nas suas crenças e costumes quando são estimuladas através da entrega de conhecimento e de reconhecimento.
                </p>
                <p>
                  O Programa <a href="/produtos/safetyplus-sistema-reconhecimento">Safety Plus</a> reconhece as pessoas que têm um comprometimento com a segurança e qualidade das empresas.
                </p>
                <p>
                  Clique no link a seguir para conhecer mais acerca do nosso sistema de reconhecimento, veja o nosso <a href="/produtos/safetyplus-sistema-reconhecimento">sistema de reconhecimento</a>
                </p>
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

export default SegurancaComportamentalPage;
