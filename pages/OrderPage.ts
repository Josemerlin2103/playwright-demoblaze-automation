import { Page } from '@playwright/test';

export class OrderPage {

    constructor (private page:Page){}

    async placeOrder () {

        await this.page.getByRole('button', { name: 'Place Order' }).click();
    }

    async fillOrderDetails(name: string, country: string, city: string, card: string) {
    await this.page.fill('#name', name);
    await this.page.fill('#country', country);
    await this.page.fill('#city', city);
    await this.page.fill('#card', card);
    await this.page.fill('#month', '12');
    await this.page.fill('#year', '2026');
}

    async purchase(){
    await this.page.getByRole('button', { name: 'Purchase' }).click();
    }
}