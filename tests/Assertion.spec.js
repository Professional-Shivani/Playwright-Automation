import { test, expect } from "@playwright/test";

test('AssertionTest', async ({ page }) => {
    //open url
    await page.goto('https://www.saucedemo.com/')

    //1. Page level assertions
    //verify page title
    await expect(page).toHaveTitle('Swag Labs')

    //verify page url
    await expect(page).toHaveURL('https://www.saucedemo.com/')

    //2. Element State Assertions
    //Locate username and password
    const usernameInput = page.locator('#user-name')
    const passwordInput = page.locator('#password')
    const loginbutton = page.locator('#login-button')
    const errorMessage = page.locator('[data-test="error"]')

    //verify input field username and password are visible
    await expect(usernameInput).toBeVisible()
    await expect(passwordInput).toBeVisible()

    //verify if webelements are enabled and editable
    await expect(usernameInput).toBeEnabled()
    await expect(passwordInput).toBeEnabled()
    await expect(loginbutton).toBeEnabled()

    await expect(usernameInput).toBeEditable()
    await expect(passwordInput).toBeEditable()

    //Attribute - Assertions
    await expect(usernameInput).toHaveAttribute('placeholder', 'Username')
    await expect(loginbutton).toHaveAttribute('type', 'submit')
    
    //3. Text & Value Assertions

    await usernameInput.fill('standard_user')
    await expect(usernameInput).toHaveValue('standard_user')

    await passwordInput.fill('secret_sauce')
    await expect(passwordInput).toHaveValue('secret_sauce')

    //verify error message to be hidden before login attempt
    await expect(errorMessage).toBeHidden()

    await loginbutton.click()

    // page and text assertions after login

    //verify user navigated to inventory page
    await expect(page).toHaveURL(/inventory.html/)

    //verify products page heading
    const productTitle = page.locator('.title')

    await expect(productTitle).toBeVisible()
    await expect(productTitle).toHaveText('Products')
    await expect(productTitle).toContainText('Prod')     // to verify partial text - .tocontaintext
    // await expect(productTitle).not.toHaveText('Inentory')    // negative matcher, to verify not to have such text

    //class assertion
    await expect(productTitle).toHaveClass('title')

    //Id assertion -verify shopping cart id value = "shopping_cart_container"
    const cartIcon = page.locator('.shopping_cart_container')
    await expect(cartIcon).toHaveId('shopping_cart_container')

    //Count assertion
    //verify total number of products displayed
    const productItems = page.locator('.inventory_item_name')
    await expect(productItems).toHaveCount(6)

    //Screenshots / visual assertions
    //locate web pack element sauce lab bag pack

    const bagitem = page.getByAltText('Sauce Labs Backpack')

    //compare screenshot with baseline screenshot
    await expect(bagitem).toHaveScreenshot('bagItem.png')

    //visual verfication of shopping cart 
    await expect(page).toHaveScreenshot('cartIcon.png',{
        mask: [page.locator('.shopping_cart_link')]
    })

    // another way -
    // const cartElement = page.locator('.shopping_cart_link')
    // await expect(page).toHaveScreenshot('cartIcon.png',{
    //  mask: [cartElement]
    // })

}
)