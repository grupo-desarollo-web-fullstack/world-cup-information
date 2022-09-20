import { Swiper, SwiperSlide } from "swiper/react";
import ButtonCarrusel from "../components/ButtonCarrusel";

const getImageUrl = (group, country) =>
  new URL(
    `../assets/img/teams/grupo${group.toUpperCase()}/logo-${country}.png`,
    import.meta.url
  ).href;

const Simulator = () => {
  return (
    <main className="main">
      <section id="fg" className="section section--fg">
        <div className="container-wci">
          <h2 className="section__title">Fase de Grupos</h2>
          <div className="fg-container-layout">
            <Swiper>
              <SwiperSlide>
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
              </SwiperSlide>
              <SwiperSlide>
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
              </SwiperSlide>
              <SwiperSlide>
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
              </SwiperSlide>
              <SwiperSlide>
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
              </SwiperSlide>
              <SwiperSlide>
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
              </SwiperSlide>
              <SwiperSlide>
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
              </SwiperSlide>
              <SwiperSlide>
                <article className="fg-card">
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
              </SwiperSlide>
              <SwiperSlide>
                <article className="fg-card">
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
              </SwiperSlide>
              <ButtonCarrusel />
            </Swiper>
            <div className="fixture"></div>
          </div>
        </div>
      </section>
      <section></section>
    </main>
  );
};

export default Simulator;
