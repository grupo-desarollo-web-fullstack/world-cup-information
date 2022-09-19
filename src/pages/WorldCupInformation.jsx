import "../styles/modules/hero.css";
import "../styles/modules/animations.css";
import "../styles/modules/fg.css";
import "../styles/modules/wave.css";
import Carrusel from "../components/Carrusel";

const WorldCupInformation = () => {
  return (
    <>
      <main className="main">
        <article id="hero" className="hero">
          <div className="container--hero">
            <div className="hero__info">
              <h1 className="fade-in hero__title">World Cup Information</h1>
              <p className="fade-in hero__text">
                La mejor información de la máxima competición del fútbol a nivel
                mundial, la encuentras aquí. Desde cada selección clasificada,
                pasando por los estadios hasta un simulador donde podrás tener a
                tu propio Campeón Mundial ⚽🌍.
              </p>
            </div>
            <div className="hero__img-container">
              <img
                className="appear hero__img"
                width="150"
                height="150"
                src="./assets/img/catar-image-hero.png"
                alt="qatar-imagen"
              />
            </div>
          </div>
        </article>
        <section id="fg" className="section section--fg">
          <div className="container-wci container--fg">
            <h2 className="section__title">Fase de Grupos</h2>
            <div className="fg-container">
              <article className="fg-card">
                <h2 className="fg-card__title">Grupo A</h2>
                <div className="fg-card__teams">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Catar"
                    className="fg-card__team"
                  >
                    <div className="fg-card__team-img__container">
                      <img
                        className="fg-card__team-img"
                        src="./assets/img/teams/grupoA/logo-catar.png"
                        alt="Qatar logo"
                        width="50"
                      />
                    </div>
                    <div className="fg-card__team-text__container">
                      <h6 className="fg-card__team-text">Qatar</h6>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Ecuador"
                    className="fg-card__team"
                  >
                    <div className="fg-card__team-img__container">
                      <img
                        className="fg-card__team-img"
                        src="./assets/img/teams/grupoA/logo-ecuador.png"
                        alt="Ecuador logo"
                        width="50"
                      />
                    </div>
                    <div className="fg-card__team-text__container">
                      <h6 className="fg-card__team-text">Ecuador</h6>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Senegal"
                    className="fg-card__team"
                  >
                    <div className="fg-card__team-img__container">
                      <img
                        className="fg-card__team-img"
                        src="./assets/img/teams/grupoA/logo-senegal.png"
                        alt="Senegal logo"
                        width="50"
                      />
                    </div>
                    <div className="fg-card__team-text__container">
                      <h6 className="fg-card__team-text">Senegal</h6>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_los_Paises_Bajos"
                    className="fg-card__team"
                  >
                    <div className="fg-card__team-img__container">
                      <img
                        className="fg-card__team-img"
                        src="./assets/img/teams/grupoA/logo-holanda.png"
                        alt="Holanda logo"
                        width="50"
                      />
                    </div>
                    <div className="fg-card__team-text__container">
                      <h6 className="fg-card__team-text">Holanda</h6>
                    </div>
                  </a>
                </div>
              </article>
              <article className="fg-card">
                <h2 className="fg-card__title">Grupo B</h2>
                <div className="fg-card__teams">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Inglaterra"
                    className="fg-card__team"
                  >
                    <div className="fg-card__team-img__container">
                      <img
                        className="fg-card__team-img"
                        src="./assets/img/teams/grupoB/logo-inglaterra.png"
                        alt="Inglaterra logo"
                        width="50"
                      />
                    </div>
                    <div className="fg-card__team-text__container">
                      <h6 className="fg-card__team-text">Inglaterra</h6>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Irán"
                    className="fg-card__team"
                  >
                    <div className="fg-card__team-img__container">
                      <img
                        className="fg-card__team-img"
                        src="./assets/img/teams/grupoB/logo-iran.png"
                        alt="Irán logo"
                        width="50"
                      />
                    </div>
                    <div className="fg-card__team-text__container">
                      <h6 className="fg-card__team-text">Irán</h6>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Estados_Unidos"
                    className="fg-card__team"
                  >
                    <div className="fg-card__team-img__container">
                      <img
                        className="fg-card__team-img"
                        src="./assets/img/teams/grupoB/logo-usa.png"
                        alt="USA logo"
                        width="50"
                      />
                    </div>
                    <div className="fg-card__team-text__container">
                      <h6 className="fg-card__team-text">USA</h6>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Gales"
                    className="fg-card__team"
                  >
                    <div className="fg-card__team-img__container">
                      <img
                        className="fg-card__team-img"
                        src="./assets/img/teams/grupoB/logo-gales.png"
                        alt="Gales logo"
                        width="50"
                      />
                    </div>
                    <div className="fg-card__team-text__container">
                      <h6 className="fg-card__team-text">Gales</h6>
                    </div>
                  </a>
                </div>
              </article>
              <article className="fg-card">
                <h2 className="fg-card__title">Grupo C</h2>
                <div className="fg-card__teams">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Argentina"
                    className="fg-card__team"
                  >
                    <div className="fg-card__team-img__container">
                      <img
                        className="fg-card__team-img"
                        src="./assets/img/teams/grupoC/logo-argentina.png"
                        alt="Argentina logo"
                        width="50"
                      />
                    </div>
                    <div className="fg-card__team-text__container">
                      <h6 className="fg-card__team-text">Argentina</h6>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Arabia_Saudita"
                    className="fg-card__team"
                  >
                    <div className="fg-card__team-img__container">
                      <img
                        className="fg-card__team-img"
                        src="./assets/img/teams/grupoC/logo-arabia-saudita.png"
                        alt="Arabia Saudita logo"
                        width="50"
                      />
                    </div>
                    <div className="fg-card__team-text__container">
                      <h6 className="fg-card__team-text">Arabia Saudita</h6>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_México"
                    className="fg-card__team"
                  >
                    <div className="fg-card__team-img__container">
                      <img
                        className="fg-card__team-img"
                        src="./assets/img/teams/grupoC/logo-mexico.png"
                        alt="México logo"
                        width="50"
                      />
                    </div>
                    <div className="fg-card__team-text__container">
                      <h6 className="fg-card__team-text">México</h6>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Polonia"
                    className="fg-card__team"
                  >
                    <div className="fg-card__team-img__container">
                      <img
                        className="fg-card__team-img"
                        src="./assets/img/teams/grupoC/logo-polonia.png"
                        alt="Polonia logo"
                        width="50"
                      />
                    </div>
                    <div className="fg-card__team-text__container">
                      <h6 className="fg-card__team-text">Polonia</h6>
                    </div>
                  </a>
                </div>
              </article>
              <article className="fg-card">
                <h2 className="fg-card__title">Grupo D</h2>
                <div className="fg-card__teams">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Francia"
                    className="fg-card__team"
                  >
                    <div className="fg-card__team-img__container">
                      <img
                        className="fg-card__team-img"
                        src="./assets/img/teams/grupoD/logo-francia.png"
                        alt="Francia logo"
                        width="50"
                      />
                    </div>
                    <div className="fg-card__team-text__container">
                      <h6 className="fg-card__team-text">Francia</h6>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Australia"
                    className="fg-card__team"
                  >
                    <div className="fg-card__team-img__container">
                      <img
                        className="fg-card__team-img"
                        src="./assets/img/teams/grupoD/logo-australia.png"
                        alt="Australia logo"
                        width="50"
                      />
                    </div>
                    <div className="fg-card__team-text__container">
                      <h6 className="fg-card__team-text">Australia</h6>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Dinamarca"
                    className="fg-card__team"
                  >
                    <div className="fg-card__team-img__container">
                      <img
                        className="fg-card__team-img"
                        src="./assets/img/teams/grupoD/logo-dinamarca.png"
                        alt="Dinamarca logo"
                        width="50"
                      />
                    </div>
                    <div className="fg-card__team-text__container">
                      <h6 className="fg-card__team-text">Dinamarca</h6>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Túnez"
                    className="fg-card__team"
                  >
                    <div className="fg-card__team-img__container">
                      <img
                        className="fg-card__team-img"
                        src="./assets/img/teams/grupoD/logo-tunez.png"
                        alt="Túnez logo"
                        width="50"
                      />
                    </div>
                    <div className="fg-card__team-text__container">
                      <h6 className="fg-card__team-text">Túnez</h6>
                    </div>
                  </a>
                </div>
              </article>
              <article className="fg-card">
                <h2 className="fg-card__title">Grupo E</h2>
                <div className="fg-card__teams">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_España"
                    className="fg-card__team"
                  >
                    <div className="fg-card__team-img__container">
                      <img
                        className="fg-card__team-img"
                        src="./assets/img/teams/grupoE/logo-españa.png"
                        alt="España logo"
                        width="50"
                      />
                    </div>
                    <div className="fg-card__team-text__container">
                      <h6 className="fg-card__team-text">España</h6>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Costa_Rica"
                    className="fg-card__team"
                  >
                    <div className="fg-card__team-img__container">
                      <img
                        className="fg-card__team-img"
                        src="./assets/img/teams/grupoE/logo-costa-rica.png"
                        alt="Costa Rica logo"
                        width="50"
                      />
                    </div>
                    <div className="fg-card__team-text__container">
                      <h6 className="fg-card__team-text">Costa Rica</h6>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Alemania"
                    className="fg-card__team"
                  >
                    <div className="fg-card__team-img__container">
                      <img
                        className="fg-card__team-img"
                        src="./assets/img/teams/grupoE/logo-alemania.png"
                        alt="Alemania logo"
                        width="50"
                      />
                    </div>
                    <div className="fg-card__team-text__container">
                      <h6 className="fg-card__team-text">Alemania</h6>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Japón"
                    className="fg-card__team"
                  >
                    <div className="fg-card__team-img__container">
                      <img
                        className="fg-card__team-img"
                        src="./assets/img/teams/grupoE/logo-japon.png"
                        alt="Japón logo"
                        width="50"
                      />
                    </div>
                    <div className="fg-card__team-text__container">
                      <h6 className="fg-card__team-text">Japón</h6>
                    </div>
                  </a>
                </div>
              </article>
              <article className="fg-card">
                <h2 className="fg-card__title">Grupo F</h2>
                <div className="fg-card__teams">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Bélgica"
                    className="fg-card__team"
                  >
                    <div className="fg-card__team-img__container">
                      <img
                        className="fg-card__team-img"
                        src="./assets/img/teams/grupoF/logo-belgica.png"
                        alt="Bélgica logo"
                        width="50"
                      />
                    </div>
                    <div className="fg-card__team-text__container">
                      <h6 className="fg-card__team-text">Bélgica</h6>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Canadá"
                    className="fg-card__team"
                  >
                    <div className="fg-card__team-img__container">
                      <img
                        className="fg-card__team-img"
                        src="./assets/img/teams/grupoF/logo-canada.png"
                        alt="Canadá logo"
                        width="50"
                      />
                    </div>
                    <div className="fg-card__team-text__container">
                      <h6 className="fg-card__team-text">Canadá</h6>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Marruecos"
                    className="fg-card__team"
                  >
                    <div className="fg-card__team-img__container">
                      <img
                        className="fg-card__team-img"
                        src="./assets/img/teams/grupoF/logo-marruecos.png"
                        alt="Marruecos logo"
                        width="50"
                      />
                    </div>
                    <div className="fg-card__team-text__container">
                      <h6 className="fg-card__team-text">Marruecos</h6>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Croacia"
                    className="fg-card__team"
                  >
                    <div className="fg-card__team-img__container">
                      <img
                        className="fg-card__team-img"
                        src="./assets/img/teams/grupoF/logo-croacia.png"
                        alt="Croacia logo"
                        width="50"
                      />
                    </div>
                    <div className="fg-card__team-text__container">
                      <h6 className="fg-card__team-text">Croacia</h6>
                    </div>
                  </a>
                </div>
              </article>
              <article className="fg-card lg:fg-card--translated-to-center">
                <h2 className="fg-card__title">Grupo G</h2>
                <div className="fg-card__teams">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Brasil"
                    className="fg-card__team"
                  >
                    <div className="fg-card__team-img__container">
                      <img
                        className="fg-card__team-img"
                        src="./assets/img/teams/grupoG/logo-brasil.png"
                        alt="catar logo"
                        width="50"
                      />
                    </div>
                    <div className="fg-card__team-text__container">
                      <h6 className="fg-card__team-text">Brasil</h6>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Serbia"
                    className="fg-card__team"
                  >
                    <div className="fg-card__team-img__container">
                      <img
                        className="fg-card__team-img"
                        src="./assets/img/teams/grupoG/logo-serbia.png"
                        alt="ecuador logo"
                        width="50"
                      />
                    </div>
                    <div className="fg-card__team-text__container">
                      <h6 className="fg-card__team-text">Serbia</h6>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Suiza"
                    className="fg-card__team"
                  >
                    <div className="fg-card__team-img__container">
                      <img
                        className="fg-card__team-img"
                        src="./assets/img/teams/grupoG/logo-suiza.png"
                        alt="senegal logo"
                        width="50"
                      />
                    </div>
                    <div className="fg-card__team-text__container">
                      <h6 className="fg-card__team-text">Suiza</h6>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Camerún"
                    className="fg-card__team"
                  >
                    <div className="fg-card__team-img__container">
                      <img
                        className="fg-card__team-img"
                        src="./assets/img/teams/grupoG/logo-camerun.png"
                        alt="holanda logo"
                        width="50"
                      />
                    </div>
                    <div className="fg-card__team-text__container">
                      <h6 className="fg-card__team-text">Camerún</h6>
                    </div>
                  </a>
                </div>
              </article>
              <article className="fg-card lg:fg-card--translated-to-center">
                <h2 className="fg-card__title">Grupo H</h2>
                <div className="fg-card__teams">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Portugal"
                    className="fg-card__team"
                  >
                    <div className="fg-card__team-img__container">
                      <img
                        className="fg-card__team-img"
                        src="./assets/img/teams/grupoH/logo-portugal.png"
                        alt="catar logo"
                        width="50"
                      />
                    </div>
                    <div className="fg-card__team-text__container">
                      <h6 className="fg-card__team-text">Portugal</h6>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Ghana"
                    className="fg-card__team"
                  >
                    <div className="fg-card__team-img__container">
                      <img
                        className="fg-card__team-img"
                        src="./assets/img/teams/grupoH/logo-ghana.png"
                        alt="ecuador logo"
                        width="50"
                      />
                    </div>
                    <div className="fg-card__team-text__container">
                      <h6 className="fg-card__team-text">Ghana</h6>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Uruguay"
                    className="fg-card__team"
                  >
                    <div className="fg-card__team-img__container">
                      <img
                        className="fg-card__team-img"
                        src="./assets/img/teams/grupoH/logo-uruguay.png"
                        alt="senegal logo"
                        width="50"
                      />
                    </div>
                    <div className="fg-card__team-text__container">
                      <h6 className="fg-card__team-text">Uruguay</h6>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Corea_del_Sur"
                    className="fg-card__team"
                  >
                    <div className="fg-card__team-img__container">
                      <img
                        className="fg-card__team-img"
                        src="./assets/img/teams/grupoH/logo-corea-del-sur.png"
                        alt="holanda logo"
                        width="50"
                      />
                    </div>
                    <div className="fg-card__team-text__container">
                      <h6 className="fg-card__team-text">Corea del sur</h6>
                    </div>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <Carrusel/>

      </main>
      <figure className="wave">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 170"
          className="wave__wave"
        >
          <path
            fillOpacity={1}
            fill="#9BD9CC"
            d="M0,68L48,82.2C96,96,192,125,288,127.5C384,130,480,108,576,90.7C672,74,768,62,864,73.7C960,85,1056,119,1152,124.7C1248,130,1344,108,1440,87.8C1536,68,1632,51,1728,42.5C1824,34,1920,34,2016,42.5C2112,51,2208,68,2304,65.2C2400,62,2496,40,2592,36.8C2688,34,2784,51,2880,56.7C2976,62,3072,57,3168,68C3264,79,3360,108,3456,116.2C3552,125,3648,113,3744,104.8C3840,96,3936,91,4032,96.3C4128,102,4224,119,4320,113.3C4416,108,4512,79,4608,73.7C4704,68,4800,85,4896,87.8C4992,91,5088,79,5184,65.2C5280,51,5376,34,5472,36.8C5568,40,5664,62,5760,59.5C5856,57,5952,28,6048,31.2C6144,34,6240,68,6336,87.8C6432,108,6528,113,6624,104.8C6720,96,6816,74,6864,62.3L6912,51L6912,170L6864,170C6816,170,6720,170,6624,170C6528,170,6432,170,6336,170C6240,170,6144,170,6048,170C5952,170,5856,170,5760,170C5664,170,5568,170,5472,170C5376,170,5280,170,5184,170C5088,170,4992,170,4896,170C4800,170,4704,170,4608,170C4512,170,4416,170,4320,170C4224,170,4128,170,4032,170C3936,170,3840,170,3744,170C3648,170,3552,170,3456,170C3360,170,3264,170,3168,170C3072,170,2976,170,2880,170C2784,170,2688,170,2592,170C2496,170,2400,170,2304,170C2208,170,2112,170,2016,170C1920,170,1824,170,1728,170C1632,170,1536,170,1440,170C1344,170,1248,170,1152,170C1056,170,960,170,864,170C768,170,672,170,576,170C480,170,384,170,288,170C192,170,96,170,48,170L0,170Z"
          ></path>
        </svg>
      </figure>
    </>
  );
};

export default WorldCupInformation;
