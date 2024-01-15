/// <reference types="cypress" />

import { el } from "../../support/base_elements"

describe('a lot of products SPD', () => {

  const firstProductIndex = 1;
  const secondProductIndex = 2;
  const thirdProductIndex = 3;
  const fourthProductIndex = 4;
  const fifthProductIndex = 5;
  const sixthProductIndex = 6;
  const seventhProductIndex = 7;
  const eightthProductIndex = 8;
  const ninthProductIndex = 9;
  const tenthProductIndex = 10;
  const shipmentQty = '100';
  let trackingNumber;
  let upcCode1;
  let upcCode2;
  let upcCode3;
  let upcCode4;
  let upcCode5;
  let upcCode6;
  let upcCode7;
  let upcCode8;
  let upcCode9;
  let upcCode10;
  let upcCode11;
  let upcCode12;
  const receivingQty = '100';
  let orderNumber;
  let boxNumber;

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
    cy.intercept('POST', 'https://www..................................api.php')
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

    cy.get(`[name="check_product"]:eq(${sixthProductIndex})`)
      .check()
      .should('be.checked')

    cy.get(`[name="check_product"]:eq(${seventhProductIndex})`)
      .check()
      .should('be.checked')

    cy.get(`[name="check_product"]:eq(${eightthProductIndex})`)
      .check()
      .should('be.checked')

    cy.get(`[name="check_product"]:eq(${ninthProductIndex})`)
      .check()
      .should('be.checked')

    cy.get(`[name="check_product"]:eq(${tenthProductIndex})`)
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

    cy.get('[name="row_set"].visible-flex > div > div > div > [name="row_set_qty"]:eq(5)')
      .type(shipmentQty)
      .type('{enter}')

    cy.get('[name="row_set"].visible-flex > div > div > div > [name="row_set_qty"]:eq(6)')
      .type(shipmentQty)
      .type('{enter}')

    cy.get('[product_type="Individual Item"][name="row"].visible-flex > [type="row_individual"] > div > div > [name="row_individual_qty"]:eq(0)')
      .type(shipmentQty)
      .type('{enter}')

    cy.get('[product_type="Individual Item"][name="row"].visible-flex > [type="row_individual"] > div > div > [name="row_individual_qty"]:eq(1)')
      .type(shipmentQty)
      .type('{enter}')

    cy.get('[product_type="Individual Item"][name="row"].visible-flex > [type="row_individual"] > div > div > [name="row_individual_qty"]:eq(2)')
      .type(shipmentQty)
      .type('{enter}')

    cy.get('[product_type="Individual Item"][name="row"].visible-flex > [type="row_individual"] > div > div > [name="row_individual_qty"]:eq(3)')
      .type(shipmentQty)
      .type('{enter}')

    cy.get('[product_type="Individual Item"][name="row"].visible-flex > [type="row_individual"] > div > div > [name="row_individual_qty"]:eq(4)')
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

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productUnitsPerCase"]:eq(5)')
      .type('10{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productUnitsPerCase"]:eq(6)')
      .type('10{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productUnitsPerCase"]:eq(7)')
      .type('10{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productUnitsPerCase"]:eq(8)')
      .type('10{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productUnitsPerCase"]:eq(9)')
      .type('10{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productUnitsPerCase"]:eq(10)')
      .type('10{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productUnitsPerCase"]:eq(11)')
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

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productNumberOfCases"]:eq(5)')
      .type('10{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productNumberOfCases"]:eq(6)')
      .type('10{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productNumberOfCases"]:eq(7)')
      .type('10{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productNumberOfCases"]:eq(8)')
      .type('10{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productNumberOfCases"]:eq(9)')
      .type('10{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productNumberOfCases"]:eq(10)')
      .type('10{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productNumberOfCases"]:eq(11)')
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

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productLength"]:eq(5)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productLength"]:eq(6)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productLength"]:eq(7)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productLength"]:eq(8)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productLength"]:eq(9)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productLength"]:eq(10)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productLength"]:eq(11)')
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

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productWidth"]:eq(5)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productWidth"]:eq(6)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productWidth"]:eq(7)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productWidth"]:eq(8)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productWidth"]:eq(9)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productWidth"]:eq(10)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productWidth"]:eq(11)')
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

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productHeight"]:eq(5)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productHeight"]:eq(6)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productHeight"]:eq(7)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productHeight"]:eq(8)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productHeight"]:eq(9)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productHeight"]:eq(10)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productHeight"]:eq(11)')
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

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productWeight"]:eq(5)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productWeight"]:eq(6)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productWeight"]:eq(7)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productWeight"]:eq(8)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productWeight"]:eq(9)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productWeight"]:eq(10)')
      .type('20{enter}')

    cy.get('[name="row_set_config"].visible-flex > div > [name="row_productWeight"]:eq(11)')
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
    cy.intercept('POST', 'https://www..................................api.php')
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
    cy.intercept('POST', 'https://www..................................api.php')
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

    cy.get('[type="clone"].visible-flex > div > div > div > div > div > [name="upc_ean_code"]:eq(5)').then(($code) => {
      upcCode6 = $code.text();
    })

    cy.get('[type="clone"].visible-flex > div > div > div > div > div > [name="upc_ean_code"]:eq(6)').then(($code) => {
      upcCode7 = $code.text();
    })

    cy.get('[type="clone"].visible-flex > div > div > div > div > div > [name="upc_ean_code"]:eq(7)').then(($code) => {
      upcCode8 = $code.text();
    })

    cy.get('[type="clone"].visible-flex > div > div > div > div > div > [name="upc_ean_code"]:eq(8)').then(($code) => {
      upcCode9 = $code.text();
    })

    cy.get('[type="clone"].visible-flex > div > div > div > div > div > [name="upc_ean_code"]:eq(9)').then(($code) => {
      upcCode10 = $code.text();
    })

    cy.get('[type="clone"].visible-flex > div > div > div > div > div > [name="upc_ean_code"]:eq(10)').then(($code) => {
      upcCode11 = $code.text();
    })

    cy.get('[type="clone"].visible-flex > div > div > div > div > div > [name="upc_ean_code"]:eq(11)').then(($code) => {
      upcCode12 = $code.text();
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

  it('filling scan UPC input', () => {
    cy.get('[type="box-block"].visible-flex > div.visible-flex > div.visible-flex > [type="row-wrapper"].visible-flex > [type="info-row"].visible-flex > [name="pickup"] > div > [name="pickup"]')
      .clear()
      .type(upcCode6)
      .type('{enter}')
      .wait(3000)
  })

  it('filling the qty', () => {
    cy.get('div.visible-flex > [name="qty"] > input[name="received-qty"]:eq(5)')
      .clear()
      .type(receivingQty)
      .type('{enter}')
  })

  it('filling scan UPC input', () => {
    cy.get('[type="box-block"].visible-flex > div.visible-flex > div.visible-flex > [type="row-wrapper"].visible-flex > [type="info-row"].visible-flex > [name="pickup"] > div > [name="pickup"]')
      .clear()
      .type(upcCode7)
      .type('{enter}')
      .wait(3000)
  })

  it('filling the qty', () => {
    cy.get('div.visible-flex > [name="qty"] > input[name="received-qty"]:eq(6)')
      .clear()
      .type(receivingQty)
      .type('{enter}')
  })

  it('filling scan UPC input', () => {
    cy.get('[type="box-block"].visible-flex > div.visible-flex > div.visible-flex > [type="row-wrapper"].visible-flex > [type="info-row"].visible-flex > [name="pickup"] > div > [name="pickup"]')
      .clear()
      .type(upcCode8)
      .type('{enter}')
      .wait(3000)
  })

  it('filling the qty', () => {
    cy.get('div.visible-flex > [name="qty"] > input[name="received-qty"]:eq(7)')
      .clear()
      .type(receivingQty)
      .type('{enter}')
  })

  it('filling scan UPC input', () => {
    cy.get('[type="box-block"].visible-flex > div.visible-flex > div.visible-flex > [type="row-wrapper"].visible-flex > [type="info-row"].visible-flex > [name="pickup"] > div > [name="pickup"]')
      .clear()
      .type(upcCode9)
      .type('{enter}')
      .wait(3000)
  })

  it('filling the qty', () => {
    cy.get('div.visible-flex > [name="qty"] > input[name="received-qty"]:eq(8)')
      .clear()
      .type(receivingQty)
      .type('{enter}')
  })

  it('filling scan UPC input', () => {
    cy.get('[type="box-block"].visible-flex > div.visible-flex > div.visible-flex > [type="row-wrapper"].visible-flex > [type="info-row"].visible-flex > [name="pickup"] > div > [name="pickup"]')
      .clear()
      .type(upcCode10)
      .type('{enter}')
      .wait(3000)
  })

  it('filling the qty', () => {
    cy.get('div.visible-flex > [name="qty"] > input[name="received-qty"]:eq(9)')
      .clear()
      .type(receivingQty)
      .type('{enter}')
  })

  it('filling scan UPC input', () => {
    cy.get('[type="box-block"].visible-flex > div.visible-flex > div.visible-flex > [type="row-wrapper"].visible-flex > [type="info-row"].visible-flex > [name="pickup"] > div > [name="pickup"]')
      .clear()
      .type(upcCode11)
      .type('{enter}')
      .wait(3000)
  })

  it('filling the qty', () => {
    cy.get('div.visible-flex > [name="qty"] > input[name="received-qty"]:eq(10)')
      .clear()
      .type(receivingQty)
      .type('{enter}')
  })

  it('filling scan UPC input', () => {
    cy.get('[type="box-block"].visible-flex > div.visible-flex > div.visible-flex > [type="row-wrapper"].visible-flex > [type="info-row"].visible-flex > [name="pickup"] > div > [name="pickup"]')
      .clear()
      .type(upcCode12)
      .type('{enter}')
      .wait(3000)
  })

  it('filling the qty', () => {
    cy.get('div.visible-flex > [name="qty"] > input[name="received-qty"]:eq(11)')
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
    cy.intercept('POST', 'https://www..................................api.php')
      .as('finalRequest')

    cy.wait('@finalRequest')
      .wait(3000)
  })

  it('saving the order number', () => {
    cy.get('[name="warhOrdNum_checker"]:eq(1)').then(($number) => {
      orderNumber = $number.text();
    })
  })

  it('clicking the request to supervisor button', () => {
    cy.get('[name="ordHisAction"]:eq(1)')
      .should('be.visible')
      .select('Request to supervisor')
  })

  it('checking the request window to be visible', () => {
    cy.get('[type="checkerHistoryModal"]')
      .should('be.visible')
  })

  it('checking the It is necessary to change the received box', () => {
    cy.get('[name="crsupervisor_oneblock"].visible-flex > [name="crsupervisor_oneblock_bot"] > div > [name="crsupervisor_change_box"] > div > [name="crsupervisor_changebox"]')
      .check()
      .should('be.checked')
  })

  it('checking the A new box needs to be added', () => {
    cy.get('[name="crsupervisor_oneblock"].visible-flex > [name="crsupervisor_oneblock_bot"] > div > [name="crsupervisor_add_new_box"] > div > [name="crsupervisor_addbox"]')
      .check()
      .should('be.checked')
  })

  it('saving the box number', () => {
    cy.get('[name="storage-number"]:eq(3)').then(($number) => {
      boxNumber = $number.text();
    })
  })

  it('filling the scan box field with correct number', () => {
    cy.get('[name="crsupervisor_dummy"].visible-flex > div > [name="crsupervisor_scan"]')
      .type(boxNumber)
      .type('{enter}')
  })

  it('filling the add box comment', () => {
    cy.get('[name="crsupervisor_oneblock"].visible-flex > [name="crsupervisor_oneblock_bot"] > div > [name="crsupervisor_add_new_box"] > [name="crsupervisor_add_new_box_inner"] > [name="crsupervisor_comment_row"] > [name="crsupervisor_comment_text_r"]')
      .type('This is test comment. It should be long enough to make sure that view all function works correctly.{enter}')
  })

  it('filling the change box comment', () => {
    cy.get('[name="crsupervisor_dummy"].visible-flex > [name="crsupervisor_comment_row"] > [name="crsupervisor_comment_text"]')
      .type('This is test comment. It should be long enough to make sure that view all function works correctly.{enter}')
  })

  it('clicking the send request button', () => {
    cy.get('[name="crsupervisor_oneblock"].visible-flex > [name="crsupervisor_oneblock_bot"] > [name="crsupervisor_send_block"] > [name="crsupervisor_send"]')
      .click()
  })

  it('closing the window', () => {
    cy.get('[type="checkerHistoryModal"] > div > div > [type="dv-modal-cross"]')
    .wait(3000)
      .click()
  })

  it('waiting for the page to be load', () => {
    cy.intercept('POST', 'https://www..................................api.php')
      .as('finalRequest')

    cy.wait('@finalRequest')
      .wait(3000)
  })

  it('log out', () => {
    cy.wait(5000)
    cy.get('[type="logout"]')
      .should('be.visible')
      .click()
  })

  it('going to supervisor acc', () => {
    cy.get(el.loginField)
      .clear()
      .type(el.supervisorLogin)

    cy.get(el.passwordField)
      .clear()
      .type(el.supervisorPassword)

    cy.get(el.signInBtn)
      .click()
  })

  it('waiting for the page to be load', () => {
    cy.intercept('POST', 'https://www..................................api.php')
      .as('finalRequest')

    cy.wait('@finalRequest')
      .wait(3000)
  })

  it('checking the supervisor interface to be visible', () => {
    cy.get('[name="supervisorBlock"]')
      .should('be.visible')
  })

  it('searching the order', () => {
    cy.get('[name="inptSearch"]')
      .should('be.visible')
      .wait(2000)
      .type(orderNumber)
      .type('{enter}')
  })

  it('click view shipment button', () => {
    cy.get('[name="supervisorAction"]:eq(1)')
      .should('be.visible')
      .click()
  })

  it('add box approve', () => {
    cy.get('[name="crsupervisor_add_new_box_inner"].visible-flex > div > [name="crsupervisor_allowed_r"]')
      .should('be.visible')
      .wait(2000)
      .check()
      .should('be.checked')
  })

  it('change box approve', () => {
    cy.get('[name="crsupervisor_change_box_inner"].visible-flex > [name="crsupervisor_wrapper"] > [name="crsupervisor_dummy"].visible-flex > div > [name="crsupervisor_allowed"]')
      .should('be.visible')
      .wait(2000)
      .check()
      .should('be.checked')
  })

  it('clicking request completed', () => {
    cy.get('[name="crsupervisor_oneblock"].visible-flex > [name="crsupervisor_oneblock_bot"] > [name="thisRequestCompleted_block"] > div > [name="thisRequestCompleted"]')
      .should('be.visible')
      .wait(2000)
      .click()
  })

  it('checking the window and click yes button', () => {
    cy.get('[name="title"]')
      .should('be.visible')
      .and('contain', 'You complete the request!')

    cy.get('[name="yes"]')
      .should('be.visible')
      .click()
  })

  it('checking the window and click yes button', () => {
    cy.get('[name="title"]')
      .should('be.visible')
      .and('contain', 'You complete the request!')

    cy.get('[name="yes"]')
      .should('be.visible')
      .click()
  })

  it('waiting for the page to be load', () => {
    cy.intercept('POST', 'https://www..................................api.php')
      .as('finalRequest')

    cy.wait('@finalRequest')
      .wait(3000)
  })

  it('log out', () => {
    cy.get('[type="logout"]')
      .wait(3000)
      .click()
  })

  it('going to receiver acc', () => {
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
    cy.intercept('POST', 'https://www..................................api.php')
      .as('finalRequest')

    cy.wait('@finalRequest')
      .wait(3000)
  })

  it('clicking the edit after supervisor button', () => {
    cy.get('[name="ordHisAction"]:eq(1)')
      .should('be.visible')
      .select('Edit after supervisor')
  })

  it('checking the request window to be visible', () => {
    cy.get('[type="checkerHistoryModal"]')
      .should('be.visible')
  })

  it('click expand button', () => {
    cy.get('[name="box"].visible-flex > [name="rolled"] > div > div.visible-flex > div.visible-flex > [name="expand"]')
      .click()
  })

  it('click edit box button', () => {
    cy.get('[name="box"].visible-flex > [type="box-block"].visible-flex > [name="buttons-row"].visible-flex > [name="save-edit"] > [name="edit-box"] > button[name="edit-box"]')
      .click()
  })

  it('changing the qty', () => {
    let newBoxQty = receivingQty / 2;
    cy.get('div.visible-flex > [name="qty"] > input[name="received-qty"]:eq(0)')
      .clear()
      .type(newBoxQty)
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
      .wait(5000)
      .click()
  })

  it('checking the add box button', () => {
    let qtyLeftValue = receivingQty / 2;

    cy.get('[name="box"].visible-flex > [type="box-block"].visible-flex > [name="buttons-row"].visible-flex > [name="boxAddCopyBlock"] > [name="boxAddBlock"] > [name="add-new-box"]:eq(0)')
      .click()
      .wait(3000)
    
    cy.get('[type="box-block"].visible-flex > div.visible-flex > wrapper > div > input[name="tracking-number"]:eq(0)')
      .clear()
      .type(trackingNumber)
      .type('{enter}')

    cy.get('[type="box-block"].visible-flex > div.visible-flex > div.visible-flex > div > div > input[name="zone"]:eq(0)')
      .clear()
      .type('11{enter}')

    cy.get('box.visible-flex > div.visible-flex > div.visible-flex > div > [name="right-inputs-block"] > [name="weight"] > input[name="weight"]:eq(0)')
      .type('20{enter}')

    cy.get('box.visible-flex > div.visible-flex > div.visible-flex > div > [name="right-inputs-block"] > [name="length"] > input[name="length"]:eq(0)')
      .type('20{enter}')

    cy.get('box.visible-flex > div.visible-flex > div.visible-flex > div > [name="right-inputs-block"] > [name="width"] > input[name="width"]:eq(0)')
      .type('20{enter}')

    cy.get('box.visible-flex > div.visible-flex > div.visible-flex > div > [name="right-inputs-block"] > [name="height"] > input[name="height"]:eq(0)')
      .type('20{enter}')

    cy.get('[type="box-block"].visible-flex > div.visible-flex > div.visible-flex > [type="row-wrapper"].visible-flex > [type="info-row"].visible-flex > [name="pickup"] > div > [name="pickup"]:eq(0)')
      .type(upcCode5)
      .type('{enter}')

    cy.get('div.visible-flex > [name="qty"] > input[name="received-qty"]:eq(0)')
      .clear()
      .type(qtyLeftValue)
      .type('{enter}')
  })

  it('print box labels', () => {
    cy.get('[type="box-block"].visible-flex > [name="buttons-row"] > div > [name="print-box-label"]:eq(0)')
      .wait(5000)
      .click()
  })

  it('clicking box completed button', () => {
    cy.get('[name="box"].visible-flex > [type="box-block"].visible-flex > [name="buttons-row"].visible-flex > [name="save-edit"] > [name="box-completed"] > button[name="box-completed"]:eq(0)')
      .should('be.visible')
      .wait(5000)
      .click()
  })

  it('click receiving complete button', () => {
    cy.get('[name="acceptance_completed_addon_block"].visible-flex > [name="acceptance_completed_addon"]')
      .wait(2000)
      .click()

    cy.get('[name="yes"]')
      .wait(2000)
      .click()
  })

  it('checking the status', () => {
    cy.get('[name="status_checker"]:eq(1)')
      .should('be.visible')
      .and('contain', 'Editing and Receiving Completed')
  })
})
