/// <reference types="cypress" />

describe("Alerts", () => {
  let fileName = "BackTShirt.png"

  before("set log in", () => {
    cy.loginWithSession()
  })
  beforeEach("restore sesion and go to FileUpload", () => {
    cy.loginWithSession()
    cy.visit("https://pushing-front.vercel.app/")
    cy.get("#alertslink").click()
  })
  
  it("it verify alert", () => {
    cy.get("#alert").click()
    cy.on('window:alert', (t) => {
      expect(t).to.contains("This is an alert message");
    })
  })

  it("it verify confirmation message", () => {
    cy.get("[name='confirmationMessage']").click()
    cy.on('window:confirm', (str) => {
      expect(str).to.equal('This is a confirmation message')
    })
    cy.on('window:confirm', () => true)
    cy.get('#message').should('have.text', 'Ok')
  })

  it("it verify prompt", () => {
    cy.get("[name='prompt']").click()
    cy.window().then(($win) => {
      cy.stub($win, 'prompt').returns('This is a test text')
      cy.get("[name='prompt']").click()
    })
    cy.get('#message').should('have.text', 'This is a test text')

  })




})
