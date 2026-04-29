import { test, expect } from '@playwright/test';

test.describe('API Security & Negative Testing', () => {

    // Test 1: Wrong Password
    test('Login - Incorrect Password should return error', async ({ request }) => {
        const response = await request.post('https://api.demoblaze.com/login', {
            data: { username: "bosh", password: "wrong_password" }
        });
        const body = await response.json();
        console.log("Response for Wrong Password:", body);
        
        expect(body.errorMessage).toBe("Wrong password.");
    });

    // Test 2: User doesn't exist
    test('Login - Non-existent user should return error', async ({ request }) => {
        const response = await request.post('https://api.demoblaze.com/login', {
            data: { username: "this_user_does_not_exist_123", password: "password" }
        });
        const body = await response.json();
        console.log("Response for Unknown User:", body);
        
        expect(body.errorMessage).toBe("User does not exist.");
    });

    // Test 3: Empty Fields (Edge Case)
    test('Login - Empty credentials should be handled', async ({ request }) => {
        const response = await request.post('https://api.demoblaze.com/login', {
            data: { username: "", password: "" }
        });
       
        console.log("Response Status for Empty Login:", response.status());
    });
});