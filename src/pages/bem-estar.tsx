import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

// Importe a imagem corretamente (ajuste o caminho se necessário)
import serGestaoImg from "../images/service/ser_gestao.jpg";

const BemEstarPage: React.FC = () => {
  return (
    <>
      <Header />

      <Banner
        title="Bem-estar"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Serviços", link: "/servicos" },
          { label: "Bem-estar", link: "/bem-estar", active: true }
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
                  <a href="/gestao-e-gerencamento-de-riscos">Gestão de Riscos</a>
                </li>
                <li>
                  <a href="/servicos-de-apoio">Serviços Apoio</a>
                </li>
                <li>
                  <a href="/seguranca-no-transito">Segurança no Trânsito</a>
                </li>
                <li>
                  <a href="/bem-estar" className="active">
                    Bem-estar
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
                  <img src={serGestaoImg} alt="Bem-estar" />
                </div>
              </div>
              <div className="service-detail-content">
                <h3 className="inner-title">Bem-estar</h3>
                <h4 className="thumb-title">Exercícios</h4>
                <p>
                  Hoje em dia, parece que todo mundo está trabalhando mais horas e usando a velha desculpa "não-tempo-para-exercício" mais do que nunca. Mas e se você pudesse realmente treinar no trabalho?
                </p>
                <p>
                  Embora você não vá para as Olimpíadas dessa forma, você pode fazer exercícios de alongamento, fortalecimento muscular e até exercícios curtos de aeróbica diretamente na sua mesa (ou talvez em uma sala de conferências vazia ou em uma escada). Afinal, os médicos dizem que qualquer quantidade de exercício ajuda - os benefícios são cumulativos.
                </p>
                <h4 className="thumb-title">Massagem</h4>
                <p>
                  Uma pausa para relaxar e recarregar durante um dia de trabalho estressante pode parecer inatingível, especialmente quando você mais precisa. A massagem de cadeira facilita o acesso ao bem-estar físico, mental e emocional em seu escritório, de uma maneira que se adeque à sua agenda e ambiente de trabalho.
                </p>
                <h5 className="thumb-title">O que acontece em uma massagem de cadeira?</h5>
                <p>
                  Na massagem típica de cadeira, você se senta inclinado para frente em uma cadeira de massagem com o rosto aconchegado em um berço de rosto enquanto um terapeuta massageia seu pescoço, costas e braços. Se você ainda não está familiarizado com a massagem de cadeira, é provável que tenha notado seu uso em shoppings, aeroportos, conferências, etc.
                </p>
                <p>
                  A ideia da massagem em cadeira corporativa é que você não precisa sair do escritório para ajudar sua equipe a cuidar de suas mentes e corpos. Não é necessária nenhuma preparação especial ou mudança de roupa, e você aproveita os benefícios físicos, mentais e emocionais de uma massagem sem ter que sair do escritório para um dia de spa.
                </p>
                <h5 className="thumb-title">Por que receber massagem no trabalho?</h5>
                <p>
                  O trabalho pode ser estressante, e há muitas maneiras de combater o estresse e a ansiedade no ambiente de trabalho. Mas os benefícios da massagem de cadeira superam de longe outras vantagens populares do escritório. Ajudando na saúde física e mental e relaxamento.
                </p>
                <p>
                  A equipe de preparadores físicos da SideSafety avaliará suas reais necessidades, e montará um programa de bem-estar personalizado, incluindo aplicativo desenhado para guiar as pessoas na execução das atividades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      {/* Footer Bottom pode estar dentro do Footer.tsx, se não estiver, adicione aqui */}
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

export default BemEstarPage;
