 class loginPage{

    elements = {
        signUpUsername: () => cy.get('input[data-qa="signup-name"]'),
        signUpUseremail: () => cy.get('input[data-qa="signup-email"]'),
        signUpBtnsign: () => cy.get('.btn').eq(1),
        signformtitle: () => cy.get('.title').eq(0),
        userEmail: ()=> cy.get('input[data-qa="login-email"]'),
        userPass: ()=> cy.get('input[data-qa="login-password"]'),
        btnLogin: ()=> cy.get('button[data-qa="login-button"]'),
        errorLogin: ()=> cy.xpath('//*[contains( text(),"Your email or password is incorrect!")]'),
        existinguser: ()=> cy.xpath('//*[contains(text(),"Email Address already exist!")]')
    }

    typeSignUsername(username){
        this.elements.signUpUsername().type(username)
    }
    typeSignUseremail(useremail){
        this.elements.signUpUseremail().type(useremail)
    }
    clickSignButton(){
        this.elements.signUpBtnsign().click()
    }
    headerSignForm(){
        this.elements.signformtitle().should('have.text','Enter Account Information')
    }
    typeUserEmail(useremail){
        this.elements.userEmail().type(useremail)
    }
    typePass(userpass){
        this.elements.userPass().type(userpass)
    }
    clickLogin(){
        this.elements.btnLogin().click()
    }
    getErrormessage(){
        this.elements.errorLogin().should('be.visible')
    }
    geterrorexistinguser(){
        this.elements.existinguser().should('be.visible')
    }

 }
 module.exports = new loginPage()