import { test, expect } from '@playwright/test';
import InternalUserLoginPage from '../../pageobjects/InternalUserLogin';
import ApplicationFilling from '../../pageobjects/applicationFilling';
import RelatedParties from '../../pageobjects/relatedParties';
import FpiRegistrationDetails from '../../pageobjects/FPIRegistrationDetails';
import AnnexureToCaf from '../../pageobjects/AnnexureToCaf';
import AdditionalInformation from '../../pageobjects/AdditionalInformation';



test('createApplication',async({page})=>{

      const Login = new InternalUserLoginPage(page)
          await Login.goto("https://fc-dev.finwyze.com")
          await Login.validLogin("fc.app.rm01@fintuple.com","Icici@456")
          await Login.cardSelection("Foreign Application")
        
          const createApplication = new ApplicationFilling(page,expect)


     await createApplication.createNewApplication("FPI","CATEGORY I","D - PRIVATE LIMITED COMPANY")
    
      await new Promise(resolve => setTimeout(resolve, 5000));
      await createApplication.InvestorDetails("Add Low risk country")
      await page.pause()
      await createApplication.yesPanFlow()
      //await createApplication.NoPanFlowAndRepresentativeNo() 
      //await createApplication.InvestorKYC()
      //await page.pause()
       await createApplication.InvestorKYCYesPan()
       await createApplication.incomeDetails()
      //await page.pause()
      const relatedParties = new RelatedParties(page)

      await page.pause()

       await relatedParties.goToRP()
       await relatedParties.createIndvialUBO("peter")
       await page.pause()
       await relatedParties.addRP()
       await relatedParties.createNonIndividualUBO('jhon show')

        const fpiRegistrationDetails=new FpiRegistrationDetails(page)
        await fpiRegistrationDetails.goToFPIRegistrationDetails()
        await fpiRegistrationDetails.investmentManagement()
        
        await fpiRegistrationDetails.regulatoryAuthority()
        await fpiRegistrationDetails.custodianDetail()
        await fpiRegistrationDetails.clubbingInvestment()
        await fpiRegistrationDetails.DetailsAssociatedWithSecurites()


        const annexToCaf = new AnnexureToCaf(page);
        await annexToCaf.goToAnnexureToCafSecton()
       // await page.pause()
        await annexToCaf.annexureToCaf()

         const additionalInformation=new AdditionalInformation(page)
        await additionalInformation.goToAdditionalInformation()
        await additionalInformation.aml()
        //await page.pause()
        await additionalInformation.additionalDetails()

    
})