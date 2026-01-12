import{test, expect} from "@playwright/test"

test('InputDemo', async({page})=>
{
    //increase the timeout only for this test 
    test.setTimeout(60000)

    //open the application and wait only for DOM content to load
    //This avoids waiting for ads and video content
    //open url
    await page.goto("https://www.techlistic.com/p/selenium-practice-form.html",{waitUntil:'domcontentloaded'})

    //locate firstname inputbox
    const FirstNameInput = page.locator("//input [@name='firstname']")

    // input box is visible or not

    //input box is empty or not
    await expect(FirstNameInput).toBeVisible()

    //input box is enabled or not
    await expect(FirstNameInput).toBeEnabled()

    //input box is editable or not
    await expect(FirstNameInput).toBeEditable()

    //enter first name in input box
    await FirstNameInput.fill("Shivani")

    await page.waitForTimeout(5000)  //pause for 5sec for demo purpose only
    
}

)