import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';

test('Add product to cart' ,async({ page }) =>{
const product= new  ProductPage(page);

await page.goto('https://www.demoblaze.com/');

page.on('dialog',async dialog =>{
console.log(dialog.message());
await dialog.accept();
});

await product.openProduct();
await product.addToCart();

await page.waitForTimeout(2000);

await product.openCart();



await expect(page.locator('#tbodyid')).toContainText('Samsung galaxy s6');
});