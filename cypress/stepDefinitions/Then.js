/// <reference types="Cypress" />
import loginPageObjects from '../POM/pages/loginPages/loginPageObjects';
import homePageObject from '../POM/pages/homePage/homePageObject';
import contactusObjects from '../POM/pages/contactusPage/contactusObjects';
import {Then} from '@badeball/cypress-cucumber-preprocessor';
import productPage from '../POM/pages/productsPage/productPage';


//******** LOGIN ********/
Then('the website {string} if its registered or not', (evaluate) => {
    switch(evaluate)
    {
        case 'access':
            homePageObject.menulogout()
            break
        case 'no_access':
            loginPageObjects.getErrormessage()
            break
        default:
            break
    }
})
Then('the user is created in the website', ()=>{
    homePageObject.menulogout()
})
Then('message is displayed confirmed the Account was delete', () => {
    homePageObject.checkDeleteMessage()
    homePageObject.clickcontinueDelete()
})

//******** CONTACT US ********/
Then('The alert is displayed',() =>{
    contactusObjects.emailvalidation()
})
Then('The webpage display an message to confimr',() =>{
    contactusObjects.checkbtnSuccess()
})

//******** PRODUCT ********/
Then('the products page is displayed', ()=>{
    productPage.checkAllProductResult()
})
Then('a {string} is displayed', (result)=>{
    switch(result){
        case 'exists':
            productPage.checkAllProductResult()
        break

        case 'no':
            productPage.checkNoResults()
        break

        default:
            break
    }
})
