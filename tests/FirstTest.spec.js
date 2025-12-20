const{test, expect}=require('@playwright/test'); // importing two things - test function to create test and expect for assertions

test('open google page and test title',async({page})=>
{
   // test will go here
   await page.goto("https://www.google.com/")
   const pageTitle = await page.title()
   console.log("Page title is : ", pageTitle)

   const pageUrl = page.url()
   console.log("Page URL is : ", pageUrl)
   await expect(page).toHaveTitle(/Google/); 
}

)