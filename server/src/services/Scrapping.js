import { chromium } from 'playwright';

export default class Scrapping {
  constructor() {
    this.createBrowser();
  }

  createBrowser = async () => {
    this.browser = await chromium.launch();
    return this.browser;
  }

  createPage = async () => {
    this.page = await this.browser.newPage();
    return this.page;
  }

  goTo = async (url, options) => {
    await this.page.goto(url, options)
  }

}