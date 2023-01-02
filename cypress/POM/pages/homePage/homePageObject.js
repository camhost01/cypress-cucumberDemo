class homePage{
    elements={
        menuLogout: ()=> cy.get('a[href="/logout"]'),
        menuProduct: ()=> cy.get('a[href="/products"]'),
        menuContactus: ()=> cy.get('a[href="/contact_us"]'),
        signLogin: ()=> cy.get('a[href="/login"]'),
        menudeleteacc: ()=> cy.get('a[href="/delete_account"]'),
        confirmdelete: ()=> cy.xpath('//*[contains(text(),"Account Deleted!")]'),
        btoncontinuedelete: ()=> cy.get('a[data-qa="continue-button"]')
    }
    menulogout(){
        this.elements.menuLogout().should('be.visible')
    }
    menuContactUs(){
        this.elements.menuContactus().click()
    }
    checkMenuMain(){
        this.elements.menuProduct().should('be.visible')
        this.elements.menuContactus().should('be.visible')
    }
    menulogin(){
        this.elements.signLogin().click()
    }
    clickDeleteacc(){
        this.elements.menudeleteacc().click()
    }
    checkDeleteMessage(){
        this.elements.confirmdelete().should('be.visible')
    }
    clickcontinueDelete(){
        this.elements.btoncontinuedelete().click()
    }
    clickProduct(){
        this.elements.menuProduct().click()
    }
}
module.exports = new homePage()