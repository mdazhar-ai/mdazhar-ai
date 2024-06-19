describe('CSSLocators',() => {
    it("csslocators",()=>  {
    
        cy.visit("http://qaapp.swiftdata.ai/login")
    
        cy.get("[formcontrolname='email']").type("azharuddin.mohammad@amnetdigital.com")
        cy.get("[formcontrolname='password']").type("Icon@12345")
        cy.get("[class='mat-button-wrapper']").click()
        cy.get("[class='mat-tab-label-content']").contains("Dashboard")   //assertion
        cy.get("#mat-tab-label-0-1").click()
        cy.get("[class='px-2 text-center']").click()
        cy.get("#mat-input-8").type("auto_package_1")
        cy.get("[class='mat-focus-indicator my-2 save-btn float-end same-width-pre mat-button mat-button-base']").click()
        cy.get('#mat-button-toggle-1-button > .mat-button-toggle-label-content').click()
        cy.get('#fileDropRef').click
    })
    
    })