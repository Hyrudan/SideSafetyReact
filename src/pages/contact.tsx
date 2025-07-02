import React, { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

// Exemplo: import logoImg from "../images/logo/logo.png";

const ContatoPage: React.FC = () => {
  const [form, setForm] = useState({
    firstname: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de envio
    if (form.firstname && form.email && form.subject && form.message) {
      setStatus("success");
      setForm({ firstname: "", email: "", subject: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <>
      <Header />

      <Banner
        title="Contate-nos"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Contate-nos", link: "/contato", active: true },
        ]}
      />

      <section className="full-row">
        <div className="container">
          <div className="row flex-box">
            <div className="col-md-8 col-sm-6">
              <div className="contact-us bg-gray padding30">
                <h3 className="inner-title">Entre em contato</h3>
                <span className="margin-bottom-15"></span>
                <form
                  id="contact-form"
                  className="contact_message"
                  onSubmit={handleSubmit}
                  autoComplete="off"
                >
                  <div className="row">
                    <div className="form-group col-md-6 col-sm-6">
                      <input
                        className="form-control"
                        id="name"
                        name="firstname"
                        placeholder="Name"
                        type="text"
                        value={form.firstname}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group col-md-6 col-sm-6">
                      <input
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email Address"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group col-md-12 col-sm-12">
                      <input
                        className="form-control"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        type="text"
                        value={form.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group col-md-12 col-sm-12">
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        placeholder="Message"
                        value={form.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group col-md-12 col-sm-6">
                      <input
                        className="btn btn-primary margin-top-20"
                        id="send"
                        value="send message"
                        type="submit"
                      />
                    </div>
                    <div className="col-md-12">
                      <div className="error-handel">
                        {status === "success" && (
                          <div id="success">
                            Your email sent Successfully, Thank you.
                          </div>
                        )}
                        {status === "error" && (
                          <div id="error">
                            Error ao enviar contato. Gentileza de enviar sua solicitação a{" "}
                            <a href="mailto:comercial@sidesafety.com">
                              comercial@sidesafety.com
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="contact-detail padding30 color-white bg-dark">
                <h3 className="inner-title color-white">Entre em contato</h3>
                <span className="sub-title color-white">
                  Para maiores informações sobre nossos produtos e serviços entre em contato.
                </span>
                <span className="color-default">E-Mail</span>
                <p>comercial@sidesafety.com</p>
                <span className="color-default">Address</span>
                <p>Rua dos Carijos 436, Belo Horizonte - MG - Brasil</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa (simples placeholder, pois Google Maps JS não é recomendado em React assim) */}
      <div className="full-row">
        <div className="container-fluid">
          <div className="row">
            <div id="map" style={{ width: "100%", height: "300px", background: "#eee" }}>
              {/* Para embed real, use um componente de mapa ou iframe */}
              <iframe
                title="SIDESAFETY Map"
                width="100%"
                height="300"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.659902484453!2d-43.94093378462232!3d-19.91905298661037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa690a3f7b0f7d1%3A0x7e2c2e3c7a1e5c5e!2sRua%20dos%20Carij%C3%B3s%2C%20436%20-%20Centro%2C%20Belo%20Horizonte%20-%20MG%2C%2030130-060%2C%20Brazil!5e0!3m2!1sen!2sbr!4v1620240000000!5m2!1sen!2sbr"
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              ></iframe>
            </div>
          </div>
        </div>
      </div>

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

export default ContatoPage;
