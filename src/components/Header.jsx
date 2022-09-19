import { useState } from "react";
import { Link, useMatch } from "react-router-dom";
import { MdSportsSoccer } from "react-icons/md";
import Logo from "../assets/img/logo.png";

import "../styles/modules/headed.css";
import "../styles/modules/menu.css";
import "../styles/modules/section.css";

const Header = () => {
  const isRoot = useMatch("/");
  const [isOpen, setOpen] = useState(false);
  const handleClickIcon = () => setOpen(!isOpen);
  const handleClickClose = () => setOpen(false);
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
            onClick={handleClickIcon}
            className={`menu-icon ${isOpen ? "menu-icon--rotated" : ""}`}
          >
            <MdSportsSoccer size={40} />
          </button>

          <ul
            className={`menu menu--hamburger ${
              isOpen ? "menu menu--hamburger-open" : ""
            }`}
          >
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
                to="/simulator-r"
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
