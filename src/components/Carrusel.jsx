import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import ButtonCarrusel from "./ButtonCarrusel";

const Carrusel = () => {
  return (
    <section className="section section--slider">
      <h2 className="section__title">Más sobre Qatar 2022</h2>
      <div className="container-wci container--slider">
        <Swiper className="slider" loop={true}>
          <SwiperSlide className="slider__section">
            <img src="./assets/img/slider/Image1.jpg" alt="image1" className="slider__img"/>
          </SwiperSlide>
          <div className="button-info">
                <Link to="/more-info-qatar" className="button-info__link-container">
                <button type="button" className="button-info__link">
                    ¡Ver Más!
                </button>
                </Link>
          </div>
          <SwiperSlide className="slider__section">
            <img src="./assets/img/slider/Image2.jpg" alt="image2" className="slider__img"/>
          </SwiperSlide>
          <SwiperSlide className="slider__section">
            <img src="./assets/img/slider/Image3.jpg" alt="image3" className="slider__img"/>
          </SwiperSlide>
          <SwiperSlide className="slider__section">
            <img src="./assets/img/slider/Image4.jpg" alt="image4" className="slider__img"/>
          </SwiperSlide>

          <ButtonCarrusel action={'next'}>
            <BsFillCaretRightFill />
          </ButtonCarrusel>

          <ButtonCarrusel action={'prev'}>
            <BsFillCaretLeftFill/>
          </ButtonCarrusel>

        </Swiper>
      </div>
    </section>
  );
};

export default Carrusel;



// const sliderJS = () => {
//     const slider = document.querySelector("#slider");
//     let sliderSection = [...document.querySelectorAll(".slider__section")];
//     let sliderSectionLast = sliderSection.at(-1);
//     let idInterval = null;
//     const buttonLeft = document.querySelector("#button-left");
//     const buttonRight = document.querySelector("#button-right");
//     slider.insertAdjacentElement("afterbegin", sliderSectionLast);
//     const next = () => {
//       let sliderSectionFirst = [...document.querySelectorAll(".slider__section")].at(0);
//       slider.style.marginLeft = "-200%";
//       slider.style.transition = "all 0.5s";
//       setTimeout(() => {
//         slider.style.transition = "none";
//         slider.insertAdjacentElement("beforeend", sliderSectionFirst);
//         slider.style.marginLeft = "-100%";
//       }, 500);
//     }
//     const prev = () => {
//       let sliderSection = [...document.querySelectorAll(".slider__section")];
//       let sliderSectionLast = sliderSection.at(-1);
//       slider.style.marginLeft = "0";
//       slider.style.transition = "all 0.5s";
//       setTimeout(() => {
//         slider.style.transition = "none";
//         slider.insertAdjacentElement("afterbegin", sliderSectionLast);
//         slider.style.marginLeft = "-100%";
//       }, 500);
//     }

//     const startInterval = () => {
//       idInterval = setInterval(next, 5000);
//     };
//     const resetInterval = () => {
//       if(idInterval) {
//         clearInterval(idInterval);
//         startInterval();
//       }
//     }
//     buttonRight.addEventListener("click", () => {
//       next();
//       resetInterval();
//     });

//     buttonLeft.addEventListener("click", () => {
//       prev();
//       resetInterval();
//     });
//     startInterval();
//   };

//   export default sliderJS;

//             <div className="slider" id="slider">
//                 <div className="slider__section">
//
//                 </div>
//                 <div className="slider__section">
//
//                 </div>

//                 <div className="slider__section">
//
//                 </div>

//                 <div className="slider__section">

//                 </div>
//             </div>

            

            

//             </div>
//         </section>
