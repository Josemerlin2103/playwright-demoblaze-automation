import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';
// @ts-ignore
import testData from '../utils/testData.json';

for (const data of testData) {
    test(`Add ${data.productName} to cart`, async ({ page }) => {
        const product = new ProductPage(page);

        await page.goto('https://www.demoblaze.com/');

        // 1. Open the  product from our JSON list
       
        await product.openProduct(data.productName)

        // 2. Add to cart
        page.once('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.accept();
        });
        await product.addToCart();

        // 3. Verify the specific product is in the cart
        await product.openCart();
        await expect(page.locator('#tbodyid')).toContainText(data.productName);
    });
}