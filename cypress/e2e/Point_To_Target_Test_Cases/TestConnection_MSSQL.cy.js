describe('Test Connection Successfull',() => {
    it("Test Connection Successfull",()=>  {
    
        cy.visit("http://qaapp.swiftdata.ai/login")
    
        cy.get("[formcontrolname='email']").type("azharuddin.mohammad@amnetdigital.com")
        cy.get("[formcontrolname='password']").type("Icon@12345")
        cy.get("[class='mat-button-wrapper']").click()
        cy.get("[class='mat-tab-label-content']").contains("Dashboard")   //assertion
        cy.get("#mat-tab-label-0-1").click()
        cy.wait(4000)
        cy.get("[class='px-2 text-center']").click()
        cy.get("#mat-input-8").type("auto_package_1")
        cy.get("[class='mat-focus-indicator my-2 save-btn float-end same-width-pre mat-button mat-button-base']").click()
        cy.get('#mat-button-toggle-2-button > .mat-button-toggle-label-content > .upload-files-select-container > .ms-2').click()
        cy.get('#mat-select-value-7').click()
        cy.wait(500)
        cy.get('#mat-option-298 > .mat-option-text').click()

        cy.get('#serverName').type("ec2-43-204-54-237.ap-south-1.compute.amazonaws.com")
        cy.get('#databaseName').type("shedulertestfromsi")
        cy.get('#userName').type("Dev_admin")
        cy.get('#password').type("dev_vY*H4Yt6u^NPv6cVEpg%enNzv2Hv0ecB")
        cy.get('.col > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.get(':nth-child(4) > .align-items-center').contains("Connection Successful")

    })
    
    // it("Test Connection Unsuccessfull",()=>  {
    // cy.wait(1000)
    //     cy.visit("http://qaapp.swiftdata.ai/login")
    
    //     cy.get("[formcontrolname='email']").type("azharuddin.mohammad@amnetdigital.com")
    //     cy.get("[formcontrolname='password']").type("Icon@12345")
    //     cy.get("[class='mat-button-wrapper']").click()
    //     cy.get("[class='mat-tab-label-content']").contains("Dashboard")   //assertion
    //     cy.get("#mat-tab-label-0-1").click()
    //     cy.get("[class='px-2 text-center']").click()
    //     cy.get("#mat-input-8").type("auto_package_1")
    //     cy.get("[class='mat-focus-indicator my-2 save-btn float-end same-width-pre mat-button mat-button-base']").click()
    //     cy.get('#mat-button-toggle-2-button > .mat-button-toggle-label-content > .upload-files-select-container > .ms-2').click()
    //     cy.get('#mat-select-value-7').click()
    //     cy.get('#mat-option-298 > .mat-option-text').click()
    //     //cy.get('#mat-option-299 > .mat-option-text').click()
    //     cy.get('#serverName').type("ec2-43-204-54-237.ap-south-1.compute.amazonaws.com")
    //     cy.get('#databaseName').type("shedulertestfromsi")
    //     cy.get('#userName').type("Dev_adminn")
    //     cy.get('#password').type("dev_vY*H4Yt6u^NPv6cVEpg%enNzv2Hv0ecB")
    //     cy.get('.col > .mat-focus-indicator > .mat-button-wrapper').click()
    //     cy.get(':nth-child(4) > .align-items-center').contains("Connection Unsuccessful")
    //     cy.get('#mat-select-value-7').click()

    // })
    })