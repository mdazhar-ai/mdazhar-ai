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
        cy.get('#mat-input-2').type('Scheduler_Packged_147')
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


        cy.get('.save-btn').click()
        cy.get('.status').contains("Package has been Scheduled Successfully!")
        cy.get('.d-flex > .mat-focus-indicator').click()
        // cy.get('#mat-tab-content-0-3 > div > app-scheduler > div > form > div:nth-child(2) > div:nth-child(1) > div.col-12.m-1.font14 > ng-select > div > div > div.ng-input > input[type=text]').type("pkg_auto_package_237")
        // //("dmg_auto_package_237")


        //verify that schedule is done
        cy.get('#mat-tab-label-0-0').click()
        cy.get(':nth-child(19) > .heading-side-line').scrollIntoView()
        cy.get(':nth-child(20) > app-files-grid > .mat-card > .mat-card-content > .file-details > :nth-child(2)').contains("pkg_auto_package_237")
    })

})