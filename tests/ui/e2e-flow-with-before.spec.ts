import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/login-page'
import { faker } from '@faker-js/faker/locale/ar'
import { PASSWORD, USERNAME } from '../../config/env-data'

let authPage: LoginPage

test.beforeEach(async ({ page }) => {
  authPage = new LoginPage(page)
  await authPage.open()
})

test('signIn button disabled when incorrect data inserted', async ({}) => {
  // implement methods from base page
  await authPage.usernameField.fill(faker.lorem.word(2))
  await authPage.passwordField.fill(faker.lorem.word(7))
  await expect(authPage.signInButton).toBeDisabled()
})

test('error message displayed when incorrect credentials used', async ({}) => {
  // implement test
})

test('login with correct credentials and verify order creation page', async ({}) => {
  const orderCreationPage = await authPage.signIn(USERNAME, PASSWORD)
  await expect(orderCreationPage.statusButton).toBeVisible()
  // verify at least few elements on the order creation page
})

test('login and create order', async ({}) => {
  // implement test
})

test('verify language at auth page', async ({}) => {
  await authPage.verifyFooterElements()
  // add footer verifications
})

test('verify language at order page', async ({}) => {
  const orderCreationPage = await authPage.signIn(USERNAME, PASSWORD)
  await orderCreationPage.verifyFooterElements()
  // add footer verifications
  //searching order with orderId
  const orderNotFoundPage = await orderCreationPage.fillOrderIdAndSearch('999')
  await expect(orderNotFoundPage.orderNotFoundContainer).toBeVisible()
})
