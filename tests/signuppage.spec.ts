import { test } from '@playwright/test';
import { SignupPage } from '../pages/signuppage';

test( 'signup', async ({page})=>{

    const signup = new SignupPage(page);

    await page.goto('https://www.demoblaze.com/');


page.on('dialog', async dialog => {
console.log(dialog.message());
await dialog.accept();
});
    await signup.opensignup();
    await signup.enterUsername('bosh');
    await signup.enterPassword('abc@123');
    await signup.signup();
});


