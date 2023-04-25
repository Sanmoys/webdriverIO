import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://portal-test.goya.com/oms2/#/login');

  await page.getByPlaceholder('Username').fill('013506');
  await page.getByPlaceholder('Password').fill('Pwd@013506');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Order', exact: true }).click();
  await page.locator('#qk-remove-space div').filter({ hasText: 'Select Customer' }).nth(3).click();
  await page.getByText('712450-SHOP RITE 130').click();

  await page.getByRole('textbox', { name: 'Amount' }).fill('400');
  await page.getByRole('textbox', { name: 'Item / UPC#' }).fill('2365');
  await page.getByPlaceholder('Cases').fill('5');

  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();

  await page.getByRole('button', { name: 'Continue Without Merge' }).click();

 // await page.getByRole('checkbox').nth(3).check();
  //await page.locator('div').filter({ hasText: 'I acknowledge the duplicate order and still wish to proceed.' }).getByRole('checkbox').check();

  //let DupCheck = await page.locator("//input[@ng-model='allData.proceedDuplicateOrderss']").isVisible();
  
  if(await page.$("//input[@ng-model='allData.proceedDuplicateOrderss']"))
  {
    console.log("Duplicate order checkbox is present");
    await page.locator('#duplicateOrderModalPopup').getByRole('checkbox').check();
  }
  await page.getByRole('checkbox').nth(4).check();

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => { });
  });
  //await page.locator("//button[contains(@ng-click,'duplicateData()')]").click();
  await page.locator('#duplicateOrderModalPopup').getByRole('button', { name: 'Submit' }).click();

  await page.goto('https://portal-test.goya.com/oms2/#/home');
  await page.getByRole('button', { name: '013506-CARLOS MORATO' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});