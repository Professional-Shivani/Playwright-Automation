import {test, expect} from '@playwright/test'

test('DropdownDemo', async({page})=>
{
    //open URL
    await page.goto("https://practice.expandtesting.com/dropdown")

    // locate dropdown
    const countryDropdown = page.locator('#country')

     // Ways to select options
     // 1. By using label
    //  await countryDropdown.selectOption({label:'India'})
    //  expect(countryDropdown).toHaveValue('IN')

     // 2. By value
    //  await countryDropdown.selectOption({value:'IN'})
    //  expect(countryDropdown).toHaveValue('IN')

     // 3. By index   (Avoid using this in real time)
     // Select the dropdown option at index 1 (2nd option) - indexing hmesha zero se shuru hoti h i.e, 0,1,2...
     await countryDropdown.selectOption({index:1})   //Afganistan

     //retrieve the value attribute of the currently selected option (by using inputvalue function)
     const selectedValue = await countryDropdown.inputValue()   

     //verify that a value has been selected and it is not empty
     expect(selectedValue).not.toBe('')
     //expect(countryDropdown).toHaveValue('AF')


     /////////////////Assertions-1 validate number of options

     // Locate all <option> elements inside the country dropdown
     const options = countryDropdown.locator('option')

     // Count how many options are present in the dropdown
     const optionCount = await options.count()

     //print count just to check optioncount
     //console.log(optionCount)
     // Assert that the dropdown contains more than 200 options
     // This validates that the dropdown is properly populated
     expect(optionCount).toBeGreaterThan(200)

     // Assertion2 : validate presence of value
     // retrieve the visible text of all <option> elements in the dropdown
     // this returns an array of country names as strings
     const allCountries = await options.allTextContents()

     // verify that "India" is present in the dropdown options
     expect.soft(allCountries).toContain('India123')

     // verify that "United States" is present in the  dropdown option
     expect(allCountries).toContain('United States')
     await page.waitForTimeout(5000)   //pause only for demo purpose

}
)