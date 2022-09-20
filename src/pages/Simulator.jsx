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
        <div className="container-wci section-simulator--fg">
          <h2 className="section__title">
            En mantenimiento, nos esforzamos para sacarlo, pipipi ☹
          </h2>
          <div className="fg-container-layout">
            <div className="fixture"></div>
          </div>
        </div>
      </section>
      <section></section>
    </main>
  );
};

export default Simulator;
