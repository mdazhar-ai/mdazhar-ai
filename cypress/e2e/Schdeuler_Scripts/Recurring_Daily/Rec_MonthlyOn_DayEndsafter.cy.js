describe('CreatePackage_Uploadfile',() => {
    it("uploadfle_Ingestion",()=>  {
        cy.viewport(1352,591)
        cy.visit("http://qaapp.swiftdata.ai/login")
         // Set viewport to 550px x 750px
        cy.get("[formcontrolname='email']").type("azharuddin.mohammad@amnetdigital.com")
        cy.get("[formcontrolname='password']").type("Icon@12345")
        cy.get("[class='mat-button-wrapper']").click()
        cy.get("[class='mat-tab-label-content']").contains("Dashboard")   //assertion
        cy.get('#mat-tab-label-0-3').click()
        cy.get('.ng-select-package > .ng-select-container').click()
        cy.get("[class='ng-option-label ng-star-inserted']")
        cy.contains('pkg_auto_package_237').click()
        //need to chenge everytime
        cy.get('#mat-input-2').type('Scheduler_Packged_300')
        cy.get('#time-select > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow').click()
        // cy.get('#time-select-panel').scrollIntoView
        cy.get('#mat-option-223 > .mat-option-text').scrollIntoView().click()
        //Frequncy selection
        cy.get('#frequency-select').click()
        cy.get('#mat-option-291 > .mat-option-text').click()
        cy.get('#mat-radio-10 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click()
        //date selection click
        cy.get('.col-3 > .row > .col-6 > .font14 > .d-flex').click()
        cy.get(':nth-child(2) > [data-mat-col="4"] > .mat-calendar-body-cell').click()
         //  After Secnario
        cy.get('#mat-radio-11 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click()
        cy.get('#mat-input-8').type('1')
        cy.get('.save-btn').click()
        cy.get('.d-flex > .mat-focus-indicator').click()
       //after again
         cy.get('#mat-input-2').scrollIntoView().clear().type('Scheduler_Packged_310')  //-change the name
         cy.get('#mat-input-8').clear().type("2")
         cy.get('.save-btn').scrollIntoView().click()
         cy.get('.d-flex > .mat-focus-indicator').click()
        //verify that schedule is done
         cy.reload() 
        cy.get('#mat-tab-label-0-0').click()
        cy.get(':nth-child(19) > .heading-side-line').scrollIntoView()
        cy.get(':nth-child(20) > app-files-grid > .mat-card > .mat-card-content > .file-details > :nth-child(2)').contains("pkg_auto_package_237")
     })

})


  