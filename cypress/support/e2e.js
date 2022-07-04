// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-file-upload'
import "cypress-react-selector";


// Cypress.Commands.add("loginWithSession",()=>{
//   cy.session("login",()=>{
//     cy.visit("https://pushing-front.vercel.app/")
//     cy.get("span").contains("Iniciá sesión").click()
//     cy.get("#user").type("fabrizioo")
//     cy.get("#pass").type("123456As!")
//     cy.get("button[type='submit']").click()
//     cy.get("h2:nth-child(1)").should('have.text', 'Pushing IT')
// })
//   })

  Cypress.Commands.add("loginWithSession",()=>{
  Cypress.session.clearAllSavedSessions()
  cy.session([], () => {
    cy.request({
      method: 'POST',
      url: 'https://pushing-it.herokuapp.com/api/login',
      body: { "username": "fabrizioo", "password": "123456As!" },
    }).then(({ body }) => {
      window.localStorage.setItem('token', body.token)
      window.localStorage.setItem('user', body.user.username)
    })
  })
})
