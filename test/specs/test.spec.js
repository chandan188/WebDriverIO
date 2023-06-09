const loginPage = require('../Pages/Login.page')

describe("First test suite", () => {
    it("Launch Browser", async () => {

        // browser.url("https://www.google.com")
        // await $("button[id='L2AGLb']").click()
        // await $("[name='q']").setValue("webdriver io")
        // browser.pause(5000)
        // browser.keys("Enter")
        // browser.pause(15000)

        browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        loginPage.login("Admin", "admin123")

        

    })
})