class ApplicationFilling {
   constructor(page) {
      this.page = page;

      // Create new application
      this.NewApplicationButton = page.getByText("New Application");
      this.productType = page.locator("#productType");
      this.category = page.locator(
         "#caf__FPI_registration_information--category_of_applicant__type_of_category"
      );
      this.subCategory = page.locator(
         "#caf__FPI_registration_information--category_of_applicant__name_of_sub_category"
      );
      this.ConstitutionType = page.locator(
         "#account_opening__2__constitution_code"
      );
      this.createNewApplicationProceedButton = page.locator('[name="submit"]', {
         hasText: "Proceed",
      });

      this.appIdCell = page.locator('td:has-text("FCNIFPN")').first();

      //Investor Details
      this.InvestorNamesearch = page.locator("#investorNameSearch");
      this.searchInvestorButton = page.locator("#searchInvestor");
      this.ProceedInvestorButton = page.locator('[name="submit"]', {
         hasText: "Save & Next",
      });

      //PAN Details
      this.panDetails = page.getByRole("tab", { name: "PAN Details" });
      this.yesPan = page.locator(
         '[name="caf__additional_information_for_obtaining_pan--pan_already_hold__pancheck"][value="yes"]'
      );

      //Yes PAN
      this.PANField = page.locator(
         "#caf__additional_information_for_obtaining_pan--pan_already_hold__pan_number"
      );
      this.pandateOfIncorpration = page.locator(
         "#caf__KYC_Information__date_of_incorporation"
      );
      this.confirmPAN = page.locator("");

      //No Pan Flow

      this.noPan = page.locator(
         '[name="caf__additional_information_for_obtaining_pan--pan_already_hold__pancheck"][value="no"]'
      );
      this.statuOfApplicant = page.locator(
         "#caf__additional_information_for_obtaining_pan__status_of_applicant"
      );
      this.AoCode = page.locator("#selectAOCode");

      this.representativeAgentYes = page.locator(
         '[name="caf__additional_information_for_obtaining_pan--representative__appoint_representative"][value="YES"]'
      );
      this.representativeAgentNo = page.locator(
         '[name="caf__additional_information_for_obtaining_pan--representative__appoint_representative"][value="NO"]'
      );

      this.listedInStockYes = page.locator(
         '[name="caf__additional_information_for_obtaining_pan--public_company_listed__stock_exchange"][value="YES"]'
      );
      this.listedInStockNo = page.locator(
         '[name="caf__additional_information_for_obtaining_pan--public_company_listed__stock_exchange"][value="NO"]'
      );

      this.forignExchangeServiceYes = page.locator(
         '[name="caf__additional_information_for_obtaining_pan--entity_involved__foreign_exchange"][value="YES"]'
      );
      this.forignExchangeServiceNo = page.locator(
         '[name="caf__additional_information_for_obtaining_pan--entity_involved__foreign_exchange"][value="NO"]'
      );

      this.GamingServiceYes = page.locator(
         '[name="caf__additional_information_for_obtaining_pan--entity_involved__gaming"][value="YES"]'
      );
      this.GamingServiceNo = page.locator(
         '[name="caf__additional_information_for_obtaining_pan--entity_involved__gaming"][value="NO"]'
      );

      this.MoneyLendingYes = page.locator(
         '[name="caf__additional_information_for_obtaining_pan--entity_involved__money_lending"][value="YES"]'
      );
      this.MoneyLendingNo = page.locator(
         '[name="caf__additional_information_for_obtaining_pan--entity_involved__money_lending"][value="NO"]'
      );

      //Investor KYC
      this.KycTab = page.getByRole("tab", { name: "KYC Details" });
      this.AbbrivativeName = page.locator(
         "#caf__KYC_Information__abbreviation_of_the_name_printed_on_the_pan_card"
      );
      this.otherNameYes = page.locator(
         '[name="caf__KYC_Information__have_you_used_another_name"][value="yes"]'
      );
      this.otherNameNo = page.locator(
         '[name="caf__KYC_Information__have_you_used_another_name"][value="NO"]'
      );
      this.specifyName = page.locator(
         "#caf__KYC_Information__have_you_used_another_name_specify"
      );
      this.dateOfIncorpration = page.getByRole("textbox", {
         name: "Date of Incorporation *",
      });
      this.dateOfCommencement = page.getByRole("textbox", {
         name: "Date of Commencement of",
      });
      this.PlaceOfIncorporation = page.locator("#caf__KYC_Information__place");
      this.RegisterNumber = page.locator(
         "#caf__additional_information_for_obtaining_pan__registration_number"
      );
      this.taxResidenceCertificateNumber = page.locator(
         "#caf__KYC_Information__tax_residency_certificate_number"
      );
      this.countryOfTaxResidence = page.locator(
         "#caf__KYC_Information__country_tax_residency"
      );
      this.proofOfIdentity = page.locator(
         "#caf__KYC_Information--documents_submitted_proof_of_identity"
      );
      this.proofOfIdentityNumber = page.locator("#poiNo");
      this.proofofAddress = page.locator(
         "#caf__KYC_Information--documents_submitted_proof_of_address"
      );

      this.resAddLine1 = page.locator(
         "#caf__KYC_Information--registered_address__flat"
      );
      this.resAddLine2 = page.locator(
         "#caf__KYC_Information--registered_address__name_of_premises"
      );
      this.resAddLine3 = page.locator(
         "#caf__KYC_Information--registered_address__area"
      );
      this.resPinCode = page.locator(
         "#caf__KYC_Information--registered_address__zip_code"
      );
      this.resCity = page.locator(
         "#caf__KYC_Information--registered_address__town"
      );
      this.resState = page.locator(
         "#caf__KYC_Information--registered_address__state"
      );
      this.resCountryName = page.locator(
         "#caf__KYC_Information--registered_address__country_name"
      );

      this.sameAsAbove = page.locator(
         '[name="caf__KYC_Information--office_address"]'
      );
      this.OffName = page.locator(
         "#caf__KYC_Information--office_address__name_of_office"
      );
      this.OffAddLine1 = page.locator(
         "#caf__KYC_Information--office_address__flat"
      );
      this.offAddLine2 = page.locator(
         "#caf__KYC_Information--office_address__name_of_premises"
      );
      this.offAddLine3 = page.locator(
         "#caf__KYC_Information--office_address__area"
      );
      this.offPincode = page.locator(
         "caf__KYC_Information--office_address__zip_code"
      );
      this.offCity = page.locator("caf__KYC_Information--office_address__town");
      this.offState = page.locator(
         "#caf__KYC_Information--office_address__state"
      );
      this.offCountryName = page.locator(
         "#caf__KYC_Information--office_address__country_name"
      );

      this.addrssOfCommResidence = page.locator(
         '[name="caf__KYC_Information--communication_address"][value="REGISTERED"]'
      );
      this.addressOfCommOffice = page.locator(
         '[name="caf__KYC_Information--communication_address"][value="OFFICE"]'
      );

      this.contactFaxNumber = page.locator(
         "#caf__KYC_Information--contact_details__fax_number"
      );
      this.contactEmail = page.locator(
         "#caf__KYC_Information--contact_details__email_id"
      );
      this.website = page.locator(
         "#caf__KYC_Information--contact_details__website"
      );

      this.residenceCountryCode = page.locator(
         "#caf__KYC_Information--contact_details__registered_telephone_country_code"
      );
      this.residenceAreaCode = page.locator(
         "#caf__KYC_Information--contact_details__registered_telephone_area_code"
      );
      this.residenceTelephoneNumber = page.locator(
         "#caf__KYC_Information--contact_details__registered_telephone_number"
      );

      this.offCountryCode = page.locator(
         "#caf__KYC_Information--contact_details__office_telephone_country_code"
      );
      this.offStdCode = page.locator(
         "#caf__KYC_Information--contact_details__office_telephone_area_code"
      );
      this.offTelephoneNumber = page.locator(
         "#caf__KYC_Information--contact_details__office_telephone_number"
      );

      //SourceOfIncome
      //this.incomeDetails=page.locator('')
      this.sourceOfIncome = page.locator(
         "#caf__KYC_Information--income_details__source_of_income"
      );
      this.codeForBusinessProfession = page.locator(
         "#caf__KYC_Information--income_details__code_for_business"
      );
      this.grossAnnualIncome = page.locator(
         "#caf__KYC_Information--income_details__gross_annual_income"
      );
      this.netWorth = page.locator(
         "#caf__KYC_Information--income_details__net_worth"
      );
      this.AsOnNotOlderThanOneYear = page.locator(
         "#caf__KYC_Information--income_details__as_on"
      );
      this.occpation = page.locator(
         "#caf__KYC_Information--occupation_details__for_non_individual"
      );
      this.politicallyExposedPersonYes = page.locator(
         '[name="caf__KYC_Information--applicant_or_key_personnel_status__politically_exposed"][value="YES"]'
      );
      this.politicallyExposedPersonNo = page.locator(
         '[name="caf__KYC_Information--applicant_or_key_personnel_status__politically_exposed"][value="No"]'
      );
      this.RelatedToPoliticallyExposedPersonYes = page.locator(
         '[name="caf__KYC_Information--applicant_or_key_personnel_status__related_to_a_politically_exposed"][value="YES"]'
      );
      this.RelatedToPoliticallyExposedPersonNo = page.locator(
         '[name="caf__KYC_Information--applicant_or_key_personnel_status__related_to_a_politically_exposed"][value="NO"]'
      );

      this.ProceedButton = page.locator('[name="submit"]');
      this.EditKYC = page.locator("#Edit");
   }

   async createNewApplication(applicationType,Catagory,appConstitutionType) {
      await this.NewApplicationButton.click();
      await this.productType.selectOption(applicationType);
      await this.category.selectOption(Catagory);
      await this.subCategory.selectOption(
         "Endowments and foundations"
      );
      await this.ConstitutionType.selectOption(appConstitutionType);
      await this.createNewApplicationProceedButton.click();

      //   const newAppIdCell = await this.page.locator('tbody tr:first-child td:first-child');
      //   await newAppIdCell.waitFor();
      // return await newAppIdCell.textContent();
   }
   async InvestorDetails(investorName) {
      console.log(`userName: ${investorName}`);
      await this.InvestorNamesearch.fill(investorName);
      await this.searchInvestorButton.click();
      await new Promise((resolve) => setTimeout(resolve, 10000));

      await this.ProceedInvestorButton.click();
   }
   async yesPanFlow() {
      await this.panDetails.click();
      await this.yesPan.click();
      await this.PANField.fill("MHFIN0906G");
      await this.pandateOfIncorpration.fill("2025-05-01");
      await this.ProceedButton.click();
      await this.KycTab.click();
      await this.ProceedButton.click();
   }
   async NoPanFlowAndRepresentativeNo() {
      await this.panDetails.click();
      await this.noPan.click();
      await this.statuOfApplicant.selectOption("Association of Persons");
      await this.AoCode.selectOption("(IT) CIRCLE 1, PUNE");
      await this.representativeAgentNo.click();
      await this.listedInStockNo.click();
      await this.forignExchangeServiceYes.click();
      await this.GamingServiceYes.click();
      await this.MoneyLendingYes.click();
      await this.ProceedButton.click();
   }

   async InvestorKYC() {
      //await this.KycTab.click()
      await this.EditKYC.click();
      await this.AbbrivativeName.fill("test");
      await this.otherNameYes.click();
      await this.specifyName.fill("test");
      await this.dateOfIncorpration.fill("2025-05-01");
      await this.dateOfCommencement.fill("2025-04-10");
      await this.PlaceOfIncorporation.fill("Chennai");
      await this.RegisterNumber.fill("12345");
      await this.taxResidenceCertificateNumber.fill("1234");
      await this.countryOfTaxResidence.selectOption("Albania");
      await this.proofOfIdentity.selectOption("Registration Certificate");
      await this.proofOfIdentityNumber.fill("12345");
      await this.proofofAddress.selectOption(
         "Certificate of Incorporation/Formation"
      );
      await this.resAddLine1.fill("Autofill Add Line 1");
      await this.resAddLine2.fill("Auto Fill Add Line 2");
      await this.resAddLine3.fill("Line 3");
      await this.resPinCode.fill("600002");
      await this.resCity.fill("hydrabad");
      await this.resState.fill("Punjab");
      await this.resCountryName.selectOption("Antarctica");
      await this.sameAsAbove.click();
      await this.OffName.fill("OfficeName");
      await this.addrssOfCommResidence.click();
      await this.contactFaxNumber.fill("1234567");
      await this.contactEmail.fill("Test@gmail.com");
      await this.website.fill("test.com");
      await this.residenceCountryCode.selectOption("Faroe Islands (+298)");
      await this.residenceAreaCode.fill("1234567");
      await this.residenceTelephoneNumber.fill("765432");
      await this.offCountryCode.selectOption("Faroe Islands (+298)");
      await this.offStdCode.fill("123456");
      await this.offTelephoneNumber.fill("12345678");

      await this.ProceedButton.click();
   }
   async InvestorKYCYesPan() {
      await this.KycTab.click();
      await this.EditKYC.click();
      await this.AbbrivativeName.fill("test");
      await this.otherNameYes.click();
      await this.specifyName.fill("test");

      await this.dateOfCommencement.fill("2025-04-10");
      await this.PlaceOfIncorporation.fill("Chennai");
      await this.RegisterNumber.fill("12345");
      await this.taxResidenceCertificateNumber.fill("1234");
      await this.countryOfTaxResidence.selectOption("Albania");
      await this.proofOfIdentity.selectOption("Registration Certificate");
      await this.proofOfIdentityNumber.fill("12345");
      await this.proofofAddress.selectOption(
         "Certificate of Incorporation/Formation"
      );
      await this.resAddLine1.fill("Autofill Add Line 1");
      await this.resAddLine2.fill("Auto Fill Add Line 2");
      await this.resAddLine3.fill("Line 3");
      await this.resPinCode.fill("600002");
      await this.resCity.fill("hydrabad");
      await this.resState.fill("Punjab");
      await this.resCountryName.selectOption("Antarctica");
      await this.sameAsAbove.click();
      await this.OffName.fill("OfficeName");
      await this.addrssOfCommResidence.click();
      await this.contactFaxNumber.fill("");
      await this.contactEmail.fill("Test@gmail.com");
      await this.website.fill("test.com");
      await this.residenceCountryCode.selectOption("Faroe Islands (+298)");
      await this.residenceAreaCode.fill("1234567");
      await this.residenceTelephoneNumber.fill("765432");
      await this.offCountryCode.selectOption("Faroe Islands (+298)");
      await this.offStdCode.fill("123456");
      await this.offTelephoneNumber.fill("12345678");

      await this.ProceedButton.click();
   }

   async incomeDetails() {
     await new Promise((resolve) => setTimeout(resolve, 10000));
     
      await this.EditKYC.click();
 // Fill in form
 
  await this.sourceOfIncome.selectOption("Capital Gains");
  await this.grossAnnualIncome.fill("12345");
  await this.netWorth.fill("456700");
  await this.AsOnNotOlderThanOneYear.fill("2025-05-01");
  await this.occpation.selectOption("Charitable Organization");
  await this.politicallyExposedPersonYes.click();
  await this.RelatedToPoliticallyExposedPersonNo.click();
  await this.ProceedButton.click();
}

}
module.exports = ApplicationFilling;
