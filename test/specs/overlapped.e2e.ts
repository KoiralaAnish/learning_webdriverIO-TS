import Overlap from "../pageobjects/overlapTest/overlap.page";

describe("overlap test", async () => {
  it("should input the name field by scrolling", async () => {
    await Overlap.open();
    await Overlap.nameField("Test");
  });
});
