/// <reference types="cypress" />

import { el } from "../../support/base_elements"

describe('add a lot of products', () => {

  before(() => {
    cy.session('user log in', () => {
      cy.visit(el.thirdUrl)

      cy.get(el.loginField)
        .clear()
        .type(el.login)

      cy.get(el.passwordField)
        .clear()
        .type(el.password)

      cy.get(el.signInBtn)
        .click()
    },
      { cacheAcrossSpecs: true },
    )
  })

  after(() => {
    Cypress.session.clearAllSavedSessions()
  })

  it('waiting for the page to be load', () => {
    cy.intercept('POST', 'https://www.wiunit.com/wp-content/plugins/ajax/api.php')
      .as('finalRequest')

    cy.wait('@finalRequest')
      .wait(3000)
  })

  it('clicking add button', () => {
    cy.get(el.addProdMainBtn)
      .click()
  })

  it('filling the product fields', () => {
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addMerchantSku"]')
      .clear()
      .type('product_1')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > div > [name="addProductName"]')
      .clear()
      .type('product_1')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > div > [name="addAsin"]')
      .clear()
      .type('product_1')

    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addType"]')
      .select('Individual Item')

    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addManufacturerSku"]')
      .clear()
      .type('product_1')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addUpcEanCode"]')
      .clear()
      .type('product_1')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addFnsku"]')
      .clear()
      .type('product_1')
  })

  it('click add additional product button', () => {
    cy.get('[name="addProducts"]')
      .click()
      .wait(2000)
  })

  it('filling the product fields', () => {
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addMerchantSku"]:eq(1)')
      .clear()
      .type('product_2')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > div > [name="addProductName"]:eq(1)')
      .clear()
      .type('product_2')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > div > [name="addAsin"]:eq(1)')
      .clear()
      .type('product_2')

    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addType"]:eq(1)')
      .select('Individual Item')

    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addManufacturerSku"]:eq(1)')
      .clear()
      .type('product_2')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addUpcEanCode"]:eq(1)')
      .clear()
      .type('product_2')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addFnsku"]:eq(1)')
      .clear()
      .type('product_2')
  })

  it('click add additional product button', () => {
    cy.get('[name="addProducts"]')
      .click()
      .wait(2000)
  })

  it('filling the product fields', () => {
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addMerchantSku"]:eq(2)')
      .clear()
      .type('product_3')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > div > [name="addProductName"]:eq(2)')
      .clear()
      .type('product_3')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > div > [name="addAsin"]:eq(2)')
      .clear()
      .type('product_3')

    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addType"]:eq(2)')
      .select('Individual Item')

    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addManufacturerSku"]:eq(2)')
      .clear()
      .type('product_3')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addUpcEanCode"]:eq(2)')
      .clear()
      .type('product_3')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addFnsku"]:eq(2)')
      .clear()
      .type('product_3')
  })

  it('click add additional product button', () => {
    cy.get('[name="addProducts"]')
      .click()
      .wait(2000)
  })

  it('filling the product fields', () => {
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addMerchantSku"]:eq(3)')
      .clear()
      .type('product_4')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > div > [name="addProductName"]:eq(3)')
      .clear()
      .type('product_4')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > div > [name="addAsin"]:eq(3)')
      .clear()
      .type('product_4')

    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addType"]:eq(3)')
      .select('Individual Item')

    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addManufacturerSku"]:eq(3)')
      .clear()
      .type('product_4')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addUpcEanCode"]:eq(3)')
      .clear()
      .type('product_4')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addFnsku"]:eq(3)')
      .clear()
      .type('product_4')
  })

  it('click add additional product button', () => {
    cy.get('[name="addProducts"]')
      .click()
      .wait(2000)
  })

  it('filling the product fields', () => {
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addMerchantSku"]:eq(4)')
      .clear()
      .type('product_5')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > div > [name="addProductName"]:eq(4)')
      .clear()
      .type('product_5')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > div > [name="addAsin"]:eq(4)')
      .clear()
      .type('product_5')

    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addType"]:eq(4)')
      .select('Individual Item')

    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addManufacturerSku"]:eq(4)')
      .clear()
      .type('product_5')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addUpcEanCode"]:eq(4)')
      .clear()
      .type('product_5')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addFnsku"]:eq(4)')
      .clear()
      .type('product_5')
  })

  it('click add additional product button', () => {
    cy.get('[name="addProducts"]')
      .click()
      .wait(2000)
  })

  it('filling the product fields', () => {
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addMerchantSku"]:eq(5)')
      .clear()
      .type('product_6')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > div > [name="addProductName"]:eq(5)')
      .clear()
      .type('product_6')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > div > [name="addAsin"]:eq(5)')
      .clear()
      .type('product_6')

    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addType"]:eq(5)')
      .select('Set/Bundle')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addFnsku"]:eq(5)')
      .clear()
      .type('product_6')
  })

  it('click add additional product button', () => {
    cy.get('[name="addProducts"]')
      .click()
      .wait(2000)
  })

  it('filling the product fields', () => {
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addMerchantSku"]:eq(6)')
      .clear()
      .type('product_7')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > div > [name="addProductName"]:eq(6)')
      .clear()
      .type('product_7')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > div > [name="addAsin"]:eq(6)')
      .clear()
      .type('product_7')

    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addType"]:eq(6)')
      .select('Set/Bundle')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addFnsku"]:eq(6)')
      .clear()
      .type('product_7')
  })

  it('click add additional product button', () => {
    cy.get('[name="addProducts"]')
      .click()
      .wait(2000)
  })

  it('filling the product fields', () => {
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addMerchantSku"]:eq(7)')
      .clear()
      .type('product_8')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > div > [name="addProductName"]:eq(7)')
      .clear()
      .type('product_8')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > div > [name="addAsin"]:eq(7)')
      .clear()
      .type('product_8')

    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addType"]:eq(7)')
      .select('Set/Bundle')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addFnsku"]:eq(7)')
      .clear()
      .type('product_8')
  })

  it('click add additional product button', () => {
    cy.get('[name="addProducts"]')
      .click()
      .wait(2000)
  })

  it('filling the product fields', () => {
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addMerchantSku"]:eq(8)')
      .clear()
      .type('product_9')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > div > [name="addProductName"]:eq(8)')
      .clear()
      .type('product_9')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > div > [name="addAsin"]:eq(8)')
      .clear()
      .type('product_9')

    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addType"]:eq(8)')
      .select('Set/Bundle')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addFnsku"]:eq(8)')
      .clear()
      .type('product_9')
  })

  it('click add additional product button', () => {
    cy.get('[name="addProducts"]')
      .click()
      .wait(2000)
  })

  it('filling the product fields', () => {
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addMerchantSku"]:eq(9)')
      .clear()
      .type('product_10')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > div > [name="addProductName"]:eq(9)')
      .clear()
      .type('product_10')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > div > [name="addAsin"]:eq(9)')
      .clear()
      .type('product_10')

    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addType"]:eq(9)')
      .select('Set/Bundle')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addFnsku"]:eq(9)')
      .clear()
      .type('product_10')
  })

  it('clicking add button', () => {
    cy.get(el.addBtn)
      .wait(2000)
      .click()
  })

  it('waiting for the page to be load', () => {
    cy.intercept('POST', 'https://www.wiunit.com/wp-content/plugins/ajax/api.php')
      .as('finalRequest')

    cy.wait('@finalRequest')
      .wait(3000)
  })

  it('click add content button', () => {
    cy.get('[name="add-contents-wrapper"].visible-flex > [name="add-contents"][status="empty"]:eq(0)')
      .click()
      .wait(2000)
  })

  it('filling the fields', () => {
    cy.get('[name="product-name"]')
      .type('product_10')

    cy.get('[type="product-row"].visible-flex > div > div > diV > [type="number"][name="qty"]')
      .clear()
      .type('2')

    cy.get('[name="manufacturer-sku"]')
      .type('product_10')

    cy.get('[name="upc_ean_code"]')
      .type('product_10')
  })

  it('click save button', () => {
    cy.get('[name="save-contents"]')
      .wait(2000)
      .click()
  })

  it('waiting for the page to be load', () => {
    cy.intercept('POST', 'https://www.wiunit.com/wp-content/plugins/ajax/api.php')
      .as('finalRequest')

    cy.wait('@finalRequest')
      .wait(3000)
  })

  it('click add content button', () => {
    cy.get('[name="add-contents-wrapper"].visible-flex > [name="add-contents"][status="empty"]:eq(0)')
      .click()
      .wait(2000)
  })

  it('filling the fields', () => {
    cy.get('[name="product-name"]')
      .type('product_9')

    cy.get('[type="product-row"].visible-flex > div > div > diV > [type="number"][name="qty"]')
      .clear()
      .type('2')

    cy.get('[name="manufacturer-sku"]')
      .type('product_9')

    cy.get('[name="upc_ean_code"]')
      .type('product_9')
  })

  it('click save button', () => {
    cy.get('[name="save-contents"]')
      .wait(2000)
      .click()
  })

  it('waiting for the page to be load', () => {
    cy.intercept('POST', 'https://www.wiunit.com/wp-content/plugins/ajax/api.php')
      .as('finalRequest')

    cy.wait('@finalRequest')
      .wait(3000)
  })

  it('click add content button', () => {
    cy.get('[name="add-contents-wrapper"].visible-flex > [name="add-contents"][status="empty"]:eq(0)')
      .click()
      .wait(2000)
  })

  it('filling the fields', () => {
    cy.get('[name="product-name"]')
      .type('product_8')

    cy.get('[type="product-row"].visible-flex > div > div > diV > [type="number"][name="qty"]')
      .clear()
      .type('2')

    cy.get('[name="manufacturer-sku"]')
      .type('product_8')

    cy.get('[name="upc_ean_code"]')
      .type('product_8')
  })

  it('click save button', () => {
    cy.get('[name="save-contents"]')
      .wait(2000)
      .click()
  })

  it('waiting for the page to be load', () => {
    cy.intercept('POST', 'https://www.wiunit.com/wp-content/plugins/ajax/api.php')
      .as('finalRequest')

    cy.wait('@finalRequest')
      .wait(3000)
  })

  it('click add content button', () => {
    cy.get('[name="add-contents-wrapper"].visible-flex > [name="add-contents"][status="empty"]:eq(0)')
      .click()
      .wait(2000)
  })

  it('filling the fields', () => {
    cy.get('[name="product-name"]')
      .type('product_7')

    cy.get('[type="product-row"].visible-flex > div > div > diV > [type="number"][name="qty"]')
      .clear()
      .type('2')

    cy.get('[name="manufacturer-sku"]')
      .type('product_7')

    cy.get('[name="upc_ean_code"]')
      .type('product_7')
  })

  it('click add set/bundle content', () => {
    cy.get('[name="add-set-bundle-content"]')
      .wait(2000)
      .click()
  })

  it('filling the fields', () => {
    cy.get('[name="product-name"]:eq(1)')
      .type('product_77')

    cy.get('[type="product-row"].visible-flex > div > div > diV > [type="number"][name="qty"]:eq(1)')
      .clear()
      .type('4')

    cy.get('[name="manufacturer-sku"]:eq(1)')
      .type('product_77')

    cy.get('[name="upc_ean_code"]:eq(1)')
      .type('product_77')
  })

  it('click save button', () => {
    cy.get('[name="save-contents"]')
      .wait(2000)
      .click()
  })

  it('waiting for the page to be load', () => {
    cy.intercept('POST', 'https://www.wiunit.com/wp-content/plugins/ajax/api.php')
      .as('finalRequest')

    cy.wait('@finalRequest')
      .wait(3000)
  })

  it('click add content button', () => {
    cy.get('[name="add-contents-wrapper"].visible-flex > [name="add-contents"][status="empty"]:eq(0)')
      .click()
      .wait(2000)
  })

  it('filling the fields', () => {
    cy.get('[name="product-name"]')
      .type('product_6')

    cy.get('[type="product-row"].visible-flex > div > div > diV > [type="number"][name="qty"]')
      .clear()
      .type('2')

    cy.get('[name="manufacturer-sku"]')
      .type('product_6')

    cy.get('[name="upc_ean_code"]')
      .type('product_6')
  })

  it('click add set/bundle content', () => {
    cy.get('[name="add-set-bundle-content"]')
      .click()
      .wait(2000)
  })

  it('filling the fields', () => {
    cy.get('[name="product-name"]:eq(1)')
      .type('product_66')

    cy.get('[type="product-row"].visible-flex > div > div > diV > [type="number"][name="qty"]:eq(1)')
      .clear()
      .type('4')

    cy.get('[name="manufacturer-sku"]:eq(1)')
      .type('product_66')

    cy.get('[name="upc_ean_code"]:eq(1)')
      .type('product_66')
  })

  it('click save button', () => {
    cy.get('[name="save-contents"]')
      .wait(2000)
      .click()
  })

  it('waiting for the page to be load', () => {
    cy.intercept('POST', 'https://www.wiunit.com/wp-content/plugins/ajax/api.php')
      .as('finalRequest')

    cy.wait('@finalRequest')
      .wait(3000)
  })
})