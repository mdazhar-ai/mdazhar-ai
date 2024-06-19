describe('Failed',() => {
    
    beforeEach('login',()=>{
        cy.visit("http://qaapp.swiftdata.ai/login")
       // cy.viewport(1000,660)
        cy.viewport(1352,591) // Set viewport to 550px x 750px
        cy.get("[formcontrolname='email']").type("azharuddin.mohammad@amnetdigital.com")
        cy.get("[formcontrolname='password']").type("Icon@12345")
        cy.get("[class='mat-button-wrapper']").click()
        cy.get("[class='mat-tab-label-content']").contains("Dashboard")   //assertion
        cy.wait(1000)

    })
    it("Scroll", function () {
        cy.get('.m-0').scrollTo("bottom")
        cy.wait(1000)
        cy.get('.m-0').scrollTo("top")

    })
})