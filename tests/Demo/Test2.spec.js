import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://portal-test.goya.com/oms2/#/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('013506');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Pwd@013506');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.goto('https://portal-test.goya.com/oms2/#/order-entry');
  page.on("dialog",async(alert)=>{
  console.log('Alert Message:' + alert.message());
  await alert.accept();

  // expect(dialog.type()).toContain('Do you want to merge these orders?');
  // expect(dialog.message()).toContain('Continue Without Merge');
  // await dialog.accept();
  });
  // await page.click("accept");
  // await page.waitForEvent("dialog");


  await page.getByRole('button', { name: 'Order', exact: true }).click();
  await page.getByRole('searchbox', { name: 'Customer' }).click();
  await page.getByRole('searchbox', { name: 'Customer' }).fill('701631');
  await page.getByText('701631-RUMBA CUBANA (JC)').click();
  await page.getByRole('textbox', { name: 'Item / UPC#' }).click();
  await page.getByRole('textbox', { name: 'Item / UPC#' }).fill('2365');
  await page.getByPlaceholder('Cases').fill('8');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('#idd > div:nth-child(1) > div:nth-child(4) > div.container.over-k.ng-scope > div.col-md-12.table-sub.table-sub-mob > input.form-control.qal-sub').click();
  // await page.locator('//*[@id="duplicateOrderModalPopup"]/div[2]/div/div[3]/input').click();
  await page.locator('//*[@id="duplicateOrderModalPopup"]/div[2]/div/div[3]/div[2]/div/div[1]/input').click({timeout: 10000});
  await page.locator('//*[@id="duplicateOrderModalPopup"]/div[2]/div/div[3]/div[2]/div/div[2]/input').click();
  await page.locator('//*[@id="duplicateOrderModalPopup"]/div[2]/div/div[4]/button[2]').click();
  await page.locator('//*[@id="submitonlinemodal"]/div[2]/div/div[2]/button[1]').click();

  await page.locator('//*[@id="duplicateOrderModalPopup"]/div[2]/div/div[4]/button[2]').click();
  await page.locator('//*[@id="mergeOrderModal"]/div[2]/div/div[3]/button[1]').click();
  await page.locator('//*[@id="submitonlinemodal"]/div[2]/div/div[2]/button[1]').click();


  // page.once('dialog', dialog => {
  //   console.log(`Dialog message: ${dialog.message()}`);
  //   dialog.dismiss().catch(() => {});
  // });
  await page.locator('#submitonlinemodal').getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: '013506-CARLOS MORATO' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});