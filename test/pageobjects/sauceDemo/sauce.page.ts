import sauce from "../sauceDemo/sauce";
class Sauce extends sauce {
  public get username() {
    return $("#user-name");
  }
  public get password() {
    return $("#password");
  }
  public get loginBtn() {
    return $("#login-button");
  }
  public get addToCartBtn() {
    return $("#add-to-cart-sauce-labs-backpack");
  }
  public get cartIcon() {
    return $("#shopping_cart_container");
  }
  public get cartIndicator() {
    return $("#shopping_cart_badge");
  }
  public get burgerIcon() {
    return $("#react-burger-menu-btn");
  }
  public get logoutLink() {
    return $("#logout_sidebar_link");
  }

  public async login(username: string, password: string) {
    await browser.url("https://www.saucedemo.com");
    await this.username.setValue(username);
    await this.password.setValue(password);
    await this.loginBtn.click();
  }

  public async addAndVerifyCart() {
    await this.addToCartBtn.click();
  }
  public async logout() {
    await this.burgerIcon.click();
    this.logoutLink.click();
  }
}
export default new Sauce();
