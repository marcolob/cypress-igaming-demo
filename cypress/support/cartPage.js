// Page Object Model CartPage
class CartPage {
  get addToCartButtons() { return cy.get('[data-test^="add-to-cart"]'); }
  get removeFromCartButtons() { return cy.get('[data-test^="remove"]'); }
  get cartBadge() { return cy.get('.shopping_cart_badge'); }
  get cartLink() { return cy.get('.shopping_cart_link'); }
  get cartItems() { return cy.get('.cart_item'); }
  get cartItemNames() { return cy.get('.cart_item .inventory_item_name'); }
  get cartItemPrices() { return cy.get('.cart_item .inventory_item_price'); }

  addProductByIndex(index) { this.addToCartButtons.eq(index).click(); }
  addProductByDataTest(productDataTest) { cy.get(`[data-test="${productDataTest}"]`).click(); }
  removeProductByIndex(index) { this.removeFromCartButtons.eq(index).click(); }
  removeAllProducts() { this.cartItems.then(items => { const count = items.length; for (let i=0;i<count;i++){ this.removeFromCartButtons.eq(0).click(); } }); }
  removeProductByName(productName){ this.cartItemNames.contains(productName).parents('.cart_item').find('button[data-test^="remove"]').click(); }
  openCart(){ this.cartLink.click(); }
  addFirstProductToCart(){ this.addToCartButtons.first().click(); }
  removeFirstProductFromCart(){ this.removeFromCartButtons.first().click(); }
  getCartCount(){ return this.cartBadge; }
  getCartItemCount(){ return this.cartItems; }
  getFirstItemName(){ return this.cartItemNames.first().invoke("text"); }
  getItemNames(){ return this.cartItemNames.then(items => [...items].map(el => el.innerText.trim())); }
  getItemPrices(){ return this.cartItemPrices.then(items => [...items].map(el => Number(el.innerText.replace('$','').trim()))); }
}
export default new CartPage();
