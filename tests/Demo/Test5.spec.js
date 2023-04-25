import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://portal-test.goya.com/oms2/#/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('013506');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Pwd@013506');
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Order', exact: true }).click();
  await page.getByRole('searchbox', { name: 'Customer' }).click();
  await page.getByRole('searchbox', { name: 'Customer' }).fill('712450');
  await page.getByText('712450-SHOP RITE 130').click();
  await page.getByRole('textbox', { name: 'Amount' }).click();
  await page.getByRole('textbox', { name: 'Amount' }).fill('200');
  await page.getByRole('textbox', { name: 'Item / UPC#' }).click();
  await page.getByRole('textbox', { name: 'Item / UPC#' }).fill('2365');
  await page.getByPlaceholder('Cases').fill('13');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Continue Without Merge' }).click();
  await page.locator('#duplicateOrderModalPopup').getByRole('checkbox').check();
  await page.getByRole('checkbox').nth(4).check();


  await page.locator('#duplicateOrderModalPopup').getByRole('button', { name: 'Submit' }).click();

  //page.setDefaultTimeout(120000);
  // page.on(dialog, dialog=>dialog.accept());
  // await page.getByRole('button').click();
  
 
  //await page.locator('div').filter({ hasText: 'I acknowledge the duplicate order and still wish to proceed.' }).getByRole('checkbox').check();
  //await page.getByRole('checkbox').nth(3).check({timeout: 10000});
  //await page.locator('div').filter({ hasText: 'I acknowledge that this is duplicate order and still wish to proceed.' }).getByRole('checkbox').check();

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  await page.screenshot({ path: 'Order_Screenshot4.png' });
  await expect(page).tohavescreenshot();
  
  await page.goto('https://portal-test.goya.com/oms2/#/home');
  await page.getByRole('button', { name: '013506-CARLOS MORATO' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
  

  await page.close();

  
});