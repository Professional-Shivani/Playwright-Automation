import { test, expect } from '@playwright/test';

test ('Locators', async({page})=>
{
    await page.goto("https://www.saucedemo.com/")

    //locate id web element and fill id - used ID property
    //await page.locator('id=user-name').fill('standard_user')

    //but prefer id web element with CSS selector
    await page.locator('#user-name').fill('standard_user')
    //await page.fill('#user-name','standard_user')

    //locate password and fill password -used CSS selector
    await page.locator('#password').fill('secret_sauce')

    //locate login button and perform click action - used XPATH
    await page.locator("//input[@id='login-button']").click()
    //await page.click("//input[@id='login-button']")

    //verify succesfull login
    //expect(page).toHaveURL('https://www.saucedemo.com/inventory.html') but here url can be change so best practices is take last one of url 'inventory.html'
    await expect(page).toHaveURL(/inventory.html/) // verify URL 
    await expect(page.locator('.title')).toHaveText('Products')  // verify text, you can also use tocontatinText('Products')

    const productElement = page.locator('.title')
    await expect(productElement).toBeVisible() // verify web element visibility

}
)