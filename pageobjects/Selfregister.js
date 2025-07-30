class SelfRegistration{

     constructor(page){

           this.page=page
           this.investorName=page.locator('#investorName')
           this.country=page.locator('#country')
           this.fundAdmin=page.locator('#fundAdmin')
           this.countryCode=page.locator('#countryCode')
           this.mobailNumber=page.locator('#mobileNumber')
           this.RegisterEmail=page.locator('#email')
           this.UserName=page.locator('#userName')
           this.InvestorUserCountrycode=page.locator('#contactPersoncountryCode')
           this.InvestorUserMobileNo=page.locator('#contactPersonmobileNumber')
      
           this.InvestorUserEmail=page.locator('#loginEmail')
           this.consent=page.locator('[name="consent"]')
           this.loginLink=page.locator('[name="loginLink"]')
           this.RegisterButton=page.locator('[name="registerBtn"]')
      }
    async register(){

       await this.investorName.fill("register by Automation1")
       await  this.country.selectOption("Afghanistan")
       await new Promise(resolve => setTimeout(resolve, 2000));
       //await this.fundAdmin.selectOption("ASIACITITRUST")
       await  this.countryCode.selectOption("Iran (+98)")
       await this.mobailNumber.fill("7448400182")
       await this.RegisterEmail.fill("testAutomation1234567890@gmail.com")
       await this.UserName.fill("Praveen")
       await this.InvestorUserMobileNo.fill("748400182")
       await this.InvestorUserCountrycode.selectOption("Algeria (+213)")
       await this.InvestorUserEmail.fill("TestingAutomation123456@gmail.com")
       await this.consent.check()
       await this.RegisterButton.click()


      
   }
     
     





}
module.exports=SelfRegistration