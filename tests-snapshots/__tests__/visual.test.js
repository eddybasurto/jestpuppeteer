const puppeteer = require ('puppeteer')
const { toMatchImageSnapshot } = require('jest-image-snapshot')

expect.extend({toMatchImageSnapshot})

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
        const image = await page.screenshot()
        expect(image).toMatchImageSnapshot({
            failureThresholdType: "pixel",
            failureThreshold: 500
        })
    })
})