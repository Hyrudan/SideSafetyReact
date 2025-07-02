import React from "react";
import prodSafetyPlus from "../assets/images/products/prod_safetyplus.jpg";
import prodSafetyPlus1 from "../assets/images/products/prod_safetyplus1.jpg";
import prodSafetyPlus2 from "../assets/images/products/prod_safetyplus2.jpg";

const MainContent: React.FC = () => {
  return (
    <section className="full-row bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-5">
            <ul className="about-category-nav">
              <li>
                <a href="safetyplus-sistema-reconhecimento.php">SafetyPlus</a>
              </li>
              <li>
                <a href="loose-wheel-indicator-dip.php">Indicador Porca</a>
              </li>
            </ul>
            <div className="get-quote bg-gray padding30 margin-top-30">
              <h4 className="inner-title">Contato</h4>
              <p>
                Para maiores informações entre em contato
              </p>
              <a className="btn btn-primary" href="contact.php">
                Contato
              </a>
            </div>
          </div>
          <div className="col-md-9 col-sm-8">
            <div className="row">
              <div className="col-md-12">
                <img src={prodSafetyPlus} alt="SafetyPlus" style={{ maxWidth: "100%" }} />
              </div>
            </div>
            <div className="service-detail-content">
              <h3 className="inner-title">SafetyPlus</h3>
              <p>
                De acordo com pesquisas, as pessoas tendem a começar mudanças nas suas crenças e costumes quando são estimuladas através da entrega de conhecimento e de reconhecimento.
              </p>
              <p>
                O Programa Safety Plus reconhece as pessoas que tem um comprometimento com a segurança e qualidade das empresas.
              </p>
              <p>
                SafetyPlus é um sistema completo de acúmulo de pontos de acordo com os critérios definidos pelas organizações contratantes. Quando as pessoas acumulam pontos suficientes para trocar por um item de seu interesse, basta acessar o aplicativo ou site do programa para poder obter sua recompensa.
              </p>
              <p>Principais características do sistema:</p>
              <ul className="box-list">
                <li>Micro-site customizado com design e logos do cliente.</li>
                <img src={prodSafetyPlus2} alt="SafetyPlus Customizado" style={{ maxWidth: "100%" }} />
                <li>
                  App compatível com Android e IOS. Customizado e publicado nas stores oficiais.
                </li>
                <li>Sistema de atualizações automáticas</li>
                <li>Sistema de notícias com notificações push.</li>
                <li>Loja virtual online para troca de premiações.</li>
                <li>
                  Sistema web de administração de notícias, usuários e loja virtual.
                </li>
              </ul>
              <img src={prodSafetyPlus1} alt="SafetyPlus Admin" style={{ maxWidth: "100%" }} />
              <p>
                <span style={{ fontFamily: "verdana, geneva", fontSize: "11pt" }}>
                  Entre em contato para obter maiores informações ao respeito do sistema
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
