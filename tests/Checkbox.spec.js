import{test, expect} from '@playwright/test' 

test('Checkbox', async({page})=>
{
    //increase the timeout only if needed for this test
    //test.setTimeout(60000)       //60 seconds

    //open application
    //waitUntil: 'domcontentloaded' means test will start once html is loaded 
    //open url
    await page.goto('https://www.techlistic.com/p/selenium-practice-form.html', {waitUntil: "domcontentloaded"})

    //Locate checkboxes
    const utfCheckbox = page.locator("#tool-0")
    const protractorCheckbox = page.locator("#tool-1")
    const seleniumCheckbox = page.locator("#tool-2")

    // await utfCheckbox.check()   //check /select utf checkbox

    // //verify utf checkbox is selected
    // await expect.soft(utfCheckbox).toBeChecked()

    // //verify protractor checkbox is checked
    // await expect.soft(protractorCheckbox).toBeChecked()  //fail

    // //verify selenium checkbox is checked
    // await expect(seleniumCheckbox).not.toBeChecked()   //pass

    // await utfCheckbox.uncheck()   //uncheck /de select utf checkbox
    
    //store all checkbox in an array
    // this will help us use loops instead of repeating code

    const checkboxes = [utfCheckbox, protractorCheckbox, seleniumCheckbox];

    //for loop - select all checkboxes
    
    for (const checkbox of checkboxes)
    {
        //check (select) the checkbox
        await checkbox.check()   // 1.utfCheckbox, 2.protractorCheckbox, 3.seleniumCheckbox

        //verify checkbox is checked
        await expect(checkbox).toBeChecked()
    }

    // for loop + if condition - uncheck checkboxes
    for (const checkbox of checkboxes)
    {
        const isChecked = await checkbox.isChecked()   //true/false

        //if condition : 
        // only uncheck if checkbox is already checked
        if(isChecked)
        {
            //uncheck the checkbox
            await checkbox.uncheck()

            //verify checkbox is not unchecked
            await expect(checkbox).not.toBeChecked()
        }
    }
        

        await page.waitForTimeout(3000)
}
)