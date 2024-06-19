describe('Failed',() => {
    
    beforeEach('login',()=>{
        cy.visit("http://qaapp.swiftdata.ai/login")
       // cy.viewport(1000,660)
        cy.viewport(1352,591) // Set viewport to 550px x 750px
        cy.get("[formcontrolname='email']").type("azharuddin.mohammad@amnetdigital.com")
        cy.get("[formcontrolname='password']").type("Icon@12345")
        cy.get("[class='mat-button-wrapper']").click()
        cy.get("[class='mat-tab-label-content']").contains("Dashboard")   //assertion
        cy.wait(2000)

    })
    it("Failed_Package_Section", function () {
        cy.get(':nth-child(7) > .heading-side-line').contains("Failed")
        cy.get(':nth-child(8) > app-files-grid > .mat-card > .file-head > .row > .starPosition > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
       cy.get('.mat-menu-content > .mat-focus-indicator').click()
       cy.get('.hyperlinkColor').click()
       cy.get(':nth-child(8) > app-files-grid > .mat-card > .file-head > .font16 > .file-name').click()
       cy.get('.hyperlinkColor').click()
    })

    it("Pagination", function () {
        // Alias the paginator range actions for easier reference
     cy.get(':nth-child(7) > .mat-paginator > .mat-paginator-outer-container > .mat-paginator-container > .mat-paginator-range-actions')
     .as('paginatorRangeActions-Failed');


     //  Click the next page button
        // cy.get('@paginatorRangeActions-Failed').find('.mat-paginator-navigation-next').click();
        // cy.wait(5000)

        for(let n = 0; n < 2; n ++){
            cy.get('@paginatorRangeActions-Failed').find('.mat-paginator-navigation-next').click()
          }
 
        // cy.get('@paginatorRangeActions-Failed').find('.mat-paginator-navigation-next').click();
        // cy.wait(5000)
 
        //  Click the previous page button
        // cy.get('@paginatorRangeActions-Failed').find('.mat-paginator-navigation-previous').click();
        // cy.wait(5000)
        cy.wait(2000)
        for(let n = 0; n < 2; n ++){
            cy.get('@paginatorRangeActions-Failed').find('.mat-paginator-navigation-previous').click()
          }
        // cy.get('@paginatorRangeActions-Failed').find('.mat-paginator-navigation-previous').click();
        // cy.wait(5000)
 
    //   //  Click the next page button
    //     cy.get('@paginatorRangeActions-Failed').find('.mat-paginator-navigation-next').click();
    //     cy.wait(5000)
 
    //     cy.get('@paginatorRangeActions-Failed').find('.mat-paginator-navigation-next').click();
    //     cy.wait(5000)
 
    //     //  Click the previous page button
    //     cy.get('@paginatorRangeActions-Failed').find('.mat-paginator-navigation-previous').click();
    //     cy.wait(5000)
 
    //     cy.get('@paginatorRangeActions-Failed').find('.mat-paginator-navigation-previous').click();
    //     cy.wait(5000)
      // Example: Verify the paginator displays the expected range
       cy.get('@paginatorRangeActions-Failed').should('contain', '1 – 5 of '); // Adjust text to match the expected range format
      })

      it("Package_Details", function () {
        cy.get(':nth-child(8) > app-files-grid > .mat-card > .file-head > .font16 > .file-name').contains('dmg_jnhsdbv').should('be.visible')
        cy.get(':nth-child(8) > app-files-grid > .mat-card > .mat-card-content > .file-details > .d-flex').scrollIntoView()
       cy.get(':nth-child(8) > app-files-grid > .mat-card > .mat-card-content > .file-details > .d-flex').contains('Step:Destination').should('be.visible') 

           })



     it.only("Package_Details", function () {
           cy.get(':nth-child(8) > app-files-grid > .mat-card > .mat-card-content > .file-details > .d-flex').then(($el) => {
            if ($el.text().includes('Step:cccc') || $el.text().includes('Step:Collectionssss') || $el.text().includes('Step:Match & Merge') || $el.text().includes('Step:Pre-Processing') || $el.text().includes('Step:Profiling') || $el.text().includes('Step:Transformation') ||  $el.text().includes('Step:collection') ) {
              // Perform actions if either condition is true
              cy.log('One of the texts is present');
            }
            cy.get(':nth-child(8) > app-files-grid > .mat-card > .mat-card-content > .file-details > .d-flex').scrollIntoView().should("be.visible")
          });

        })



})