/// <reference types="cypress" />

describe("File Upload", () => {
  let fileName = "BackTShirt.png"

  before("set log in", () => {
    cy.loginWithSession()
  })
  beforeEach("restore sesion and go to FileUpload", () => {
    cy.loginWithSession()
    cy.visit("https://pushing-front.vercel.app/")
    cy.get("#fileuploadlink").click()
  })
  
  it(`${fileName} should be visible when selecting the file`, () => {
    cy.get("#fileUpload").attachFile(fileName)
    cy.get("#fileUploadButton").click()
    cy.get("[name='message']").should('have.text', fileName)
  })




})
