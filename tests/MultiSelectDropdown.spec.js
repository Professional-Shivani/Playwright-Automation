import { test, expect } from '@playwright/test'

test("MultiSelectDropdown", async ({ page }) => {

    //open url
    await page.goto("https://testpages.herokuapp.com/pages/forms/html-form/")

    //locate multi select dropdown
    const multiSelect = page.locator('select[name="multipleselect[]"]')

    //////ways to select options from multislect dropdown
    //1. Using value
    //await multiSelect.selectOption([{value:'ms1'},{value:'ms3'}]);


    //2. by using lable/visible text
    await multiSelect.selectOption([{ label: 'Selection Item 2' }, { label: 'Selection Item 4' }]);
    
   

////////////////Assertions/Validation////////////////////////
//1. Verify dropdown is multi-select
await expect(multiSelect).toHaveAttribute('multiple')

//2. verrify total numbers of options present in dropdown
const options = multiSelect.locator('option')
await expect(options).toHaveCount(4)

//3. verify if items are selected or not
await expect(multiSelect.locator('option:checked')).toContainText(['Selection Item 2','Selection Item 4'])

await expect(multiSelect.locator('option:checked')).not.toContainText(['Selection Item 3','Selection Item 1'])

//verify if dropdown contains particular option 'selection Item 2'

//Get all optionm element from dropdown as an array
const optionsList = await options.all();

//create a flag variable to track if the value is found
let isPresent = false;

//loop through each option one by one
for (const option of optionsList)
{
    // //read the visible text of the current option
    // const optionText = await  option.textContent();

    // if(optionText?.trim()==='Selection Item 2')
    // {
    //     //if match is found , set flat to true
    //     isPresent=true;

    //     //exit the loop becouse desired value is found
    //     break;
    // }

     //read the value attribute of the current option
    const value = await  option.getAttribute('value');

    if(value==='ms2')
    {
        //if match is found , set flat to true
        isPresent=true;

        //exit the loop becouse desired value is found
        break;
    }
}

//Final assertion to verify that the 
// desired value / option is found in the dropdown

expect(isPresent).toBeTruthy();


await page.waitForTimeout(5000) //pause for 5 sec for demo only

})