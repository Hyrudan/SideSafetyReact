import React from "react";
import Header from "./src/components/Header";
import Banner from "./src/components/Banner";
import MainContent from "./src/components/MainContent";
import Footer from "./src/components/Footer";

// Importe os CSSs corretamente (com "./" se estiver em src)
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/style.css";
import "./assets/css/default-animation.css";
import "./assets/css/range-slider.css";
import "./assets/css/color.css";
import "./assets/css/responsive.css";
import "./assets/css/loader.css";
import "./index.css";

const App: React.FC = () => {
  return (
    <div className="page-wrapper home-page-3">
      <Header />
      <Banner
        title="SIDESAFETY"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Página Atual", link: "/pagina-atual", active: true }
        ]}
      />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
