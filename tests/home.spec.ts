import { test,expect } from '@playwright/test';

test('open Demoblaze Homepage', async({page}) => {

    await page.goto('https://www.demoblaze.com/');
    await expect(page).toHaveTitle(/STORE/);

});



