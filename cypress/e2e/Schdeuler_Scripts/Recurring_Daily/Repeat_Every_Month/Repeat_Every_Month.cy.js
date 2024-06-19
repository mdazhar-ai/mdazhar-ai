describe('LOGINSD',() => {
    it("Repeat_Every_1_Month_On this day Ends on Date",()=>  {
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
        cy.get('#mat-input-2').type('Repeat_Every_1_month _EndsonDate___0261')
        cy.get('#time-select > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow').click()
        // cy.get('#time-select-panel').scrollIntoView
        cy.get('#mat-option-223 > .mat-option-text').scrollIntoView().click()
        //Frequncy selection
        cy.get('#frequency-select').click()
        cy.get('#mat-option-294 > .mat-option-text').scrollIntoView()
        cy.get('#mat-option-294 > .mat-option-text').click()
        cy.get('#mat-select-value-7').click()
        cy.get('#mat-option-298 > .mat-option-text').click()
        cy.get('#mat-select-value-9').click()
        //click on month
        cy.get('#mat-option-302 > .mat-option-text').click()
        //########### Monthly on a day
        cy.get('#mat-select-value-11').click()
        cy.get('#mat-option-304 > .mat-option-text').click()
       //Ends on  selection click
       cy.get('.col-3 > .row > .col-2').click()
       cy.get('#mat-input-7').click()
       cy.get(':nth-child(3) > [data-mat-col="0"] > .mat-calendar-body-cell').click()
        cy.get('.save-btn').click()
        cy.get('.status').contains("Package has been Scheduled Successfully!")
        cy.get('.d-flex > .mat-focus-indicator').click()
        // cy.get('#mat-tab-content-0-3 > div > app-scheduler > div > form > div:nth-child(2) > div:nth-child(1) > div.col-12.m-1.font14 > ng-select > div > div > div.ng-input > input[type=text]').type("pkg_auto_package_237")
        // //("dmg_auto_package_237")
        //verify that schedule is done
        cy.reload()
        cy.get('#mat-tab-label-0-0').click()
        cy.get(':nth-child(19) > .heading-side-line').scrollIntoView()
        cy.get(':nth-child(20) > app-files-grid > .mat-card > .mat-card-content > .file-details > :nth-child(2)').contains("pkg_auto_package_237")

      //###########################Monthly On the first selected date  dropdown
      cy.get(':nth-child(20) > app-files-grid > .mat-card > .file-head > .font16 > .file-name').click()
      cy.get('#mat-select-value-11 > .mat-select-value-text > .mat-select-min-line').click()
      cy.wait(4000)
      //click on 
      cy.get('#mat-option-596 > .mat-option-text').click()
      cy.get('.save-btn').click()
        cy.get('.status').contains("Package has been Scheduled Successfully!")
        cy.get('.d-flex > .mat-focus-indicator').click()
        // cy.get('#mat-tab-content-0-3 > div > app-scheduler > div > form > div:nth-child(2) > div:nth-child(1) > div.col-12.m-1.font14 > ng-select > div > div > div.ng-input > input[type=text]').type("pkg_auto_package_237")
        // //("dmg_auto_package_237")
        //verify that schedule is done
        cy.reload()
        cy.get('#mat-tab-label-0-0').click()
        cy.get(':nth-child(19) > .heading-side-line').scrollIntoView()
        cy.get(':nth-child(20) > app-files-grid > .mat-card > .mat-card-content > .file-details > :nth-child(2)').contains("pkg_auto_package_237")

        //####################Monthly on the last selected date selected date  dropdown
      cy.get(':nth-child(20) > app-files-grid > .mat-card > .file-head > .font16 > .file-name').click()
      cy.get('#mat-select-value-11 > .mat-select-value-text > .mat-select-min-line').click()
      cy.wait(4000)
      cy.get('#mat-option-594 > .mat-option-text').click()
      cy.get('.save-btn').click()
        cy.get('.status').contains("Package has been Scheduled Successfully!")
        cy.get('.d-flex > .mat-focus-indicator').click()
        // cy.get('#mat-tab-content-0-3 > div > app-scheduler > div > form > div:nth-child(2) > div:nth-child(1) > div.col-12.m-1.font14 > ng-select > div > div > div.ng-input > input[type=text]').type("pkg_auto_package_237")
        // //("dmg_auto_package_237")
        //verify that schedule is done
        cy.reload()
        cy.get('#mat-tab-label-0-0').click()
        cy.get(':nth-child(19) > .heading-side-line').scrollIntoView()
        cy.get(':nth-child(20) > app-files-grid > .mat-card > .mat-card-content > .file-details > :nth-child(2)').contains("pkg_auto_package_237")
     })





//########################### Repeat Every 2 months

     it("Repeat_Every_2_Month_On this day Ends on Date",()=>  {
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


        //need to change everytime
        cy.get('#mat-input-2').type('Repeat_Every_2_month _Ends on Date___234')
        cy.get('#time-select > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow').click()


        // cy.get('#time-select-panel').scrollIntoView
        cy.get('#mat-option-223 > .mat-option-text').scrollIntoView().click()
        //Frequncy selection
        cy.get('#frequency-select').click()
        cy.get('#mat-option-294 > .mat-option-text').scrollIntoView()
        cy.get('#mat-option-294 > .mat-option-text').click()
        cy.get('#mat-select-value-7').click()
        cy.get('#mat-option-299 > .mat-option-text').click()
        cy.get('#mat-select-value-9').click()

        //click on month
        cy.get('#mat-option-302 > .mat-option-text').click()


        //########### Monthly on a day
        cy.get('#mat-select-value-11').click()
        cy.get('#mat-option-304 > .mat-option-text').click()
       //Ends on  selection click
       cy.get('.col-3 > .row > .col-2').click()
       cy.get('#mat-input-7').click()
       cy.get(':nth-child(3) > [data-mat-col="0"] > .mat-calendar-body-cell').click()

        cy.get('.save-btn').click()
        cy.wait(4000)
        cy.get('.status').contains("Package has been Scheduled Successfully!")
        cy.get('.d-flex > .mat-focus-indicator').click()
        // cy.get('#mat-tab-content-0-3 > div > app-scheduler > div > form > div:nth-child(2) > div:nth-child(1) > div.col-12.m-1.font14 > ng-select > div > div > div.ng-input > input[type=text]').type("pkg_auto_package_237")
        // //("dmg_auto_package_237")
        //verify that schedule is done
        cy.reload()
        cy.get('#mat-tab-label-0-0').click()
        cy.get(':nth-child(19) > .heading-side-line').scrollIntoView()
        cy.get(':nth-child(20) > app-files-grid > .mat-card > .mat-card-content > .file-details > :nth-child(2)').contains("pkg_auto_package_237")

      //###########################Monthly On the first selected date  dropdown
      cy.get(':nth-child(20) > app-files-grid > .mat-card > .file-head > .font16 > .file-name').click()
      cy.get('#mat-select-value-11 > .mat-select-value-text > .mat-select-min-line').click()
      cy.get('#mat-option-593 > .mat-option-text').click()
      cy.get('.save-btn').click()
        cy.get('.status').contains("Package has been Scheduled Successfully!")
        cy.get('.d-flex > .mat-focus-indicator').click()
        // cy.get('#mat-tab-content-0-3 > div > app-scheduler > div > form > div:nth-child(2) > div:nth-child(1) > div.col-12.m-1.font14 > ng-select > div > div > div.ng-input > input[type=text]').type("pkg_auto_package_237")
        // //("dmg_auto_package_237")
        //verify that schedule is done
        cy.reload()
        cy.get('#mat-tab-label-0-0').click()
        cy.get(':nth-child(19) > .heading-side-line').scrollIntoView()
        cy.get(':nth-child(20) > app-files-grid > .mat-card > .mat-card-content > .file-details > :nth-child(2)').contains("pkg_auto_package_237")

        //####################Monthly on the last selected date selected date  dropdown
      cy.get(':nth-child(20) > app-files-grid > .mat-card > .file-head > .font16 > .file-name').click()
      cy.get('#mat-select-value-11 > .mat-select-value-text > .mat-select-min-line').click()
      cy.get('#mat-option-594 > .mat-option-text').click()
      cy.get('.save-btn').click()
        cy.get('.status').contains("Package has been Scheduled Successfully!")
        cy.get('.d-flex > .mat-focus-indicator').click()
        // cy.get('#mat-tab-content-0-3 > div > app-scheduler > div > form > div:nth-child(2) > div:nth-child(1) > div.col-12.m-1.font14 > ng-select > div > div > div.ng-input > input[type=text]').type("pkg_auto_package_237")
        // //("dmg_auto_package_237")
        //verify that schedule is done
        cy.reload()
        cy.get('#mat-tab-label-0-0').click()
        cy.get(':nth-child(19) > .heading-side-line').scrollIntoView()
        cy.get(':nth-child(20) > app-files-grid > .mat-card > .mat-card-content > .file-details > :nth-child(2)').contains("pkg_auto_package_237")
     })




//########################### Repeat_Every_2_Month_ends after evry 1 and 2 occurance

     it.only("Repeat_Every_2_Month_ends after evry 1 and 2 occurance",()=>  {
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


        //need to change everytime Repeat_Every_2_Month_ends after evry 1 and 2 occurance__004
        cy.get('#mat-input-2').type('Repeat_Every_2_Month_endsafterevry1and2_028')
        cy.get('#time-select > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow').click()


        // cy.get('#time-select-panel').scrollIntoView
        cy.get('#mat-option-223 > .mat-option-text').scrollIntoView().click()
        //Frequncy selection
        cy.get('#frequency-select').click()
        cy.get('#mat-option-294 > .mat-option-text').scrollIntoView()
        cy.get('#mat-option-294 > .mat-option-text').click()
        cy.get('#mat-select-value-7').click()
        cy.get('#mat-option-299 > .mat-option-text').click()
        cy.get('#mat-select-value-9').click()

        //click on month
        cy.get('#mat-option-302 > .mat-option-text').click()


        //########### Monthly on a day
        cy.get('#mat-select-value-11').click()
        cy.get('#mat-option-304 > .mat-option-text').click()
       //  After Secnario
       cy.get('#mat-radio-11 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click()
       cy.get('#mat-input-8').type('1')
       cy.get('.save-btn').click()
       cy.get('.d-flex > .mat-focus-indicator').click()
      //after again
        cy.get('#mat-input-2').scrollIntoView().clear().type('Repeat_Every_2_Month_ends_029')  //-change the name
        cy.get('#mat-input-8').clear().type("2")
        cy.get('.save-btn').scrollIntoView().click()
        cy.get('.d-flex > .mat-focus-indicator').click()
       //verify that schedule is done
       cy. reload() 
       cy.get('#mat-tab-label-0-0').click()
       cy.get(':nth-child(19) > .heading-side-line').scrollIntoView()
       cy.get(':nth-child(20) > app-files-grid > .mat-card > .mat-card-content > .file-details > :nth-child(2)').contains("pkg_auto_package_237")

      //###########################Monthly On the first selected date  dropdown
      cy.get(':nth-child(20) > app-files-grid > .mat-card > .file-head > .font16 > .file-name').click()
      cy.get('#mat-select-value-11 > .mat-select-value-text > .mat-select-min-line').click()
      cy.wait(3000)
      cy.get('#mat-option-596 > .mat-option-text').click()
      cy.get('.save-btn').click()
        cy.get('.status').contains("Package has been Scheduled Successfully!")
        cy.get('.d-flex > .mat-focus-indicator').click()
        // cy.get('#mat-tab-content-0-3 > div > app-scheduler > div > form > div:nth-child(2) > div:nth-child(1) > div.col-12.m-1.font14 > ng-select > div > div > div.ng-input > input[type=text]').type("pkg_auto_package_237")
        // //("dmg_auto_package_237")
        //verify that schedule is done
        cy.reload()
        cy.get('#mat-tab-label-0-0').click()
        cy.get(':nth-child(19) > .heading-side-line').scrollIntoView()
        cy.get(':nth-child(20) > app-files-grid > .mat-card > .mat-card-content > .file-details > :nth-child(2)').contains("pkg_auto_package_237")

        //####################Monthly on the last selected date selected date  dropdown
      cy.get(':nth-child(20) > app-files-grid > .mat-card > .file-head > .font16 > .file-name').click()
      cy.get('#mat-select-value-11 > .mat-select-value-text > .mat-select-min-line').click()
      cy.get('#mat-option-594 > .mat-option-text').click()
      cy.get('.save-btn').click()
        cy.get('.status').contains("Package has been Scheduled Successfully!")
        cy.get('.d-flex > .mat-focus-indicator').click()
        // cy.get('#mat-tab-content-0-3 > div > app-scheduler > div > form > div:nth-child(2) > div:nth-child(1) > div.col-12.m-1.font14 > ng-select > div > div > div.ng-input > input[type=text]').type("pkg_auto_package_237")
        // //("dmg_auto_package_237")
        //verify that schedule is done
        cy.reload()
        cy.get('#mat-tab-label-0-0').click()
        cy.get(':nth-child(19) > .heading-side-line').scrollIntoView()
        cy.get(':nth-child(20) > app-files-grid > .mat-card > .mat-card-content > .file-details > :nth-child(2)').contains("pkg_auto_package_237")
     })
    
    })






  