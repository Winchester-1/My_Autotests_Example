/// <reference types="cypress" />

import { el } from "../../support/base_elements"

describe('a lot of products SPD', () => {

  const firstProductIndex = 1;
  const secondProductIndex = 2;
  const thirdProductIndex = 3;
  const fourthProductIndex = 4;
  const fifthProductIndex = 5;
  const shipmentQty = '10';
  let fnsku1;
  let fnsku2;
  let fnsku3;
  let fnsku4;
  let fnsku5;


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

  it('checking the hazmat', () => {
    cy.get('[name="preFba_hazmat"]')
      .should('be.visible')
      .check()
      .should('be.checked')
  })

  it('filling qty field', () => {
    cy.get('[name="row_individual_qty"]:eq(1)')
      .should('be.visible')
      .clear()
      .type(shipmentQty)

    cy.get('[name="row_individual_qty"]:eq(2)')
      .should('be.visible')
      .clear()
      .type(shipmentQty)

    cy.get('[name="row_individual_qty"]:eq(3)')
      .should('be.visible')
      .clear()
      .type(shipmentQty)

    cy.get('[name="row_individual_qty"]:eq(4)')
      .should('be.visible')
      .clear()
      .type(shipmentQty)

    cy.get('[name="row_individual_qty"]:eq(5)')
      .should('be.visible')
      .clear()
      .type(shipmentQty)
  })
  
  it('clicking save&continue button', () => {
    cy.get('[name="saveStepOneBtn"]')
      .wait(3000)
      .click()
  })

  it('clicking use packing file checkbox', () => {
    cy.get('[name="useAmzFile"]')
      .should('be.visible')
      .click()
  })

  it('clicking Upload Product Labels File button', () => {
    cy.get('[name="upload_label"]')
      .should('be.visible')
      .click()
  })

  it('clicking upload amazon shipment file button', () => {
    cy.get('[name="step2UplBtnBlockItem"].visible-flex > div > [name="upload_amazon_block"] > [name="upload_amazon"]')
      .should('be.visible')
      .click()
  })

  it('choosing correct file', () => {
    let file = 'MultPackGroup 1.xlsx'
    cy.get('[name="preFba_Upload"][type="file"]')
      .attachFile(file)

    cy.get('[slug="preFba_Upload"]')
      .should('be.visible')
      .click()
  })

  it('click add new pack group button', () => {
    cy.get('[name="step2BlockItemAddBtn"]')
      .click()
  })

  it('clicking upload amazon shipment file button', () => {
    cy.get('[name="step2UplBtnBlockItem"].visible-flex > div > [name="upload_amazon_block"] > [name="upload_amazon"]:eq(1)')
      .should('be.visible')
      .click()
  })

  it('choosing correct file', () => {
    let file = 'MultPackGroup 2.xlsx'
    cy.get('[name="preFba_Upload"][type="file"]')
      .attachFile(file)

    cy.get('[slug="preFba_Upload"]')
      .should('be.visible')
      .click()
  })

  it('click add new pack group button', () => {
    cy.get('[name="step2BlockItemAddBtn"]')
      .click()
  })

  it('clicking upload amazon shipment file button', () => {
    cy.get('[name="step2UplBtnBlockItem"].visible-flex > div > [name="upload_amazon_block"] > [name="upload_amazon"]:eq(2)')
      .should('be.visible')
      .click()
  })

  it('choosing correct file', () => {
    let file = 'MultPackGroup 3.xlsx'
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
  })

  it('checking the box number', () => {
    cy.get('[name="item_box_consigments"].visible-flex > [name="box"] > [name="box"][type="checkbox"]:eq(0)')
      .check()
      .should('be.checked')
  })

  it('click add new box', () => {
    cy.get('[name="b_pack_group"].visible-flex > [name="b_pack_add_new_box_btn"]:eq(0)')
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

  it('clicking Download Packer carton label', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"]  > [name="buttons-row"] > div > [name="download-packing-label"]')
      .click()
  })

  it('clicking Box completed', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"]  > [name="buttons-row"] > [name="save-edit"] > [name="box-completed"] > [name="box-completed"]')
      .wait(5000)
      .click()
  })

  it('click add new box', () => {
    cy.get('[name="b_pack_group"].visible-flex > [name="b_pack_add_new_box_btn"]:eq(1)')
      .click()
  })

  it('filling the box weight input', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > div > [name="right-inputs-block"] > [name="weight"] > input:eq(1)')
      .clear()
      .type('20{enter}')
  })

  it('filling box dimentions fields', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > div > [name="right-inputs-block"] > [name="length"] > input:eq(1)')
      .clear()
      .type('20{enter}')

    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > div > [name="right-inputs-block"] > [name="width"] > input:eq(1)')
      .clear()
      .type('20{enter}')

    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > div > [name="right-inputs-block"] > [name="height"] > input:eq(1)')
      .clear()
      .type('20{enter}')
  })

  it('filling FNSKU field with correct value', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > [type="row-wrapper"] > [type="info-row"] > div > [name="pickup"] > [placeholder="FNSKU"]:eq(1)')
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
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > [type="row-wrapper"] > [type="info-row"] > div > [name="pickup"] > [placeholder="FNSKU"]:eq(1)')
      .type(fnsku4)
      .type('{enter}')
      .wait(3000)
  })

  it('filling the qty', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > [type="row-wrapper"] > [type="clone"] > [name="qty"] > input[name="qty"]:eq(3)')
      .clear()
      .type('100{enter}')
  })

  it('clicking Download Packer carton label', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"]  > [name="buttons-row"] > div > [name="download-packing-label"]:eq(1)')
      .click()
  })

  it('clicking Box completed', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"]  > [name="buttons-row"] > [name="save-edit"] > [name="box-completed"] > [name="box-completed"]:eq(1)')
      .wait(5000)
      .click()
  })

  it('click add new box', () => {
    cy.get('[name="b_pack_group"].visible-flex > [name="b_pack_add_new_box_btn"]:eq(2)')
      .click()
  })

  it('filling the box weight input', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > div > [name="right-inputs-block"] > [name="weight"] > input:eq(2)')
      .clear()
      .type('20{enter}')
  })

  it('filling box dimentions fields', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > div > [name="right-inputs-block"] > [name="length"] > input:eq(2)')
      .clear()
      .type('20{enter}')

    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > div > [name="right-inputs-block"] > [name="width"] > input:eq(2)')
      .clear()
      .type('20{enter}')

    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > div > [name="right-inputs-block"] > [name="height"] > input:eq(2)')
      .clear()
      .type('20{enter}')
  })

  it('filling FNSKU field with correct value', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > [type="row-wrapper"] > [type="info-row"] > div > [name="pickup"] > [placeholder="FNSKU"]:eq(2)')
      .type(fnsku5)
      .type('{enter}')
      .wait(3000)
  })

  it('filling the qty', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"] > div > [name="left-inputs-block"] > [type="row-wrapper"] > [type="clone"] > [name="qty"] > input[name="qty"]:eq(4)')
      .clear()
      .type('100{enter}')
  })

  it('clicking Download Packer carton label', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"]  > [name="buttons-row"] > div > [name="download-packing-label"]:eq(2)')
      .click()
  })

  it('clicking Box completed', () => {
    cy.get('[type="first-box-block"].visible-flex > [type="box-block"]  > [name="buttons-row"] > [name="save-edit"] > [name="box-completed"] > [name="box-completed"]:eq(2)')
      .wait(5000)
      .click()
  })

  it('clicking all boxes are packed button', () => {
    cy.get('[name="allBoxPackBtn"]')
      .wait(2000)
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
      .contains('Outbound shipments')
      .click({force: true})
  })

  it('waiting for the page to be load', () => {
    cy.intercept('POST', 'https://www.wiunit.com/wp-content/plugins/ajax/api.php')
      .as('finalRequest')

    cy.wait('@finalRequest')
      .wait(3000)
  })

  it('clicking view shipment button', () => {
    cy.get('[name="ordHisAction"][status="step_5"]:eq(0)')
      .should('be.visible')
      .click()
  })

  it('download pack group 1 file', () => {
    cy.get('[name="prep_pack_group"].visible-flex > div > div > [name="download_plan_mod"]:eq(0)')
      .click()
  })

  it('filling shipment id field', () => {
    cy.get('[name="pack_group_step5_block"].visible-flex > div > div > div > [name="fiveStepShipmentIDInput"]:eq(0)')
      .click()
      .should('be.visible')
      .clear()
      .type('44444{enter}')
  })

  it('filling ship to adress field', () => {
    cy.get('[name="pack_group_step5_block"].visible-flex > div > div > [name="fiveStepShipToAddressInput"]:eq(0)')
      .should('be.visible')
      .clear()
      .type('44444{enter}')
  })

  it('filling tracking bumber field', () => {
    cy.get('[name="shipping_labels_row"].visible-flex > [name="coastTrackNumBlock"] > [name="fiveStepTrackNumBlock"] > [name="trackNumInput"]:eq(0)')
      .click()
      .clear()
      .type('22211111{enter}')
  })

  it('clicking shipping labels button', () => {
    cy.get('[name="shipping_labels_row"].visible-flex > [name="upl_bot_block"] > [name="upl_shipping_labels_btn"]:eq(0)')
      .should('be.visible')
      .click()
  })

  it('uploading shipping label file', () => {
    cy.get('input[name="preFba_Upload"]')
      .attachFile('NEW-SHIPMENT-BOX-LABEL-package-FBA16PMP6WQ8.pdf')

    cy.get('[slug="preFba_Upload"]')
      .should('be.visible')
      .click()
  })

  it('clicking package labels button', () => {
    cy.get('[name="pack_group_step5_block"].visible-flex > div > div > div > [name="upl_package_labels_btn"]:eq(0)')
      .should('be.visible')
      .click()
  })

  it('uploading package label file', () => {
    cy.get('input[name="preFba_Upload"]')
      .attachFile('package-FBA16FZC5MBJ.pdf')

    cy.get('[slug="preFba_Upload"]')
      .should('be.visible')
      .click()
  })

  it('checking the hazmat button', () => {
    cy.get('[name="buyShippingForHazmat_block"].visible-flex > [name="buyShippingForHazmat"]:eq(0)')
      .should('be.visible')
      .and('not.be.checked')
  })

  it('download pack group 2 file', () => {
    cy.get('[name="prep_pack_group"].visible-flex > div > div > [name="download_plan_mod"]:eq(1)')
      .click()
  })

  it('filling shipment id field', () => {
    cy.get('[name="pack_group_step5_block"].visible-flex > div > div > div > [name="fiveStepShipmentIDInput"]:eq(1)')
      .click()
      .should('be.visible')
      .clear()
      .type('44444{enter}')
  })

  it('filling ship to adress field', () => {
    cy.get('[name="pack_group_step5_block"].visible-flex > div > div > [name="fiveStepShipToAddressInput"]:eq(1)')
      .should('be.visible')
      .clear()
      .type('44444{enter}')
  })

  it('filling tracking bumber field', () => {
    cy.get('[name="shipping_labels_row"].visible-flex > [name="coastTrackNumBlock"] > [name="fiveStepTrackNumBlock"] > [name="trackNumInput"]:eq(1)')
      .click()
      .clear()
      .type('22211111{enter}')
  })

  it('clicking shipping labels button', () => {
    cy.get('[name="shipping_labels_row"].visible-flex > [name="upl_bot_block"] > [name="upl_shipping_labels_btn"]:eq(1)')
      .should('be.visible')
      .click()
  })

  it('uploading shipping label file', () => {
    cy.get('input[name="preFba_Upload"]')
      .attachFile('NEW-SHIPMENT-BOX-LABEL-package-FBA16PMP6WQ8.pdf')

    cy.get('[slug="preFba_Upload"]')
      .should('be.visible')
      .click()
  })

  it('clicking package labels button', () => {
    cy.get('[name="pack_group_step5_block"].visible-flex > div > div > div > [name="upl_package_labels_btn"]:eq(1)')
      .should('be.visible')
      .click()
  })

  it('uploading package label file', () => {
    cy.get('input[name="preFba_Upload"]')
      .attachFile('package-FBA16FZC5MBJ.pdf')

    cy.get('[slug="preFba_Upload"]')
      .should('be.visible')
      .click()
  })

  it('checking the hazmat button', () => {
    cy.get('[name="buyShippingForHazmat_block"].visible-flex > [name="buyShippingForHazmat"]:eq(1)')
      .should('be.visible')
      .and('not.be.checked')
  })

  it('download pack group 3 file', () => {
    cy.get('[name="prep_pack_group"].visible-flex > div > div > [name="download_plan_mod"]:eq(2)')
      .click()
  })

  it('filling shipment id field', () => {
    cy.get('[name="pack_group_step5_block"].visible-flex > div > div > div > [name="fiveStepShipmentIDInput"]:eq(2)')
      .click()
      .should('be.visible')
      .clear()
      .type('44444{enter}')
  })

  it('filling ship to adress field', () => {
    cy.get('[name="pack_group_step5_block"].visible-flex > div > div > [name="fiveStepShipToAddressInput"]:eq(2)')
      .should('be.visible')
      .clear()
      .type('44444{enter}')
  })

  it('filling tracking bumber field', () => {
    cy.get('[name="shipping_labels_row"].visible-flex > [name="coastTrackNumBlock"] > [name="fiveStepTrackNumBlock"] > [name="trackNumInput"]:eq(2)')
      .click()
      .clear()
      .type('22211111{enter}')
  })

  it('clicking shipping labels button', () => {
    cy.get('[name="shipping_labels_row"].visible-flex > [name="upl_bot_block"] > [name="upl_shipping_labels_btn"]:eq(2)')
      .should('be.visible')
      .click()
  })

  it('uploading shipping label file', () => {
    cy.get('input[name="preFba_Upload"]')
      .attachFile('NEW-SHIPMENT-BOX-LABEL-package-FBA16PMP6WQ8.pdf')

    cy.get('[slug="preFba_Upload"]')
      .should('be.visible')
      .click()
  })

  it('clicking package labels button', () => {
    cy.get('[name="pack_group_step5_block"].visible-flex > div > div > div > [name="upl_package_labels_btn"]:eq(2)')
      .should('be.visible')
      .click()
  })

  it('uploading package label file', () => {
    cy.get('input[name="preFba_Upload"]')
      .attachFile('package-FBA16FZC5MBJ.pdf')

    cy.get('[slug="preFba_Upload"]')
      .should('be.visible')
      .click()
  })

  it('checking the hazmat button', () => {
    cy.get('[name="buyShippingForHazmat_block"].visible-flex > [name="buyShippingForHazmat"]:eq(2)')
      .should('be.visible')
      .and('not.be.checked')
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

  it('download shipping file group 1', () => {
    cy.get('[name="packGroupShipInfoRow"].visible-flex > [name="packGroupShipInfoRow_shipping_dwn"]:eq(0)')
      .click()
  })

  it('download shipping file group 2', () => {
    cy.get('[name="packGroupShipInfoRow"].visible-flex > [name="packGroupShipInfoRow_shipping_dwn"]:eq(1)')
      .click()
  })

  it('download shipping file group 3', () => {
    cy.get('[name="packGroupShipInfoRow"].visible-flex > [name="packGroupShipInfoRow_shipping_dwn"]:eq(2)')
      .click()
  })

  it('click complete button', () => {
    cy.get('[name="PackerBottomCompletedAfterPrint"]')
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