class signUpformPage{
    elements={
        radiobtn: ()=> cy.get('#id_gender1'),
        passUser: ()=> cy.get('#password'),
        selecDay: ()=> cy.get('#days'),
        selectMonth: ()=> cy.get('#months'),
        selectYear: ()=> cy.get('#years'),
        firstname: ()=> cy.get('#first_name'),
        lastname: ()=> cy.get('#last_name'),
        company: ()=> cy.get('#company'),
        address: ()=> cy.get('#address1'),
        country: ()=> cy.get('#country'),
        state: ()=> cy.get('#state'),
        city: ()=> cy.get('#city'),
        zipcode: ()=> cy.get('#zipcode'),
        mobilenum: ()=> cy.get('#mobile_number'),
        btnCreateacc: ()=> cy.get('button[data-qa="create-account"]'),
        messgesuccess: ()=> cy.get('h2[data-qa="account-created"]'),
        btnContinue: ()=> cy.get('a[data-qa="continue-button"]')
    }
    selectRbGender(){
        this.elements.radiobtn().check()
    }
    typeSignUserpass(password){
        this.elements.passUser().type(password)
    }
    selectDay(){
        this.elements.selecDay().select('9')
    }
    selectMonth(){
        this.elements.selectMonth().select('May')
    }
    selectYear(){
        this.elements.selectYear().select('1987')
    }
    typeFirstName(fname){
        this.elements.firstname().type(fname)
    }
    typeLastName(lname){
        this.elements.lastname().type(lname)
    }
    typeCompany(compa){
        this.elements.company().type(compa)
    }
    typeAddress(addr){
        this.elements.address().type(addr)
    }
    SelectCountry(countr){
        this.elements.country().select(countr)
    }
    typeState(stat){
        this.elements.state().type(stat)
    }
    typeCity(cty){
        this.elements.city().type(cty)
    }
    typeZipCode(zcode){
        this.elements.zipcode().type(zcode)
    }
    typeMobileNumber(mnumber){
        this.elements.mobilenum().type(mnumber)
    }
    clickCreateAcc(){
        this.elements.btnCreateacc().click()
    }
    checkSuccess(){
        this.elements.messgesuccess().should('be.visible')
    }
    btnEndProcess(){
        this.elements.btnContinue().click()
    }
}
module.exports = new signUpformPage()