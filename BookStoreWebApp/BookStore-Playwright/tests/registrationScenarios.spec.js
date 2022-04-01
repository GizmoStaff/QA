const {test,expect}=require ('@playwright/test');



test.describe("Registration tests for successful scenario", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/register");
  });

  test("Register using valid data", async ({ page }) => {
    await page.locator("#firstname").type("Marina");
    await page.locator("#lastname").type("Horvat");
    await page.locator("#userName").type("MHorvat");
    await page.locator("#password").type("M@rina 1010");
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




  test("Register with last name in different language", async ({ page }) => {
    await page.locator("#firstname").type("Marina");
    await page.locator("#lastname").type("عامر");
    await page.locator("#userName").type("MHorvat");
    await page.locator("#password").type("M@rina 1012");
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

  test("Register with username in different language", async ({ page }) => {
    await page.locator("#firstname").type("Marina");
    await page.locator("#lastname").type("Horvat");
    await page.locator("#userName").type("mLukić");
    await page.locator("#password").type("M@rina 1013");
    await page
      .frameLocator('iframe[role="presentation"]')
      .locator('span[role="checkbox"]')
      .click();
    await page.locator("#register").click();

   

    page.on('dialog', async (dialog) => {
      console.log(dialog.message());
      await dialog.accept();
     
     });
 
const userExist=page.locator('text=User exists!');

await expect(userExist).not.toBeVisible();

  });

  test("Register with password in different language", async ({ page }) => {
    await page.locator("#firstname").type("Marina");
    await page.locator("#lastname").type("Horvat");
    await page.locator("#userName").type("MHorvat");
    await page.locator("#password").type("M@rinaŠ 1014");
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
});







test.describe("Registration tests for Invalid Scenarios",()=>{

test.beforeEach(async({page})=>{
    await page.goto("/register");
})


test("Register with an empty first name field", async({page})=>{

  await page.locator("#firstname").type("");
  await page.locator("#lastname").type("Horvat");
  await page.locator("#userName").type("MHorvat");
  await page.locator("#password").type("M@rina 12254");
  await page
    .frameLocator('iframe[role="presentation"]')
    .locator('span[role="checkbox"]')
    .click();

    await page.pause();

  await page.locator("#register").click();

   await page.screenshot({path:'emptyFirstName.png',fullPage:true});


})

test("Register with invalid first name",async({page})=>{
await page.locator("#firstname").type("H");
await page.locator("#lastname").type("Horvat");
await page.locator("#userName").type("MHorvat");
await page.locator("#password").type("M@rina 2000");
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

await page.pause();

const errmssgIFN=page.locator('text=First name must contain at least two characters!');

await expect.soft(errmssgIFN).toBeVisible();




})


test("Register with a very long first name",async({page})=>{

await page.locator("#firstname").type("kfkafkjflafjsljalfoeignvkjnsovijoig ljljsdlgjls jdlgjslgdjsld lgjlsjgljslgjsljd ljglsjlgjlsjglsljl lgjlsglsjgljs");
await page.locator("#lastname").type("Horvat");
await page.locator("#userName").type("MHorvat");
await page.locator("#password").type("M@rina 2001");
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
await page.pause();

const errmssgVLFN=page.locator('text=First name cannot be longer than 50 characters!');

await expect.soft(errmssgVLFN).toBeVisible();



})






test("Register with an empty last name field", async({page})=>{

  await page.locator("#firstname").type("Marina");
  await page.locator("#lastname").type("");
  await page.locator("#userName").type("MHorvat");
  await page.locator("#password").type("M@rina 12");
  await page
    .frameLocator('iframe[role="presentation"]')
    .locator('span[role="checkbox"]')
    .click();

    await page.pause();

  await page.locator("#register").click();

   await page.screenshot({path:'emptyLastName.png',fullPage:true});


})


test("Register with invalid last name",async({page})=>{
  await page.locator("#firstname").type("Marina");
  await page.locator("#lastname").type("H");
  await page.locator("#userName").type("MHorvat");
  await page.locator("#password").type("M@rina 2005");
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
  await page.pause();
  const errmssgILN=page.locator('text=Last name must contain at least two characters!');

  await expect.soft(errmssgILN).toBeVisible();
  



})

test("Register with a very long last name",async({page})=>{

  await page.locator("#firstname").type("Luka");
  await page.locator("#lastname").type("kfkafkjflafjsljalfoeignvkjnsovijoig ljljsdlgjls jdlgjslgdjsld lgjlsjgljslgjsljd ljglsjlgjlsjglsljl lgjlsglsjgljskfsdgsjkghdf");
  await page.locator("#userName").type("MHorvat");
  await page.locator("#password").type("M@rina 2007");
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

  await page.pause();
  const errmssgVLLN=page.locator('text=Last name cannot be longer than 50 characters!');

  await expect.soft(errmssgVLLN).toBeVisible();

  
 


})







test("Register with an empty username field", async({page})=>{

    await page.locator("#firstname").type("Luka");
    await page.locator("#lastname").type("Horvat");
    await page.locator("#userName").type("");
    await page.locator("#password").type("M@rina 12");
    await page
      .frameLocator('iframe[role="presentation"]')
      .locator('span[role="checkbox"]')
      .click();

      await page.pause();

    await page.locator("#register").click();

     await page.screenshot({path:'emptyUserName.png',fullPage:true});
 

})

test("Register with invalid username",async({page})=>{
  await page.locator("#firstname").type("Hana");
  await page.locator("#lastname").type("Horvat");
  await page.locator("#userName").type("m");
  await page.locator("#password").type("M@rina 3000");
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

  await page.pause();
  const errmssgIUN=page.locator('text=Username must contain at least two characters!');

  await expect.soft(errmssgIUN).toBeVisible();
   



})


test("Register with a very long username",async({page})=>{

  await page.locator("#firstname").type("Ivan");
  await page.locator("#lastname").type("Horvat");
  await page.locator("#userName").type("kfkafkjflafjsljalfoeignvkjnsovijoig ljljsdlgjls jdlgjslgdjsld lgjlsjgljslgjsljd ljglsjlgjlsjglsljl lgjlsglsjgljs");
  await page.locator("#password").type("M@rina 3002");
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

  await page.pause();
  const errmssgVLUN=page.locator('text=Username cannot be longer than 50 characters!');

  await expect.soft(errmssgVLUN).toBeVisible();
   


})

test("Register with already used username",async({page})=>{

  await page.locator("#firstname").type("Željko");
    await page.locator("#lastname").type("Horvat");
    await page.locator("#userName").type("MHorvat");
    await page.locator("#password").type("M@rina 3008");
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
  
const userNameExist=page.locator('text=This username is already taken!');

await expect.soft(userNameExist).toBeVisible();



})




test("Register with an empty password field", async({page})=>{

  await page.locator("#firstname").type("Luka");
  await page.locator("#lastname").type("Horvat");
  await page.locator("#userName").type("MHorvat");
  await page.locator("#password").type("");
  await page
    .frameLocator('iframe[role="presentation"]')
    .locator('span[role="checkbox"]')
    .click();

    await page.pause();

  await page.locator("#register").click();

  await page.screenshot({path:'emptyPass.png',fullPage:true});

  const erromssgPass=page.locator("text=Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.");

await expect(erromssgPass).toBeVisible();

  


})

test("Register with password less than 8 characters",async({page})=>{



await page.locator("#firstname").type("H");
await page.locator("#lastname").type("Horvat");
await page.locator("#userName").type("MHorvat");
await page.locator("#password").type("M@ri 15");
await page
  .frameLocator('iframe[role="presentation"]')
  .locator('span[role="checkbox"]')
  .click();

  await page.pause();

  await page.locator("#register").click();



await page.pause();
const erromssgPass=page.locator("text=Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.");

await expect(erromssgPass).toBeVisible();




})


test("Register with a password that doesn't contain numbers",async({page})=>{

await page.locator("#firstname").type("Klara");
await page.locator("#lastname").type("Horvat");
await page.locator("#userName").type("MHorvat");
await page.locator("#password").type("M@rina Rika");
await page
  .frameLocator('iframe[role="presentation"]')
  .locator('span[role="checkbox"]')
  .click();

  await page.pause();

  await page.locator("#register").click();



await page.pause();
const erromssgPass=page.locator("text=Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.");

await expect(erromssgPass).toBeVisible();
 


})


test("Register with a password that doesn't contain special characters",async({page})=>{

await page.locator("#firstname").type("Klara");
await page.locator("#lastname").type("Horvat");
await page.locator("#userName").type("MHorvat");
await page.locator("#password").type("Marina 123Rika");
await page
  .frameLocator('iframe[role="presentation"]')
  .locator('span[role="checkbox"]')
  .click();

  await page.pause();

  await page.locator("#register").click();



await page.pause();
const erromssgPass=page.locator("text=Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.");

await expect(erromssgPass).toBeVisible();
 


})


test("Register with a password that doesn't contain non-alphanumeric characters",async({page})=>{

await page.locator("#firstname").type("Klara");
await page.locator("#lastname").type("Horvat");
await page.locator("#userName").type("MHorvat");
await page.locator("#password").type("Mrrrina123Rika");
await page
  .frameLocator('iframe[role="presentation"]')
  .locator('span[role="checkbox"]')
  .click();

  await page.pause();

  await page.locator("#register").click();



await page.pause();
const erromssgPass=page.locator("text=Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.");

await expect(erromssgPass).toBeVisible();
 


})


test("Register with a password that doesn't have a lowercase letter",async({page})=>{

await page.locator("#firstname").type("Klara");
await page.locator("#lastname").type("Horvat");
await page.locator("#userName").type("MHorvat");
await page.locator("#password").type("M@RINA 123RIKA");
await page
  .frameLocator('iframe[role="presentation"]')
  .locator('span[role="checkbox"]')
  .click();

  await page.pause();

  await page.locator("#register").click();



await page.pause();
const erromssgPass=page.locator("text=Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.");

await expect(erromssgPass).toBeVisible();



})


test("Register with a password that doesn't contain uppercase letter",async({page})=>{

await page.locator("#firstname").type("Klara");
await page.locator("#lastname").type("Horvat");
await page.locator("#userName").type("MHorvat");
await page.locator("#password").type("m@rina123 rika");
await page
  .frameLocator('iframe[role="presentation"]')
  .locator('span[role="checkbox"]')
  .click();

  await page.pause();

  await page.locator("#register").click();



await page.pause();
const erromssgPass=page.locator("text=Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.");

await expect(erromssgPass).toBeVisible();



})




test("Register with an existing user", async({page})=>{

  await page.locator("#firstname").type("Marina");
  await page.locator("#lastname").type("Horvat");
  await page.locator("#userName").type("MHorvat");
  await page.locator("#password").type("M@rina 1010");
  await page
    .frameLocator('iframe[role="presentation"]')
    .locator('span[role="checkbox"]')
    .click();

    await page.pause();


  await page.locator("#register").click(); 
  

const userExist=page.locator('text=User exists!');

await expect(userExist).toBeVisible();





})

test("Register without selecting 'I'm not a robot'checkbox",async({page})=>{
  await page.locator("#firstname").type("H");
  await page.locator("#lastname").type("Horvat");
  await page.locator("#userName").type("MHorvat");
  await page.locator("#password").type("M@rina 552");
  

 await page.locator("#register").click();


  await page.pause();
  
  

  const captchaErrormssg=page.locator('text=Please verify reCaptcha to register!');

  await expect(captchaErrormssg).toBeVisible();

  

})


})
