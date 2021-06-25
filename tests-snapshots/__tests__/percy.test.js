const puppeteer = require ('puppeteer')
const percySnapshot  = require('@percy/puppeteer')

describe("Visual testing",() => {
    let browser, page

    beforeAll(async function () {
        browser = await puppeteer.launch({headless:false})
        page = await browser.newPage()
    })

    afterAll(async function () {
        await browser.close()
    })

    test("Captura de Pantalla completa", async () => {
        await page.goto("https://www.example.com")
        await page.waitForSelector("h1")
        await percySnapshot(page, 'Ejemplo primer prueba') 
    })  
})