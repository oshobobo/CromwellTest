class cromwell{
    
   getSearchField(){
        return cy.get("input[data-testid='searchText']")
   }
    getProductCard()
   {
       return cy.get("div[data-testid='ProductCard']")
   }
   getCategoriesCheckbox()
   {
        return cy.get("input[type='checkbox']")
   }
   getRowsPerPage()
   {
        return cy.get("[data-testid='paginationRowsPerPageMenu'] div").first()
   }
   getRow10()
   {
        return cy.get("li[data-value='10']")
   }
   getRow25()
   {
        return cy.get("li[data-value='25']")
   }
   getRow50()
   {
        return cy.get("li[data-value='50']")
   }
   getOutOfStockCheckbox()
   {
        return cy.get("input[data-testid='filterCheckbox-Show Out of Stock']")
   }
   getStockItems(){
     return cy.get(".MuiGrid-grid-xs-12.MuiGrid-grid-md-9").first()
   }
   getStockMessage()
   {
        return cy.get("h5[data-testid='stockMessage']")
   }
   getSortMenu()
   {
        return cy.get("div[data-testid='menuSortBy']")
   }
   getLowToHigh()
   {
        return cy.get("li[data-value='price-asc']")
   }
   getPriceLabel()
   {
        return cy.get("p[data-testid='priceLabel']")
   }
   getPaginationNextBtn(){
        return cy.get("button[data-testid='paginationNextPage']").invoke('removeAttr',('focusable')).first()
   }

}
export default cromwell;