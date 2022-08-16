import button from "./button";

class Visiblity extends button {
  public get hideButton() {
    return $("#hideButton");
  }
  public get removedButton() {
    return $("#removedButton");
  }
  public get zeroWidthButton() {
    return $("#zeroWidthButton");
  }
  public get overlappedButton() {
    return $("#overlappedButton");
  }
  public get invisibleButton() {
    return $("#invisibleButton");
  }
  public get notDisplayedButton() {
    return $("#notDisplayedButton");
  }
  public get offScreenButton() {
    return $("#offScreenButton");
  }
  public open() {
    return super.open("visibility");
  }

  public async hide() {
    await this.hideButton.click();
  }
}
export default new Visiblity();
