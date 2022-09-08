
### BUILD
- Visual Studio Code
- NodeJS
- JavaScript
- Playwright


### DESCRIPTION
Tests were written based on the Excel document -> Book Store Web App- User Registration Test Cases.xlsx, in a single file **registrationScenarios.spec.js** using **beforeEach** hook

````javascript

test.describe("Registration tests for successful scenario", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/register");
  });
  
````


Base URL is located in configuration file **bookstore.config.js**


````javascript

const { PlaywrightTestConfig, chromium } = require("@playwright/test");

const config = {
  retries: 0,
  timeout: 30000,
  expect: 7000,

  use: {
    baseURL: "https://demoqa.com",
    headless: false,
  },
};

module.exports = config;


````




### TEST EXAMPLE
Test example for new user registration with first name input in a different language


```javascript

test("Register with first name in different language", async ({
    page,
  }) => {
    await page.locator("#firstname").type("Željko");
    await page.locator("#lastname").type("Horvat");
    await page.locator("#userName").type("MHorvat");
    await page.locator("#password").type("M@rina 1011");
    await page
      .frameLocator('iframe[role="presentation"]')
      .locator('span[role="checkbox"]')
      .click();
      await page.pause();
    await page.locator("#register").click();

   

   page.on('dialog', async (dialog) => {
       console.log(dialog.message());
       await dialog.accept();
      
      });
  
    const userExist=page.locator('text=User exists!');

    await expect(userExist).not.toBeVisible();


  });
```




### RESOURCE
- [Documentation](https://playwright.dev/docs/intro)
