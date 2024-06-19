describe('Draft',() => {
    
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
    it("Draft_Package_Section", function () {
        cy.get(':nth-child(7) > .heading-side-line').contains("Failed")
        cy.get(':nth-child(8) > app-files-grid > .mat-card > .file-head > .row > .starPosition > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
       cy.get('.mat-menu-content > .mat-focus-indicator').click()
       cy.get('.hyperlinkColor').click()
       cy.get(':nth-child(8) > app-files-grid > .mat-card > .file-head > .font16 > .file-name').click()
       cy.get('.hyperlinkColor').click()
    })

    it.only("Pagination", function () {
        // Alias the paginator range actions for easier reference
        cy.get(':nth-child(13) > .mat-paginator > .mat-paginator-outer-container > .mat-paginator-container > .mat-paginator-range-actions').as('paginatorRangeActions-Failed');
 
      //  Click the next page button
        // cy.get('@paginatorRangeActions-Failed').find('.mat-paginator-navigation-next').click();
        // cy.wait(5000)

        for(let n = 0; n < 30; n ++){
            cy.get('@paginatorRangeActions-Failed').find('.mat-paginator-navigation-next')
              .click()
          }
 
        // cy.get('@paginatorRangeActions-Failed').find('.mat-paginator-navigation-next').click();
        // cy.wait(5000)
 
        //  Click the previous page button
        // cy.get('@paginatorRangeActions-Failed').find('.mat-paginator-navigation-previous').click();
        // cy.wait(5000)
        for(let n = 0; n < 30; n ++){
            cy.get('@paginatorRangeActions-Failed').find('.mat-paginator-navigation-previous')
              .click()
          }
        // cy.get('@paginatorRangeActions-Failed').find('.mat-paginator-navigation-previous').click();
        // cy.wait(5000)
      // Example: Verify the paginator displays the expected range
       cy.get('@paginatorRangeActions-Failed').should('contain', '1 – 5 of '); // Adjust text to match the expected range format
      })
})