import Visiblity from "../pageobjects/uiTesting/button.page";

describe("visiblity test", async () => {
  it("should check if element is visible on screen", async () => {
    await Visiblity.open();
    await Visiblity.removedButton.isDisplayed();
    await Visiblity.zeroWidthButton.isDisplayed();
    await Visiblity.overlappedButton.isDisplayed();

    await Visiblity.invisibleButton.isDisplayed();
    await Visiblity.notDisplayedButton.isDisplayed();
    await Visiblity.hideButton.isDisplayed();
  });
  it("should hide all button when clicked to hide button", async () => {
    await Visiblity.open();
    await Visiblity.hide();

    expect(await Visiblity.removedButton).not.toBeDisabled();
    expect(await Visiblity.removedButton).not.toBeDisplayed();
    expect(await Visiblity.zeroWidthButton).toBeDisplayed();
    expect(await Visiblity.overlappedButton).toBeDisplayed();
    expect(await Visiblity.invisibleButton).toBeDisplayed();
    expect(await Visiblity.notDisplayedButton).toBeDisplayed();
    expect(await Visiblity.hideButton).toBeDisplayed();
  });
});
