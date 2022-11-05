/// <reference types='cypress'/>

describe("Automação site Your Logo", () => {
    beforeEach(() => {
        
        cy.visit('http://automationpractice.com/index.php')
    })

    it("Validar title", () => {
        cy.title().should('be.equal', 'My Store')
    })

    it('Fazer login e logout', () => {
        const email = 'leonardo@teste.com';
        const password = '123456';
        
        cy.get('.login').click()
        cy.get('#email').type(`${email}`)
        cy.get('#passwd').type(`${password}`)
        cy.get('#SubmitLogin > span').click()
        cy.get('.account > span').should('be.visible').should('have.text', 'Leonardo Teste')

        cy.get('.logout').click()

        
    })
})