describe('My First Test', () => {
    it('test1-verifytitle', () => {
    cy.visit("http://qaapp.swiftdata.ai/home")
    cy.title().should('eq','Swift Data')
    })

    it('test2- verify title negative', () => {
        cy.visit("http://qaapp.swiftdata.ai/home")
        cy.title().should('eq','SwiftData123')
        })
  })

