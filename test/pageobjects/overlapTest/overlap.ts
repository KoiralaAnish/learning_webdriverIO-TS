export default class {
  public open(path: string) {
    return browser.url(`http://uitestingplayground.com/${path}`);
  }
}
