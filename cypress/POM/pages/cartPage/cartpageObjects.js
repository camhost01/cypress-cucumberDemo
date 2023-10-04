class cartPage{
    elements={
        messageemptycar: ()=> cy.get('#empty_cart'),
        tableproduct: ()=> cy.get('#cart_info_table'),
        btncheckout: ()=> cy.xpath('//*[contains(text(),"Proceed To Checkout")]'),
        checkoutformlogin: ()=> cy.get('.modal-content'),
        btndelete: ()=> cy.get('.cart_quantity_delete'),
        txtemailsubs: ()=> cy.get('#susbscribe_email'),
        btnemailsubs: ()=> cy.get('#subscribe'),
        msgsubscribed: ()=> cy.get('.col-md-9.form-group')

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
    addEmailSubscription(email)
    {
        this.elements.txtemailsubs().type(email)
    }
    clickEmailSubs()
    {
        this.elements.btnemailsubs().click()
    }
    checkmsgSubscribed()
    {
        this.elements.msgsubscribed().should('be.visible')
    }
}
module.exports = new cartPage()