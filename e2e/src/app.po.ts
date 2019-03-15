import { browser, by, element } from 'protractor';

export class AppPage {
  clickOnIncrement() {
    return element(by.xpath('//*[@id="#increment-btn"]/button')).click();
  }

  getOrderValue(): any {
    return element(by.css('#order-value')).getAttribute('value') as Promise<string>;
  }

  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
}
