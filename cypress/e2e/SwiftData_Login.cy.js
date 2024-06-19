describe('CSSLocators',() => {
    it("csslocators",()=>  {
    
        cy.visit("http://qaapp.swiftdata.ai/login")
    
        cy.get("[formcontrolname='email']").type("azharuddin.mohammad@amnetdigital.com")
        cy.get("[formcontrolname='password']").type("Icon@12345")
        cy.get("[class='mat-button-wrapper']").click()
        cy.get("[class='mat-tab-label-content']").contains("Dashboard")   //assertion
    
    })
    
    })