describe('JsonPackagecreation.cy',() => {
    it("UploadFIle_Ingestion",()=>  {
        let packageNumber = 1;
      
        beforeEach(() => {
    
        cy.visit("http://qaapp.swiftdata.ai/login")
        cy.viewport(1352,591) // Set viewport to 550px x 750px
        cy.get("[formcontrolname='email']").type("azharuddin.mohammad@amnetdigital.com")
        cy.get("[formcontrolname='password']").type("Icon@12345")
        cy.get("[class='mat-button-wrapper']").click()
        cy.get("[class='mat-tab-label-content']").contains("Dashboard")   //assertion
        cy.get("#mat-tab-label-0-1").click()
        cy.wait(4000)
        cy.get("[class='px-2 text-center']").click()


        

      
      cy.get("#mat-input-8").type(`JsonPackagecreation_auto_package_000${packageNumber}`);
      packageNumber++;
       });


        //cy.get("#mat-input-8").type("JsonPackagecreation_auto_package_005")
        cy.get("[class='mat-focus-indicator my-2 save-btn float-end same-width-pre mat-button mat-button-base']").click()
        cy.get('#mat-button-toggle-1-button > .mat-button-toggle-label-content').click()
        cy.get('#fileDropRef').selectFile("cypress\\fixtures\\Sourcefile\\ORSDemoData.csv");
        //cy.readFile('cypress\\fixtures\\Sourcefile\\wwi2.csv') 
        //Ingestion COnfig
        cy.get('#mat-input-9').type("{\n  \"generic\": [\n    {\n      \"TYPE\": \"ENV\",\n      \"ARCHITECTURE_LAYER\": \"ALL\",\n      \"FILE_NAME\": \"ALL\",\n      \"SOURCE_NAME\": \"DATA360\",\n      \"ACTION\": \"ROOT_PATH\",\n      \"KEY\": \"BUCKET_NAME\",\n      \"VALUE\": \"/.datalake\"\n    },\n    {\n      \"TYPE\": \"ENV\",\n      \"ARCHITECTURE_LAYER\": \"ALL\",\n      \"FILE_NAME\": \"ALL\",\n      \"SOURCE_NAME\": \"DATA360\",\n      \"ACTION\": \"CORE_KEY\",\n      \"KEY\": \"QUALITY_RATING_COL_NAME\",\n      \"VALUE\": {\n        \"col_name\": \"DL_QUALITY_RATING1\",\n        \"col_value\": 0\n      }\n    }\n  ],\n  \"files\": [\n      {\n      \"TYPE\": \"ENV\",\n      \"ARCHITECTURE_LAYER\": \"ALL\",\n      \"FILE_NAME\": \"ALL\",\n      \"SOURCE_NAME\": \"DATA360\",\n      \"ACTION\": \"ROOT_PATH\",\n      \"KEY\": \"BUCKET_NAME\",\n      \"VALUE\": \"/.datalake\"\n    },\n    {\n      \"TYPE\": \"PRO\",\n      \"ARCHITECTURE_LAYER\": \"L0\",\n      \"FILE_NAME\": \"ORSDemoData\",\n      \"SOURCE_NAME\": \"DATA360\",\n      \"ACTION\": \"Ingestion\",\n      \"KEY\": \"INPUT_DETAILS\",\n      \"VALUE\": {\n        \"path\": \"/mock_source/ORSDemoData.csv\",\n        \"file_format\": \"csv\"\n      }\n    },\n    {\n      \"TYPE\": \"PRO\",\n      \"ARCHITECTURE_LAYER\": \"L0\",\n      \"FILE_NAME\": \"ORSDemoData\",\n      \"SOURCE_NAME\": \"DATA360\",\n      \"ACTION\": \"Ingestion\",\n      \"KEY\": \"OUTPUT_DETAILS\",\n      \"VALUE\": {\n        \"path\": \"/output/Ingestion/ORSDemoData/\",\n        \"file_format\": \"parquet\",\n                \"notify_to\": \"azharuddin.mohammad@amnetdigital.com\",\n                \"notification_message\": \"Ingestion for ORSDEMODATA ran Successfully for WSD\"\n      }\n    }\n  ]\n}\n"    )
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
        //Preprocess Configs
        cy.get('#mat-input-11').type("{\n  \"generic\": [\n    {\n      \"TYPE\": \"ENV\",\n      \"ARCHITECTURE_LAYER\": \"ALL\",\n      \"FILE_NAME\": \"ALL\",\n      \"SOURCE_NAME\": \"DATA360\",\n      \"ACTION\": \"ROOT_PATH\",\n      \"KEY\": \"BUCKET_NAME\",\n      \"VALUE\": \"/.datalake\"\n    },\n    {\n      \"TYPE\": \"ENV\",\n      \"ARCHITECTURE_LAYER\": \"ALL\",\n      \"FILE_NAME\": \"ALL\",\n      \"SOURCE_NAME\": \"DATA360\",\n      \"ACTION\": \"ROOT_PATH\",\n      \"KEY\": \"BUCKET_NAME\",\n      \"VALUE\": {\n        \"col_name\": \"DL_QUALITY_RATING1\",\n        \"col_value\": 0\n      }\n    }\n  ],\n  \"files\": [\n    {\n      \"TYPE\": \"ENV\",\n      \"ARCHITECTURE_LAYER\": \"ALL\",\n      \"FILE_NAME\": \"ALL\",\n      \"SOURCE_NAME\": \"DATA360\",\n      \"ACTION\": \"ROOT_PATH\",\n      \"KEY\": \"BUCKET_NAME\",\n      \"VALUE\": \"/.datalake\"\n    },\n    {\n      \"TYPE\": \"PRO\",\n      \"ARCHITECTURE_LAYER\": \"L0\",\n      \"FILE_NAME\": \"PARTY_7KB\",\n      \"SOURCE_NAME\": \"DATA360\",\n      \"ACTION\": \"preprocessing\",\n      \"KEY\": \"INPUT_DETAILS\",\n      \"VALUE\": {\n        \"path\": \"/output/Ingestion/ORSDemoData/\",\n        \"file_format\": \"parquet\"\n      }\n    },\n    {\n      \"TYPE\": \"PRO\",\n      \"ARCHITECTURE_LAYER\": \"L0\",\n      \"FILE_NAME\": \"PARTY_7KB\",\n      \"SOURCE_NAME\": \"DATA360\",\n      \"ACTION\": \"preprocessing\",\n      \"KEY\": \"col_length_rule\",\n      \"VALUE\": {\n        \"col_length\": 43\n      }\n    },\n    {\n      \"TYPE\": \"PRO\",\n      \"ARCHITECTURE_LAYER\": \"L0\",\n      \"FILE_NAME\": \"PARTY_7KB\",\n      \"SOURCE_NAME\": \"DATA360\",\n      \"ACTION\": \"preprocessing\",\n      \"KEY\": \"data_type_rule\",\n      \"VALUE\": {\n        \"col_dtype\": \"string;string;string;string;string;string;string;string;string;string;string;string;sting;string;string;string;string;string;string;string;string;string;string;string;string;string;sting;string;string;string;string;string;string;string;string;string;string;string;string;string;string;string;string\"\n      }\n    },\n    {\n      \"TYPE\": \"PRO\",\n      \"ARCHITECTURE_LAYER\": \"L0\",\n      \"FILE_NAME\": \"PARTY_7KB\",\n      \"SOURCE_NAME\": \"DATA360\",\n      \"ACTION\": \"preprocessing\",\n      \"KEY\": \"OUTPUT_DETAILS\",\n      \"VALUE\": {\n        \"path\": \"/output/preprocessing/ORSDemoData/\",\n        \"file_format\": \"csv\",\n        \"notify_to\": \"azharuddin.mohammad@amnetdigital.com\",\n        \"notification_message\": \"Preprocess for ORSDEMODATA ran Successfully for WSD\"\n      }\n    }\n  ]\n}\n")
        cy.wait(500)
        cy.get('app-pre-input-config > .mat-button').click()
        cy.get('.save-btn').click()
        cy.wait(40000)
        cy.get('.popupclose > .mat-focus-indicator > .mat-button-wrapper > img').click()
        cy.get('.col-1 > .mat-focus-indicator > .mat-button-wrapper > img').click()
        cy.get(':nth-child(1) > [width="370"]').contains("Expected Column Count")
        cy.get('.save-btn').click()
        cy.wait(1000)
        //Profiling Configs
        cy.get('#mat-input-14').type("{\n  \"generic\": [\n    {\n      \"TYPE\": \"ENV\",\n      \"ARCHITECTURE_LAYER\": \"ALL\",\n      \"FILE_NAME\": \"ALL\",\n      \"SOURCE_NAME\": \"DATA360\",\n      \"ACTION\": \"ROOT_PATH\",\n      \"KEY\": \"BUCKET_NAME\",\n      \"VALUE\": \"/.datalake\"\n    },\n    {\n      \"TYPE\": \"ENV\",\n      \"ARCHITECTURE_LAYER\": \"ALL\",\n      \"FILE_NAME\": \"ALL\",\n      \"SOURCE_NAME\": \"DATA360\",\n      \"ACTION\": \"ROOT_PATH\",\n      \"KEY\": \"BUCKET_NAME\",\n      \"VALUE\": {\n        \"col_name\": \"DL_QUALITY_RATING1\",\n        \"col_value\": 0\n      }\n    }\n  ],\n  \"files\": [\n    {\n      \"TYPE\": \"ENV\",\n      \"ARCHITECTURE_LAYER\": \"ALL\",\n      \"FILE_NAME\": \"ALL\",\n      \"SOURCE_NAME\": \"DATA360\",\n      \"ACTION\": \"ROOT_PATH\",\n      \"KEY\": \"BUCKET_NAME\",\n      \"VALUE\": \"/.datalake\"\n    },\n    {\n        \"TYPE\": \"PRO\",\n        \"ARCHITECTURE_LAYER\": \"L0\",\n        \"FILE_NAME\": \"PARTY_7KB\",\n        \"SOURCE_NAME\": \"DATA360\",\n        \"ACTION\": \"SOURCE\",\n        \"KEY\": \"INPUT_DETAILS\",\n        \"VALUE\": {\n            \"path\": \"/output/Ingestion/ORSDemoData/\",\n            \"file_format\": \"parquet\"\n        }\n    },\n    {\n        \"TYPE\": \"PRO\",\n        \"ARCHITECTURE_LAYER\": \"L0\",\n        \"FILE_NAME\": \"PARTY_7KB\",\n        \"SOURCE_NAME\": \"DATA360\",\n        \"ACTION\": \"SOURCE\",\n        \"KEY\": \"OUTPUT_DETAILS\",\n        \"VALUE\": {\n            \"path\": \"/output/DataProfiling/ORSDemoData/\",\n            \"file_format\": \"html\",\n           \"notify_to\": \"azharuddin.mohammad@amnetdigital.com\",\n           \"notification_message\": \"PROFILING for ORSDEMODATA ran Successfully for WSD\"\n        }\n    },\n    {\n        \"TYPE\": \"PRO\",\n        \"ARCHITECTURE_LAYER\": \"L0\",\n        \"FILE_NAME\": \"PARTY_7KB\",\n        \"SOURCE_NAME\": \"DATA360\",\n        \"ACTION\": \"SOURCE\",\n        \"KEY\": \"RULES\",\n        \"VALUE\": \"ALL\"\n       }\n  ]\n}\n")
        cy.wait(1000)
        cy.get('app-profile-input-config > .mat-button').click()
        cy.wait(1000)
        cy.get('.save-btn').click()
        cy.wait(180000)
        cy.get('.popupclose > .mat-focus-indicator > .mat-button-wrapper > img').click()
        cy.wait(1000)
        cy.get('.d-grid > .save-btn').click()
        //TransormationConfig
        cy.get('#mat-input-16').type("TYPE,ARCHITECTURE_LAYER,FILE_NAME,SOURCE_NAME,ACTION,KEY,VALUE\nENV,ALL,ALL,DATA360,ROOT_PATH,BUCKET_NAME,/.datalake\nENV,ALL,ALL,DATA360,CORE_KEY,QUALITY_RATING_COL_NAME,col_name=DL_QUALITY_RATING1 || col_value=0\n,,,,,,\nPRO,L1,SI,DATA360,SOURCE,INPUT_DETAILS,path=/output/Ingestion/wwi2/ || file_format = parquet || header=true || table_name=NA\nPRO,L1,SI,DATA360,SOURCE,OUTPUT_DETAILS,path=/output/DataQuality/wwi2/ || file_format = parquet || mode=overwrite || header= true || sep=NA ||save_as_Table=false || table_name=NA || prefix=\"\" || view_name=\"\"\n\nPRO,L1,SI,DATA360,QUALITY,QUERY1,rule_name = col_data_type_update_rule || columns = CustomerMobileNumber  || values = bigint\nPRO,L1,SI,DATA360,QUALITY,QUERY2,rule_name = col_data_type_update_rule || columns = Quantity  || values = int\nPRO,L1,SI,DATA360,QUALITY,QUERY3,rule_name = col_data_type_update_rule || columns = MRP_UnitPrice  || values = float\nPRO,L1,SI,DATA360,QUALITY,QUERY4,rule_name = col_data_type_update_rule || columns = TotalProductCost  || values = float\nPRO,L1,SI,DATA360,QUALITY,QUERY5,rule_name = col_data_type_update_rule || columns = SalesAmount  || values = float\nPRO,L1,SI,DATA360,QUALITY,QUERY6,rule_name = col_data_type_update_rule || columns = Target  || values = int\nPRO,L1,SI,DATA360,QUALITY,QUERY8,rule_name = col_data_type_update_rule || columns = TaxAmt  || values = float\nPRO,L1,SI,DATA360,QUALITY,QUERY10,rule_name = col_data_type_update_rule || columns = DiscountAmount  || values = float\nPRO,L1,SI,DATA360,QUALITY,QUERY13,rule_name = col_data_type_update_rule || columns = BillDate  || values = Date\nPRO,L1,SI,DATA360,QUALITY,QUERY11,rule_name = col_add_rule || columns = Level1Value  || values = Americas\nPRO,L1,SI,DATA360,CLEANSING,CLN_RULE_DATE_FORMAT1,\"src_col_name=date_format(to_date(BillDate,'d/M/yyyy'),'yyyy/d/M')||tgt_col_name= BillDate_New\"\nPRO,L1,SI,DATA360,CLEANSING,CLN_RULE_UPPER_CASE,\"src_col_name= StoreName ||tgt_col_name=StoreName_UPPER\"\nPRO,L1,SI,DATA360,QUALITY,QUERY2,\"rule_name = contact_valid_rule || src_columns = CustomerMobileNumber || target_columns = CustomerMobileNumber_stand || extensions = +91 || country_code = IN\"\nPRO,L1,SI,DATA360,CLEANSING,CLN_RULE_SPLIT,\"src_col_name=(Client_Customer,' ') ||tgt_col_name=Client_Customer_SPLIT_1,Client_Customer_SPLIT_2\"\nPRO,L1,SI,DATA360,CLEANSING,CLN_RULE_REPLACE,\"src_col_name=(DiscountAmount, '495', '295')||tgt_col_name= DiscountAmount_Updated\"\nPRO,L1,SI,DATA360,CLEANSING,CLN_RULE_ADD,\"src_col_name=(Quantity, QtyOnHand) ||tgt_col_name=Quantity_ADD\"\n\n")
        cy.viewport(1051,492)
        cy.get('app-quality-input-config > .mat-button').click()
        cy.viewport(1051,496)
        cy.get('.save-btn').click()
        cy.wait(45000)
        cy.viewport(1051,498)
        cy.get('.popupclose > .mat-focus-indicator > .mat-button-wrapper > img').click()
        cy.wait(1000)
        cy.get('.col-1 > .mat-focus-indicator > .mat-button-wrapper > img').click()
        cy.get(':nth-child(4) > tr > [width="370"]').contains("New Columns Added")
        cy.get(':nth-child(4) > tr > .valuePosition').contains("7")
        cy.get('.table-footer').contains("Total Columns: 39 of 39 | Total Rows: 100 of 399 : 399")
        cy.get('.save-btn').click()
        cy.wait(1000)
        //standradization config
        cy.get('#mat-input-19').type("TYPE,ARCHITECTURE_LAYER,FILE_NAME,SOURCE_NAME,ACTION,KEY,VALUE\nENV,ALL,ALL,DATA360,ROOT_PATH,BUCKET_NAME,/.datalake\nENV,ALL,ALL,DATA360,CORE_KEY,QUALITY_RATING_COL_NAME,col_name=DL_QUALITY_RATING1 || col_value=0\n,,,,,,\nPRO,L2,SI,DATA360,SOURCE,INPUT_DETAILS1,source=quality|| path=/output/DataQuality/wwi2/ || file_format = parquet || header=true || sep=NA || table_name=NA || view_name = wwi_src || query = select * from wwi_src\nPRO,L2,SI,DATA360,SOURCE,SQL_QUERY1,\"view_name = wwi_dim_view || query = select  StoreName,STOREEXCEL__StoreID,EmpID from wwi_src\"\nPRO,L2,SI,DATA360,SOURCE,SQL_QUERY2,\"view_name = wwi_contact_dim_view || query = select City,State,Country,Region from wwi_src\"\nPRO,L2,SI,DATA360,SOURCE,SQL_QUERY3,\"view_name = wwi_address_dim_view || query = select  DiscountAmount,MRP_UnitPrice,UnitsIn from wwi_src\"\nPRO,L2,SI,DATA360,SOURCE,OUTPUT_DETAILS1,path=/output/DataStandardization/wwi/wwidataI/ || file_format = csv || mode=overwrite || header= true || sep=NA ||save_as_Table=false || table_name=NA || view_name = wwi_dim_view\nPRO,L2,SI,DATA360,SOURCE,OUTPUT_DETAILS2,path=/output/DataStandardization/wwi/wwidataII/ || file_format = csv || mode=overwrite || header= true || sep=NA ||save_as_Table=false || table_name=NA || view_name = wwi_contact_dim_view\nPRO,L2,SI,DATA360,SOURCE,OUTPUT_DETAILS3,path=/output/DataStandardization/wwi/wwidataIII/ || file_format = csv || mode=overwrite || header= true || sep=NA ||save_as_Table=false || table_name=NA || view_name = wwi_address_dim_view")
        cy.get('app-standardization-input-confg > .mat-button').click()
        cy.viewport(1051,499)
        cy.get('.save-btn').click()
        cy.wait(30000)
        cy.get('.popupclose > .mat-focus-indicator > .mat-button-wrapper > img').click()
        cy.get('.col-1 > .mat-focus-indicator > .mat-button-wrapper > img').click()
        cy.get('#mat-checkbox-4 > .mat-checkbox-layout > .mat-checkbox-label').click().contains("wwi_dim_view")
        cy.get('.d-grid > .save-btn').click()
        cy.wait(1000)
        //Skip match merge
        cy.get('.skip > .mat-button-wrapper').click()
        cy.wait(2000)
        cy.get('#mat-button-toggle-7-button > .mat-button-toggle-label-content').click()
        cy.get('.dbPlateformClass > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click()
        cy.get('#mat-option-303').click()
        //collection Point to target details
        cy.get('#mat-input-27').type("ec2-43-204-54-237.ap-south-1.compute.amazonaws.com")
        cy.get('#mat-input-28').type("shedulertestfromsi")
        cy.get('#mat-input-29').type("Dev_admin")
        cy.get('#mat-input-30').type("dev_vY*H4Yt6u^NPv6cVEpg%enNzv2Hv0ecB")
        cy.get(':nth-child(6) > .mat-focus-indicator').click()
        cy.get('.server-config-step > :nth-child(6) > .d-flex').contains("Connection Successful")
        cy.get('#cdk-step-label-1-1').click()
        // Collection Configs
        cy.get('#mat-input-25').type("TYPE,ARCHITECTURE_LAYER,FILE_NAME,SOURCE_NAME,ACTION,KEY,VALUE\nENV,ALL,ALL,DATA360,ROOT_PATH,BUCKET_NAME,/.datalake\nENV,ALL,ALL,DATA360,CORE_KEY,QUALITY_RATING_COL_NAME,col_name=DL_QUALITY_RATING1 || col_value=0\n\"\"\"\"\nPRO,L0,SI,DATA360,Collections,INPUT_DETAILS,path=/output/DataQuality/wwi2/ || file_format = parquet || header=true || sep=NA || table_name=NA\nPRO,L0,SI,DATA360,Collections,identity_table2,\"rule_name = identity_table || table_name=DimSupplier || identity_table_columns=CompanyName || identity_input_column=Supplier_Party || columns=CompanyName || values=Supplier_Party || auto_inc=NA\"\nPRO,L0,SI,DATA360,Collections,identity_table3,\"rule_name = identity_table || table_name=DimEmployee || identity_table_columns=FirstName || identity_input_column=EmployeeName || columns=FirstName || values=EmployeeName || auto_inc=NA\"\nPRO,L0,SI,DATA360,Collections,identity_table4,\"rule_name = identity_table || table_name=DimCustomer || identity_table_columns=MobileNumber || identity_input_column=CustomerMobileNumber || columns=FirstName,MobileNumber || values=Client_Customer,CustomerMobileNumber || auto_inc=NA\"\nPRO,L0,SI,DATA360,Collections,identity_table5,\"rule_name = identity_table || table_name=DimProductCategory || identity_table_columns=CategoryName || identity_input_column=Category_CAT-1 || columns=CategoryName || values=Category_CAT-1 || auto_inc=NA\"\nPRO,L0,SI,DATA360,Collections,identity_table6,\"rule_name = identity_table || table_name=DimBrand || identity_table_columns=BrandName || identity_input_column=BrandName || columns=BrandName || values=BrandName || auto_inc=NA\"\nPRO,L0,SI,DATA360,Collections,identity_table7,\"rule_name = identity_table || table_name=DimRegion || identity_table_columns=Level4Value || identity_input_column=City || columns=Level4Value,Level3Value,Level2Value,Level1Value || values=City,State,Country,Level1Value || auto_inc=NA\"\nPRO,L0,SI,DATA360,Collections,identity_table8,\"rule_name = identity_table || table_name=DimChannel || identity_table_columns=ChannelName || identity_input_column=Channel || columns=ChannelName || values=Channel || auto_inc=NA\"\nPRO,L0,SI,DATA360,Collections,identity_mapping1,\"rule_name = identity_mapping || table_name=DimRegion || table_columns=RegionID:Level4Value || identity_column=Level4Value || input_identity=City || target_table=DimStore ||target_cols=RegionID,STOREEXCEL__StoreID,StoreName || target_table_columns=RegionID,StoreID,StoreName || truncate = NA || auto_inc=NA\"\nPRO,L0,SI,DATA360,Collections,identity_mapping2,\"rule_name = identity_mapping || table_name=DimProductCategory || table_columns=ProductCategoryID:CategoryName || identity_column=CategoryName || input_identity=Category_CAT-1 || target_table=DimProductSubCategory ||target_cols=ProductCategoryID, SubCategory_CAT-2  || target_table_columns=ProductCategoryID,SubCategoryName || truncate = NA || auto_inc=NA\"\nPRO,L0,SI,DATA360,Collections,identity_mapping3,\"rule_name = identity_mapping || table_name=DimBrand,DimProductSubCategory,DimProductCategory || table_columns=BrandID:BrandName,ProductSubCategoryID:SubCategoryName,ProductCategoryID:CategoryName || identity_column=BrandName,SubCategoryName,CategoryName || input_identity=BrandName,SubCategory_CAT-2,Category_CAT-1 || target_table=DimProduct ||target_cols=ProductName,BrandID,ProductSubCategoryID  || target_table_columns=ProductName,BrandID,ProductSubCategoryID  || truncate = NA || auto_inc=NA\"\nPRO,L0,SI,DATA360,Collections,identity_mapping4,\"rule_name = identity_mapping || table_name=DimProduct || table_columns=ProductID:productname || identity_column=ProductName || input_identity=ProductName || target_table=Inventory ||target_cols=ProductID,QtyOnHand,UnitsIn  || target_table_columns=ProductID,QtyOnHand,UnitsIn || truncate = NA || auto_inc=NA\"\nPRO,L0,SI,DATA360,Collections,identity_mapping5,\"rule_name = identity_mapping || table_name=DimEmployee,DimProduct,DimProductSubCategory,DimProductCategory,DimBrand,DimStore,DimCustomer,DimChannel,DimDate || table_columns=EmployeeID:FirstName,ProductID:productname,ProductSubCategoryID:SubCategoryName,ProductCategoryID:CategoryName,BrandID:BrandName,StoreID:StoreUUID,CustomerID:MobileNumber,ChannelID:ChannelName,DateID:Calendar || identity_column=FirstName,productname,SubCategoryName,CategoryName,BrandName,StoreID,MobileNumber,ChannelName,Calendar || input_identity=EmployeeName,ProductName,SubCategory_CAT-2,Category_CAT-1,BrandName,STOREEXCEL__StoreID,CustomerMobileNumber,CHANNEL,BillDate || target_table=FactSales  || target_cols = ProductID,EmployeeID,MRP_UnitPrice,DiscountAmount,TotalProductCost,SalesAmount,TaxAmt,BillDate_New,StoreID,CustomerID,ChannelID,Quantity,UnitsIn,BucketRange,BillNo___Invoice,DateID  || target_table_columns=ProductID,EmployeeID,UnitPrice,DiscountAmount,TotalProductCost,SalesAmount,TaxAmt,OrderDate,StoreID,CustomerID,ChannelID,OrderQuantity,UnitsIn,BucketRange,SalesOrderID,DateID || truncate = NA || auto_inc=NA\"\nPRO,L0,SI,DATA360,Collections,OUTPUT_DETAILS,path=NA || file_format = MSSQL || db_test = True || header=true || sep=NA || dbname=shedulertestfromsi || table_name=NA || user=Dev_admin || password=dev_vY*H4Yt6u^NPv6cVEpg%enNzv2Hv0ecB || port=1433  || server=ec2-43-204-54-237.ap-south-1.compute.amazonaws.com || notification_message=Collection(WWI) Step has been run successfully.Please check the results")
        cy.get('form.ng-star-inserted > :nth-child(2) > .mat-focus-indicator').click()
        cy.get('.d-grid > .save-btn').click()
        cy.wait(180000)
        cy.get("[class='mat-dialog-title titleSummaryPosition']").contains("Summary")
    })

    })