describe('Use cypress react selector to test the form', () => {
    const EMAILADDRESS = 'bugs.bunny@test.com';
    const PASSWORD = 'SUPER SECRET STUFFZ';

    beforeEach(() => {
        cy.visit('/');
        cy.waitForReact();
    });

    it('log email field properties', () => {
        cy.react('MyTextInput', { props: { field: { name: 'email' } } }).should(
            ($input) => {
                cy.log('react() is', $input);
                expect($input).to.have.length(1);

                let x = $input[0];
                cy.log('x is', x);
                cy.log('x.name is', x.name);
                cy.log('x.placeholder is', x.placeholder);
            }
        );
    });
    it('enter data into the fields', () => {
        cy.react('MyTextInput', { props: { field: { name: 'email' } } }).type(
            EMAILADDRESS
        );
        cy.react('MyTextInput', { props: { field: { name: 'password' } } }).type(
            PASSWORD
        );
    });

})