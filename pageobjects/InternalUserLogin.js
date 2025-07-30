class InternalUserLoginPage {
    
    constructor(page){
        
        this.page=page
        this.userEmail= page.locator('#i0116')
        this.emailOkButon= page.locator('#idSIButton9')

        this.password= page.locator('#i0118')
        this.passwordOkButton= page.locator('#idSIButton9')

        this.staySighinButton=page.locator('#idSIButton9')

        //Components in Landing page
        this.investorManagement=page.getByText('View Details')
        this.investorProfile=page.getByText('View Investors')
        this.forignApplication=page.getByText('View Applications').first()
    }   
  async goto(url){
        await this.page.goto(url)
   }
    async validLogin(userEmail,password){
          await this.userEmail.fill(userEmail)
          await this.emailOkButon.click()
          await this.password.fill(password)
          await this.passwordOkButton.click();
          await this.staySighinButton.click()
    } 
    
            
        
    async cardSelection(card) {
        let selectcard;
        switch (card) {
            case "Investor Management":
                selectcard = this.investorManagement;
                break;
            case "Investor Profile":
                selectcard = this.investorProfile;
                break;
            case "Foreign Application":
                selectcard = this.forignApplication;
                break;
            default:
                throw new Error(`Invalid card type: "${card}". Expected: "Investor Management", "Investor Profile", or "Foreign Application".`);
        }
    
        if (!selectcard) {
            throw new Error(`Element for card "${card}" not found. Check locators.`);
        }
    
        await selectcard.click();
    }
   

}  
module.exports=InternalUserLoginPage