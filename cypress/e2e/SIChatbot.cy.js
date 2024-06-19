describe('CSSLocators',() => {
    it("loginsi",()=>  {
        cy.viewport(1051,482) // Set viewport to 550px x 750px
        cy.visit("http://newdevapp.swiftinsights.ai/#/login")
    
        cy.get("[formcontrolname='EMAIL_ADDRESS']").type("viz@wwi.com")
        cy.get("[formcontrolname='PASSWORD']").type("Amnet")
        cy.get("[class='mat-focus-indicator saveBtn width-100 mat-flat-button mat-button-base']").click()
        cy.get("[class='login-user-name expand']").contains("Hola Vizualization!")   //assertion
        cy.get('[routerlink="/qnachat"] > .mat-list-item-content').click()
        cy.get('.custom-input-group > .search').type("Hi")
        cy.get('.gradient-border').click()
        cy.wait(3000)
        cy.get('.AIbot-text').contains("Hello! Welcome to our platform. How can I assist you today?")
        
    })

    
    })