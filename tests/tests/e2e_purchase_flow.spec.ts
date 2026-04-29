import { test, expect } from '@playwright/test';

test('End-to-End Purchase Flow (Hybrid Auth)', async ({ page, request }) => {

    // 1. API Login (The Day 6 Milestone)
    const loginResponse = await request.post('https://api.demoblaze.com/login', {
        data: { username: "bosh", password: "abc@123" }
    });

    const responseText = await loginResponse.text();
    const responseJson = JSON.parse(responseText);
    const rawToken = responseJson.authorisation ?? responseJson;
    const token = rawToken.toString().replace('Auth_token: ', '').trim();
    
    // 2. Inject Authentication BEFORE navigation
    await page.addInitScript(({ t, u }) => {
        localStorage.setItem('tokenp_', t);
        localStorage.setItem('user', btoa(u));
    }, { t: token, u: 'bosh' });

    // 3. Navigate to Home
    await page.goto('https://www.demoblaze.com/', { waitUntil: 'domcontentloaded' });
    
// 4. Manual UI trigger for DemoBlaze 
    await page.evaluate(() => {
        const logoutBtn = document.getElementById('logout2');
        if (logoutBtn) logoutBtn.style.display = 'block';
        document.getElementById('login2')!.style.display = 'none';
    });

    // 5. Select a Product
    await page.click('text=Samsung galaxy s6');

    // 6. Add to Cart & Handle Alert
    page.once('dialog', async dialog => {
        console.log(`Alert message: ${dialog.message()}`);
        await dialog.accept();
    });
    await page.click('.btn-success'); 

    // 7. Go to Cart
    await page.click('#cartur');
    await expect(page).toHaveURL(/cart/);

    // 8. Place Order
    await page.click('button:has-text("Place Order")');

    // 9. Fill Checkout Form
    await page.fill('#name', 'Jose Merlin');
    await page.fill('#country', 'India');
    await page.fill('#city', 'Chennai');
    await page.fill('#card', '1234567890');
    await page.fill('#month', '04');
    await page.fill('#year', '2026');

    // 10. Final Purchase and Verification
    await page.click('text=Purchase');

    const successMessage = page.locator('h2:has-text("Thank you for your purchase!")');
    await expect(successMessage).toBeVisible();
    
    console.log("SUCCESS: E2E Purchase Flow completed with Hybrid Auth!");
});