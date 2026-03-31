const {test, expect} = require('@playwright/test')

test('TC for google and Hello world', async ({page})=>{

    await page.goto("https://www.google.com/")

    console.log("Hello world!")
})
