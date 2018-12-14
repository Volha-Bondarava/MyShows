let basePage = require('.//basePage')
let locators = require('../properties/locators')

class navigationDrawer extends basePage {
  constructor (driver) {
    super(driver)
    this.navDrawerXPath = '//android.widget.ImageButton[@content-desc="Open navigation drawer"]'
    this.logoutAlertId = 'ru.myshows.activity:id/alertTitle'
  }

  get navigationDrawerButton () {return this.driver.elementByXPath(this.navDrawerXPath)}

  get episodesButton () {return this.driver.elementByXPath(locators.navigationDrawerXpath + '[1]')}

  get showsButton () {return this.driver.elementByXPath(locators.navigationDrawerXpath + '[2]')}

  get newsButton () {return this.driver.elementByXPath(locators.navigationDrawerXpath + '[3]')}

  get settingsButton () {return this.driver.elementByXPath(locators.navigationDrawerXpath + '[4]')}

  get hideAdvertisingButton () {return this.driver.elementByXPath(locators.navigationDrawerXpath + '[5]')}

  get logoutButton () {return this.driver.elementByXPath(locators.navigationDrawerXpath + '[6]')}

  get logoutAlert () {return this.driver.elementById(this.logoutAlertId)}

  get yesOnExit () {return this.driver.elementById('android:id/button1')}

  async isLoggedIn () {
    await this.driver.waitForElementByXPath(this.navDrawerXPath, 5000, 500)
    return this.navigationDrawerButton.isDisplayed()
  }

  async logout () {
    await this.navigationDrawerButton.click()
    await this.logoutButton.click()
    await this.driver.waitForElementById(this.logoutAlertId, 5000, 500)
    return await this.yesOnExit.click()
  }

  async openSettings () {
    await this.navigationDrawerButton.click()
    return await this.settingsButton.click()
  }

  async openEpisodes () {
    await this.navigationDrawerButton.click()
    await this.episodesButton.click()
  }
}

module.exports = navigationDrawer