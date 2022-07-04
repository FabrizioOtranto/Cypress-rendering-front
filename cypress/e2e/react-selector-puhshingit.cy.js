
/// <reference types="cypress" />
describe('Use cypress react selector to test the form', () => {
    const EMAILADDRESS = 'bugs.bunny@test.com';
    const PASSWORD = 'SUPER SECRET STUFFZ';

    beforeEach(() => {
        cy.visit('https://pushing-front.vercel.app/');
        cy.waitForReact(2000, "#root");
    });

    it('log email field properties', () => {
        cy.react('*',{ props: { id: 'user', exact: true }})

        
    });
    xit('enter data into the fields', () => {
        cy.react('MyTextInput', { props: { field: { name: 'email' } } }).type(
            EMAILADDRESS
        );
        cy.react('MyTextInput', { props: { field: { name: 'password' } } }).type(
            PASSWORD
        );
    });

})