import { test, expect } from '@playwright/test';
import { ProductPage } from '../../pages/ProductPage';
import { OrderPage } from '../../pages/OrderPage';
import testData from '../../utils/testData.json';

for (const data of testData) {
    test(`End-to-End Purchase Flow - ${data.productName}`, async ({ page }) => {
        const productPage = new ProductPage(page);
        const orderPage = new OrderPage(page);

        await page.goto('https://www.demoblaze.com/');

        // Open product from test data
        await productPage.openProduct(data.productName);

        // Handle the alert
        page.once('dialog', dialog => dialog.accept());
        await productPage.addToCart();

        // Open cart and place order
        await productPage.openCart();
        await orderPage.placeOrder();

        // Fill order details from test data
        await orderPage.fillOrderDetails(
            data.name,
            data.country,
            data.city,
            data.card,
            data.month,
            data.year
        );

        // Complete purchase
        await orderPage.purchase();

        // Verify successful purchase
        await expect(
            page.getByText('Thank you for your purchase!')
        ).toBeVisible();
    });
}