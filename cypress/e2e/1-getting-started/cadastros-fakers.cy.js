/// <reference types='cypress'/>

import { faker } from '@faker-js/faker';

describe("Automação site Your Logo", () => {
    beforeEach(() => {
        
        cy.visit('http://automationpractice.com/index.php')
    })

    it("Validar title", () => {
        cy.title().should('be.equal', 'My Store')
    })

    it('Cadastros Fakers', () => {
        
        const longText = Cypress._.repeat('Teste ', 5)
        
        cy.get('.login').click()
        cy.get('#email_create').type(faker.internet.email())
        cy.get('#SubmitCreate > span').click()
        cy.get('#id_gender1').check().should('be.visible')
        cy.get('#customer_firstname').type(faker.name.firstName())
        cy.get('#customer_lastname').type(faker.name.lastName())
        cy.get('#email').should('be.visible')
        cy.get('#passwd').type(faker.internet.password())
        cy.get('#days').select('2').should('have.value', '2')
        cy.get('#months').select('February').should('have.value', '2')
        cy.get('#years').select('1984').should('have.value', '1984')

        cy.get('#company').type(faker.company.companyName())
        cy.get('#address1').type(faker.address.streetAddress())
        cy.get('#city').type(faker.address.city())
        cy.get('#id_state').select('California').should('have.value', '5')
        cy.get('#postcode').type('00000')
        cy.get('#id_country').select('United States')

        cy.get('#other').type(longText, {delay: 0})
        cy.get('#phone').type(faker.phone.phoneNumber('#########'))
        cy.get('#alias').type(faker.address.street())
        cy.get('#submitAccount > span').click()
        cy.get('.account > span').should('be.visible')


    })
})

