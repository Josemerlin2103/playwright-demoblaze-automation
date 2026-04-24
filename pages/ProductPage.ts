import {Page} from '@playwright/test';
export class ProductPage {

    constructor(private page:Page) {}
    async openProduct(name: string) {
    await this.page.getByRole('link', { name: name }).click();
}
    async addToCart(){
    await this.page.getByRole('link', { name: 'Add to cart' }).click();
    }
    async openCart(){
    await this.page.getByRole('link', { name: 'Cart', exact: true }).click();
    }
}
