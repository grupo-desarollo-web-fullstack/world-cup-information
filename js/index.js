'use-strict'

import header from "./modules/header.js";

const readyDocument = () => {
  header();
};

document.addEventListener('DOMContentLoaded', readyDocument);