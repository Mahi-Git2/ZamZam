describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Edit product test', function() {
    /* ==== Generated with Cypress Studio ==== */
     cy.visit('https://web.ifb.chegebeya.com/Product');
     cy.get('.space-y-6 > :nth-child(1) > .w-full').clear('z');
     cy.get('.space-y-6 > :nth-child(1) > .w-full').type('zamadmin');
    cy.get('.relative > .w-full').clear();
     cy.get('.relative > .w-full').type('zamadmin');
     cy.get('.space-y-6 > .justify-center > .text-white').click();
     cy.get('.header-content > .lg\\:hidden > svg').click();
     cy.get('#product-group > .flex > .flex-1').click();
     cy.get('#product-list-side > .flex').click();
     cy.get('.inset-0').click();
    // cy.get('#product\\ 0 > :nth-child(10) > .flex > .pr-2 > span > img').click();
    // cy.get('#product_code').clear('Product_1742373930983u');
    // cy.get('#product_code').type('Product_1742373930983update');
    // cy.get('#product_name').clear('Product_1742373930982u');
    // cy.get('#product_name').type('Product_1742373930982update');
    // cy.get('#submit').click();

    
      it('Should replace existing data with new data', () => {
      cy.visit('https://web.ifb.chegebeya.com/Product') // Navigate to the page with the editable field
 
        const newValue = `Product_${Date.now()}updated`;
        cy.get('#product_name').type(uniqueProdName);
    
        // Select the input field, clear existing value, and enter new data
        cy.get('#product_name') // Change selector to match your field
          .clear()
          .type(newValue);
    
        // Submit or trigger an update if required
         cy.get('#submit').click();
    
        // Assert that the field now contains the new value
        cy.get('#product_name').should('have.value', newValue);
    
    });
    





    /* ==== End Cypress Studio ==== */
  });
})