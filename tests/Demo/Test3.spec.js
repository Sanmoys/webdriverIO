import { test, expect } from '@playwright/test';



test('Place Order', async ({ page }) => {
  await page.goto('https://portal-test.goya.com/oms2/#/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('013506');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Pwd@013506');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Order', exact: true }).click();
  await page.getByRole('searchbox', { name: 'Customer' }).click();
  await page.getByRole('searchbox', { name: 'Customer' }).fill('712450');
  await page.getByRole('option', { name: '712450-SHOP RITE 130' }).locator('div').filter({ hasText: '712450-SHOP RITE 130' }).click();
  await page.getByRole('textbox', { name: 'Item / UPC#' }).click();
  await page.getByRole('textbox', { name: 'Item / UPC#' }).fill('2365');
  await page.getByPlaceholder('Cases').fill('5');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByRole('button', { name: 'Continue Without Merge' })).click({setTimeout: 10000});

  await page.getByRole('checkbox').nth(3).check();
  //await page.locator('div').filter({ hasText: 'I acknowledge that this is duplicate order and still wish to proceed.' }).getByRole('checkbox').check();
  await page.locator('#duplicateOrderModalPopup').getByRole('button', { name: 'Submit' }).click();
  //await page.getByRole('button', { name: 'Continue Without Merge' }).click();

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('#submitonlinemodal').getByRole('button', { name: 'Submit' }).click();





//   page.on('dialog', async dialog => {
//     // Verify type of dialog
//     //expect(dialog.type()).toContain('alert');   
    
//     // verify message of alert
//     //expect(dialog.message()).toContain('This is an Alert Box.');
    
//     //click on alert ok button
//     await dialog.accept();
//   });
  
  // Click on Trigger an alert button
  //await page.click('#OK');
  
  // Verify Message displayed after clicking on ok button
  //await expect(page.locator('#msg')).toHaveText( 'You clicked on Ok button.')


 
    // await page.getByRole('navigation').getByRole('link', { name: 'Order Status' }).click();
    // await page.getByRole('cell', { name: '356299243 (W)' }).click();
    // await page.locator('#pdf').getByText('Close').click();
    await page.getByRole('button', { name: '013506-CARLOS MORATO' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
  



















});