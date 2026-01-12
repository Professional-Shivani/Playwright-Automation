import { test, expect } from '@playwright/test'

test('DropdownDemo', async ({ page }) => {

    //open url
    await page.goto("file:///C:/Users/ASUS/Desktop/PlaywrightAutomationVSCodeExtn/DemoHTMLDocs/CustomDropDown.html")

    //locate dropdown
    const countryDropdown = page.locator('#countryDropdown')

    //click to open dropdown
    await countryDropdown.click()

    //locate all dropdown option items (countryDropdown->class  option-> tag li)
    const options = page.locator("#countryDropdown .options li")

    //loop through each option
    for(let i=0; await options.count(); i++)
    {
        //get visible text of each option
        const optionText = await options.nth(i).textContent()
         console.log(optionText)

         //check for required option ("India")
         if(optionText=== 'India')
         {
            //click the option (custom dropdown selection)
            await options.nth(i).click()
            break
         }

    }

  
    await page.waitForTimeout(5000) //pause for demo purpose

})