import { test, expect } from '@playwright/test'

test('Checkbox', async ({ page }) => {
    //increase the timeout only if needed for this test
    //test.setTimeout(60000)       //60 seconds

    //open application
    //waitUntil: 'domcontentloaded' means test will start once html is loaded 
    //open url
    await page.goto('https://www.techlistic.com/p/selenium-practice-form.html', { waitUntil: "domcontentloaded" })

    //select first checkbox
    //await page.locator("//input[@type='checkbox']").first().check()

    //select first checkbox
    //await page.locator("//input[@type='checkbox']").last().check()

    //select checkbox by index i.e nth(index)
    //await page.locator("//input[@type='checkbox']").nth(1).check()

    //select all checkboxes together
    const allCheckboxes = await page.locator("//input[@type='checkbox']").all()    //here 'all' function will provide array of all matching elements
    
    const checkboxCount = await page.locator("//input[@type='checkbox']").count()
    expect(checkboxCount).toBeGreaterThan(0)

    for (const checkbox of allCheckboxes)
    {
        await checkbox.check()
    }



    await page.waitForTimeout(3000)    //demo purpose
}
)