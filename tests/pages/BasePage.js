// pages/BasePage.js
const { expect } = require('@playwright/test');

class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  // Waits for an element to be visible (explicit wait)
  async waitForElementVisible(locator, timeout = 5000) {
    await expect(locator).toBeVisible({ timeout });
  }

  // Waits for the document to fully load
  async waitForPageToLoad(timeout = 10000) {
    await this.page.waitForFunction(() => document.readyState === 'complete', null, { timeout });
  }
}

module.exports = BasePage;
