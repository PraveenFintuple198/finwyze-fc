// @ts-check
import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
 
  reporter: 'html',
  
  timeout:70*10000,
  use: {
   
      headless: false,
      browserName: 'chromium',
     
      screenshot: 'on',
      trace:'on'
    
    

  },
});

