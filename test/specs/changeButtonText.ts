import Input from "../pageobjects/textInput/text.page";

describe("Text input test", async () => {
  it("should show that the button text is changed when clicked", async () => {
    await Input.open();
    await Input.inputField("Test");
    await expect(Input.textButton).toHaveTextContaining("Test");
  });
});
