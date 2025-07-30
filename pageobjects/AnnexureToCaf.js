class AnnexureToCaf {
    constructor(page) {
        this.page = page
        this.AnnexureToCafSection = page.getByRole('button', { name: 'Annexure to CAF' })
        this.annexureToCafTab = page.getByRole('tab', { name: 'Annexure To Caf' })
        this.seperateRegistrationUnderlyingIndisYes = page.locator('[name="annexure_to_caf1__additional_information__separate_registration_for_the_purpose_of_hedging_the_ODIs_with_derivatives_As_underlying_in_india"][value="YES"]')
        this.seperateRegistrationUnderlyingIndisNo = page.locator('[name="annexure_to_caf1__additional_information__separate_registration_for_the_purpose_of_hedging_the_ODIs_with_derivatives_As_underlying_in_india"][value="NO"]')
        this.seperateRegistrationUnderlyingIndisNotApplicable = page.locator('[name="annexure_to_caf1__additional_information__separate_registration_for_the_purpose_of_hedging_the_ODIs_with_derivatives_As_underlying_in_india"][value="notApplicable"]')
        this.addDetailsOfEligibleCategory1 = page.locator('i.fas.fa-square-plus.text-\\[24px\\]')
        this.nameOfEntity = page.locator('#annexure_to_caf3__details_of_eligible_category_I_entity_registered_under5__name_of_entity')
        this.entityCountry = page.locator('#annexure_to_caf3__details_of_eligible_category_I_entity_registered_under5__country')
        this.entityTypeAsPerRegulation = page.locator('#annexure_to_caf3__details_of_eligible_category_I_entity_registered_under5__entity_type_as_per_regulation')
        this.deleteIcon = page.locator('button .fa-solid.fa-trash')


        this.notBank = page.locator('[name="annexure_to_caf3__bank_or_subsidiary_of_bank_declaration"][value="WE_ARE_NOT_A_BANK_OR_A_SUBSIDIARY_OF_A_BANK"]')

        this.bankWithBranchOffice = page.locator('[name="annexure_to_caf3__bank_or_subsidiary_of_bank_declaration"][value="WE_ARE_A_BANK_OR_A_SUBSIDIARY_OF_A_BANK_AND_WE_GROUP_COMPANIES_HAVE_A_BRANCH_OFFICE_OR_REPRESENTATIVE_OFFICE_IN_INDIA"]')
        this.nameOfBranchOffice = page.locator('#WE_ARE_A_BANK_OR_A_SUBSIDIARY_OF_A_BANK_AND_WE_GROUP_COMPANIES_DO_NOT_HAVE_ANY_BRANCH_OFFICE_OR_REPRESENTATIVE_OFFICE_INannexure_to_caf3__bank_or_subsidiary_of_bank_declaration__we_are_a_bank_or_a_subsidiary_of_a_bank_and_we_group_companies_have_a_branch_office_or_representative_office_in_india_INDIA')


        this.bankWithOutBranchOffice = page.locator('[name="annexure_to_caf3__bank_or_subsidiary_of_bank_declaration"][value="WE_ARE_A_BANK_OR_A_SUBSIDIARY_OF_A_BANK_AND_WE_GROUP_COMPANIES_DO_NOT_HAVE_ANY_BRANCH_OFFICE_OR_REPRESENTATIVE_OFFICE_IN_INDIA"]')
        this.bankDeclarationNameOfEntity = page.locator('#annexure_to_caf3__bank_or_subsidiary_of_bank_declaration__we_are_a_bank_or_a_subsidiary_of_a_bank_and_we_group_companies_do_not_have_a_branch_office_or_representative_office_in_india')

        //Section A - NRI/OCI/RI - Control

        this.noNRIExerciseControler = page.locator('[name="annexure_to_caf3__nri_oci_ri_control"][value="NRI_OCI_RI_EXERCISE_CONTROL"]')
        this.haveNRIExerciseControler = page.locator('[name="annexure_to_caf3__nri_oci_ri_control"][value="NRI_OCI_RI_EXERCISE_CONTROL"]')

        this.notControlByInvestManagerWhoControlledByNRI = page.locator('[name="annexure_to_caf3__nri_oci_ri_control"][value="NRIS_OCI_RIS_CONTROLLED_INVESTMENT_MANAGER_IS_IN_CONTROL_OF_THE_APPLICANT_AND_THE_SAID_IM_IS"]')
        this.registeredWithSebiAndNonInvestingFPI = page.locator('[name="controlledByIMDetails"][value="APPROPRIATELY_REGULATED_AND_IS_REGISTERED_WITH_SEBI_AS_A_NON_INVESTMENT_FPI"]')
        this.underIndianLawAndRegisteredWithSebi = page.locator('[name="controlledByIMDetails"][value="INCORPORATED/SETUP_UNDER_INDIAL_LAWS_AND_APPROPRIATELY_REGISTERED_WITH_SEBI"]')

        this.FPIFullyOwnedByNRI = page.locator('[name="annexure_to_caf3__nri_oci_ri_control"][value="WE_ARE_"]')
        this.offShoreFundWithNoObjection = page.locator('[name="annexure_to_caf3__nri_oci_ri_control"][value="WE_ARE_AN_OFF_SHORE_FUND_FOR_WHICH_NO_OBJECTION_CERTIFICATE_HAS_BEEN_PROVIDED_BY_SEBI_IN_TERMS_OF_SEBI_REGULATIONS"]')

        //Section B - II: NRI/OCI/RI – Entitlement in FPI *
        this.sectionBOption1 = page.locator('[name="annexure_to_caf3__nri_oci_ri_entitlement_in_fpi"][value="WE_CONFIRM_THAT_THERE_ARE_NO_NRI_OCI_RI_WHO_ARE_CONSTITUENTS_INVESTORS_IN_THE_FPI"]')
        this.sectionBOption2 = page.locator('[name="annexure_to_caf3__nri_oci_ri_entitlement_in_fpi"][value="WE_CONFIRM_THAT_NRIS_OCIS_RIS_AS_INVESTORS_IN_THE_FPI_AND_CONTRIBUTIONS_BY_SINGLE_NRI_OCI_RI_INCLUDING_THOSE_OF_NRI_OCI_RI_CONTROLLED_INVESTMENT_MANAGER_ARE_BELOW_25_PERCENT_OF_THE_CORPUS_OF_THE_FPI_AND_IN_AGGREGATE_IS_BELOW_50_PERCENT_OF_THE_CORPUS_OF_FPI"]')
        this.sectionBOption3 = page.locator('[name="annexure_to_caf3__nri_oci_ri_entitlement_in_fpi"][value="INVESTMENTS_BY_NRI_OCI_RI_IN_THE_FPI_ARE_NOT_MEETING_ABOVE_CONDITIONS_AND_WE_CONFIRM_THAT_WE_WILL_MEET_THE_CONDITIONS_WITHIN_TWO_YEARS_FROM_THE_DATE_OF_REGISTRATION"]')
        this.sectionBOption4 = page.locator('[name="annexure_to_caf3__nri_oci_ri_entitlement_in_fpi"][value="NONE_OF_THE_ABOVE"]')

        //Does FPI wish KRAs to seek consent prior to permitting any intermediary to download their KYC information *
        this.FPIWishKRAYes=page.locator('[name="annexure_to_caf3__fpi_wish_kras_to_seek_consent_prior_to_permitting_any_intermediary_to_download_their_kyc_information"][value="YES"]')
        this.FPIWishKRANo=page.locator('[name="annexure_to_caf3__fpi_wish_kras_to_seek_consent_prior_to_permitting_any_intermediary_to_download_their_kyc_information"][value="NO"]')
        this.downloadKYCNameOfAuthorizedRepresentative=page.locator('#annexure_to_caf3__fpi_wish_kras_to_seek_consent_prior_to_permitting_any_intermediary_to_download_their_kyc_information_if_yes__name_of_authorized_representative')
        this.downloadKYCEmail1=page.locator('#annexure_to_caf3__fpi_wish_kras_to_seek_consent_prior_to_permitting_any_intermediary_to_download_their_kyc_information_if_yes__email_id1')
        this.downloadKYCEmail2=page.locator('#annexure_to_caf3__fpi_wish_kras_to_seek_consent_prior_to_permitting_any_intermediary_to_download_their_kyc_information_if_yes__email_id2')
        this.downloadKYCEmail3=page.locator('#annexure_to_caf3__fpi_wish_kras_to_seek_consent_prior_to_permitting_any_intermediary_to_download_their_kyc_information_if_yes__email_id3')
        this.countryCode=page.locator('#countryCode')
        this.mobailNumber=page.locator('#annexure_to_caf3__fpi_wish_kras_to_seek_consent_prior_to_permitting_any_intermediary_to_download_their_kyc_information_if_yes__mobile_number')
        
        this.submit=page.locator('[name="submit"]')
        
    }

    async goToAnnexureToCafSecton() {
        this.AnnexureToCafSection.click()

    }

    async annexureToCaf() {

        await this.annexureToCafTab.click()

        await this.edit()
       // await this.seperateRegistrationUnderlyingIndisYes.click()

        await this.entityregisteredUnder5A('praveen')
        await this.addDetailsOfEligibleCategory1.click()
        await this.entityregisteredUnder5A('praveen')
        await this.addDetailsOfEligibleCategory1.click()
        await this.entityregisteredUnder5A('praveen')

        await this.bankWithBranchOffice.click()
        await this.nameOfBranchOffice.fill('test')

        //Section A
        await this.notControlByInvestManagerWhoControlledByNRI.click()
        await this.underIndianLawAndRegisteredWithSebi.click()

        //Section B
        await this.sectionBOption1.click()

        //Does FPI wish KRAs to seek consent prior to permitting any intermediary to download their KYC information *
        await this.FPIWishKRAYes.click()
        await this.downloadKYCNameOfAuthorizedRepresentative.fill('test by praveen')
        await this.downloadKYCEmail1.fill('Test@gmail.com')
        await this.downloadKYCEmail2.fill('QAanalyst@gmail.com')
        await this.downloadKYCEmail3.fill('testAutomation@gmail.com')
        await this.countryCode.selectOption('Angola (+244)')
        await this.mobailNumber.fill('7448400182')
        //await this.page.pause()
        await this.submit.click()

    }

    async entityregisteredUnder5A(name) {
        await this.nameOfEntity.last().fill(name)
        await this.entityCountry.last().selectOption('Algeria')
        await this.entityTypeAsPerRegulation.last().selectOption('Private Limited Company')
    }
    async edit() {
        await new Promise((resolve) => setTimeout(resolve, 10000));
        await this.page.waitForLoadState('networkidle');
        const editButton = this.page.locator('#Edit, button:has-text("Edit")');
        if (await editButton.isVisible({ timeout: 10000 })) {
            await editButton.click();
        } else {
            console.log('Edit button not present - skipping');
        }
    }
}module.exports = AnnexureToCaf