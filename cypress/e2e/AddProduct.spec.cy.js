describe('template spec', () => {
  
  /* ==== Test Created with Cypress Studio ==== */
  it('Create Product ', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://web.ifb.chegebeya.com/auth/login');
    cy.get('.space-y-6 > :nth-child(1) > .w-full').type('zamadmin');
    cy.get('.relative > .w-full').type('zamadmin');
    cy.get('.space-y-6 > .justify-center > .text-white').click();
    cy.get('.header-content > .lg\\:hidden > svg > path').click();
    cy.get('#product-group > .flex > .flex-1').click();
    
    cy.get('#add-product-side > .flex > .ml-3').click();
    cy.get('.inset-0').click();
    
    const uniqueProdName = `Product_${Date.now()}`;
    cy.get('#product_name').type(uniqueProdName);
   
    
    const uniqueProdCode = `Product_${Date.now()}`;
    cy.get('#productCode').type(uniqueProdCode);

    
    cy.get('#product_description').type('test');
    cy.get('#Price\\ Before\\ Vat').type('100');
    cy.get('#product_quantity').type('1');
    cy.get(':nth-child(6) > .bg-gray-50').select('3858');
    cy.get('#quantityUnitName').select('Pieces');
    cy.get(':nth-child(8) > .bg-gray-50').select('11');
    cy.get('#taxType').select('1');
    cy.get('#minOrdQty').type('1');
    cy.get('#maxOrdQty').type('1000');
    cy.get('#itemCategory').select('true');
    cy.get('#halal').check();
    cy.get('input[type="file"]#product_file1').selectFile('cypress/fixtures/Images/ProdImage/chandlier.png', { force: true }); 
    cy.get('input[type="file"]#product_file2').selectFile('cypress/fixtures/Images/ProdImage/chandlier.png', { force: true }); 
    cy.get('input[type="file"]#product_file3').selectFile('cypress/fixtures/Images/ProdImage/chandlier.png', { force: true });
    cy.get('#submit').click();
    cy.get('.go3958317564')
    .should("contain",'Successful Operation')
    .and('be.visible')
    /* ==== End Cypress Studio ==== */
  });
})