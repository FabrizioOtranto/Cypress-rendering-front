/// <reference types="cypress" />
import 'cypress-file-upload';

describe('database fixture', () => {
  before('test db', () => {
    cy.visit("http://localhost:3000/")
  })

  it.skip("register succesfuly", () => {
    cy.get("#user").type("danny1")
    cy.get("#pass").type("12345")
    cy.get("input[value='Male']").check({ force: true })
    cy.get("#day").select(0).should('have.value', '1')
    cy.get("#month").select("October").should('have.value', 'October')
    cy.get("#year").select("1995").should('have.value', '1995')
  })


})
