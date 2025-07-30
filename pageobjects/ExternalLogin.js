class ExtenalLoginpage{
 constructor(page){
    this.page=page
    this.custody=page.locator('#custody')
    this.email=page.locator('#username')
    this.captcha=page.locator('#captcha')
    this.password=page.locator('#password')
    this.verifyButton=page.locator('input[value="Verify"]')
    this.otp=page.locator('#otpVerifyField')
    this.CancelOtp=page.locator('#cancel')
    this.otpSubmit=page.locator('input[value="Submit"]')
       this.investorProfile=page.getByText('View Investors')
        this.forignApplication=page.getByText('View Applications').first()

 }
 async goto(url){
    await this.page.goto(url)
}
async validLogin(userEmail,userPassword){
    await this.custody.selectOption("Foreign Custody")
    await this.email.fill(userEmail)
    await this.captcha.fill("a2C4dE")
    await this.password.fill(userPassword)
    await this.verifyButton.click()
    
}
async otpPage(){
    await this.otp.fill('857362')
    await this.otpSubmit.click()

}

async cardSelection(card) {
        let selectcard;
        switch (card) {
            
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
   





}module.exports = ExtenalLoginpage;
