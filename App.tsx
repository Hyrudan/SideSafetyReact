import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/style.css";
import "./assets/css/default-animation.css";
import "./assets/css/range-slider.css";
import "./assets/css/color.css";
import "./assets/css/responsive.css";
import "./assets/css/loader.css";

const App: React.FC = () => {
  return (
    <div className="page-wrapper home-page-3">
      <Header />
      <Banner />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
