/// <reference types="cypress" />

describe("Slider", () => {

  before("Set log in" , () =>{
    cy.loginWithSession()
  })
  beforeEach("Restore sesion and go to Sliders", () =>{
    cy.loginWithSession()
    cy.visit("https://pushing-front.vercel.app/")
    cy.get("#formutilslink", { timeout: 10000 }).click()
    cy.get("#showSlider").click()
 })

  xit("Slider ", () => {
    cy.get('#volume').as('range').invoke('val', 11).trigger('change')
  })

  it("Slider ", () => {
    cy.get(".css-4u0l71").children('div').children('[id^="slider-thumb"]')
      .siblings('input').should('have.value', '50')
    cy.get(".css-4u0l71").children('div').children('.css-3mfjot').should('have.text', "50%")
    cy.get(".css-4u0l71").children('div').children('[id^="slider-thumb"]')
      .type("{rightarrow}")
      .type("{rightarrow}")
      .siblings('input')
      .should('have.value', '52')
    cy.get(".css-4u0l71").children('div').children('.css-3mfjot').should('have.text', "52%")
  })

  it("Slider click right", () => {
    cy.get('.css-4u0l71 .css-17m87zz').click('right')
    cy.get(".css-4u0l71").children('div').children('[id^="slider-thumb"]')
      .siblings('input')
      .should('have.value', '100')
    cy.get(".css-4u0l71").children('div').children('.css-3mfjot').should('have.text', "100%")
  })

  it("Slider click 8%", () => {
    cy.get('.css-4u0l71 .css-17m87zz').click(80, 0)
    cy.get(".css-4u0l71").children('div').children('[id^="slider-thumb"]')
      .siblings('input')
      .should('have.value', '8')
    cy.get(".css-4u0l71").children('div').children('.css-3mfjot').should('have.text', "8%")
  })


  it("Range Slider ", () => {
    cy.get("[id^='slider-root'] :nth-child(2)")
      .type("{leftarrow}")
      .type("{rightarrow}")
    cy.get("[id^='slider-root'] :nth-child(3)")
      .type("{rightarrow}")
      .type("{rightarrow}")
  })



})
