import { expect, browser, $ } from '@wdio/globals'

describe('My Login application', () => {
  it('should login with valid credentials', async () => {
    await browser.url('https://webdriver.io')

    await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')

    const getStartedBtn = await $('a.button=Get Started')
    await expect(getStartedBtn).toBeDisplayed()
    await getStartedBtn.click()

    await expect(browser).toHaveUrlContaining('gettingstarted')
  })
})
