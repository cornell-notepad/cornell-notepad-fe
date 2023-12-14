import {test,expect, } from "playwright-test-coverage";

const BASE_URL = "http://localhost:3000";

test("increment counter", async ({ page }) => {
  await page.goto(BASE_URL);
  const counterBefore = Number(await page.textContent('[data-testid="counter"]'))
  await page.click('[data-testid="incrementBtn"]')
  const counterAfter = Number(await page.textContent('[data-testid="counter"]'))
  expect(counterAfter).toBe(counterBefore + 1)
});

test("decrement counter", async ({ page }) => {
  await page.goto(BASE_URL);
  const counterBefore = Number(await page.textContent('[data-testid="counter"]'))
  await page.click('[data-testid="decrementBtn"]')
  const counterAfter = Number(await page.textContent('[data-testid="counter"]'))
  expect(counterAfter).toBe(counterBefore - 1)
});

test("moch request to BE", async ({ page }) => {
  await page.route('*/**/user', async route => {
    const json = {
      firstName: 'Vitalii',
      lastName: 'Storchous'
    };
    await route.fulfill({ json });
  });

  await page.goto(BASE_URL)
  await page.click('[data-testid="getUserBtn"]')
  await page.waitForTimeout(1000)
  await expect(page.getByTestId('firstName')).toHaveText('Vitalii')
  await expect(page.getByTestId('lastName')).toHaveText('Storchous')
})