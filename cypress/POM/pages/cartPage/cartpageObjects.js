class cartPage{
    elements={
        messageemptycar: ()=> cy.get('#empty_cart'),
        tableproduct: ()=> cy.get('#cart_info_table'),
        btncheckout: ()=> cy.xpath('//*[contains(text(),"Proceed To Checkout")]'),
        checkoutformlogin: ()=> cy.get('.modal-content'),
        btndelete: ()=> cy.get('.cart_quantity_delete')
    }
    checkMessageEmpty(){
        this.elements.messageemptycar().should('be.visible')
    }
    checkProductTable(){
        this.elements.tableproduct().should('be.visible')
    }
    clickbtnDeleteCart(){
        this.elements.btndelete().click()
    }
    clickbtnCheckout(){
        this.elements.btncheckout().click()
    }
    checkFormLogin(){
        this.elements.checkoutformlogin().should('be.visible')
    }
}
module.exports = new cartPage()