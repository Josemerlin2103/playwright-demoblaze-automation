import {Page} from '@playwright/test';
export class ProductPage {

    constructor(private page:Page) {}
    async openProduct(name: string) {
    await this.page.getByRole('link', { name: name }).click();

}
async addToCart() {
        // This clicks the 'Add to cart' link on the product page
        await this.page.getByRole('link', { name: 'Add to cart' }).click();
    }
    async openCart() {
    // 1. Click the cart link
    await this.page.getByRole('link', { name: 'Cart', exact: true }).click();
    
    // 2. Wait for the URL to change 
    await this.page.waitForURL('**/cart.html');

    // 3. Directly wait for the table or a specific item in the cart
    const cartTable = this.page.locator('#tbodyid');
    
    // Use 'attached' state - it just checks if the element is in the HTML
    await cartTable.waitFor({ state: 'attached', timeout: 15000 }); 
}
}