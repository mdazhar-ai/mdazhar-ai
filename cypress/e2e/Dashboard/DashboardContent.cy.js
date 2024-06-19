describe('Dashboard contnets',() => {
    
    beforeEach('login',()=>{
        cy.visit("http://qaapp.swiftdata.ai/login")
       // cy.viewport(1000,660)
        cy.viewport(1352,591) // Set viewport to 550px x 750px
        cy.get("[formcontrolname='email']").type("azharuddin.mohammad@amnetdigital.com")
        cy.get("[formcontrolname='password']").type("Icon@12345")
        cy.get("[class='mat-button-wrapper']").click()
        cy.get("[class='mat-tab-label-content']").contains("Dashboard")   //assertion
        cy.wait(4000)
    })
    it("Dashboard ALL contents", function () {
        cy.get(':nth-child(7) > .heading-side-line').contains("Failed").should("be.visible")
        cy.get('.heading-side-line.font20.fw700.mb-3').contains("Successful").should("be.visible")
        cy.get(':nth-child(13) > .heading-side-line').scrollIntoView()
        cy.get(':nth-child(13) > .heading-side-line').contains("Draft").should('be.visible')
        cy.get(':nth-child(19) > .heading-side-line').scrollIntoView()
        cy.get(':nth-child(19) > .heading-side-line').contains("Scheduled Package/Job")
        cy.get('.m-0').scrollTo("top")
    })
})