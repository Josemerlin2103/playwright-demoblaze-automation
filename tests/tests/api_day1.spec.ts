import { test, expect } from '@playwright/test';

test('Verify DemoBlaze Product Entries API', async ({ request }) => {
  // 1. Use the URL found in the Network tab
  const response = await request.get('https://api.demoblaze.com/entries');

  // 2. Validate the status code is 200 
  expect(response.status()).toBe(200);

  // 3. Parse the JSON
  const responseBody = await response.json();
  
  // 4. Log the data to see the list of products
  console.log(responseBody);

  // 5. Assertion: Check if the response contains "Items"
  expect(responseBody.Items.length).toBeGreaterThan(0);
});