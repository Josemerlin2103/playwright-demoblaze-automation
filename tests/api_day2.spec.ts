import {test,expect} from '@playwright/test';

test('Demoblaze login API test', async ({request})=>{
    // 1. Sending the POST request with a "data" object (The Body)
    const loginResponse = await request.post('https://api.demoblaze.com/login', {
    data: {
      "username":"bosh", 
      "password":"YWJjQDEyMw=="
    }
    });
    // 2. Validate the status code
    console.log("Login status: ",+loginResponse .status());
    expect(loginResponse.status()).toBe(200);
    // 3. Parse the response to see the "Auth Token"
    const responseBody= await loginResponse.text();
    console.log("Full Response from Server: " + responseBody);
    // 4. Assertion: If login is successful, the response usually starts with "Auth_token"
    expect(responseBody).toContain('Auth_token');
});