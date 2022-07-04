/// <reference types="cypress" />

describe("datePicker", () => {

  before("set log in" , () =>{
    cy.loginWithSession()
  })
  beforeEach("restore sesion and go to Date Picker", () =>{
    cy.loginWithSession()
    cy.visit("https://pushing-front.vercel.app/")
    cy.get("#formutilslink", { timeout: 10000 }).click()
    cy.get("#showDatePicker").click()
 })
    it("send date", () => {

        cy.get("#datePicker").click()
        cy.get("[aria-label ='Next Month']").click()
        cy.get("div").contains("4").click()
      })

      it("type date", () => {
        cy.get("#datePicker").clear().type("08/16/1995")
      })


})
