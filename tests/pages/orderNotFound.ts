import { Locator, Page } from '@playwright/test'
import { BasePage } from './base-page'

export class OrderNotFoundPage extends BasePage {
  readonly orderNotFoundContainer: Locator

  // add more locators here

  constructor(page: Page) {
    super(page)
    this.orderNotFoundContainer = page.getByTestId('orderNotFound-container')
  }
}
