describe('CreatePackage_Uploadfile',() => {
    it("UploadFIle_Ingestion",()=>  {
        
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
        //chnageeverytime
        cy.get('#mat-input-2').type('Scheduler_Packge_101')
        cy.get('#time-select > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow').click()
        cy.get('#mat-option-0 > .mat-option-text').click()
        cy.get('.save-btn').click()
        cy.get('.status').contains("Package has been Scheduled Successfully!")
        // cy.get('#mat-tab-content-0-3 > div > app-scheduler > div > form > div:nth-child(2) > div:nth-child(1) > div.col-12.m-1.font14 > ng-select > div > div > div.ng-input > input[type=text]').type("pkg_auto_package_237")
        // //("dmg_auto_package_237")


    })

})