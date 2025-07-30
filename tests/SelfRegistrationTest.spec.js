// tests/SelfRegistrationTest.spec.js
const { test } = require('@playwright/test');
const { RegistrationPage } = require('../pageobjects/Selfregister');

test.describe('Self-Registration – Investor Name Validations', () => {
  let registration;

  test.beforeEach(async ({ page }) => {
    registration = new RegistrationPage(page);
    await registration.navigate();
  });

  test('TC_REG_3_01 – Investor Name < 3 chars', async () => {
    await registration.enterInvestorName('AA');
    await registration.expectError('Minimum 3 characters');
  });

  test('TC_REG_3_02 – Investor Name > 300 chars', async () => {
    const longName = 'A'.repeat(301);
    await registration.enterInvestorName(longName);
    await registration.expectError('Maximum 300 characters');
  });

  test('TC_REG_3_03 – Only numbers in Investor Name', async () => {
    await registration.enterInvestorName('123456');
    await registration.expectError('Investor Name invalid');
  });

  test('TC_REG_3_04 – Invalid special chars in Investor Name', async () => {
    await registration.enterInvestorName('ABC*Corp');
    await registration.expectError('Only . , - # @ ‘ & $ special characters allowed');
  });

  test('TC_REG_3_05 – Investor Name already exists', async () => {
    // Precondition: 'ExistingName' exists in the system
    await registration.enterInvestorName('ExistingName');
    await registration.expectError('Investor already exists');
  });

  test.afterEach(async ({ page }) => {
    // optional cleanup
    await page.evaluate(() => window.localStorage.clear());
  });
});
