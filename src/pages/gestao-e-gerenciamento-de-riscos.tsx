import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

// Importe as imagens corretamente
import serGestaoImg from "../images/service/ser_gestao.jpg";
import serGestaoGraph1 from "../images/service/ser_gestao_graph1.jpg";
import serGestaoGraph2 from "../images/service/ser_gestao_graph2.jpg";
import serGestaoGraph3 from "../images/service/ser_gestao_graph3.jpg";

const GestaoRiscosPage: React.FC = () => {
  return (
    <>
      <Header />

      <Banner
        title="Gestão e Gerenciamento de Riscos"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Serviços", link: "/servicos" },
          { label: "Gestão e Gerenciamento de Riscos", link: "/gestao-e-gerencamento-de-riscos", active: true }
        ]}
      />

      <section className="full-row bg-gray">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-md-3 col-sm-5">
              <ul className="about-category-nav">
                <li>
                  <a href="/seguranca-comportamental">Seg. Comportamental</a>
                </li>
                <li>
                  <a href="/gestao-e-gerencamento-de-riscos" className="active">
                    Gestão de Riscos
                  </a>
                </li>
                <li>
                  <a href="/servicos-de-apoio">Serviços Apoio</a>
                </li>
                <li>
                  <a href="/seguranca-no-transito">Segurança no Trânsito</a>
                </li>
                <li>
                  <a href="/bem-estar">Bem-estar</a>
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
                  <img src={serGestaoImg} alt="Gestão de Riscos" />
                </div>
              </div>
              <div className="service-detail-content">
                <h3 className="inner-title">Gestão e Gerenciamento de Riscos</h3>
                <p>
                  Atualmente, existem riscos associados a todos os locais de trabalho e indústrias. Em algumas indústrias a consequência de um incidente pode ser baixa, como um trabalhador de escritório que bate seu joelho numa gaveta aberta, em outras indústrias um acidente pode ter consequências devastadoras.
                </p>
                <p>
                  Por exemplo, um agricultor pode ficar preso sob um trator, ou um operário de fábrica pode sofrer o esmagamento de seus membros em um maquinário.
                </p>
                <p>
                  Acidentes criam sofrimento e angústias pessoais, além de enormes perdas financeiras. Esses acidentes são de grande interesse para todos os stakeholders, acionistas de uma organização.
                </p>
                <p>
                  A gestão de riscos é definida como a identificação e a avaliação dos riscos que colocam em risco a capacidade de ganho de uma empresa. Esses riscos podem ser eliminados ou reduzidos, alterando os processos de trabalho e sabendo como evitar essas situações de risco. Um sistema de gerenciamento de segurança envolve vários componentes:
                </p>
                <ul className="box-list">
                  <li>Identificação dos riscos circundantes para o seu negócio.</li>
                  <li>Avaliar a possibilidade da ocorrência desses eventos de risco.</li>
                  <li>Encontrar métodos viáveis ​​para enfrentar os riscos.</li>
                  <li>Supervisionar os processos de gerenciamento de riscos.</li>
                </ul>
                <p>
                  Independentemente do tamanho da sua organização, é importante tomar precauções para evitar perdas.
                </p>
                <p>
                  A SideSafety ajuda sua organização com serviços de gestão de riscos, a fim de oferecer a você a tranquilidade de saber que seus funcionários estão seguros e sua empresa está protegida. Por meio da implementação, adequação e revisão dos processos de gerenciamento de riscos em alinhamento com atendimento às ISO e OHSAS. Abrangendo as quatro camadas de riscos operacionais.
                </p>
                <p>
                  Se um perigo não for identificado, sua contribuição para o risco não pode ser estimada. Somente aqueles perigos identificados são passíveis de serem controlados com segurança. Nossos engenheiros experientes podem auxiliar na identificação e análise de perigos.
                </p>
                <img src={serGestaoGraph1} alt="Gestão Graph 1" style={{ width: 376 }} />
                <h4 className="thumb-title">WRAC - Workplace Risk Assessment Control</h4>
                <p>
                  O WRAC é uma abordagem proativa para avaliar qualquer uma ou todas as áreas de um site, e garantir que os riscos sejam compreendidos e controlados a um nível razoável. É "um participativo abordagem para identificar potenciais perdas operacionais de produção ou manutenção (desenvolvida inicialmente para a indústria mineral) O WRAC é um método de avaliação de risco qualitativo específico, projetado para ser aplicado quando uma organização deseja entender seus riscos e identificar claramente a prioridade ou os riscos mais altos (MDG1010 Risk Management Handbook for the Mining Industry).
                </p>
                <h4 className="thumb-title">HAZOP</h4>
                <p>
                  O estudo HAZOP é usado para verificar a integridade de projetos ou procedimentos com relação à segurança e operabilidade. Nossos engenheiros têm uma vasta experiência na condução de análises de HAZOP e investigam como os sistemas ou instalações se desviam da intenção do projeto criando risco para as pessoas e equipamentos. Os HAZOPs têm sido usados com grande sucesso no setor de Petróleo, Mineração, Gás e Química para manter ativos e operações mais seguros, mais eficientes e mais confiáveis.
                </p>
                <h4 className="thumb-title">FMECA</h4>
                <p>
                  Metodologia destinada a identificar potenciais modos de falha para um produto ou processo, avaliar o risco associado a esses modos de falha, classificar os problemas em termos de importância e identificar e executar ações corretivas para tratar das preocupações mais sérias.
                </p>
                <h4 className="thumb-title">What-if</h4>
                <p>
                  Identifica ameaças e perigos.
                </p>
                <p>
                  Perguntas sobre o que poderia dar errado? e sobre o que aconteceria se as coisas derem errado. Este tipo de análise é uma atividade de brainstorming e é realizada por pessoas que têm conhecimento sobre as áreas, operações e processos que podem ser expostos a eventos e condições perigosos.
                </p>
                <h4 className="thumb-title">BowTie</h4>
                <p>
                  O Método BowTie é um diagrama que permite visualizar o risco ao qual se está enfrentando de uma perspectiva única e fácil entendimento. O diagrama tem a forma de uma gravata borboleta, criando uma clara distinção entre a gestão dos riscos com controles preventivos e reativos. O poder do diagrama BowTie é entregar uma visão geral dos múltiplos cenários possíveis em uma só imagem. Permitindo ao mesmo tempo definir controles e suas formas de monitoramento.
                </p>
                <img src={serGestaoGraph2} alt="Gestão Graph 2" />
                <h4 className="thumb-title">Curva de Perigos</h4>
                <p>
                  Técnica de análise da criticidade de trabalhos de manutenção e montagens, com base no número de pessoas expostas e o tipo de risco a que elas se expõem. Aplica-se durante o planejamento de trabalhos de Paradas de Manutenção ou de Novos Projetos.
                </p>
                <img src={serGestaoGraph3} alt="Gestão Graph 3" style={{ width: 377 }} />
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

export default GestaoRiscosPage;
