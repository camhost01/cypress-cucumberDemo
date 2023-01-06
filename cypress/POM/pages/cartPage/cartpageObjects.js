class cartPage{
    elements={
        messageemptycar: ()=> cy.get('#empty_cart'),
        tableproduct: ()=> cy.get('#cart_info_table'),
        btncheckout: ()=> cy.xpath('//*[contains(text(),"Proceed To Checkout")]'),
        btndelete: ()=> cy.get('.cart_quantity_delete')
    }
    checkMessageEmpty(){
        this.elements.messageemptycar().should('be.visible')
    }
    checkProductTable(){
        this.elements.tableproduct().should('be.visible')
    }
}
module.exports = new cartPage()