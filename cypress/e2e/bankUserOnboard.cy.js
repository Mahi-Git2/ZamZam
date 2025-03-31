describe('template spec', () => {
  /* ==== Test Created with Cypress Studio ==== */
  it('OfficerOnboard', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://web.ifb.chegebeya.com/');
    cy.get('.space-y-6').click();
    cy.get('.space-y-6 > :nth-child(1) > .w-full').type('superadmin');
    cy.get('.relative > .w-full').clear();
    cy.get('.relative > .w-full').type('superadmin');
    cy.get('.space-y-6').click();
    cy.get('.space-y-6 > .justify-center > .text-white').click();
    cy.get('.header-content > .lg\\:hidden > svg').click();
    cy.get('#Bank-officer > .flex > .flex-1').click();
    cy.get('.bg-white > :nth-child(1) > .flex').click();
    cy.get('.inset-0').click();
    
    const uniqueName = `User_${Date.now()}`;
    cy.get('#username').type(uniqueName);

   
    cy.get('#firstName').type('test');
    cy.get('#middleName').type('test');
    cy.get('#lastName').type('test');
  
    const uniqueNumber = `09${Math.floor(10000000 + Math.random() * 90000000)}`;
        cy.get('#phoneNumber').type(uniqueNumber);

    const uniqueEmail = `user_${Date.now()}@testmail.com`;
       cy.get('#email').type(uniqueEmail);

    cy.get(':nth-child(7) > .font-nexa').select('OFFICER');
    cy.get('.text-\\[8px\\]').click();
    cy.get('input[type="file"]#logo').selectFile('cypress/fixtures/Images/DistImage/logo.png', { force: true });
    cy.get('#submit').click();
    //cy.get('.go3958317564').should("contain",'User Created Successfully')
   cy.url().should("include",'https://web.ifb.chegebeya.com/bank/List') 
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('ManagerOnboard', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://web.ifb.chegebeya.com/');
    cy.get('.space-y-6 > :nth-child(1) > .w-full').type('superadmin');
    cy.get('.relative > .w-full').type('superadmin');
    cy.get('.space-y-6 > .justify-center > .text-white').click();
    cy.get('.header-content > .lg\\:hidden > svg').click();
    cy.get('#Bank-officer > .flex').click();
    cy.get('.bg-white > :nth-child(1) > .flex > .ml-3').click();
    cy.get('.inset-0').click();
 

    const ManagereName = `user_${Date.now()}`;
    cy.get('#username').type(ManagereName);

    cy.get('#firstName').clear('bxc');
    cy.get('#firstName').type('bxcv');
    cy.get('#lastName').clear('vbxc');
    cy.get('#lastName').type('vbxc');
    cy.get('#middleName').clear('bxc');
    cy.get('#middleName').type('bxcv');
    const uniqueNumber = `09${Math.floor(10000000 + Math.random() * 90000000)}`;
        cy.get('#phoneNumber').type(uniqueNumber);
    
    
    const UniqueEmail = `user_${Date.now()}@testmail.com`;
    cy.get('#email').type(UniqueEmail);

    cy.get(':nth-child(7) > .font-nexa').select('MANAGER');
    cy.get('.text-\\[8px\\]').click();
    cy.get('input[type="file"]#logo').selectFile('cypress/fixtures/Images/DistImage/logo.png', { force: true });
    cy.get('#submit').click();
  //   cy.get('.go3958317564').should("contain",'User Created Successfully')
    cy.url().should("include",'https://web.ifb.chegebeya.com/bank/List') 
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('RetailMngrOnboard', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://web.ifb.chegebeya.com/');
    cy.get('.space-y-6 > :nth-child(1) > .w-full').clear('s');
    cy.get('.space-y-6 > :nth-child(1) > .w-full').type('superadmin');
    cy.get('.relative > .w-full').clear('s');
    cy.get('.relative > .w-full').type('superadmin');
    cy.get('.space-y-6 > .justify-center > .text-white').click();
    cy.get('.header-content > .lg\\:hidden > svg').click();
    cy.get('#Bank-officer > .flex > .flex-1').click();
    cy.get('.bg-white > :nth-child(1) > .flex > .ml-3').click();
    cy.get('.inset-0').click();
    const RetailManagereName = `user_${Date.now()}`;
    cy.get('#username').type(RetailManagereName);

    cy.get('#firstName').clear('rte');
    cy.get('#firstName').type('rtetr');
    cy.get('#middleName').clear('tr');
    cy.get('#middleName').type('trter');
    cy.get('#lastName').clear('tr');
    cy.get('#lastName').type('trtt');
    cy.get('#phoneNumber').clear('9');
    cy.get('#phoneNumber').type('9234523452');
    const UniqueEmail = `user_${Date.now()}@testmail.com`;
    cy.get('#email').type(UniqueEmail);
    cy.get(':nth-child(7) > .font-nexa').select('RETAILER_MANGER');
    cy.get('.gap-6 > .items-center').click();
    cy.get('input[type="file"]#logo').selectFile('cypress/fixtures/Images/DistImage/logo.png', { force: true });
    cy.get('#submit').click();
   //cy.get('.go3958317564').should("contain",'User Created Successfully')
   cy.url().should("include",'https://web.ifb.chegebeya.com/bank/List') 
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('ProdMngrOnboard', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://web.ifb.chegebeya.com/');
    
    cy.get('.space-y-6 > :nth-child(1) > .w-full').type('superadmin');
    cy.get('.relative > .w-full').type('superadmin');
    cy.get('.space-y-6').click();
    cy.get('.space-y-6 > .justify-center > .text-white').click();
    cy.get('.header-content > .lg\\:hidden > svg > path').click();
    cy.get('#Bank-officer > .flex > .flex-1').click();
    cy.get('.bg-white > :nth-child(1) > .flex > .ml-3').click();
    cy.get('.inset-0').click();

    cy.get('#username').clear('sdfg');
    cy.get('#username').type('sdfgs');

    const ProdMngrNAme = `user_${Date.now()}`;
    cy.get('#username').type(ProdMngrNAme);
    cy.get('#firstName').type('fgsdf');
    cy.get('#middleName').type('gsfgsdf');
    cy.get('#lastName').type('sfgsf');
    
    const uniqueNumber = `09${Math.floor(10000000 + Math.random() * 90000000)}`;
        cy.get('#phoneNumber').type(uniqueNumber);

    const uniqueEmail = `user_${Date.now()}@testmail.com`;
    cy.get('#email').type(uniqueEmail);

    cy.get(':nth-child(7) > .font-nexa').select('PRODUCT_MANAGER');
    cy.get('.text-\\[8px\\]').click();
    cy.get('input[type="file"]#logo').selectFile('cypress/fixtures/Images/DistImage/logo.png', { force: true });
    cy.get('#submit').click();
  //   cy.get('.go3958317564').should("contain",'User Created Successfully')
  //  cy.url().should("include",'https://web.ifb.chegebeya.com/bank/List') 
    /* ==== End Cypress Studio ==== */
  });
})