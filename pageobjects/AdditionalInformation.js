class AdditionalInformation{

        constructor(page){
           this.page=page
           
           this.AdditionalInformationSection=page.getByRole('button', { name: 'Additional Information' })
           this.amlTab=this.page.getByRole('tab', { name: 'Anti Money Laundering' })
           this.amlQuestion1Yes=page.locator('[name="aml__general__question1"][value="YES"]')
           this.amlQuestion1No=page.locator('[name="aml__general__question1"][value="NO"]')
           this.amlQuestion1Na=page.locator('[name="aml__general__question1"][value="NA"]')

           this.amlQuestion2Yes=page.locator('[name="aml__general__question2"][value="YES"]')
           this.amlQuestion2No=page.locator('[name="aml__general__question2"][value="NO"]')
           this.amlQuestion2Na=page.locator('[name="aml__general__question2"][value="NA"]')

           this.amlQuestion3Yes=page.locator('[name="aml__general__question3"][value="YES"]')
           this.amlQuestion3No=page.locator('[name="aml__general__question3"][value="NO"]')
           this.amlQuestion3NA=page.locator('[name="aml__general__question3"][value="NA"]')

           this.amlQuestion4Yes=page.locator('[name="aml__general__question4"][value="YES"]')
           this.amlQuestion4No=page.locator('[name="aml__general__question4"][value="NO"]')
           this.amlQuestion4NA=page.locator('[name="aml__general__question4"][value="NA"]')

           this.amlQuestion5Yes=page.locator('[name="aml__general--5__questiona"][value="YES"]')
           this.amlQuestion5No=page.locator('[name="aml__general--5__questiona"][value="NO"]')
           this.amlQuestion5NA=page.locator('[name="aml__general--5__questiona"][value="NA"]')

           this.amlQuestion6Yes=page.locator('[name="aml__general--5__questionb"][value="YES"]')
           this.amlQuestion6No=page.locator('[name="aml__general--5__questionb"][value="NO"]')
           this.amlQuestion6NA=page.locator('[name="aml__general--5__questionb"][value="NA"]')

           this.amlQuestion7Yes=page.locator('[name="aml__general--5__questionc"][value="YES"]')
           this.amlQuestion7No=page.locator('[name="aml__general--5__questionc"][value="NO"]')
           this.amlQuestion7NA=page.locator('[name="aml__general--5__questionc"][value="NA"]')

           this.amlQuestion8Yes=page.locator('[name="aml__customer_due_diligence__question1"][value="YES"]')
           this.amlQuestion8No=page.locator('[name="aml__customer_due_diligence__question1"][value="NO"]')
           this.amlQuestion8NA=page.locator('[name="aml__customer_due_diligence__question1"][value="NA"]')

           this.amlQuestion9Yes=page.locator('[name="aml__customer_due_diligence__question2"][value="YES"]')
           this.amlQuestion9No=page.locator('[name="aml__customer_due_diligence__question2"][value="NO"]')
           this.amlQuestion9NA=page.locator('[name="aml__customer_due_diligence__question2"][value="NA"]')

           this.amlQuestion10Yes=page.locator('[name="aml__customer_due_diligence__question3"][value="YES"]')
           this.amlQuestion10No=page.locator('[name="aml__customer_due_diligence__question3"][value="NO"]')
           this.amlQuestion10NA=page.locator('[name="aml__customer_due_diligence__question3"][value="NA"]')

           this.amlQuestion11Yes=page.locator('[name="aml__customer_due_diligence__question4"][value="YES"]')
           this.amlQuestion11No=page.locator('[name="aml__customer_due_diligence__question4"][value="NO"]')
           this.amlQuestion11NA=page.locator('[name="aml__customer_due_diligence__question4"][value="NA"]')

           this.amlQuestion12Yes=page.locator('[name="aml__customer_due_diligence__question5"][value="YES"]')
           this.amlQuestion12No=page.locator('[name="aml__customer_due_diligence__question5"][value="NO"]')
           this.amlQuestion12NA=page.locator('[name="aml__customer_due_diligence__question5"][value="NA"]')

           this.amlQuestion13Yes=page.locator('[name="aml__customer_due_diligence__question6"][value="YES"]')
           this.amlQuestion13No=page.locator('[name="aml__customer_due_diligence__question6"][value="NO"]')
           this.amlQuestion13NA=page.locator('[name="aml__customer_due_diligence__question6"][value="NA"]')

           this.amlQuestion14Yes=page.locator('[name="aml__customer_due_diligence__question7"][value="YES"]')
           this.amlQuestion14No=page.locator('[name="aml__customer_due_diligence__question7"][value="NO"]')
           this.amlQuestion14NA=page.locator('[name="aml__customer_due_diligence__question7"][value="NA"]')

           this.amlQuestion15Yes=page.locator('[name="aml__customer_due_diligence__question8"][value="YES"]')
           this.amlQuestion15No=page.locator('[name="aml__customer_due_diligence__question8"][value="NO"]')

           this.amlQuestion15NA=page.locator('[name="aml__customer_due_diligence__question8"][value="NA"]')
           this.numberOfYears=page.locator('#aml__customer_due_diligence--question8__years')

           this.currentAccountCheckBox=page.locator('[name="aml__customer_due_diligence__question9"][value="OPTION2"]')
           this.custodyCheckbox=page.locator('[name="aml__customer_due_diligence__question9"][value="OPTION7"]')
           this.depositTakingCheckbox=page.locator('[name="aml__customer_due_diligence__question9"][value="OPTION1"]')
           this.dervativesInstrumentsCheckbox=page.locator('[name="aml__customer_due_diligence__question9"][value="OPTION8"]')
           this.foreignCurrencyDealingcheckbox=page.locator('[name="aml__customer_due_diligence__question9"][value="OPTION5"]')
           this.fundmanagementCheckbox=page.locator('[name="aml__customer_due_diligence__question9"][value="OPTION6"]')
           this.leasingCheckbox=page.locator('[name="aml__customer_due_diligence__question9"][value="OPTION10"]')
           this.leadingCheckbox=page.locator('[name="aml__customer_due_diligence__question9"][value="OPTION9"]')
           this.otherCheckbox=page.locator('[name="aml__customer_due_diligence__question9"][value="OPTION12"]')
           this.securitesDealingCheckbox=page.locator('[name="aml__customer_due_diligence__question9"][value="OPTION3"]')
           this.tradeFinanceCheckbox=page.locator('[name="aml__customer_due_diligence__question9"][value="OPTION11"]')

           //Kindly describe the nature of your customer base (Tick as applicable) *

           this.corporateCustomerDomestic=page.locator('[name="aml__customer_due_diligence__question10"][value="OPTION3"]')
           this.corporateCustomerInternational=page.locator('[name="aml__customer_due_diligence__question10"][value="OPTION4"]')
           this.financialInstitutionDOmestic=page.locator('[name="aml__customer_due_diligence__question10"][value="OPTION5"]')
           this.financialInstitutionInternational=page.locator('[name="aml__customer_due_diligence__question10"][value="OPTION6"]')
           this.retailCustomerDomestic=page.locator('[name="aml__customer_due_diligence__question10"][value="OPTION1"]')
           this.retailCustomerInternational=page.locator('[name="aml__customer_due_diligence__question10"][value="OPTION2"]')

           this.amlQuestion16Yes=page.locator('[name="aml__customer_due_diligence__question11"][value="YES"]')
           this.amlQuestion16No=page.locator('[name="aml__customer_due_diligence__question11"][value="NO"]')
           this.amlQuestion16NA=page.locator('[name="aml__customer_due_diligence__question11"][value="NA"]')

           this.amlQuestion17Yes=page.locator('[name="aml__customer_due_diligence__question12"][value="YES"]')
           this.amlQuestion17No=page.locator('[name="aml__customer_due_diligence__question12"][value="NO"]')
           this.amlQuestion17NA=page.locator('[name="aml__customer_due_diligence__question12"][value="NA"]')

           this.amlQuestion18Yes=page.locator('[name="aml__customer_due_diligence__question13"][value="YES"]')
           this.amlQuestion18No=page.locator('[name="aml__customer_due_diligence__question13"][value="NO"]')
           this.amlQuestion18NA=page.locator('[name="aml__customer_due_diligence__question13"][value="NA"]')

           this.amlQuestion19Yes=page.locator('[name="aml__customer_due_diligence__question14"][value="YES"]')
           this.amlQuestion19No=page.locator('[name="aml__customer_due_diligence__question14"][value="NO"]')
           this.amlQuestion19Na=page.locator('[name="aml__customer_due_diligence__question14"][value="NA"]')
           this.amlQuestion19Frequently=page.locator('#aml__customer_due_diligence--question14__frequently')

        //Additional Details
           this.additionalDetailsTab=page.getByRole('tab', { name: 'Additional Details' })
           this.leiNumber=page.locator('#caf__KYC_Information__legal_entity_identifier')
           this.expiryDate=page.locator('#annexure_to_caf3__legal_entity_identifier_details__lei_expiry_date')

           this.financialStatementYes=page.locator('[name="financialStatementAvailable"][value="yes"]')
           this.financialStatementNo=page.locator('[name="financialStatementAvailable"][value="no"]')

           this.anyOneSingle=page.locator('[name="caf__bank_account_opening--opening_account__mode_of_operation"][value="SINGLE"]')
           this.asPerResolution=page.locator('[name="caf__bank_account_opening--opening_account__mode_of_operation"][value="RESOLUTION"]')
           this.joinlyBy=page.locator('[name="caf__bank_account_opening--opening_account__mode_of_operation"][value="JOINTLY"]')
           this.others=page.locator('[name="caf__bank_account_opening--opening_account__mode_of_operation"][value="OTHERS"]')
           this.specify=this.page.locator('#caf__bank_account_opening--opening_account__mode_of_operation_jointly')

           this.boardResolutionDate=page.locator('#COMMON--date')

           this.beneficiaryName=page.locator('#beneficiaryName')
           this.accountNumber=page.locator('#beneficiary____account_number')
           this.beneficiaryBank=page.locator('#beneficiary____beneficiary_bank')
           this.beneficiaryAdd1=page.locator('#beneficiaryAddressOne')
           this.beneficiaryAdd2=page.locator('#beneficiaryAddressTwo')
           this.beneficiaryAdd3=page.locator('#beneficiaryAddressThree')

           this.beneficiaryPincode=page.locator('#beneficiaryPincode')
           this.beneficiaryCity=page.locator('#beneficiaryCityTown')
           this.benficiaryState=page.locator('#beneficiaryState')
           this.benificaryCountryName=page.locator('#beneficiaryCountryName')
           this.benificarySwiftCode=page.locator('#beneficiary____beneficiary_swift_code')
           this.iBAN=page.locator('#beneficiary____iban')


           this.beneficiaryTaxName=page.locator('#beneficiary____tax_name')
           this.taxConsultantAddLine1=page.locator('#addOfTaxConsultant1')
           this.taxConsultantAddLine2=page.locator('#addOfTaxConsultant2')
           this.taxConsultantAddLine3=page.locator('#addOfTaxConsultant3')
           this.taxConsultantPincode=page.locator('#taxConsultantPincode')
           this.taxConsultantCity=page.locator('#taxConsultantCityTown')
           this.taxConsultantState=page.locator('#taxConsultantState')
           this.tacConsultantCountryName=page.locator('#taxConsultantCountryName')
           this.taxConsultantCountryCode=page.locator('#taxConsultantCountryCode')
           this.taxConsultantPhoneNo=page.locator('#beneficiary____phone')
           this.taxConsultantEmailId=page.locator('#beneficiary____emailid')
           this.taxConsultantNameOfContactPerson=page.locator('#beneficiary____contact_person')

           //Communication Emails

           //Custodian/DDP will receive emails from the following Investor’s emails
           this.addCustodianReceiveEmail=page.locator('[class="fa-square-plus"]:nth-of-type(1)')
           this.CustodianReceiveEmailName=page.locator('#email_authorization_letter__ICICI_email_receive_configuration__name')
           this.CustodianReceiveEmailDesignation=page.locator('#email_authorization_letter__ICICI_email_receive_configuration__designation')
           this.CustodianReceiveEmailAS=page.locator('#authorisedSignatory').nth(0)
           this.emailOfCustodianReceiveEmail=page.locator('#email_authorization_letter__ICICI_email_receive_configuration__email')
           this.CustodianReceiveEmailRemarks=page.locator('#remarks').nth(0)
        
           //Investor will receive emails from the following Custodian’s emails
           this.addInvestorReceiveEmail=page.locator('[class="fa-square-plus"]:nth-of-type(2)')
           this.investorReceiveEmailName=page.locator('#email_authorization_letter__ICICI_email_send_configuration__name')
           this.investorReceiveEmailDesignation=page.locator('#email_authorization_letter__ICICI_email_send_configuration__designation')
           this.investorEmailAs=page.locator('#authorisedSignatory').nth(1)
           this.emailOfInvestorReceiveEmail=page.locator('#email_authorization_letter__ICICI_email_send_configuration__email')
           this.remarkOfEmailOfInvestor=page.locator('#remarks').nth(1)
           
           this.contactPersonOperational=page.locator('#email_authorization_letter__contact_person__operation_purpose')
           this.contactPersonEscalation=page.locator('#email_authorization_letter__contact_person__escalation')

           //Account Opening Details
           this.byPost=page.locator('[name="account_opening__declaration__option1"][value="BYPOST"]')
           this.byEmail=page.locator('[name="account_opening__declaration__option1"][value="BYMAIL"]')
           this.bySocialMedia=page.locator('[name="account_opening__declaration__option1"][value="BYSOCIALMEDIA"]')
           this.bySMS=page.locator('[name="account_opening__declaration__option1"][value="BYSMS"]')
           this.byTelephone=page.locator('[name="account_opening__declaration__option1"][value="BYCALL"]')
           this.YesToMarketing=page.locator('[name="account_opening__declaration__option1"][value="YESTOALL"]')
           this.NoToMarketing=page.locator('[name="account_opening__declaration__option1"][value="NOTOALL"]')

           this.accountDeclarationContactYes=page.locator('[name="account_opening__declaration__contact"][value="YES"]')
           this.accountDeclarationContactYesIcici=page.locator('[name="account_opening__declaration__contact"][value="YESICICI"]')
           this.accountDeclarationContactNo=page.locator('[name="account_opening__declaration__contact"][value="NO"]')

           //Do you agree to submit ICICI’s address as correspondence address
           this.yesIciciAddress=page.locator('[name="iciciAddressAsCorrespondence"][value="yes"]')
           this.noIciciAddress=page.locator('[name="iciciAddressAsCorrespondence"][value="no"]')

           //Identification & verification of the BO by Offshore Derivative Instrument issuing FPI
           //Question 1
           this.verificationOfBOradioOne=page.locator('[name="other_declaration__identification_and_verification_of_the_bo"][value="ELIGIBLE_TO_ISSUE_ODI"]')
           this.verificationOfBOradiotwo=page.locator('[name="other_declaration__identification_and_verification_of_the_bo"][value="IDENTIFIED_AND_VERIFIED_THE_BO"]')
           this.verificationOfBOradioThree=page.locator('[name="other_declaration__identification_and_verification_of_the_bo"][value="NOT_ELIGIBLE_FOR_ISSUANCE_OF_ODI"]')
          
           //Question 2
           this.UBOSMOLegalRadioOne=page.locator('[name="ubo_smo__legal_entity__section"][value="A"]')
           this.UBOSMOLegalRadioTwo=page.locator('[name="ubo_smo__legal_entity__section"][value="B"]')
           this.UBOSMOLegalRadioThree=page.locator('[name="ubo_smo__legal_entity__section"][value="C"]')

        //FATCA Details
           this.FactaDetailsTab=page.getByRole('tab', { name: 'Fatca Details' })
           //Question 1 -- Is the account holder a government body or an International Organization like World Bank, WHO, IMF etc.?
           this.sectionAQuestion1Yes=page.locator('[name="fatca_crs____is_the_account_holder_a_government_body_or_an_international_organization_like_world_bank_WHO_IMF_etc"][value="YES"]')
           this.sectionAQuestion1No=page.locator('[name="fatca_crs____is_the_account_holder_a_government_body_or_an_international_organization_like_world_bank_WHO_IMF_etc"][value="NO"]')

           //Question 2 -- Is the account holder a listed entity on a recognized stock exchange? *
           this.sectionAQuestion2yes=page.locator('[name="fatca_crs____is_the_account_holder_a_listed_entity_on_a_recognized_stock_exchange"][value="YES"]')
           this.sectionAQuestion2No=page.locator('[name="fatca_crs____is_the_account_holder_a_listed_entity_on_a_recognized_stock_exchange"][value="NO"]')
           this.NameOfStockExchange=page.locator('#fatca_crs____is_the_account_holder_a_listed_entity_on_a_recognized_stock_exchange__if_yes_please_specify_name_of_stock_exchange')
           
           //Question 3 -- Is the account holder a listed entity on a recognized stock exchange? *
           this.sectionAQuestion3yes=page.locator('[name="fatca_crs____is_the_account_holder_an_indian_financial_institution"][value="YES"]')
           this.sectionAQuestion3No=page.locator('[name="fatca_crs____is_the_account_holder_an_indian_financial_institution"][value="NO"]')

             //If Question 3 is yes -- Is the account holder an Indian Financial Institution? *
             
            this.haveGIINYes=page.locator('[name="haveGiin"][value="yes"]')
            this.GIINno=page.locator('#fatca_crs____is_the_account_holder_an_indian_financial_institution__if_yes_please_provide_your_giin')
            
            //If Question 3 is No 
            this.haveGIINNo=page.locator('[name="haveGiin"][value="no"]')
            this.specifyNotHavingGIIN=page.locator('#fatca_crs____is_the_account_holder_an_indian_financial_institution__if_giin_is_not_there_then_provide_the_reason_for_not_having_it_line1')

            //Question 4
            this.sectionAQuestion4Yes=page.locator('[name="fatca_crs____is_the_account_holder_tax_resident_of_any_country_other_than_india"][value="YES"]')
            this.sectionAQuestion4No=page.locator('[name="fatca_crs____is_the_account_holder_tax_resident_of_any_country_other_than_india"][value="NO"]')
            
            //Question 5
            this.sectionAQuestion5Yes=page.locator('[name="fatca_crs____is_the_entity_substantially_owned_or_controlled_by_persons_resident_for_tax_purpose_in_any_country_outside_india_or_US_person"][value="YES"]')
            this.sectionAQuestion5No=page.locator('[name="fatca_crs____is_the_entity_substantially_owned_or_controlled_by_persons_resident_for_tax_purpose_in_any_country_outside_india_or_US_person"][value="NO"]')

            //Please answer the question based on your entity type.
            this.partnershipHolding10PerYes=page.locator('[name="fatca_crs____partnership"][value="yes"]')
            this.partnershipHolding10PerNo=page.locator('[name="fatca_crs____partnership"][value="no"]')

            //Section B Consent

            this.consent=page.getByText('Consent')
            this.confirmConsent=page.locator('button:has-text("Confirm")')


        //CRS self Certification

           this.CRSTab=page.getByRole('tab', { name: 'CRS Self certification form' })   
          //Information of the entity opening account with ICICI Bank
           this.CustomerID=page.locator('#fatca_self_certification__section1__customer_id')
           this.entityIdentificationType=page.locator('#fatca_self_certification__section1__entity_identification_type')
           this.entityIdentificationNumber=page.locator('#fatca_self_certification__section1__entity_identification_no')

           //Entity lies under which category? is Financial Entity
           this.entityLiesUnderFE=page.locator('[name="entityCategoryCrs"][value="FE"]')
             //a. An entity is a U.S. financial institution is Yes
                 this.USFinancialInstitutionYes=page.locator('[name="fatca_self_certification__section3__us_financial_institutionFE"][value="YES"]')
                 this.TaxId=page.locator('#fatca_self_certification__section3__us_financial_institution__tin1')
                 this.UsInstitutionGIIN=page.locator('#fatca_self_certification__section3__us_financial_institution__giin')
            
            //a. An entity is a U.S. financial institution is No
                 this.USFinancialInstitutionNo=page.locator('[name="fatca_self_certification__section3__us_financial_institutionFE"][value="NO"]')
                 this.FATCAclassification=page.locator('#fatca_self_certification__section3__us_financial_institution_no')
                 

            //Please provide the Global Intermediary Identification number
                 this.selectGiin=page.locator('[name="globalIdentificationFE"][value="giin"]')
                 this.giinNoTextBox=page.locator('#giinGlobalIdentification')


                 this.selectOther=page.locator('[name="globalIdentificationFE"][value="other"]')
                 this.selectOtherTextBox=page.locator('#otherGlobalIdentification')

            //Entity lies under which category? is NFE 
                 this.entityLiesUnderNFE=page.locator('[name="entityCategoryCrs"][value="NFE"]')
                 //a) An entity incorporated and taxable in US (Specified US person) is Yes
                 this.incorporatedAndTaxableInUsYes=page.locator('[name="fatca_self_certification__section2__specified_us_person"][value="YES"]')
                 this.taxPayerId=page.locator('#fatca_self_certification__section2__specified_us_person_yes__tin1')

                 //a) An entity incorporated and taxable in US (Specified US person) is No
                 this.incorporatedAndTaxableInUsNo=page.locator('[name="fatca_self_certification__section2__specified_us_person"][value="NO"]')

                 //b) An entity incorporated and taxable outside of India (other than US) is yes
                 this.taxableOutsideIndiaYes=page.locator('[name="fatca_self_certification__section2__other_that_us"][value="YES"]')
                 this.tinNumber=page.locator('#fatca_self_certification__section2__other_that_us_yes__tin1')
                 this.tinIssueingCountry=page.locator('#fatca_self_certification__section2__tin_issuing_country')

                 //b) An entity incorporated and taxable outside of India (other than US) is No
                 this.taxableOutsideIndiaNo=page.locator('[name="fatca_self_certification__section2__other_that_us"][value="NO"]')


                 //Declaration
                 this.declarationTab=page.getByRole('tab', { name: 'Declarations' }) 
                 this.agreeConsent=page.locator('[name="consent"]')

           this.submit=page.locator('[name="submit"]')
           this.Edit=page.locator('#Edit')

        }
        async goToAdditionalInformation(){
          await this.AdditionalInformationSection.click()
        }
        async edit(){
         await new Promise((resolve) => setTimeout(resolve, 10000));
         await this.page.waitForLoadState('networkidle');
             if (await this.Edit.isVisible({ timeout: 5000 })) {
                 await this.Edit.click();
                } else {
            console.log('Edit button not present - skipping');
  }
        }

        async aml(){
         await this.amlTab.click()
         await new Promise((resolve) => setTimeout(resolve, 5000));
         await this.edit()
         await this.amlQuestion1Yes.click()
         await  this.amlQuestion2Yes.click()
         await this.amlQuestion3No.click()
         await this.amlQuestion4NA.click()
         await this.amlQuestion5Yes.click()
         await this.amlQuestion6Yes.click()
         await this.amlQuestion7Yes.click()
         await this.amlQuestion8Yes.click()
         await this.amlQuestion9Yes.click()
         await this.amlQuestion10Yes.click()
         await this.amlQuestion11Yes.click()
         await this.amlQuestion12Yes.click()
         await this.amlQuestion13Yes.click()
         await this.amlQuestion14Yes.click()
         await this.amlQuestion15Yes.click()

         await this.amlQuestion15Yes.click()
         await this.numberOfYears.fill('190')


         await this.custodyCheckbox.click()
         await this.dervativesInstrumentsCheckbox.click()
         await this.foreignCurrencyDealingcheckbox.click()

         await this.corporateCustomerInternational.click()
         await this.financialInstitutionDOmestic.click()
         await this.retailCustomerInternational.click()

         await this.amlQuestion16Yes.click()
         await this.amlQuestion17Yes.click()
         await this.amlQuestion18Yes.click()
         await this.amlQuestion19Yes.click()
         await this.amlQuestion19Frequently.fill('12')

        // await this.page.pause()

         await this.submit.click()
        



        }

        async additionalDetails(){
          await this.additionalDetailsTab.click()
          await new Promise((resolve) => setTimeout(resolve, 5000));
          await this.edit()
          await this.leiNumber.fill('12345678')
          await this.expiryDate.fill('2025-05-01')
          await this.financialStatementYes.click()
          await this.joinlyBy.click()
          await this.specify.fill('testing')
          await this.boardResolutionDate.fill('2025-06-27')
          await this.beneficiaryName.fill('test beneficiary name')
          await this.accountNumber.fill('123456788')
          await this.beneficiaryBank.fill('test by QA')
          await this.beneficiaryAdd1.fill('test 1')
          await this.beneficiaryAdd2.fill('test 2')
          await this.beneficiaryAdd3.fill('test 3')

          await this.beneficiaryPincode.fill('600001')
          await this.beneficiaryCity.fill('Chennai')
          await this.benficiaryState.fill('tamil nadu')
          await this.benificaryCountryName.selectOption('Anguilla')
          await this.benificarySwiftCode.fill('12345678')
          await this.iBAN.fill('test')

          await this.beneficiaryTaxName.fill('tester')
          await this.taxConsultantAddLine1.fill('Add line 1')
          await this.taxConsultantAddLine2.fill('Add line 2')
          await this.taxConsultantAddLine3.fill('Add line 3')
          await this.taxConsultantPincode.fill('600001')
          await this.taxConsultantCity.fill('Chennai')
          await this.taxConsultantState.fill('tamil nadu')
          await this.tacConsultantCountryName.selectOption('Aland Islands')
          await this.taxConsultantCountryCode.selectOption('Algeria (+213)')
          await this.taxConsultantPhoneNo.fill('9876543210')
          await this.taxConsultantEmailId.fill('testing@gmail.com')
          await this.taxConsultantNameOfContactPerson.fill('Tester')

          await this.CustodianReceiveEmailName.fill('stevesmith')
          await this.CustodianReceiveEmailDesignation.fill('tester')
          await this.CustodianReceiveEmailAS.selectOption('Yes')
          await this.emailOfCustodianReceiveEmail.fill('test@gmail.com')

          await this.investorReceiveEmailName.fill('david warner')
          await this.investorReceiveEmailDesignation.fill('BAN')
          await this.investorEmailAs.selectOption('Yes')
          await this.emailOfInvestorReceiveEmail.fill('testing@gmail.com')
          
          await this.contactPersonOperational.fill('test@gmail.com')
          await this.contactPersonEscalation.fill('qatest@gmail.com')

          await this.YesToMarketing.click()
          await this.accountDeclarationContactYes.click()
          await this.yesIciciAddress.click()

          await this.verificationOfBOradioOne.click()
          await this.UBOSMOLegalRadioThree.click()


         await this.submit.click()

       
         

        }

        async FactaDetailSection(){
            await this.FactaDetailsTab.click()
            await new Promise((resolve) => setTimeout(resolve, 5000));
            await this.edit()
            await this.sectionAQuestion1Yes.click()
            await this.sectionAQuestion2No.click()
            await this.sectionAQuestion3yes.click()
            await this.haveGIINYes.click()
            await this.GIINno.fill('1234567890')
            await this.sectionAQuestion4Yes.click()
            await this.sectionAQuestion5Yes.click()

            await this.partnershipHolding10PerYes.click()
            await this.consent.click()
            await this.confirmConsent.click()
            await this.submit.click()


         }
         async crsSelfCertificate(){
            await this.CRSTab.click()
             await new Promise((resolve) => setTimeout(resolve, 5000));
            await this.edit()
            await this.CustomerID.fill('12345678')
            await this.entityIdentificationType.selectOption('T - Tax identification number')
            await this.entityIdentificationNumber.fill('12345test')
            await this.entityLiesUnderFE.click()
            await this.USFinancialInstitutionYes.click()
            await this.TaxId.fill('976543210')
            await this.UsInstitutionGIIN.fill('12345678910')
            await this.submit.click()

         }

         async declaration(){
            await this.declarationTab.click()
             await new Promise((resolve) => setTimeout(resolve, 5000));
            await this.edit()
            await this.agreeConsent.click()
            await this.submit.click()

         }



}module.exports=AdditionalInformation