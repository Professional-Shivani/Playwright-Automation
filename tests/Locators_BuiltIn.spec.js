import { test, expect } from '@playwright/test';

test('Built-In Locators-SauceDemo', async({page})=>
{
    //open saucedemo website
    await page.goto('https://www.saucedemo.com/')

    //getByPlaceholder - enter username
    await page.getByPlaceholder('Username').fill('standard_user')

    //getByPlaceholder - enter password
    await page.getByPlaceholder('Password').fill('secret_sauce')

    //getByRole - click on login button
    await page.getByRole('button', {name:'Login'}).click()

    //Assertion - verify url to check login correclty done or not
    await expect(page).toHaveURL(/inventory.html/)
    
    // getByText - verify product visibility  on inventory page
    await expect(page.getByText('Products')).toBeVisible()

    //getByRole() - add product sauce lab bag pack to cart
    await page.getByRole('button', {name: 'Add to cart'}).first().click()

    //getByAltText() - click on sauce lab bag pack product to view description
    await page.getByAltText('Sauce Labs Backpack').click()


}
)