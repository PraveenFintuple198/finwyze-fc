class Documents{
   constructor(page){

    this.page = page;
    this.DocumentsStepper = page.getByRole("tab", {name: "Investor Documents",});
    this.certRow = page.locator('tr.border-b:has-text(${"DocumentName"})');// ▼ action button in the 4th cell
    this.actionButton = this.certRow.locator('td:nth-child(4) div.relative > button');// "Upload" option in the dropdown menu
    this.uploadOption = this.certRow.locator('td:nth-child(4) div.absolute > button');



   }
   async goToDocumentsSection() {
        await this.DocumentsStepper.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.locator('text=Investor Documents').waitFor({ state: 'visible', timeout: 10000 });
    }
    async uploadDocument() {
        //await this.page.getByText(documentName, { exact: true }).waitFor({ state: 'visible', timeout: 10000 });
         await this.page.getByRole('row', { name: 'CERTIFICATE PENDING', exact: true }).getByRole('button').nth(1).click();
  await this.page.getByRole('row', { name: 'CERTIFICATE PENDING Upload' }).getByRole('button').nth(1).click();
  await this.page.getByRole('button', { name: 'Upload' }).click(); 
       
        const fileInput = this.page.locator('input[@id="fileUploadDoc"]');
        await fileInput.setInputFiles('sample document/sample.pdf');
    }





}module.exports = Documents;