import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

// Importe a imagem usando o caminho relativo ao arquivo AboutPage.tsx
import aboutImg from "../images/about-us/about.jpg";

const AboutPage: React.FC = () => {
  return (
    <>
      <Header />

      <Banner
        title="SIDESAFETY"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "A Empresa", link: "/about-us", active: true }
        ]}
      />

      <section className="full-row overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div
                className="wow fadeInLeft"
                data-wow-delay="300ms"
                data-wow-duration="500ms"
              >
                <h3 className="inner-title">A Empresa</h3>
                <p>
                  A SideSafety está comprometida em fornecer serviços de alta qualidade e alto valor agregado, ajudando a tornar os locais de trabalho mais seguros.
                </p>
                <p>
                  A equipe da SideSafety está focada em fazer mudanças positivas na saúde e segurança no local de trabalho focado na crença de que todos devem voltar para casa da mesma forma que foram trabalhar. Nosso compromisso de fornecer serviços de segurança de alta qualidade é sustentado por um forte conjunto de valores sob os quais operamos, e a nossa capacidade de agilidade na prestação de serviços e desenvolvimento de produtos. Nossa equipe de profissionais fornece uma abordagem coordenada e equilibrada para gerenciar a saúde e segurança no local de trabalho de forma sustentável.
                </p>
                <p>
                  Estratégias para gerenciar a saúde e segurança são importantes para proteger as pessoas e patrimônios. A implementação de sistemas e estratégias de segurança pode ser complicada e demorada.
                </p>
                <p>
                  Nossos serviços incluem cursos de treinamento de segurança, revisões de sistemas de gerenciamento de segurança, auditorias de segurança e desenvolvimento e implementação de sistemas. Além disso, podemos fornecer recursos qualificados de saúde e segurança no local de trabalho com veiculações em sua organização.
                </p>
                <p>
                  Empregando um consultor de segurança pode ajudá-lo a cumprir as obrigações legais e melhorar a segurança no seu local de trabalho.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div
                className="about-video wow fadeInRight"
                data-wow-delay="300ms"
                data-wow-duration="500ms"
              >
                <img src={aboutImg} alt="Sobre a empresa" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;
