import overlap from "./overlap";

class Overlap extends overlap {
  public get inputName() {
    return $("#name");
  }
  public open() {
    return super.open("overlapped");
  }

  public async nameField(text: string) {
    await this.inputName.scrollIntoView();
    await this.inputName.setValue(text);
    await expect(this.inputName).toHaveValue(text);
  }
}
export default new Overlap();
