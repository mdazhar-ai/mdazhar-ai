describe('CreatePackage_Uploadfile',() => {
    it("UploadFIle_Ingestion",()=>  {
        
    
        cy.visit("http://qaapp.swiftdata.ai/login")
        cy.viewport(1000,500) // Set viewport to 550px x 750px
        cy.get("[formcontrolname='email']").type("azharuddin.mohammad@amnetdigital.com")
        cy.get("[formcontrolname='password']").type("Icon@12345")
        cy.get("[class='mat-button-wrapper']").click()
        cy.get("[class='mat-tab-label-content']").contains("Dashboard")   //assertion
        cy.get("#mat-tab-label-0-1").click()
        cy.wait(4000)
        cy.get("[class='px-2 text-center']").click()
        cy.get("#mat-input-8").type("auto_package_230")
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
        cy.get('.table-div').scrollTo(0, 400000)
        cy.wait(2000)
        cy.get('.table-div').scrollTo(0,400000)
        cy.get('.table-div').scrollTo(0,400000)
        cy.get('.table-div').scrollTo(0,400000)
        //cy.get('.table-div').scrollTo('bottom', { ensureScrollable: false })
        cy.get('.d-grid > .save-btn').click()
        cy.viewport(1051,488)
        cy.get('.skip').click()
        cy.wait(7000)
        cy.get('.skip').click()
        cy.wait(5000)
         //TransormationConfig
         cy.get('#mat-input-13').type("TYPE,ARCHITECTURE_LAYER,FILE_NAME,SOURCE_NAME,ACTION,KEY,VALUE\nENV,ALL,ALL,DATA360,ROOT_PATH,BUCKET_NAME,/.datalake\nENV,ALL,ALL,DATA360,CORE_KEY,QUALITY_RATING_COL_NAME,col_name=DL_QUALITY_RATING1 || col_value=0\n,,,,,,\nPRO,L1,SI,DATA360,SOURCE,INPUT_DETAILS,path=/output/Ingestion/wwi2/ || file_format = parquet || header=true || table_name=NA\nPRO,L1,SI,DATA360,SOURCE,OUTPUT_DETAILS,path=/output/DataQuality/wwi2/ || file_format = parquet || mode=overwrite || header= true || sep=NA ||save_as_Table=false || table_name=NA || prefix=\"\" || view_name=\"\"\n\nPRO,L1,SI,DATA360,QUALITY,QUERY1,rule_name = col_data_type_update_rule || columns = CustomerMobileNumber  || values = bigint\nPRO,L1,SI,DATA360,QUALITY,QUERY2,rule_name = col_data_type_update_rule || columns = Quantity  || values = int\nPRO,L1,SI,DATA360,QUALITY,QUERY3,rule_name = col_data_type_update_rule || columns = MRP_UnitPrice  || values = float\nPRO,L1,SI,DATA360,QUALITY,QUERY4,rule_name = col_data_type_update_rule || columns = TotalProductCost  || values = float\nPRO,L1,SI,DATA360,QUALITY,QUERY5,rule_name = col_data_type_update_rule || columns = SalesAmount  || values = float\nPRO,L1,SI,DATA360,QUALITY,QUERY6,rule_name = col_data_type_update_rule || columns = Target  || values = int\nPRO,L1,SI,DATA360,QUALITY,QUERY8,rule_name = col_data_type_update_rule || columns = TaxAmt  || values = float\nPRO,L1,SI,DATA360,QUALITY,QUERY10,rule_name = col_data_type_update_rule || columns = DiscountAmount  || values = float\nPRO,L1,SI,DATA360,QUALITY,QUERY13,rule_name = col_data_type_update_rule || columns = BillDate  || values = Date\nPRO,L1,SI,DATA360,QUALITY,QUERY11,rule_name = col_add_rule || columns = Level1Value  || values = Americas\nPRO,L1,SI,DATA360,CLEANSING,CLN_RULE_DATE_FORMAT1,\"src_col_name=date_format(to_date(BillDate,'d/M/yyyy'),'yyyy/d/M')||tgt_col_name= BillDate_New\"\nPRO,L1,SI,DATA360,CLEANSING,CLN_RULE_UPPER_CASE,\"src_col_name= StoreName ||tgt_col_name=StoreName_UPPER\"\nPRO,L1,SI,DATA360,QUALITY,QUERY2,\"rule_name = contact_valid_rule || src_columns = CustomerMobileNumber || target_columns = CustomerMobileNumber_stand || extensions = +91 || country_code = IN\"\nPRO,L1,SI,DATA360,CLEANSING,CLN_RULE_SPLIT,\"src_col_name=(Client_Customer,' ') ||tgt_col_name=Client_Customer_SPLIT_1,Client_Customer_SPLIT_2\"\nPRO,L1,SI,DATA360,CLEANSING,CLN_RULE_REPLACE,\"src_col_name=(DiscountAmount, '495', '295')||tgt_col_name= DiscountAmount_Updated\"\nPRO,L1,SI,DATA360,CLEANSING,CLN_RULE_ADD,\"src_col_name=(Quantity, QtyOnHand) ||tgt_col_name=Quantity_ADD\"\n\n")
         cy.viewport(1051,492)
         cy.get('app-quality-input-config > .mat-button').click()
         cy.viewport(1051,496)
         cy.get('.save-btn').click()
         cy.wait(55000)
         cy.viewport(1000,500)
         cy.get('.popupclose > .mat-focus-indicator > .mat-button-wrapper > img').click()
         cy.wait(1000)
         cy.get('.col-1 > .mat-focus-indicator > .mat-button-wrapper > img').click()
         cy.get(':nth-child(4) > tr > [width="370"]').contains("New Columns Added")
         cy.get(':nth-child(4) > tr > .valuePosition').contains("7")
         cy.get('.table-footer').contains("Total Columns: 39 of 39 | Total Rows: 100 of 399 : 399")
         cy.get('.save-btn').click()
         cy.wait(1000)
        //standradization config
        cy.get('#mat-input-16').type("TYPE,ARCHITECTURE_LAYER,FILE_NAME,SOURCE_NAME,ACTION,KEY,VALUE\nENV,ALL,ALL,DATA360,ROOT_PATH,BUCKET_NAME,/.datalake\nENV,ALL,ALL,DATA360,CORE_KEY,QUALITY_RATING_COL_NAME,col_name=DL_QUALITY_RATING1 || col_value=0\n,,,,,,\nPRO,L2,SI,DATA360,SOURCE,INPUT_DETAILS1,source=quality|| path=/output/DataQuality/wwi2/ || file_format = parquet || header=true || sep=NA || table_name=NA || view_name = wwi_src || query = select * from wwi_src\nPRO,L2,SI,DATA360,SOURCE,SQL_QUERY1,\"view_name = wwi_dim_view || query = select  StoreName,STOREEXCEL__StoreID,EmpID from wwi_src\"\nPRO,L2,SI,DATA360,SOURCE,SQL_QUERY2,\"view_name = wwi_contact_dim_view || query = select City,State,Country,Region from wwi_src\"\nPRO,L2,SI,DATA360,SOURCE,SQL_QUERY3,\"view_name = wwi_address_dim_view || query = select  DiscountAmount,MRP_UnitPrice,UnitsIn from wwi_src\"\nPRO,L2,SI,DATA360,SOURCE,OUTPUT_DETAILS1,path=/output/DataStandardization/wwi/wwidataI/ || file_format = csv || mode=overwrite || header= true || sep=NA ||save_as_Table=false || table_name=NA || view_name = wwi_dim_view\nPRO,L2,SI,DATA360,SOURCE,OUTPUT_DETAILS2,path=/output/DataStandardization/wwi/wwidataII/ || file_format = csv || mode=overwrite || header= true || sep=NA ||save_as_Table=false || table_name=NA || view_name = wwi_contact_dim_view\nPRO,L2,SI,DATA360,SOURCE,OUTPUT_DETAILS3,path=/output/DataStandardization/wwi/wwidataIII/ || file_format = csv || mode=overwrite || header= true || sep=NA ||save_as_Table=false || table_name=NA || view_name = wwi_address_dim_view")
        cy.get('app-standardization-input-confg > .mat-button').click()
        cy.viewport(1051,499)
        cy.get('.save-btn').click()
        cy.wait(45000)
        cy.get('.popupclose > .mat-focus-indicator > .mat-button-wrapper > img').click()
        cy.get('.col-1 > .mat-focus-indicator > .mat-button-wrapper > img').click()
        cy.get('#mat-checkbox-4 > .mat-checkbox-layout > .mat-checkbox-label').click().contains("wwi_dim_view")
        cy.get(':nth-child(3) > .mat-card > .mat-card-content').click()
        cy.get(':nth-child(4) > .mat-card > .mat-card-content').click
        cy.get('app-standardization-input-confg > .save-btn').click()
        
       
        
    })

    })