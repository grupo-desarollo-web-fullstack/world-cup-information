import { useRef } from "react";
import { Link, useMatch } from "react-router-dom";
import { MdSportsSoccer } from "react-icons/md";
import Logo from "../assets/img/logo.png";

import "../styles/modules/headed.css";
import "../styles/modules/menu.css";
import "../styles/modules/section.css";

const Header = () => {
  const isRoot = useMatch("/");
  const buttonBallonSoccer = useRef();
  const menu = useRef();
  const handleClickIcon = () => {
    buttonBallonSoccer.current.classList.toggle("menu-icon--rotated");
    menu.current.classList.toggle("menu--hamburger-open");
  };
  const handleClickClose = () => {
    buttonBallonSoccer.current.classList.remove("menu-icon--rotated");
    menu.current.classList.remove("menu--hamburger-open");
  };
  return (
    <header className="header section--headed">
      <nav className="nav">
        <div className="container-wci container--headed">
          <Link to={isRoot ? "#hero" : "/"}>
            <img
              src={Logo}
              alt="Logo World Cup Information"
              width="32"
              height="32"
              className="nav__link-logo"
            />
          </Link>

          <button
            ref={buttonBallonSoccer}
            onClick={handleClickIcon}
            className="menu-icon"
          >
            <MdSportsSoccer size={40} />
          </button>

          <ul ref={menu} className="menu menu--hamburger">
            <li>
              <Link onClick={handleClickClose} to="/#fg" className="menu__link">
                Fase de Grupos
              </Link>
            </li>
            <li>
              <a
                onClick={handleClickClose}
                href="#estadios"
                className="menu__link"
              >
                Estadios
              </a>
            </li>
            <li>
              <Link
                onClick={handleClickClose}
                to="/simulator"
                className="menu__link"
              >
                Llegando hasta la final
              </Link>
            </li>
            <li>
              <a
                onClick={handleClickClose}
                href="https://github.com/grupo-desarollo-web-fullstack"
                target="_blank"
                rel="noopener noreferrer"
                className="menu__link menu__link--active"
              >
                Nosotros
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
