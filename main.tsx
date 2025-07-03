import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Importação global dos estilos CSS (já estão importados no App, mas pode repetir aqui se quiser garantir)
import "./src/assets/css/bootstrap.min.css";
import "./src/assets/fonts/font-awesome.min.css";
import "./src/assets/css/style.css";
import "./src/assets/css/default-animation.css";
import "./src/assets/fonts/flaticon/flaticon.css";
import "./src/assets/css/range-slider.css";
import "./src/assets/css/color.css";
import "./src/assets/css/responsive.css";
import "./src/assets/css/loader.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
