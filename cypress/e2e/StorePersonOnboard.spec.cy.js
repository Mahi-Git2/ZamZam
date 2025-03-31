/* ==== Test Created with Cypress Studio ==== */
it('StorePerson onboard', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://web.ifb.chegebeya.com/auth/login');
  
  cy.get('.space-y-6 > :nth-child(1) > .w-full').type('zamadmin');
  cy.get('.relative > .w-full').click();
  
  cy.get('.relative > .w-full').type('zamadmin');
  cy.get('.space-y-6 > .justify-center > .text-white').click();
  cy.get('.header-content > .lg\\:hidden > svg > path').click();
  cy.get('#store-group > .flex > .flex-1').click();
  cy.get('#store-person-create > .flex > .ml-3').click();
  cy.get('.inset-0').click();
 
  const StorePEersoneFName = `user_${Date.now()}`;
  cy.get('#firstName').type(StorePEersoneFName);

  cy.get('#lastName').type('bxcvb');
  cy.get('#familyName').type('bxcvbx');

 
  const StorePEersoneName = `user_${Date.now()}`;
  cy.get('#username').type(StorePEersoneName);

  cy.get('.grid > #store').select('92404');
  const UniqueEmail = `user_${Date.now()}@testmail.com`;
    cy.get('#email').type(UniqueEmail);
  cy.get('#status').select('ACTIVE');

 
  const personalNum = `9${Math.floor(10000000 + Math.random() * 90000000)}`;
  cy.get('#personalSIM').type(personalNum);

  const alternativeNum = `9${Math.floor(10000000 + Math.random() * 90000000)}`;
  cy.get('#alternatePhone').type(alternativeNum);
  
cy.get('input[type="file"]#companyIdPictureFront').selectFile('cypress/fixtures/Images/DistImage/logo.png', { force: true });
cy.get('input[type="file"]#companyIdPictureBack').selectFile('cypress/fixtures/Images/DistImage/licence.png', { force: true });

this.timeout(4000)
cy.get('#submit').click();
this.timeout(4000)

//   cy.get('.go3958317564')
//   .should("contain",'Store-person Successfully Added')
//   cy.url().should('contain','https://api.ifb.chegebeya.com/api/v1/management/store-man' )
  /* ==== End Cypress Studio ==== */
});