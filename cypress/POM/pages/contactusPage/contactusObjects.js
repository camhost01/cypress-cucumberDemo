

class contactUs{
    elements={
        contactemail: ()=> cy.get('input[required="required"]'),
        contactname: ()=> cy.get('input[data-qa="name"]'),
        contactsubject: ()=> cy.get('input[data-qa="subject"]'),
        contactmessage: ()=> cy.get('#message'),
        sbmitbtn: ()=> cy.get('input[data-qa="submit-button"]'),
        succesbtn: ()=> cy.get('.alert-success')
    }
    emailvalidation(){
        this.elements.contactemail().should('be.visible')
    }
    checkbtnSuccess(){
        this.elements.succesbtn().should('be.visible')
    }
    typecontactName(cname){
        this.elements.contactname().type(cname)
    }
    typecontactEmail(cemail){
        this.elements.contactemail().type(cemail)
    }
    typecontactSubject(csubject){
        this.elements.contactsubject().type(csubject)
    }
    typecontactMessage(cmessage){
        this.elements.contactmessage().type(cmessage)
    }
    clickSubmitBnt(){
        this.elements.sbmitbtn().click()
    }
}
module.exports = new contactUs()