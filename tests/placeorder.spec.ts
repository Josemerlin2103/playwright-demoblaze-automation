import { test,expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';
import { OrderPage } from '../pages/orderpage';

test ('place order',async({page})=>{

    const product= new ProductPage(page);
    const order = new OrderPage(page);
    await page.goto('https://www.demoblaze.com/');
    page.on('dialog',async dialog =>{
    await dialog.accept();
    });

    await product.openProduct('Samsung galaxy s6');
    await product.addToCart();

    await page.waitForTimeout(2000);

    await product.openCart();

    await order.placeOrder();
    await order.fillOrderDetails('Bosh', 'India', 'Chennai', '123456789');

    await order.purchase();

    
    await page.waitForTimeout(2000);

    await expect(page.getByText('Thank you for your purchase!')).toBeVisible();

});

