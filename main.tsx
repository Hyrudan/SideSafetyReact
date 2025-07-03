import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Importação global dos estilos CSS (ajuste os caminhos conforme seu projeto)
import "./assets/css/bootstrap.min.css";
import "./assets/fonts/font-awesome.min.css";
import "./assets/css/style.css";
import "./assets/css/default-animation.css";
import "./assets/fonts/flaticon/flaticon.css";
import "./assets/css/range-slider.css";
import "./assets/css/color.css";
import "./assets/css/responsive.css";
import "./assets/css/loader.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
