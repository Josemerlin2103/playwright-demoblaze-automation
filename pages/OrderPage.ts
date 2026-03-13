import { Page } from '@playwright/test';

export class OrderPage {

    constructor (private page:Page){}

    async placeOrder () {

        await this.page.getByRole('button', { name: 'Place Order' }).click();
    }

    async  fillOrderDetails(){

    await this.page.fill('#name','bosh');
    await this.page.fill('#country','india');
    await this.page.fill('#city','chennai');
    await this.page.fill('#card', '123456789');
    await this.page.fill('#month','12');
    await this.page.fill('#year','2025');
}

    async purchase(){
    await this.page.getByRole('button', { name: 'Purchase' }).click();
    }
}