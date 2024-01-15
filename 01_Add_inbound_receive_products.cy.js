/// <reference types="cypress" />

import { el } from "../../support/base_elements"

describe('add, inbound and receive products', () => {

  const firstProductIndex = 1;
  const secondProductIndex = 2;
  const thirdProductIndex = 3;
  const fourthProductIndex = 4;
  const fifthProductIndex = 5;
  const shipmentQty = '100';
  let trackingNumber;
  let upcCode1;
  let upcCode2;
  let upcCode3;
  let upcCode4;
  let upcCode5;
  const receivingQty = '100';

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
    cy.intercept('POST', 'https://www........................................api.php')
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
      .type('hollow_knight')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > div > [name="addProductName"]')
      .clear()
      .type('hollow_knight')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > div > [name="addAsin"]')
      .clear()
      .type('hollow_knight')

    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addType"]')
      .select('Individual Item')

    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addManufacturerSku"]')
      .clear()
      .type('hollow_knight')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addUpcEanCode"]')
      .clear()
      .type('hollow_knight')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addFnsku"]')
      .clear()
      .type('hollow_knight')
  })

  it('click add additional product button', () => {
    cy.get('[name="addProducts"]')
      .click()
      .wait(2000)
  })

  it('filling the product fields', () => {
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addMerchantSku"]:eq(1)')
      .clear()
      .type('hogwarts_legacy')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > div > [name="addProductName"]:eq(1)')
      .clear()
      .type('hogwarts_legacy')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > div > [name="addAsin"]:eq(1)')
      .clear()
      .type('hogwarts_legacy')

    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addType"]:eq(1)')
      .select('Individual Item')

    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addManufacturerSku"]:eq(1)')
      .clear()
      .type('hogwarts_legacy')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addUpcEanCode"]:eq(1)')
      .clear()
      .type('hogwarts_legacy')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addFnsku"]:eq(1)')
      .clear()
      .type('hogwarts_legacy')
  })

  it('click add additional product button', () => {
    cy.get('[name="addProducts"]')
      .click()
      .wait(2000)
  })

  it('filling the product fields', () => {
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addMerchantSku"]:eq(2)')
      .clear()
      .type('red_dead_redemption2')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > div > [name="addProductName"]:eq(2)')
      .clear()
      .type('red_dead_redemption2')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > div > [name="addAsin"]:eq(2)')
      .clear()
      .type('red_dead_redemption2')

    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addType"]:eq(2)')
      .select('Individual Item')

    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addManufacturerSku"]:eq(2)')
      .clear()
      .type('red_dead_redemption2')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addUpcEanCode"]:eq(2)')
      .clear()
      .type('red_dead_redemption2')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addFnsku"]:eq(2)')
      .clear()
      .type('red_dead_redemption2')
  })

  it('click add additional product button', () => {
    cy.get('[name="addProducts"]')
      .click()
      .wait(2000)
  })

  it('filling the product fields', () => {
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addMerchantSku"]:eq(3)')
      .clear()
      .type('the_witcher')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > div > [name="addProductName"]:eq(3)')
      .clear()
      .type('the_witcher')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > div > [name="addAsin"]:eq(3)')
      .clear()
      .type('the_witcher')

    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addType"]:eq(3)')
      .select('Individual Item')

    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addManufacturerSku"]:eq(3)')
      .clear()
      .type('the_witcher')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addUpcEanCode"]:eq(3)')
      .clear()
      .type('the_witcher')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addFnsku"]:eq(3)')
      .clear()
      .type('the_witcher')
  })

  it('click add additional product button', () => {
    cy.get('[name="addProducts"]')
      .click()
      .wait(2000)
  })

  it('filling the product fields', () => {
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addMerchantSku"]:eq(4)')
      .clear()
      .type('a_plague_tale')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > div > [name="addProductName"]:eq(4)')
      .clear()
      .type('a_plague_tale')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > div > [name="addAsin"]:eq(4)')
      .clear()
      .type('a_plague_tale')

    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addType"]:eq(4)')
      .select('Individual Item')

    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addManufacturerSku"]:eq(4)')
      .clear()
      .type('a_plague_tale')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addUpcEanCode"]:eq(4)')
      .clear()
      .type('a_plague_tale')
    
    cy.get('[name="addRow"].visible-flex > .visible-flex > div > [name="addFnsku"]:eq(4)')
      .clear()
      .type('a_plague_tale')
  })

  it('clicking add button', () => {
    cy.get(el.addBtn)
      .wait(2000)
      .click()
  })

  it('waiting for the page to be load', () => {
    cy.intercept('POST', 'https://www........................................api.php')
      .as('finalRequest')

    cy.wait('@finalRequest')
      .wait(3000)
  })

  it('checking the products', () => {
    cy.get(`[name="check_product"]:eq(${firstProductIndex})`)
      .check()
      .should('be.checked')

    cy.get(`[name="check_product"]:eq(${secondProductIndex})`)
      .check()
      .should('be.checked')

    cy.get(`[name="check_product"]:eq(${thirdProductIndex})`)
      .check()
      .should('be.checked')

    cy.get(`[name="check_product"]:eq(${fourthProductIndex})`)
      .check()
      .should('be.checked')

    cy.get(`[name="check_product"]:eq(${fifthProductIndex})`)
      .check()
      .should('be.checked')
  })

  it('clicking general action button', () => {
    cy.get('[type="action-btn"]')
      .should('be.visible')
      .wait(2000)
      .trigger('click')

    cy.get('[type="btn-edit-drop"]')
      .should('be.visible')
  })

  it('clicking create inbound shipment', () => {
    cy.get('[type="createNewInboundShipment"]')
      .should('be.visible')
      .wait(3000)
      .trigger('click')
  })

  it('checking inbound shipment window to be visible', () => {
    cy.get(el.inbShipWindow)
      .should('be.visible')
  })

  it('selecting the warehouse', () => {
    cy.get(el.warehouseSelect)
      .select('(CA) 1810 S CARLOS AVE, CALIFORNIA, 91761, USA')
  })

  it ('filling the order date field', () => {
    cy.get(el.orderDate)
      .wait(3000)
      .click()
      .type('2023-06-15')
  })

  it('filling the total qty', () => {
    cy.get('[name="row_set"].visible-flex > div > div > div > [name="row_set_qty"]:eq(0)')
      .type(shipmentQty)
      .type('{enter}')

    cy.get('[name="row_set"].visible-flex > div > div > div > [name="row_set_qty"]:eq(1)')
      .type(shipmentQty)
      .type('{enter}')

    cy.get('[name="row_set"].visible-flex > div > div > div > [name="row_set_qty"]:eq(2)')
      .type(shipmentQty)
      .type('{enter}')

    cy.get('[name="row_set"].visible-flex > div > div > div > [name="row_set_qty"]:eq(3)')
      .type(shipmentQty)
      .type('{enter}')

    cy.get('[name="row_set"].visible-flex > div > div > div > [name="row_set_qty"]:eq(4)')
      .type(shipmentQty)
      .type('{enter}')
  })

  it('clicking save & continue button', () => {
    cy.get(el.saveContinueBtn)
      .should('be.visible')
      .wait(2000)
      .click()
  })

  it('selecting the shipping method', () => {
    cy.get('.align-items-start.flex-column.visible-flex > .visible-flex.align-items-start > .mr-50 > .flex-standart')
      .should('be.visible')
      .select('Small parcel delivery (SPD) – individual boxes')
      .should('have.value', 'spd')
  })

  it('selecting shipping carrier', () => {
    cy.get('.align-items-center.mr-10 > .visible-flex')
      .should('be.visible')
      .select('FedEx')
      .should('have.value', 'FedEx')
  })

  it('selecting packing type', () => {
    cy.get('[name="shipmentPackingBlock"].visible-flex > div > div > div > [name="shippingPackingSelect"]')
      .should('be.visible')
      .select('Case-packed products (One SKU per box)')
      .should('have.value', 'one_sku')
  })

  it('filling the Units per case field', () => {
    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productUnitsPerCase"]:eq(0)')
      .type('10{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productUnitsPerCase"]:eq(1)')
      .type('10{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productUnitsPerCase"]:eq(2)')
      .type('10{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productUnitsPerCase"]:eq(3)')
      .type('10{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productUnitsPerCase"]:eq(4)')
      .type('10{enter}')
  })

  it('filling the Number of cases field', () => {
    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productNumberOfCases"]:eq(0)')
      .type('10{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productNumberOfCases"]:eq(1)')
      .type('10{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productNumberOfCases"]:eq(2)')
      .type('10{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productNumberOfCases"]:eq(3)')
      .type('10{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productNumberOfCases"]:eq(4)')
      .type('10{enter}')
  })

  it('filling the Length', () => {
    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productLength"]:eq(0)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productLength"]:eq(1)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productLength"]:eq(2)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productLength"]:eq(3)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productLength"]:eq(4)')
      .type('20{enter}')
  })

  it('filling the Width', () => {
    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productWidth"]:eq(0)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productWidth"]:eq(1)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productWidth"]:eq(2)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productWidth"]:eq(3)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productWidth"]:eq(4)')
      .type('20{enter}')
  })

  it('filling the Height', () => {
    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productHeight"]:eq(0)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productHeight"]:eq(1)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productHeight"]:eq(2)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productHeight"]:eq(3)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productHeight"]:eq(4)')
      .type('20{enter}')
  })

  it('filling the Box weight (lb) field', () => {
    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productWeight"]:eq(0)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productWeight"]:eq(1)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productWeight"]:eq(2)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productWeight"]:eq(3)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productWeight"]:eq(4)')
      .type('20{enter}')
  })

  it('clicking save and continue button', () => {
    cy.get('[name="saveStepTwoBtn"]:eq(3)')
      .should('be.visible')
      .click()
  })

  it('checking the data saving', () => {
    cy.get('modalwindow.visible-flex > .dv-modal-block')
      .should('be.visible')
      .and('contain', 'Attention!')
      .and('contain', 'The data about box size, weight, and the products added to the box have been successfully saved')

    cy.get('modalwindow.visible-flex > .dv-modal-block > .h-30 > .flex-standart > .button-am')
      .should('be.visible')
      .click()
  })

  it('entering tracking number', () => {
    cy.get('[name="inptTrackingNum"]:eq(2)')
      .should('be.visible')
      .clear()
      .type('11111{enter}')
  })

  it('clicking document completed button', () => {
    cy.get(el.docComplete)
      .wait(3000)
      .trigger('click')
  })

  it('waiting for the page to be load', () => {
    cy.intercept('POST', 'https://www........................................api.php')
      .as('finalRequest')

    cy.wait('@finalRequest')
      .wait(3000)
  })

  it('log out', () => {
    cy.get('[type="logout"]')
      .should('be.visible')
      .wait(3000)
      .trigger('click')
  })

  it('log in', () => {
    cy.get(el.loginField)
      .clear()
      .type(el.receiverLogin)

    cy.get(el.passwordField)
      .clear()
      .type(el.receiverPassword)

    cy.get(el.signInBtn)
      .click()
  })

  it('waiting for the page to be load', () => {
    cy.intercept('POST', 'https://www........................................api.php')
      .as('finalRequest')

    cy.wait('@finalRequest')
      .wait(3000)
  })

  it('checking orders history page to be visible', () => {
    cy.get('[name="pageShipmentBlockChecker"]')
      .should('be.visible')
  })

  it('click open order button', () => {
    cy.get('[name="ordHisAction"]:eq(1)')
      .should('be.visible')
      .select('Open Order')
  })

  it('checking the page to be visible', () => {
    cy.get('[type="checkerHistoryModal"]')
      .should('be.visible')
  })

  it('saving the tracking number', () => {
    cy.get('span.visible-flex[name="tracking-number"]').then(($number) => {
      trackingNumber = $number.text();
    })
  })

  it('saving the UPC codes', () => {
    cy.get('[type="clone"].visible-flex > div > div > div > div > div > [name="upc_ean_code"]:eq(0)').then(($code) => {
      upcCode1 = $code.text();
    })

    cy.get('[type="clone"].visible-flex > div > div > div > div > div > [name="upc_ean_code"]:eq(1)').then(($code) => {
      upcCode2 = $code.text();
    })

    cy.get('[type="clone"].visible-flex > div > div > div > div > div > [name="upc_ean_code"]:eq(2)').then(($code) => {
      upcCode3 = $code.text();
    })

    cy.get('[type="clone"].visible-flex > div > div > div > div > div > [name="upc_ean_code"]:eq(3)').then(($code) => {
      upcCode4 = $code.text();
    })

    cy.get('[type="clone"].visible-flex > div > div > div > div > div > [name="upc_ean_code"]:eq(4)').then(($code) => {
      upcCode5 = $code.text();
    })
  })

  it('choosing the Expiration Date', () => {
    cy.get('[name="unrolled-shipment-block"].visible-flex > div > div > div > div > [name="expiration_date_all"]')
      .check()
      .should('be.checked')
  })

  it('filling the tracking number input', () => {
    cy.get('[type="box-block"].visible-flex > div.visible-flex > wrapper > div > input[name="tracking-number"]')
      .clear()
      .type(trackingNumber)
  })

  it('filling the Box weight and Box dimensions inputs', () => {
    cy.get('box.visible-flex > div.visible-flex > div.visible-flex > div > [name="right-inputs-block"] > [name="weight"] > input[name="weight"]')
      .clear()
      .type('20{enter}')

    cy.get('box.visible-flex > div.visible-flex > div.visible-flex > div > [name="right-inputs-block"] > [name="length"] > input[name="length"]')
      .clear()
      .type('20{enter}')

    cy.get('box.visible-flex > div.visible-flex > div.visible-flex > div > [name="right-inputs-block"] > [name="width"] > input[name="width"]')
      .clear()
      .type('20{enter}')

    cy.get('box.visible-flex > div.visible-flex > div.visible-flex > div > [name="right-inputs-block"] > [name="height"] > input[name="height"]')
      .clear()
      .type('20{enter}')
  })

  it('filling the zone input', () => {
    cy.get('[type="box-block"].visible-flex > div.visible-flex > div.visible-flex > div > div > input[name="zone"]')
      .clear()
      .type('TZ1{enter}')
  })

  it('filling scan UPC input', () => {
    cy.get('[type="box-block"].visible-flex > div.visible-flex > div.visible-flex > [type="row-wrapper"].visible-flex > [type="info-row"].visible-flex > [name="pickup"] > div > [name="pickup"]')
      .clear()
      .type(upcCode1)
      .type('{enter}')
      .wait(3000)
  })

  it('filling the qty', () => {
    cy.get('div.visible-flex > [name="qty"] > input[name="received-qty"]')
      .clear()
      .type(receivingQty)
      .type('{enter}')
  })

  it('filling scan UPC input', () => {
    cy.get('[type="box-block"].visible-flex > div.visible-flex > div.visible-flex > [type="row-wrapper"].visible-flex > [type="info-row"].visible-flex > [name="pickup"] > div > [name="pickup"]')
      .clear()
      .type(upcCode2)
      .type('{enter}')
      .wait(3000)
  })

  it('filling the qty', () => {
    cy.get('div.visible-flex > [name="qty"] > input[name="received-qty"]:eq(1)')
      .clear()
      .type(receivingQty)
      .type('{enter}')
  })

  it('filling scan UPC input', () => {
    cy.get('[type="box-block"].visible-flex > div.visible-flex > div.visible-flex > [type="row-wrapper"].visible-flex > [type="info-row"].visible-flex > [name="pickup"] > div > [name="pickup"]')
      .clear()
      .type(upcCode3)
      .type('{enter}')
      .wait(3000)
  })

  it('filling the qty', () => {
    cy.get('div.visible-flex > [name="qty"] > input[name="received-qty"]:eq(2)')
      .clear()
      .type(receivingQty)
      .type('{enter}')
  })

  it('filling scan UPC input', () => {
    cy.get('[type="box-block"].visible-flex > div.visible-flex > div.visible-flex > [type="row-wrapper"].visible-flex > [type="info-row"].visible-flex > [name="pickup"] > div > [name="pickup"]')
      .clear()
      .type(upcCode4)
      .type('{enter}')
      .wait(3000)
  })

  it('filling the qty', () => {
    cy.get('div.visible-flex > [name="qty"] > input[name="received-qty"]:eq(3)')
      .clear()
      .type(receivingQty)
      .type('{enter}')
  })

  it('filling scan UPC input', () => {
    cy.get('[type="box-block"].visible-flex > div.visible-flex > div.visible-flex > [type="row-wrapper"].visible-flex > [type="info-row"].visible-flex > [name="pickup"] > div > [name="pickup"]')
      .clear()
      .type(upcCode5)
      .type('{enter}')
      .wait(3000)
  })

  it('filling the qty', () => {
    cy.get('div.visible-flex > [name="qty"] > input[name="received-qty"]:eq(4)')
      .clear()
      .type(receivingQty)
      .type('{enter}')
  })

  it('print box labels', () => {
    cy.get('[type="box-block"].visible-flex > [name="buttons-row"] > div > [name="print-box-label"]')
      .wait(5000)
      .click()
  })

  it('clicking box completed button', () => {
    cy.get('[name="box"].visible-flex > [type="box-block"].visible-flex > [name="buttons-row"].visible-flex > [name="save-edit"] > [name="box-completed"] > button[name="box-completed"]')
      .should('be.visible')
      .wait(3000)
      .click()
  })

  it('clicking receiving completed button', () => {
    cy.get('[name="shipment-block"].visible-flex > [name="buttons-row"] > [name="acceptance-completed_block"] > [name="acceptance-completed"]')
      .should('be.visible')
      .wait(3000)
      .click()
  })

  it('clicking yes button', () => {
    cy.get('[slug="two-buttons"]')
      .should('be.visible')
    
    cy.get('[name="yes"]')
      .click()
  })

  it('waiting for the page to be load', () => {
    cy.intercept('POST', 'https://www........................................api.php')
      .as('finalRequest')

    cy.wait('@finalRequest')
      .wait(3000)
  })
})
