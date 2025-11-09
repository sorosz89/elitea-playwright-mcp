import { test, expect } from '@playwright/test';

test('Navigate to EPAM and verify Client Work', async ({ page }) => {
    // Step 1: Navigate to the EPAM website
    await page.goto('https://www.epam.com/');

    // Step 2: Select "Services" from the header menu
    await page.getByText('Services').first().waitFor({ state: 'visible' });
    await page.getByText('Services').first().click();

    // Step 3: Click the "Explore Our Client Work" link
    await page.getByText('Explore Our Client Work').nth(1).click();

    // Step 4: Verify that the "Client Work" text is visible on the page
    await expect(page.getByText('Client Work')).toBeVisible();
});
