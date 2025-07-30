import { test, expect } from '@playwright/test';
import InternalUserLoginPage from '../../pageobjects/InternalUserLogin';
import RelatedParties from '../../pageobjects/relatedParties';
import FpiRegistrationDetails from '../../pageobjects/FPIRegistrationDetails';
import AnnexureToCaf from '../../pageobjects/AnnexureToCaf';
import AdditionalInformation from '../../pageobjects/AdditionalInformation';
import ApplicationFilling from '../../pageobjects/applicationFilling';
import Documents from '../../pageobjects/DocumentsPage';

test('fillApplication',async({page})=>{

       const Login = new InternalUserLoginPage(page)
         await Login.goto("https://fc-dev.finwyze.com")
         await Login.validLogin("fc.app.rm01@fintuple.com","Icici@456")
         await Login.cardSelection("Foreign Application")

       await page.getByText('FCNIFPN25072812').click()

       const DocumentsPage = new Documents(page);
       await DocumentsPage.goToDocumentsSection()
       await DocumentsPage.uploadDocument('REGISTRATIONCERTIFICATE')
       

      //const relatedParties=new RelatedParties(page)
      //await page.pause()
       
       //await relatedParties.goToRP()
       
      //  await page.pause()
      //  await relatedParties.addRP()
      //  await relatedParties.createIndvialUBO('investor individual UBO')
      //  await relatedParties.addRP()
      //  await relatedParties.createAccountOpening('investor test RP')
      //  await relatedParties.addRP()
      //  await relatedParties.createOperations('peter parker')
      //  await relatedParties.addRP()
      //  await relatedParties.createNonIndividualUBO('steve rogers')

      
        // const fpiRegistrationDetails=new FpiRegistrationDetails(page)
        // await fpiRegistrationDetails.goToFPIRegistrationDetails()
        // await fpiRegistrationDetails.investmentManagement()
        // await page.pause()
        // await fpiRegistrationDetails.regulatoryAuthority()
        // await page.pause()
        // await fpiRegistrationDetails.custodianDetail()
        // await page.pause()
        // await fpiRegistrationDetails.clubbingInvestment()
        // await page.pause()
        // await fpiRegistrationDetails.DetailsAssociatedWithSecurites()

        //   const annexToCaf = new AnnexureToCaf(page);
        // await annexToCaf.goToAnnexureToCafSecton()
        // await page.pause()
        // await annexToCaf.annexureToCaf()

        // const additionalInformation=new AdditionalInformation(page)
        // await additionalInformation.goToAdditionalInformation()
        // await page.pause()
        // await additionalInformation.FactaDetailSection()
         
        // await additionalInformation.additionalDetails()
        // //await page.pause()
        // // await additionalInformation.FactaDetailSection()
        // //await page.pause()
        // await additionalInformation.crsSelfCertificate()
        // await additionalInformation.declaration()
         
        // await additionalInformation.additionalDetails()

        
        



})
