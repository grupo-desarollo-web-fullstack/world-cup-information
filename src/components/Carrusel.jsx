import { Link } from "react-router-dom";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import "../../js/modules/slider.js";
const Carrusel = () => {

    return(
        <section className="section section--slider">
            <h2 className="section__title">Más sobre qatar 2022</h2>
            <div className="container-wci container--slider">
            <div className="slider" id="slider">
                <div className="slider__section">
                <img
                    src="./assets/img/slider/Image1.jpg"
                    alt="image1"
                    className="slider__img"
                />
                </div>
                <div className="slider__section">
                <img
                    src="./assets/img/slider/Image2.jpg"
                    alt="image2"
                    className="slider__img"
                />
                </div>

                <div className="slider__section">
                <img
                    src="./assets/img/slider/Image3.jpg"
                    alt="image3"
                    className="slider__img"
                />
                </div>

                <div className="slider__section">
                <img
                    src="./assets/img/slider/Image4.jpg"
                    alt="image4"
                    className="slider__img"
                />
                </div>
            </div>

            <div className="button-info">
                <Link to="/more-info-qatar" className="button-info__link-container">
                <button type="button" className="button-info__link">
                    ¡Ver Más!
                </button>
                </Link>
            </div>

            <div className="slider__button slider__button--right" id="button-right">
                <BsFillCaretRightFill />
            </div>
            <div className="slider__button slider__button--left" id="button-left">
                <BsFillCaretLeftFill />
            </div>
            </div>
        </section>
    );
};

export default Carrusel;
