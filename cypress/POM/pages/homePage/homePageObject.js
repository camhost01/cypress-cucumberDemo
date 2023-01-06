class homePage{
    elements={
        menulogout: ()=> cy.get('a[href="/logout"]'),
        menuproduct: ()=> cy.get('a[href="/products"]'),
        menucontactus: ()=> cy.get('a[href="/contact_us"]'),
        menucart: ()=> cy.get('a[href="/view_cart"]'),
        signLogin: ()=> cy.get('a[href="/login"]'),
        menudeleteacc: ()=> cy.get('a[href="/delete_account"]'),
        confirmdelete: ()=> cy.xpath('//*[contains(text(),"Account Deleted!")]'),
        btoncontinuedelete: ()=> cy.get('a[data-qa="continue-button"]')
    }
    menuLogout(){
        this.elements.menulogout().should('be.visible')
    }
    menuContactUs(){
        this.elements.menucontactus().click()
    }
    clickmenuCart(){
        this.elements.menucart().eq(0).click()
    }
    checkMenuMain(){
        this.elements.menuproduct().should('be.visible')
        this.elements.menucontactus().should('be.visible')
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
        this.elements.menuproduct().click()
    }
}
module.exports = new homePage()