import { Page } from '@playwright/test';
export class SignupPage {

    constructor (private page: Page) {}

    async opensignup(){
    await this.page.click('#signin2');
    }
    
    async enterUsername (username:string) {
    await this.page.fill('#sign-username',username);
    }

    async enterPassword (password:string) {
    await this.page.fill('#sign-password',password);
    }

    async signup(){
    await this.page.getByRole('button', { name: 'Sign up' }).click();
    }
}