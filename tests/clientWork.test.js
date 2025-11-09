const { test, expect } = require('@playwright/test');

test('Verify Client Work section', async ({ page }) => {
    // Step 1: Navigate to the EPAM website
    await page.goto('https://www.epam.com/');

    // Step 2: Select "Services" from the header menu
    await page.getByRole('link', { name: 'Services' }).nth(1).click();

    // Step 3: Click the "Explore Our Client Work" link
    await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

    // Step 4: Verify that the "Client Work" text is visible on the page
    const isVisible = await page.evaluate(() => document.body.innerText.includes('Client Work'));
    expect(isVisible).toBe(true);
});