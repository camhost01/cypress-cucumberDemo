

class productP
{
    elements = {
        productmainresult: ()=> cy.get('.features_items'),
        productsingleresult: ()=> cy.get('#cartModal'),
        productbrandresult: ()=> cy.get('.features_items .col-sm-4'),
        productsearch: ()=> cy.get('#search_product'),
        btnprodsearch: ()=> cy.get('button[id="submit_search"]'),
        categorywomen: ()=> cy.get('a[href="#Women"]'),
        subcatdress: ()=> cy.get('a[href="/category_products/1"]'),
        subcattops: ()=> cy.get('a[href="/category_products/2"]'),
        subcatsaree: ()=> cy.get('a[href="/category_products/7"]'),
        categorymen: ()=> cy.get('a[href="#Men"]'),
        subcattshirt: ()=> cy.get('a[href="/category_products/3"]'),
        subcatjeans: ()=> cy.get('a[href="/category_products/6"]'),
        categorykids: ()=> cy.get('a[href="#Kids"]'),
        subcatkdress: ()=> cy.get('a[href="/category_products/4"]'),
        subcattopyshirt: ()=> cy.get('a[href="/category_products/5"]'),
        brandpolo: ()=> cy.get('a[href="/brand_products/Polo"]'),
        brandhym: ()=> cy.get('a[href="/brand_products/H&M"]'),
        brandmadame: ()=> cy.get('a[href="/brand_products/Madame"]'),
        brandmastyharbour: ()=> cy.get('a[href="/brand_products/Mast & Harbour"]'),
        brandbabyhug: ()=> cy.get('a[href="/brand_products/Babyhug"]'),
        brandallenjunior: ()=> cy.get('a[href="/brand_products/Allen Solly Junior"]'),
        brandkookiek: ()=> cy.get('a[href="/brand_products/Kookie Kids"]'),
        brandbiba: ()=> cy.get('a[href="/brand_products/Biba"]')
    }
    checkAllProductResult(){
        this.elements.productmainresult().should('be.visible')
    }
    checkNoResults(){
        this.elements.productsingleresult().should('be.hidden')
    }
    clickProdSearch(){
        this.elements.btnprodsearch().click()
    }
    typeProducSearch(prod){
        this.elements.productsearch().type(prod)
    }
    clickCatWomen(){
        this.elements.categorywomen().click()
    }
    clicksubcatTops(){
        this.elements.subcattops().click()
    }
    clicksubcatDress(){
        this.elements.subcatdress().click()
    }
    clicksubcatSaree(){
        this.elements.subcatsaree().click()
    }
    clickCatMen(){
        this.elements.categorymen().click()
    }
    clicksubcatTshirt(){
        this.elements.subcattshirt().click()
    }
    clicksubcatJeans(){
        this.elements.subcatjeans().click()
    }
    clickCatKids(){
        this.elements.categorykids().click()
    }
    clicksubcatkDress(){
        this.elements.subcatkdress().click()
    }
    clicksubcatTopyShirt(){
        this.elements.subcattopyshirt().click()
    }
    clickbrandPolo(){
        this.elements.brandpolo().click()
    }
    clickbrandHyM(){
        this.elements.brandhym().click()
    }
    clickbrandMadame(){
        this.elements.brandmadame().click()
    }
    clickbrandKyK(){
        this.elements.brandkookiek().click()
    }
    checkbrandResult(stock){
        this.elements.productbrandresult().should(($val)=>{
            expect($val).to.have.length(stock)
        })
    }
}
module.exports = new productP()