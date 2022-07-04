/// <reference types="cypress" />

describe("datePicker", () => {
   const text = "You have waited for ten seconds, CONGRATULATIONS!"

  before("set log in", () => {
    cy.loginWithSession()
  })
  beforeEach("restore sesion and go to Waits", () => {
    cy.loginWithSession()
    cy.visit("https://pushing-front.vercel.app/")
    cy.get("#waitslink").click()
  })
  it("ProgressBar should be visible", () => {
    cy.get("[name='wait']").click()
    cy.get("[role='progressbar']").should("be.visible")
  })

  it("message should be visible after ten seconds", () => {
    cy.get("[name='wait']").click()
    cy.get("[name='message']", { timeout: 11000 }).should("be.visible")
  })

  it("ProgressBar should dissapear after ten seconds", () => {
    cy.get("[name='wait']").click()
    cy.get("[role='progressbar']", { timeout: 11000 }).should('not.exist')
  })

  it(`Message should contain ${text}`, () => {
    cy.get("[name='wait']").click()
    cy.get("[name='message']", { timeout: 11000 }).should('have.text', text)
  })



})
