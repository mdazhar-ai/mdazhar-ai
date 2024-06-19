describe('CreatePackage_Uploadfile',() => {
    
    beforeEach('login',()=>{
        cy.visit("http://qaapp.swiftdata.ai/login")
        cy.viewport(1000,500) // Set viewport to 550px x 750px
        cy.get("[formcontrolname='email']").type("azharuddin.mohammad@amnetdigital.com")
        cy.get("[formcontrolname='password']").type("Icon@12345")
        cy.get("[class='mat-button-wrapper']").click()
        cy.get("[class='mat-tab-label-content']").contains("Dashboard")   //assertion
        cy.get("#mat-tab-label-0-1").click()
        cy.wait(4000)
        cy.get("[class='px-2 text-center']").click()
        cy.get("#mat-input-8").type("auto_package_126")
        cy.get("[class='mat-focus-indicator my-2 save-btn float-end same-width-pre mat-button mat-button-base']").click()
        cy.get('#mat-button-toggle-1-button > .mat-button-toggle-label-content').click()
        cy.get('#fileDropRef').selectFile("cypress\\fixtures\\Sourcefile\\wwi2.csv");
        //cy.readFile('cypress\\fixtures\\Sourcefile\\wwi2.csv') 
        //Ingestion COnfig
        cy.get('#mat-input-9').type("TYPE,ARCHITECTURE_LAYER,FILE_NAME,SOURCE_NAME,ACTION,KEY,VALUE\nENV,ALL,ALL,DATA360,ROOT_PATH,BUCKET_NAME,/.datalake\nENV,ALL,ALL,DATA360,CORE_KEY,QUALITY_RATING_COL_NAME,col_name=DL_QUALITY_RATING1 || col_value=0\n,,,,,,\nPRO,L0,SI,DATA360,Ingestion,INPUT_DETAILS,path=/mock_source/wwi2.csv || file_format = csv || db_test = False || header=true || sep=NA || dbname = NA || table_query = NA || user = NA || password = NA || port = NA || server = NA\nPRO,L0,SI,DATA360,Ingestion,OUTPUT_DETAILS,path=/output/Ingestion/wwi2/ || file_format = parquet || header=true || sep=NA || table_name=NA")
        cy.get('[style=""] > .mat-focus-indicator').click()
        cy.get('.d-grid > .mat-focus-indicator').click()
        cy.wait(45000)
        cy.get('.popupclose > .mat-focus-indicator > .mat-button-wrapper > img').click()
        cy.viewport(1000,550)
    })
    
    
    
    // it("Count VAlidation",()=>  {
        

    //     cy.get("tr");
    //     // cy.get('.table-footer').contains(" Total Columns: 31 of 31 | Total Rows: 100 of 399 : 399 ")
    //     // cy.get('.table-div').scrollTo(0, 100000)
    //     // cy.get('.table-footer').contains(" Total Columns: 31 of 31 | Total Rows: 200 of 399 : 399 ")
    //     // cy.get('.table-div').scrollTo(0, 100000)
    //     // cy.get('.table-footer').contains(" Total Columns: 31 of 31 | Total Rows: 300 of 399 : 399 ")
    //     // cy.get('.table-div').scrollTo(0, 100000)
    //     // cy.get('.table-footer').contains(" Total Columns: 31 of 31 | Total Rows: 400 of 399 : 399 ")
    // })

    it("Handling tables", function () {
        
        cy.get("tr")              //selects the row elements
        cy.get("td")              //selects the columns elements
         cy.get("tr td")           //selects the columns element
        })
})