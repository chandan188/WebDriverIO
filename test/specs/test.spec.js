describe("First test suite", () => {
    it("Launch Browser", async () => {

        browser.url("https://www.google.com")
        await $("button[id='L2AGLb']").click()
        await $("[name='q']").setValue("webdriver io")
        browser.pause(5000)
        browser.keys("Enter")
        browser.pause(15000)
    })
})