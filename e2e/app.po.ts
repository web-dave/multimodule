import { browser, element, by } from 'protractor';

export class MultimodulePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('-root h1')).getText();
  }
}
