import { expect, Locator, Page, test } from '@playwright/test'

export abstract class BasePage {
  readonly page: Page
  readonly languageSwitcher: Locator
  // TODO add EN & RU buttons
  readonly privacyPolicyLink: Locator
  // TODO add other documents
  readonly TIMEOUT_VISIBILITY: number = 5000
  readonly cookiePolicy: Locator
  readonly termsOfService: Locator

  protected constructor(page: Page) {
    this.page = page
    this.languageSwitcher = page.locator('div.language')
    this.privacyPolicyLink = page.getByTestId('privacy-policy')
    this.cookiePolicy = page.getByTestId('cookie-policy')
    this.termsOfService = page.getByTestId('terms-of-service')
  }

  async checkElementVisibility(element: Locator): Promise<void> {
    // better test report with 'step'
    await test.step(`Verifying element visibility: ${element}`, async () => {
      await expect(element).toBeVisible({ timeout: this.TIMEOUT_VISIBILITY })
    })
  }

  async verifyFooterElements(): Promise<void> {
    await test.step('Verifying all elements on footer', async () => {
      await this.checkElementVisibility(this.languageSwitcher)
      await this.checkElementVisibility(this.privacyPolicyLink)
      await this.checkElementVisibility(this.cookiePolicy)
      await this.checkElementVisibility(this.termsOfService)
    })
  }

  async clickElement(element: Locator) {
    await test.step(`Clicking element: ${element}`, async () => {
      await element.click()
    })
  }

  async fillElement(element: Locator, text: string) {
    await test.step(`Filling element: ${element}`, async () => {
      await element.fill(text)
    })
  }
}
