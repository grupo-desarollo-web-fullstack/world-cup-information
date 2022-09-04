'use-strict'

import header from "./modules/header.js";
import sliderJS from "./modules/slider.js";

const readyDocument = () => {
  header();
  sliderJS();
};

document.addEventListener('DOMContentLoaded', readyDocument);