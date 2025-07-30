import {test,expect} from '@playwright/test';
import ExternalLogin from '../../pageobjects/ExternalLogin';
import ApplicationFilling from '../../pageobjects/applicationFilling';
import RelatedParties from '../../pageobjects/relatedParties';
import FpiRegistrationDetails from '../../pageobjects/FPIRegistrationDetails';
import AnnexureToCaf from '../../pageobjects/AnnexureToCaf';
import AdditionalInformation from '../../pageobjects/AdditionalInformation';



test('createApplication',async({page})=>{

    const login = new ExternalLogin(page)
         await login.goto("https://custodydigitizationuat.icicibank.com/fc")
         await login.validLogin("velmurugan1@yopmail.com","Fintuple@1")
         await login.otpPage()
         await login.goto("https://custodydigitizationuat.icicibank.com/fc")
        
         await  login.cardSelection("Foreign Application")
         
 const createApplication = new ApplicationFilling(page,expect)


     await createApplication.createNewApplication("FPI","CATEGORY II","D - PRIVATE LIMITED COMPANY")
    
      
      await createApplication.InvestorDetails("velmurugan")
      // await page.pause()
      //await createApplication.yesPanFlow()
      await createApplication.NoPanFlowAndRepresentativeNo() 
      await createApplication.InvestorKYC()
      //await page.pause()
           

    //    await createApplication.InvestorKYCYesPan()

      // await createApplication.incomeDetails()
      //await page.pause()
            

      



       await new Promise(resolve => setTimeout(resolve, 10000));
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
        //await page.pause()
        await additionalInformation.FactaDetailSection()
        //await page.pause()
        await additionalInformation.crsSelfCertificate()
        await additionalInformation.declaration()
        
})

