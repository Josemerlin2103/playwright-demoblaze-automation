import {Page} from '@playwright/test';
export class ProductPage {

    constructor(private page:Page) {}
    async openProduct(){
    await this.page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
    }
    async addToCart(){
    await this.page.getByRole('link', { name: 'Add to cart' }).click();
    }
    async openCart(){
    await this.page.getByRole('link', { name: 'Cart', exact: true }).click();
    }
}
