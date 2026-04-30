import { test } from '@playwright/test';
import { ProductPage } from '../../pages/ProductPage';
import { OrderPage } from '../../pages/OrderPage';
import testData from '../../utils/testData.json';
test('End-to-End Purchase Flow - POM Version', async ({ page }) => {
    const productPage = new ProductPage(page);
    const orderPage = new OrderPage(page);

    await page.goto('https://www.demoblaze.com/');

    // Accessing the first item (index 0) from your JSON array
    await productPage.openProduct(testData[0].productName);
    
    // Handle the alert
    page.once('dialog', dialog => dialog.accept());
    await productPage.addToCart();
    
    await productPage.openCart();
    await orderPage.placeOrder();

    // Fill details using your established info
    await orderPage.fillOrderDetails(
        'Jose Merlin', // You can also add these to your JSON later!
        'India',
        'Chennai',
        '1234567890'
    );
});