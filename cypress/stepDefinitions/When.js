/// <reference types="Cypress" />
import loginPageObjects from '../POM/pages/loginPages/loginPageObjects';
import signUpPageObject from '../POM/pages/loginPages/signUpPageObject';
import data from '../fixtures/mydata.json';
import contactusObjects from '../POM/pages/contactusPage/contactusObjects';
import homePageObject from '../POM/pages/homePage/homePageObject';
import productPage from '../POM/pages/productsPage/productPage';
import {When} from '@badeball/cypress-cucumber-preprocessor';
import cartpageObjects from '../POM/pages/cartPage/cartpageObjects';

//******** LOGIN ********/
When('click in the button login', () => {
    loginPageObjects.clickLogin()
})
When('fill the data and click in the create user button', () =>{
    signUpPageObject.selectRbGender()
    signUpPageObject.typeSignUserpass(data.signupUserPass)
    signUpPageObject.selectDay()
    signUpPageObject.selectMonth()
    signUpPageObject.selectYear()
    signUpPageObject.typeFirstName(data.firstname)
    signUpPageObject.typeLastName(data.lastname)
    signUpPageObject.typeCompany(data.company)
    signUpPageObject.SelectCountry(data.country)
    signUpPageObject.typeAddress(data.address)
    signUpPageObject.typeState(data.state)
    signUpPageObject.typeZipCode(data.zipcode)
    signUpPageObject.typeCity(data.city)
    signUpPageObject.typeMobileNumber(data.mobilenum)
    signUpPageObject.clickCreateAcc()
    signUpPageObject.checkSuccess()
    signUpPageObject.btnEndProcess()
})
When('click in delete Account',() =>{
    homePageObject.clickDeleteacc()
})

//******** CONTACT US ********/
When('A user click in the Submit', ()=>{
    contactusObjects.clickSubmitBnt()
})
When('A user add the info and click in Submit', ()=>{
    contactusObjects.typecontactName(data.name)
    contactusObjects.typecontactEmail(data.email)
    contactusObjects.typecontactSubject(data.subject)
    contactusObjects.typecontactMessage(data.message)
    contactusObjects.clickSubmitBnt()
})

//******** PRODUCT ********/
When('clicks in the Products menu in the top bar', ()=>{
    homePageObject.clickProduct()
})
When('add a product {string} and click in search button', (name)=>{
    productPage.typeProducSearch(name)
    productPage.clickProdSearch()
})
When('filtering by {string} and {string}', (category,product)=>{
    switch(category){
        case 'Women':
            productPage.clickCatWomen()
            break
        case 'Men':
            productPage.clickCatMen()
            break
        case 'Kids':
            productPage.clickCatKids()
            break
        default:
            break
    }   
    switch(product){
        case 'Tops':
            productPage.clicksubcatTops()
            break
        case 'Jeans':
            productPage.clicksubcatJeans()
            break
        case 'Dress':
            productPage.clicksubcatkDress()
            break
        default:
            break
    }
})
When('filter by {string}',(brand)=>{
    switch(brand){
        case 'Polo':
            productPage.clickbrandPolo()
        break
        case 'H&M':
            productPage.clickbrandHyM()
        break
        case 'Madame':
            productPage.clickbrandMadame()
        break
        case 'Kookie Kids':
            productPage.clickbrandKyK()
        break
        default:
        break
    }
}) 

//******** CART ********/
When('clicks in the cart menu',()=>{
    homePageObject.clickmenuCart()
})
When('add the {string} in the page',(product)=>{
    homePageObject.clickProduct()
    productPage.typeProducSearch(product)
    productPage.clickProdSearch()
    productPage.clickAddCart()
    productPage.clickContinueShopping()
    homePageObject.clickmenuCart()
})
When('delete a products from cart',()=>{
    cartpageObjects.clickbtnDeleteCart()
})