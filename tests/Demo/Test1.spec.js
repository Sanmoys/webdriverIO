import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev.dori.accessintegra.com/');
  await page.getByPlaceholder('Email Address').click();
  await page.getByPlaceholder('Email Address').fill('mefota1862@luxeic.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Sanmoy@321');
  await page.getByRole('button', { name: 'Sign in' }).click();
  //await page.goto('https://dev.dori.accessintegra.com/');
  //await page.goto('https://dev.dori.accessintegra.com/providerdashboard');
  //await page.getByRole('link', { name: ' Organizations' }).click();
  await page.getByRole('link', { name: '' }).click();
  await page.close();
});