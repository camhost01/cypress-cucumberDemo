/// <reference types="Cypress" />
import loginPageObjects from '../POM/pages/loginPages/loginPageObjects';
import data from '../fixtures/mydata.json';
import homePageObject from '../POM/pages/homePage/homePageObject';
import productPage from '../POM/pages/productsPage/productPage';

import {Given} from '@badeball/cypress-cucumber-preprocessor';

beforeEach(() => {
    cy.visit(data.website)
  })

//******** LOGIN ********/
Given('a {string} who add the data in the login page', (user) => {
    homePageObject.menulogin()
    loginPageObjects.typeUserEmail(user)
    loginPageObjects.typePass(data.userpass)
})
Given('a user in the sign up page', () => {
    homePageObject.menulogin()
    loginPageObjects.typeSignUsername(data.name)
    loginPageObjects.typeSignUseremail(data.signupUserName)
    loginPageObjects.clickSignButton()
    loginPageObjects.headerSignForm()
})
Given('a person logued in the website', ()=> {
    homePageObject.menulogin()
    loginPageObjects.typeUserEmail(data.useremail)
    loginPageObjects.typePass(data.userpass)
    loginPageObjects.clickLogin()
    homePageObject.menuLogout()
})

//******** CONTACT US ********/
Given('A user in the contact us page', ()=> {
    homePageObject.menuContactUs()
})

//******** PRODUCT ********/
Given('a user in the landing page', ()=> {
    homePageObject.checkMenuMain()
})
Given('a user in the product page', ()=> {
    homePageObject.checkMenuMain()
    homePageObject.clickProduct()
    productPage.checkAllProductResult()
})
Given('a user in the review page',()=>{
    homePageObject.clickProduct()
    productPage.typeProducSearch(data.product)
    productPage.clickProdSearch()
    productPage.clickViewProduct()
    productPage.checkViewProdPage()
})

//******** CART ********/
Given('a user in the webpage', ()=> {
    homePageObject.checkMenuMain()
})
Given('a user in cart page with a products added',()=>{
    homePageObject.checkMenuMain()
    homePageObject.clickProduct()
    productPage.typeProducSearch(data.product)
    productPage.clickProdSearch()
    productPage.clickAddCart()
    productPage.clickContinueShopping()
    homePageObject.clickmenuCart()
})
Given('a user in the cart page', ()=>{
    homePageObject.checkMenuMain()
    homePageObject.clickmenuCart()
})