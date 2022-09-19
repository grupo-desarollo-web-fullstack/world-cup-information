import { FaRegEnvelope } from "react-icons/fa";
import FooterImg from "../assets/img/logotipo-world-cup-logo-en-qatar.jpg";
import "../styles/modules/button.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section id="contact" className="section section--secondary">
        <div className="container container--elements">
          <img
            src={FooterImg}
            alt="Logo World Cup Qatar"
            width="300"
            height="300"
            className="container__logo-mundial"
          />
          <h2 className="section__title">⚽ Mantente Informado ⚽</h2>
          <form className="form">
            <div className="form__group">
              <div className="form__input-container">
                <FaRegEnvelope />
                <input
                  type="email"
                  placeholder="Correo Electronico"
                  className="form__input"
                  title="Ingresar correo electronico"
                  required
                />
              </div>
              <button className="button button--primary b-radius-none">
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </section>
      <nav className="nav nav--footer">
        <div className="container-wci container--elements">
          <ul className="menu">
            <li>
              <a href="https://www.youtube.com/">
                <img
                  src="https://github.com/grupo-desarollo-web-fullstack/world-cup-information/src/assets/svg/logo-youtube.svg"
                  alt="YouTube"
                  width="24"
                  height="24"
                  className="menu__img"
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <img
                  src="https://github.com/grupo-desarollo-web-fullstack/world-cup-information/src/assets/svg/logo-instagram.svg"
                  alt="Instagram"
                  width="24"
                  height="24"
                  className="menu__img"
                />
              </a>
            </li>
            <li>
              <a href="https://es-la.facebook.com/">
                <img
                  src="https://github.com/grupo-desarollo-web-fullstack/world-cup-information/src/assets/svg/logo-facebook.svg"
                  alt="Facebook"
                  width="24"
                  height="24"
                  className="menu__img"
                />
              </a>
            </li>
          </ul>
          <h2 className="footer__title">
            Copyright &copy; 2022{" "}
            <a
              href="https://github.com/grupo-desarollo-web-fullstack/world-cup-information.git"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              World Cup Information
            </a>{" "}
            Todos los derechos reservados.
          </h2>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
