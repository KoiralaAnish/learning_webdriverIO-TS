export default class Button {
  public open(path: string) {
    return browser.url(`http://uitestingplayground.com/${path}`);
  }
}
