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
  let fnsku1;
  let fnsku2;
  let fnsku3;
  let fnsku4;
  let fnsku5;
  let fnsku6;
  let fnsku7;
  let fnsku8;
  let fnsku9;
  let fnsku10;

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
    cy.get('[name="shippingMethodSelect"]:eq(1)')
      .select('Less than truckload (LTL) – pallets')
      .should('have.value', 'ltl')
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

  it('selecting packing type', () => {
    cy.get('[name="palletRow"].visible-flex > div > [name="palletType"]')
      .select('One SKU per pallet')
      .should('have.value', 'one_sku')
  })

  it('filling the palets information', () => {
    cy.get('[name="palletRow"].visible-flex > div > div > div > [name="palletHeight"]')
      .should('be.visible')
      .type('40{enter}')

    cy.get('[name="palletRow"].visible-flex > div > div > div > [name="palletWeight"]')
      .should('be.visible')
      .type('20{enter}')
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
    cy.intercept('POST', 'https://www.wiunit.com/wp-content/plugins/ajax/api.php')
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
    cy.intercept('POST', 'https://www.wiunit.com/wp-content/plugins/ajax/api.php')
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

  it('clicking add new pallet button', () => {
    cy.get('[name="checkerLtlBlockInfo"].visible-flex > div > [name="palletAddNewPallet"]')
      .click()
  })

  it('checking the pallet block to be visible', () => {
    cy.get('[name="rowPalletBox"].visible-flex > [name="rowPallet"]')
      .should('be.visible')
  })

  it('filling the tracking number input', () => {
    cy.get('[name="rowPallet"].visible-flex > [name="rowPalletHead"].visible-flex > div > div > input[name="palletTrackNum"]')
      .clear()
      .type(trackingNumber)
      .type('{enter}')
  })

  it('filling the pallet height field', () => {
    cy.get('[name="rowPalletTop"].visible-flex > div > div > [name="palletHeight"]')
      .clear()
      .type('40')
      .type('{enter}')
  })

  it('clicking add new box button', () => {
    cy.get('[name="bot_ltl_block"].visible-flex > div > div > [name="palletAddNewBox"]')
      .click()
  })

  it('filling the Box weight and Box dimensions inputs', () => {
    cy.get('box.visible-flex > div.visible-flex > div.visible-flex > div > [name="right-inputs-block"] > [name="weight"] > input[name="weight"]')
      .should('be.visible')
      .clear()
      .type('20{enter}')

    cy.get('box.visible-flex > div.visible-flex > div.visible-flex > div > [name="right-inputs-block"] > [name="length"] > input[name="length"]')
      .should('be.visible')
      .clear()
      .type('20{enter}')

    cy.get('box.visible-flex > div.visible-flex > div.visible-flex > div > [name="right-inputs-block"] > [name="width"] > input[name="width"]')
      .should('be.visible')
      .clear()
      .type('20{enter}')

    cy.get('box.visible-flex > div.visible-flex > div.visible-flex > div > [name="right-inputs-block"] > [name="height"] > input[name="height"]')
      .should('be.visible')
      .clear()
      .type('20{enter}')   
  })

  it('filling scan UPC input with correct data', () => {
    cy.get('[type="box-block"].visible-flex > div.visible-flex > div.visible-flex > [type="row-wrapper"].visible-flex > [type="info-row"].visible-flex > [name="pickup"] > div > [name="pickup"]')
      .clear()
      .type(upcCode1)
      .type('{enter}')
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

  it('filling the pallet zone', () => {
    cy.get('[name="bot_ltl_block"].visible-flex > div > [name="printComletedBlock"] > div > [name="palletZone"]')
      .type('1P{enter}')
  })

  it('clicking pallet complete button', () => {
    cy.get('[name="printComletedBlock"].visible-flex > div > div > [name="palletCompleted_btn"]')
      .click()

    cy.get('[name="printComletedBlock"].visible-flex > div > div > [name="textPalletCompleted"] > span')
      .should('be.visible')
      .and('contain', 'PALLET COMPLETED')
  })

  it('clicking receiving completed button', () => {
    cy.get('[name="shipment-block"].visible-flex > [name="buttons-row"] > [name="acceptance-completed_block"] > [name="acceptance-completed"]')
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
    cy.intercept('POST', 'https://www.wiunit.com/wp-content/plugins/ajax/api.php')
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

  it('log in', () => {
    cy.get(el.loginField)
      .clear()
      .type(el.login)

    cy.get(el.passwordField)
      .clear()
      .type(el.password)

    cy.get(el.signInBtn)
      .click()
  })

  it('waiting for the page to be load', () => {
    cy.intercept('POST', 'https://www.wiunit.com/wp-content/plugins/ajax/api.php')
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

  it('clicking create preparation order', () => {
    cy.get('[type="pre-FBA"]')
      .should('be.visible')
      .wait(3000)
      .trigger('click')
  })

  it('checking the preparation order window to be visible', () => {
    cy.get('[type="preFBA_window"]')
      .should('be.visible')
  })

  it('checking the shipping method', () => {
    cy.get('#LTL')
      .should('be.visible')
      .check()
      .should('be.checked')
  })

  it('clicking send all stock button', () => {
    cy.get('[name="send_all_stock"]')
      .wait(3000)
      .click()
  })

  it('clicking save&continue button', () => {
    cy.get('[name="saveStepOneBtn"]')
      .wait(3000)
      .click()
  })

  it('clicking without Amazon shipment file', () => {
    cy.get('[name="notUseAmzFile"]')
      .wait(2000)
      .check()
      .should('be.checked')
  })

  it('checking the message window', () => {
    cy.contains('Amazon file in the system!')
      .should('be.visible')
  })

  it('clicking yes button', () => {
    cy.get('[name="yes"]')
      .should('be.visible')
      .click()
  })

  it('clicking Upload Product Labels File button', () => {
    cy.get('[name="upload_label"]')
      .should('be.visible')
      .click()
  })

  it('checking the uploading window to be visible', () => {
    cy.get('[type="preFba_Upload"]')
      .should('be.visible')
  })

  it('choosing correct file', () => {
    let file = 'NEW-SHIPMENT-BOX-LABEL-package-FBA16PMP6WQ8.pdf'
    cy.get('[name="preFba_Upload"][type="file"]')
      .attachFile(file)

    cy.get('[slug="preFba_Upload"]')
      .should('be.visible')
      .click()
  })

  it('clicking submit order button', () => {
    cy.get('[name="submit_order"]')
      .wait(3000)
      .click()
  })

  it('waiting for the page to be load', () => {
    cy.intercept('POST', 'https://www.wiunit.com/wp-content/plugins/ajax/api.php')
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
      .type(el.packerLogin)

    cy.get(el.passwordField)
      .clear()
      .type(el.packerPassword)

    cy.get(el.signInBtn)
      .click()
  })

  it('waiting for the page to be load', () => {
    cy.intercept('POST', 'https://www.wiunit.com/wp-content/plugins/ajax/api.php')
      .as('finalRequest')

    cy.wait('@finalRequest')
      .wait(3000)
  })

  it('clicking view shipment button', () => {
    cy.get('[name="ordHisActionBtn"]:eq(1)')
      .should('be.visible')
      .trigger('click')
  })

  it('checking the packing window to be visible', () => {
    cy.get('[type="picker_window"]')
      .should('be.visible')
  })

  it('saving the UPC codes', () => {
    cy.get('[name="FNSKU"]:eq(0)').then(($code) => {
      fnsku1 = $code.text();
    })

    cy.get('[name="FNSKU"]:eq(1)').then(($code) => {
      fnsku2 = $code.text();
    })

    cy.get('[name="FNSKU"]:eq(2)').then(($code) => {
      fnsku3 = $code.text();
    })

    cy.get('[name="FNSKU"]:eq(3)').then(($code) => {
      fnsku4 = $code.text();
    })

    cy.get('[name="FNSKU"]:eq(4)').then(($code) => {
      fnsku5 = $code.text();
    })

    cy.get('[name="FNSKU"]:eq(5)').then(($code) => {
      fnsku6 = $code.text();
    })

    cy.get('[name="FNSKU"]:eq(6)').then(($code) => {
      fnsku7 = $code.text();
    })

    cy.get('[name="FNSKU"]:eq(7)').then(($code) => {
      fnsku8 = $code.text();
    })

    cy.get('[name="FNSKU"]:eq(8)').then(($code) => {
      fnsku9 = $code.text();
    })

    cy.get('[name="FNSKU"]:eq(9)').then(($code) => {
      fnsku10 = $code.text();
    })
  })

  it('checking the N/A', () => {
    cy.get('[name="expiration-date-NA"]:eq(0)')
      .check()
      .should('be.checked')

    cy.get('[name="expiration-date-NA"]:eq(1)')
      .check()
      .should('be.checked')

    cy.get('[name="expiration-date-NA"]:eq(2)')
      .check()
      .should('be.checked')

    cy.get('[name="expiration-date-NA"]:eq(3)')
      .check()
      .should('be.checked')

    cy.get('[name="expiration-date-NA"]:eq(4)')
      .check()
      .should('be.checked')

    cy.get('[name="expiration-date-NA"]:eq(5)')
      .check()
      .should('be.checked')

    cy.get('[name="expiration-date-NA"]:eq(6)')
      .check()
      .should('be.checked')

    cy.get('[name="expiration-date-NA"]:eq(7)')
      .check()
      .should('be.checked')

    cy.get('[name="expiration-date-NA"]:eq(8)')
      .check()
      .should('be.checked')

    cy.get('[name="expiration-date-NA"]:eq(9)')
      .check()
      .should('be.checked')
  })

  it('choosing packing type', () => {
    cy.get('div[name="pack-type"]:eq(0)')
      .click()

    cy.get('div[value="Individual"]:eq(0)')
      .click()

    cy.get('div[name="pack-type"]:eq(1)')
      .click()

    cy.get('div[value="Individual"]:eq(1)')
      .click()

    cy.get('div[name="pack-type"]:eq(2)')
      .click()

    cy.get('div[value="Individual"]:eq(2)')
      .click()

    cy.get('div[name="pack-type"]:eq(3)')
      .click()

    cy.get('div[value="Individual"]:eq(3)')
      .click()

    cy.get('div[name="pack-type"]:eq(4)')
      .click()

    cy.get('div[value="Individual"]:eq(4)')
      .click()

    cy.get('div[name="pack-type"]:eq(5)')
      .click()

    cy.get('div[value="Set/Bundle"]:eq(5)')
      .click()
      .wait(2000)

    cy.get('[placeholder="Quantity"]:eq(5)')
      .type('6')

    cy.get('div[name="pack-type"]:eq(6)')
      .click()

    cy.get('div[value="Set/Bundle"]:eq(6)')
      .click()
      .wait(2000)

    cy.get('[placeholder="Quantity"]:eq(6)')
      .type('6')

    cy.get('div[name="pack-type"]:eq(7)')
      .click()

    cy.get('div[value="Set/Bundle"]:eq(7)')
      .click()
      .wait(2000)

    cy.get('[placeholder="Quantity"]:eq(7)')
      .type('2')

    cy.get('div[name="pack-type"]:eq(8)')
      .click()

    cy.get('div[value="Set/Bundle"]:eq(8)')
      .click()
      .wait(2000)

    cy.get('[placeholder="Quantity"]:eq(8)')
      .type('2')

    cy.get('div[name="pack-type"]:eq(9)')
      .click()

    cy.get('div[value="Set/Bundle"]:eq(9)')
      .click()
      .wait(2000)

    cy.get('[placeholder="Quantity"]:eq(9)')
      .type('2')
  })

  it('checking the box number', () => {
    cy.get('[name="item_box_consigments"].visible-flex > [name="box"] > [name="box"][type="checkbox"]:eq(0)')
      .check()
      .should('be.checked')
  })

  it('click add new box', () => {
    cy.get('[name="b_pack_group"].visible-flex > [name="b_pack_add_new_box_btn"]')
      .click()
  })

  it('filling the box weight input', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > div > [name="right-inputs-block"] > [name="weight"] > input')
      .clear()
      .type('20{enter}')
  })

  it('filling box dimentions fields', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > div > [name="right-inputs-block"] > [name="length"] > input')
      .clear()
      .type('20{enter}')

    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > div > [name="right-inputs-block"] > [name="width"] > input')
      .clear()
      .type('20{enter}')

    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > div > [name="right-inputs-block"] > [name="height"] > input')
      .clear()
      .type('20{enter}')
  })

  it('filling FNSKU field with correct value', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > [type="row-wrapper"] > [type="info-row"] > div > [name="pickup"] > [placeholder="FNSKU"]')
      .type(fnsku1)
      .type('{enter}')
      .wait(3000)
  })

  it('filling the qty', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > [type="row-wrapper"] > [type="clone"] > [name="qty"] > input[name="qty"]')
      .clear()
      .type('100{enter}')
  })

  it('filling FNSKU field with correct value', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > [type="row-wrapper"] > [type="info-row"] > div > [name="pickup"] > [placeholder="FNSKU"]')
      .type(fnsku2)
      .type('{enter}')
      .wait(3000)
  })

  it('filling the qty', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > [type="row-wrapper"] > [type="clone"] > [name="qty"] > input[name="qty"]:eq(1)')
      .clear()
      .type('100{enter}')
  })

  it('filling FNSKU field with correct value', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > [type="row-wrapper"] > [type="info-row"] > div > [name="pickup"] > [placeholder="FNSKU"]')
      .type(fnsku3)
      .type('{enter}')
      .wait(3000)
  })

  it('filling the qty', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > [type="row-wrapper"] > [type="clone"] > [name="qty"] > input[name="qty"]:eq(2)')
      .clear()
      .type('100{enter}')
  })

  it('filling FNSKU field with correct value', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > [type="row-wrapper"] > [type="info-row"] > div > [name="pickup"] > [placeholder="FNSKU"]')
      .type(fnsku4)
      .type('{enter}')
      .wait(3000)
  })

  it('filling the qty', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > [type="row-wrapper"] > [type="clone"] > [name="qty"] > input[name="qty"]:eq(3)')
      .clear()
      .type('100{enter}')
  })

  it('filling FNSKU field with correct value', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > [type="row-wrapper"] > [type="info-row"] > div > [name="pickup"] > [placeholder="FNSKU"]')
      .type(fnsku5)
      .type('{enter}')
      .wait(3000)
  })

  it('filling the qty', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > [type="row-wrapper"] > [type="clone"] > [name="qty"] > input[name="qty"]:eq(4)')
      .clear()
      .type('100{enter}')
  })

  it('filling FNSKU field with correct value', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > [type="row-wrapper"] > [type="info-row"] > div > [name="pickup"] > [placeholder="FNSKU"]')
      .type(fnsku6)
      .type('{enter}')
      .wait(3000)
  })

  it('filling the qty', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > [type="row-wrapper"] > [type="clone"] > [name="qty"] > input[name="qty"]:eq(5)')
      .clear()
      .type('25{enter}')
  })

  it('filling FNSKU field with correct value', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > [type="row-wrapper"] > [type="info-row"] > div > [name="pickup"] > [placeholder="FNSKU"]')
      .type(fnsku7)
      .type('{enter}')
      .wait(3000)
  })

  it('filling the qty', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > [type="row-wrapper"] > [type="clone"] > [name="qty"] > input[name="qty"]:eq(6)')
      .clear()
      .type('25{enter}')
  })

  it('filling FNSKU field with correct value', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > [type="row-wrapper"] > [type="info-row"] > div > [name="pickup"] > [placeholder="FNSKU"]')
      .type(fnsku8)
      .type('{enter}')
      .wait(3000)
  })

  it('filling the qty', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > [type="row-wrapper"] > [type="clone"] > [name="qty"] > input[name="qty"]:eq(7)')
      .clear()
      .type('50{enter}')
  })

  it('filling FNSKU field with correct value', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > [type="row-wrapper"] > [type="info-row"] > div > [name="pickup"] > [placeholder="FNSKU"]')
      .type(fnsku9)
      .type('{enter}')
      .wait(3000)
  })

  it('filling the qty', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > [type="row-wrapper"] > [type="clone"] > [name="qty"] > input[name="qty"]:eq(8)')
      .clear()
      .type('50{enter}')
  })

  it('filling FNSKU field with correct value', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > [type="row-wrapper"] > [type="info-row"] > div > [name="pickup"] > [placeholder="FNSKU"]')
      .type(fnsku10)
      .type('{enter}')
      .wait(3000)
  })

  it('filling the qty', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > [type="row-wrapper"] > [type="clone"] > [name="qty"] > input[name="qty"]:eq(9)')
      .clear()
      .type('50{enter}')
  })

  it('clicking Download Packer carton label', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"]  > [name="buttons-row"] > div > [name="download-packing-label"]')
      .click()
  })

  it('clicking Box completed', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"]  > [name="buttons-row"] > [name="save-edit"] > [name="box-completed"] > [name="box-completed"]')
      .wait(5000)
      .click()
  })

  it('filling pallet height field', () => {
    cy.get('[name="palletHeight"]:eq(1)')
      .clear()
      .type('40{enter}')
  })

  it('inserting correct box number', () => {
    cy.get('[name="boxNumber"]:eq(1)')
      .wait(3000)
      .clear()
      .type('1{enter}')
  })

  it('clicking save button', () => {
    cy.get('[name="palletSave"]:eq(1)')
      .wait(3000)
      .click()
  })

  it('checking the result', () => {
    cy.get('[name="palletEdit"]:eq(1)')
      .should('be.visible')
  })

  it('clicking pallet packed button', () => {
    cy.get('[name="palletCompled"]:eq(1)')
      .wait(3000)
      .click()
  })

  it('checking the result', () => {
    cy.get('[name="palletCompletedTextBlock"]:eq(1)')
      .should('be.visible')
  })

  it('clicking all pallets are packed button', () => {
    cy.get('[name="allPalletPackBtn"]')
      .should('be.visible')
      .click()
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
      .type(el.login)

    cy.get(el.passwordField)
      .clear()
      .type(el.password)

    cy.get(el.signInBtn)
      .click()
  })

  it('waiting for the page to be load', () => {
    cy.intercept('POST', 'https://www.wiunit.com/wp-content/plugins/ajax/api.php')
      .as('finalRequest')

    cy.wait('@finalRequest')
      .wait(3000)
  })

  it('going to orders history', () => {
    cy.get('.ohselecthide > a')
      .contains('Inbound shipments')
      .click({force: true})
  })

  it('waiting for the page to be load', () => {
    cy.intercept('POST', 'https://www.wiunit.com/wp-content/plugins/ajax/api.php')
      .as('finalRequest')

    cy.wait('@finalRequest')
      .wait(3000)
  })

  it('going to outbound shipments', () => {
    cy.get('[name="btn_out_ship"]')
      .should('be.visible')
      .click()
  })

  it('clicking view shipment button', () => {
    cy.get('[name="ordHisAction"][status="step_5"]:eq(0)')
      .should('be.visible')
      .click()
  })

  it('filling shipment id field', () => {
    cy.get('[name="pack_group_step5_block"].visible-flex > div > div > div > [name="fiveStepShipmentIDInput"]')
      .click()
      .should('be.visible')
      .clear()
      .type('11111{enter}')
  })

  it('filling ship to adress field', () => {
    cy.get('[name="pack_group_step5_block"].visible-flex > div > div > [name="fiveStepShipToAddressInput"]')
      .should('be.visible')
      .clear()
      .type('11111{enter}')
  })

  it('clicking package labels button', () => {
    cy.get('[name="pack_group_step5_block"].visible-flex > div > div > div > [name="upl_package_labels_btn"]')
      .should('be.visible')
      .click()
  })

  it('uploading file', () => {
    cy.get('input[name="preFba_Upload"]')
      .attachFile('NEW-SHIPMENT-BOX-LABEL-package-FBA16PMP6WQ8.pdf')

    cy.get('[slug="preFba_Upload"]')
      .should('be.visible')
      .click()
  })

  it('clicking pallet labels button', () => {
    cy.get('[name="pack_group_step5_block"].visible-flex > div > div >[name="upl_pallet_labels_btn"]')
      .should('be.visible')
      .click()
  })

  it('uploading file', () => {
    cy.get('input[name="preFba_Upload"]')
      .attachFile('NEW-SHIPMENT-BOX-LABEL-package-FBA16PMP6WQ8.pdf')

    cy.get('[slug="preFba_Upload"]')
      .should('be.visible')
      .click()
  })

  it('clicking BOL button', () => {
    cy.get('[name="pack_group_step5_block"].visible-flex > div > div > [name="upl_billoflading_btn"]')
      .should('be.visible')
      .click()
  })

  it('uploading file', () => {
    cy.get('input[name="preFba_Upload"]')
      .attachFile('NEW-SHIPMENT-BOX-LABEL-package-FBA16PMP6WQ8.pdf')

    cy.get('[slug="preFba_Upload"]')
      .should('be.visible')
      .click()
  })

  it('clicking complete order', () => {
    cy.get('[name="complete_order"]')
      .should('be.visible')
      .click()
  })

  it('checking the result', () => {
    cy.contains('Submitted!')
      .should('be.visible')

    cy.get('.visible-flex[slug="one-button-info"] > div > [type="btn-row"] > div > [name="questinary-yes"]')
      .should('be.visible')
      .click()
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
      .type(el.packerLogin)

    cy.get(el.passwordField)
      .clear()
      .type(el.packerPassword)

    cy.get(el.signInBtn)
      .click()
  })

  it('waiting for the page to be load', () => {
    cy.intercept('POST', 'https://www.wiunit.com/wp-content/plugins/ajax/api.php')
      .as('finalRequest')

    cy.wait('@finalRequest')
      .wait(3000)
  })

  it('clicking view shipment button', () => {
    cy.get('[name="ordHisActionBtn"]:eq(1)')
      .should('be.visible')
      .trigger('click')
  })

  it('checking the packing window to be visible', () => {
    cy.get('[type="picker_window"]')
      .should('be.visible')
  })

  it('click upload BOL scan', () => {
    cy.get('[name="uplBOLFileBtn"]')
      .click()

    cy.get('input[name="preFba_Upload"]')
      .attachFile('FBA16FQ26YW5-BOL.pdf')

    cy.get('button[name="download"][slug="preFba_Upload"]')
      .should('be.visible')
      .click()
  })

  it('checking the result', () => {
    cy.contains('Shipment completed. Status will change in Order history.')
      .should('be.visible')

    cy.contains('Continue')
      .should('be.visible')
      .click()
  })
})