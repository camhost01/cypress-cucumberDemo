/// <reference types="Cypress" />
import loginPageObjects from '../POM/pages/loginPages/loginPageObjects';
import homePageObject from '../POM/pages/homePage/homePageObject';
import contactusObjects from '../POM/pages/contactusPage/contactusObjects';
import productPage from '../POM/pages/productsPage/productPage';
import cartpageObjects from '../POM/pages/cartPage/cartpageObjects';
import {Then} from '@badeball/cypress-cucumber-preprocessor';

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
Then('the products are is displayed in the webpage', ()=>{
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
Then('product {string} is displayed',(stock)=>{
    switch(stock){
        case '6':
            productPage.checkbrandResult(6)
        break
        case '5':
            productPage.checkbrandResult(5)
        break
        case '3':
            productPage.checkbrandResult(3)
        break
        default:
            break
    }

})

//******** CART ********/
Then('the message for empty cart is displayed', ()=>{
    cartpageObjects.checkMessageEmpty()  
})
Then('the product is added in the cart',()=>{
    cartpageObjects.checkProductTable()
})