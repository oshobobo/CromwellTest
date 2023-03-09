/// <reference types ="cypress"/>
import cromwell from "../pageObjects/cromwellPage.js"
const cromwellPage = new cromwell()

let highest, lowest;
describe("Cromwell Website", ()=>{
    beforeEach(() => {
        cy.visit(Cypress.env('url'))
        cy.url().should("include", "090901")
    })

    //Validate a user can view 10 products.        
    xit("GIVEN the user is on this category page WHEN no further options are clicked THEN ten products should be displayed ", ()=>{
        cromwellPage.getProductCard().should('have.lengthOf', '10')
    })

    //Validate a user view 25 products after row per page set to 25.
    xit("GIVEN user is on this category page WHEN the user changes Rows per page: to 25 (pagination) THEN 25 products should be displayed", ()=>{
        cromwellPage.getRowsPerPage().click()
        cromwellPage.getRow25().click()

        cromwellPage.getProductCard().should('have.lengthOf', '25')
    })

    //Validate a user can view Out of stock products.
    it("GIVEN user is on this category page"+
    "WHEN the user changes Rows per page to 25 (pagination)" + 
    "AND user has clicked Show Out of Stock’ "+
    "THEN check there is at least one product that show ‘OUT OFSTOCK’ in the results", ()=>{
        cromwellPage.getRowsPerPage().click()
        cromwellPage.getRow25().click()
        cy.wait(4000)
        cromwellPage.getOutOfStockCheckbox().check()
        cromwellPage.getPaginationNextBtn().click({force: true})
        cy.wait(2000)
        cromwellPage.getStockItems().should('contain.text','Out of Stock')

        //Get the stock messages and iterate through
        // cromwellPage.getStockMessage().each(($el, index, $list)=>{
        //     const message = $el.text()
        
        //     if(message === "Out of stock"){
        //         expect(message).includes("Out of stock")
        //     }
            
        // })
    })

    //Validate a user can Sort by Price Low to High
    xit("GIVEN user is on this category page"+
    "WHEN the user selects Sort By: Price Low to High"+
    "THEN 10 products should be displayed in order of price (low to high).", ()=>{
        cromwellPage.getSortMenu().click()
        cromwellPage.getLowToHigh().click()

        cy.wait(4000)
        cromwellPage.getPriceLabel().first().then($el=>{
            lowest = parseFloat($el.text().replace(/[£]/g, ''))
        })
        cromwellPage.getPriceLabel().last().then($el=>{
            highest = parseFloat($el.text().replace(/[£]/g, ''))
        })
        cromwellPage.getPriceLabel().each(($el, index, $list)=>{
            if(index!==0){
                expect(lowest).to.be.lessThan(parseFloat($el.text().replace(/[£]/g, '')))
            }
            if(index!==$list.length-1){
                expect(highest).to.be.greaterThan(parseFloat($el.text().replace(/[£]/g, '')))
            }
        })
    })
        
})