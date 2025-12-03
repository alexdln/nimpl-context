import { test, expect } from "@playwright/test";

test.describe("Should work correct in client router for classic provider", async () => {
    test(`should return correct values on "after" page by default`, async ({ page }) => {
        await page.goto("/");
        await page.click("#to-after");
        await page.waitForSelector("#after-page");
        await page.waitForSelector("#after-context-first-value");

        const firstValue = await page.$("#after-context-first-value");
        expect(await firstValue?.textContent()).toBe("first value");

        const secondValue = await page.$("#after-context-second-value");
        expect(await secondValue?.textContent()).toBe("second value");
    });

    test(`should return correct values on "inside" page by default`, async ({ page }) => {
        await page.goto("/");
        await page.click("#to-inside");
        await page.waitForSelector("#inside-page");
        await page.waitForSelector("#inside-context-first-value");

        const firstValue = await page.$("#inside-context-first-value");
        expect(await firstValue?.textContent()).toBe("first value");

        const secondValue = await page.$("#inside-context-second-value");
        expect(await secondValue?.textContent()).toBe("second value");

        const thirdValue = await page.$("#inside-context-third-value");
        expect(await thirdValue?.textContent()).toBe("first value");
    });

    test(`should return correct values on "uninitialized" page by default`, async ({ page }) => {
        await page.goto("/");
        await page.click("#to-uninitialized");
        await page.waitForSelector("#uninitialized-page");
        await page.waitForSelector("#uninitialized-context-first-value");

        const firstValue = await page.$("#uninitialized-context-first-value");
        expect(await firstValue?.textContent()).toBe("first value");

        const secondValue = await page.$("#uninitialized-context-second-value");
        expect(await secondValue?.textContent()).toBe("initialized default value");
    });
});
