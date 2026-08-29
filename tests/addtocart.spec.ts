import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';
import testData from '../utils/testData.json';

for (const data of testData) {
    test(`Add ${data.productName} to cart`, async ({ page }) => {

        const product = new ProductPage(page);

        await page.goto('https://www.demoblaze.com/');

        // 1. Open the product
        await product.openProduct(data.productName);

        // 2. Handle the Add to cart alert
        page.once('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.accept();
        });

        await product.addToCart();

        // Give Demoblaze time to add the product
        await page.waitForTimeout(2000);

        // 3. Open cart
        await product.openCart();

        // 4. Verify the product is in the cart
        await expect(page.locator('#tbodyid')).toContainText(
            data.productName,
            { timeout: 10000 }
        );
    });
}