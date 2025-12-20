import { test, expect } from '@playwright/test';

test ('Locators', async({page})=>
{
    //open URL
    await page.goto("https://www.saucedemo.com/")

    //Enter username
    await page.locator('#user-name').fill('standard_user')

    //Enter password
    await page.locator('#password').fill('secret_sauce')

    //locate login button and perform click action - By using XPATH
    await page.locator("//input[@id='login-button']").click()
    //await page.click("//input[@id='login-button']")

    //verify succesfull login
    await expect(page).toHaveURL(/inventory.html/) // verify URL 
    
////////////////////////FIRST APPROACH, old////////////////////
    //find list of all products 
    // const productNames = await page.$$('.inventory_item_name')  //$$ is used for multiple elements
    
    // //count products
    //  console.log('Total number of Products', productNames.length)

    //  // loog through each element and print the product name
    //  for(const product of productNames)
    //  {
    //     const name = await product.textContent() //each element is an elementhandle
    //     //textcontent() is an async func, that queries the element in the browser, so must await it
    //     console.log(name)
    //  }


////////////////////////SECOND APPROACH, Better approach, new & recommended////////////////////

//Locate all product names
const productName = page.locator('.inventory_item_name')

//get total count
const count = await productName.count()
console.log('Total products:', count)

//print each product name
for(let i=0; i<count; i++)
{
    const name = await productName.nth(i).textContent()
    console.log(name)
}


}
)