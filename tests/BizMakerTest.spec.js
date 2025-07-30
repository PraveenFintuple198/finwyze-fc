import { test, expect } from '@playwright/test';
import InternalUserLoginPage from '../pageobjects/InternalUserLogin';

test('Add Investor',async({page})=>{

    const Login = new InternalUserLoginPage(page)
    await Login.goto("https://fc-dev.finwyze.com")

    
    await Login.validLogin("fc.biz.mkr01@fintuple.com","Icici@456")








})