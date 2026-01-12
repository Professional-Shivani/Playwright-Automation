import{test,expect} from "@playwright/test"

test('RadioButton', async({page})=>
{
        //increase the timeout only for this test 
    test.setTimeout(60000)

    //open the application and wait only for DOM content to load
    //This avoids waiting for ads and video content
    //open url
    await page.goto("https://www.techlistic.com/p/selenium-practice-form.html",{waitUntil:'domcontentloaded'})

    //locate Radio button - year3
    const year3RadioBtn = page.locator("//input [@value='3']")

    //select radio button year-3
    await year3RadioBtn.check()
    
    //verify radio button is checked
    await expect(year3RadioBtn).toBeChecked()  //true , validation

    //verify if radio button is checked
    await expect(year3RadioBtn.isChecked()).toBeTruthy() 

    // Verify an unselected radio button

     //locate Radio button - year3
    const year5RadioBtn = page.locator("//input [@value='5']")

    //select radio button year-5
    //await year5RadioBtn.check()
    
    //verify radio button is checked
    await expect.soft(year5RadioBtn).toBeChecked()  //false

    //verify if radio button is checked
    await expect(await year5RadioBtn.isChecked()).toBeFalsy()  //pass

    await page.waitForTimeout(5000)  //pause for 5sec for demo purpose only
    
}

)