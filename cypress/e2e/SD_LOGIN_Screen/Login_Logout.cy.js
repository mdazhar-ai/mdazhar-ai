describe('LOGINLOGOUT',() => {
    it("LOGIN_LOGOUT",()=>  {
    
        cy.visit("http://qaapp.swiftdata.ai/login")
    
        cy.get("[formcontrolname='email']").type("azharuddin.mohammad@amnetdigital.com")
        cy.get("[formcontrolname='password']").type("Icon@12345")
        cy.get('.mat-icon').click()
        cy.get('.d-flex > .ng-untouched').click()
        cy.get("[class='mat-button-wrapper']").click()
        cy.get("[class='mat-tab-label-content']").contains("Dashboard")   //assertion
        cy.get('.mat-toolbar > .mat-focus-indicator').click()
        cy.get('.mat-menu-content > .mat-focus-indicator').click()
        cy.get('.font32').contains("Welcome to Swift Data!")
    })
    
    })