
describe('Demo Tests',function () {
    it('My First Test', async() => {

        browser.url('https://google.co.in')

        await $('[name="q"]').setValue('Webdr')

        browser.pause(2000)
    })
})