import Sauce from "../pageobjects/sauceDemo/sauce.page";
import { TEST_CREDS } from "../constants/user";

describe("sauce demo test", async () => {
  it("should login to the system", async () => {
    await Sauce.login(TEST_CREDS.USERNAME, TEST_CREDS.PASSWORD); // Login to the system
  });
  it("should add the items and increase the cart count", async () => {
    await Sauce.addAndVerifyCart();
    expect(Sauce.cartIndicator).toHaveValue("1");
  });
  it("should logout from the system", async () => {
    Sauce.logout();
    expect(browser.url).toHaveUrl("https://www.saucedemo.com/");
  });
});
