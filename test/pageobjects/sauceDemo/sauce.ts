export default class {
  public open(path: string) {
    return browser.url(`https://www.saucedemo.com//${path}`);
  }
}
