class FPIRegistrationDetails {
  constructor(page, expect) {
    this.page = page;
    this.expect= expect;
    this.fpiRegistrationDetails = page.getByRole("button", {
      name: "FPI Registration Details",
    });
    this.Edit = page.locator("#Edit");
    //Investor management
    this.InvestorManagementSection = page.getByRole("tab", {
      name: "Investment Management",
    });
    this.MultiInvestmentManagerYes = page.locator(
      '[name="caf__FPI_registration_information--seeking_registration_under_MIM_structure"][value="YES"]'
    );
    this.MultiInvestmentManagerNo = page.locator(
      '[name="caf__FPI_registration_information--seeking_registration_under_MIM_structure"][value="NO"]'
    );
    this.AddInvestorManagerButton = page.locator(
      "i.fas.fa-square-plus.text-\\[24px\\]"
    );
    this.notRegisteredWithSebi = page.locator('[name="notSEBI"]');
    this.SebiRegisterNumber = page.locator(
      "#caf__FPI_registration_information--MIM_structure__sebi_reg_no"
    );
    this.NameOfIvestorManager = page.locator(
      "#caf__FPI_registration_information--MIM_structure__name"
    );
    this.ExpiryDate = page.locator(
      "#caf__FPI_registration_information--MIM_structure__expiry_date"
    );
    this.deleteIcon = page.locator("button .fa-solid.fa-trash");
    this.FactaFormYes = page.locator(
      '[name="caf__FPI_registration_information--valid_fatca/crs"][value="YES"]'
    );
    this.FactaFormNo = page.locator(
      '[name="caf__FPI_registration_information--valid_fatca/crs"][value="NO"]'
    );
    this.NameOfComplianceOfficer = page.locator(
      "#caf__FPI_registration_information--compliance_officer_details__name"
    );
    this.JobDetailsOfComplianceOfficer = page.locator(
      "#caf__FPI_registration_information--compliance_officer_details__job_title"
    );
    this.countryCode = page.locator("#countryCode");
    this.TelephoneNumber = page.locator(
      "#caf__FPI_registration_information--compliance_officer_details__telephone_no"
    );
    this.email = page.locator(
      "#caf__FPI_registration_information--compliance_officer_details__email_id"
    );
    this.faxNumber = page.locator(
      "#caf__FPI_registration_information--compliance_officer_details__fax_no"
    );

    //Regulatory Authority Details
    this.regulatorAuthoritySection = page.getByRole("tab", {
      name: "Regulatory Authority Details",
    });
    this.nameOfRegulator = page.locator(
      "#caf__FPI_registration_information--regulatory_authority_details__name"
    );
    this.website = page.locator(
      "#caf__FPI_registration_information--regulatory_authority_details__website"
    );
    this.registrationNumber = page.locator(
      "#caf__FPI_registration_information--regulatory_authority_details__registration_number"
    );
    this.categoryInWitchApplicatanRegulated = page.locator(
      "#caf__FPI_registration_information--regulatory_authority_details__category"
    );
    this.globalCustodianNo = page.locator(
      '[name="caf__FPI_registration_information--global_custodian_applicant"][value="NO"]'
    );
    this.globalCustodianYes = page.locator(
      '[name="caf__FPI_registration_information--global_custodian_applicant"][value="YES"]'
    );
    this.nameOfGlobalCustodian = page.locator(
      "#caf__FPI_registration_information--global_custodian_applicant_yes__name_of_global_custodian"
    );
    this.globalCustodianNameOfRegulator = page.locator(
      "#caf__FPI_registration_information--global_custodian_applicant_yes__name_of_regulator"
    );
    this.globalCustodianRegisterNumber = page.locator(
      "#caf__FPI_registration_information--global_custodian_applicant_yes__registration_number"
    );
    this.globalCustodianAddLine1 = page.locator(
      "#caf__FPI_registration_information--global_custodian_applicant_yes__address1"
    );
    this.globalCustodianAddLine2 = page.locator(
      "#caf__FPI_registration_information--global_custodian_applicant_yes__address2"
    );
    this.globalCustodianAddLine3 = page.locator(
      "#caf__FPI_registration_information--global_custodian_applicant_yes__address3"
    );
    this.globalCustodianPinCode = page.locator(
      "#caf__FPI_registration_information--global_custodian_applicant_yes__address_pin_code"
    );
    this.globalCustodyCity = page.locator(
      "#caf__FPI_registration_information--global_custodian_applicant_yes__address_city"
    );
    this.globalCustodianState = page.locator(
      "#caf__FPI_registration_information--global_custodian_applicant_yes__address_state"
    );
    this.globalCustodianCountry = page.locator(
      "#caf__FPI_registration_information--global_custodian_applicant_yes__address_country"
    );

    //Custodian Details
    this.custodianDetails = page.getByRole("tab", {
      name: "Custodian Details",
    });
    this.disciplinaryHistoryYes = page.locator(
      '[name="caf__FPI_registration_information--disciplinary_history__any_instance_of_violation"][value="YES"]'
    );
    this.disciplinaryHistoryNo = page.locator(
      '[name="caf__FPI_registration_information--disciplinary_history__any_instance_of_violation"][value="NO"]'
    );
    this.disciplinaryDetails = page.locator("#disciplinaryDetails");

    //Clubbing Investment
    this.clubbingInvestmentSection = page.getByRole("tab", {
      name: "Clubbing Investments",
    });

    //Question 1
    this.clubbingInvestmentQuestion1 = page.getByRole("radio", {
      name: "We do not share common",
    });

    //Question 2
    this.clubbingInvestmentQuestion2 = page.getByRole("radio", {
      name: "We share common ownership,",
    });
    this.addFpiSubscriber = page.locator("button:has(> i.fa-square-plus)");
    this.nameOfOdiSubscriber = page.locator(
      '[name="caf__FPI_registration_information--clubbing_investment_limit__share_ownership_yes__registration_no"]'
    );
    this.ifOdiSubscriber = page.locator(
      "#caf__FPI_registration_information--clubbing_investment_limit__share_ownership_yes__odi_subscriber_name"
    );
    this.fpiRegisterNumber = page.locator(
      "#caf__FPI_registration_information--clubbing_investment_limit__share_ownership_yes__registration_no"
    );

    //Question 3
    this.clubbingInvestmentQuestion3 = page.getByRole("radio", {
      name: "In case of Clubbing of",
    });
    this.nameOfFPI = page.locator(
      "#caf__FPI_registration_information--clubbing_investment_limit__name_of_fpi"
    );
    this.fpiRegistrationNumber = page.locator(
      "#caf__FPI_registration_information--clubbing_investment_limit__fpi_registration_number"
    );
    this.nameOfControlPerson = page.locator(
      "#caf__FPI_registration_information--clubbing_investment_limit__fpi_common_controlling_person_name1"
    );

    //Details of prior association with securities
    this.detailsOfPriorAssociationSection = page.getByRole("tab", {
      name: "Details of Prior Association",
    });
    this.detailsOfPriorAssociationYes = page.locator(
      '[name="caf__FPI_registration_information--prior_association_details__past_association_as_fpi/fii/qfi/fvci"][value="YES"]'
    );
    this.detailsOfPriorAssociationNo = page.locator(
      '[name="caf__FPI_registration_information--prior_association_details__past_association_as_fpi/fii/qfi/fvci"][value="NO"]'
    );
    this.nameofEntity = page.locator(
      "#caf__FPI_registration_information--prior_association_details__name"
    );
    this.associatedAs = page.locator(
      "#caf__FPI_registration_information--prior_association_details__registered_as"
    );
    this.priorAssociatedSebiRegisterNumber = page.locator(
      "#caf__FPI_registration_information--prior_association_details__registered_as"
    );

    this.submit = page.locator('[name="submit"]');
  }

  async goToFPIRegistrationDetails() {
    await this.fpiRegistrationDetails.click();
  }
  async edit() {
    await this.page.waitForLoadState("networkidle");
    if (await this.Edit.isVisible({ timeout: 5000 })) {
      await this.Edit.click();
    } else {
      console.log("Edit button not present - skipping");
    }
  }

  async investmentManagement() {
    await this.InvestorManagementSection.click();
   
    await this.page.getByText("Complete the FPI Registration").waitFor();
    await this.edit();
    await this.MultiInvestmentManagerYes.click();
    await this.fillInvesManangerNotRegistered("Testing");
    await this.AddInvestorManagerButton.click();
    await this.InvestorManagerRegisteredWithSebi("T1234", "Test Investor");
    await this.FactaFormYes.click();
    await this.NameOfComplianceOfficer.fill("Jhon wick");
    await this.JobDetailsOfComplianceOfficer.fill("hitman");
    await this.countryCode.selectOption("Angola (+244)");
    await this.TelephoneNumber.fill("80808");
    await this.email.fill("Test@gmail.com");
    await this.faxNumber.fill("9090900");

    await this.FactaFormYes.click();

    await this.submit.click();
  }

  async fillInvesManangerNotRegistered(nameofInvesManager) {
    await this.NameOfIvestorManager.last().fill(nameofInvesManager);
    await this.ExpiryDate.last().fill("2025-10-01");
  }
  async InvestorManagerRegisteredWithSebi(SebiNumber, nameofInvesManager) {
    //  await this.notRegisteredWithSebi.last().click()
    await this.SebiRegisterNumber.last().fill(SebiNumber);
    await this.NameOfIvestorManager.last().fill(nameofInvesManager);
    await this.ExpiryDate.last().fill("2025-10-20");
  }

  // Regulatory Authority Details
  async regulatoryAuthority() {
    await this.regulatorAuthoritySection.click();
    await this.edit();
    await this.nameOfRegulator.selectOption("AUTORITAT FINANCERA ANDORRANA");
    await this.website.fill("test.com");
    await this.registrationNumber.fill("88288828899");
    await this.globalCustodianYes.click();
    await this.nameOfGlobalCustodian.fill("test name of Global Custodian");
    await this.globalCustodianNameOfRegulator.fill("Regulator");
    await this.globalCustodianRegisterNumber.fill(
      "testglobalCustodianRegister"
    );
    await this.globalCustodianAddLine1.fill("test add Line 1");
    await this.globalCustodianAddLine2.fill("test Add Line 2");
    await this.globalCustodianAddLine3.fill("Test Add Line 3");
    await this.globalCustodianPinCode.fill("646666");
    await this.globalCustodyCity.fill("Chennai");
    await this.globalCustodianState.fill("Tamil Nadu");
    await this.globalCustodianCountry.selectOption("Armenia");

    await this.submit.click();
  }
  // Custodian Details
  async custodianDetail() {
    await this.custodianDetails.click();
    await this.edit();
    await this.disciplinaryHistoryYes.click();
    await this.disciplinaryDetails.fill("Test Deciplinary history");
    await this.submit.click();
  }
  //Clubbing Investment
  async clubbingInvestment() {
    await this.edit();
    await this.clubbingInvestmentSection.click();
    await this.clubbingInvestmentQuestion1.click();

    await this.submit.click();
  }
  //Details of prior association with securities

  async DetailsAssociatedWithSecurites() {
    await this.edit();
    await this.detailsOfPriorAssociationNo.click();
    await this.submit.click();
  }
}
module.exports = FPIRegistrationDetails;
