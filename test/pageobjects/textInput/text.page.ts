import text from "../textInput/text";
class Input extends text {
  public get textField() {
    return $("#newButtonName");
  }
  public get textButton() {
    return $("#updatingButton");
  }
  public open() {
    return super.open("textinput?");
  }
  public async inputField(text: string) {
    await this.textField.setValue(text);
    await this.textButton.click();
  }
}
export default new Input();
