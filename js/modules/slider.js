const sliderJS = () => {
  const slider = document.querySelector("#slider");
  let sliderSection = [...document.querySelectorAll(".slider__section")];
  let sliderSectionLast = sliderSection.at(-1);

  const buttonLeft = document.querySelector("#button-left");
  const buttonRight = document.querySelector("#button-right");

  slider.insertAdjacentElement("afterbegin", sliderSectionLast);

  function next() {
    let sliderSectionFirst = [...document.querySelectorAll(".slider__section")].at(0);
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(() => {
      slider.style.transition = "none";
      slider.insertAdjacentElement("beforeend", sliderSectionFirst);
      slider.style.marginLeft = "-100%";
    }, 500);
  }

  function prev() {
    let sliderSection = [...document.querySelectorAll(".slider__section")];
    let sliderSectionLast = sliderSection.at(-1);
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(() => {
      slider.style.transition = "none";
      slider.insertAdjacentElement("afterbegin", sliderSectionLast);
      slider.style.marginLeft = "-100%";
    }, 500);
  }

  buttonRight.addEventListener("click", () => {
    next();
  });

  buttonLeft.addEventListener("click", () => {
    prev();
  });

  setInterval(() => {
    next();
  }, 5000);
};

export default sliderJS;