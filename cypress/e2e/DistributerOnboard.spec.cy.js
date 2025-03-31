
import { LoginPage } from "../Pages/LoginPage.cy"
const login = new LoginPage()
describe('Login test', () => {
 beforeEach(function(){

   cy.visit('https://web.ifb.chegebeya.com/auth/login')
 })

 it('valid Login test', () => {
 
     cy.get('.space-y-6 > :nth-child(1) > .w-full').type('superadmin');
     cy.get('.relative > .w-full').type('superadmin');
     login.getSigninBtn()

   })


 // cy.contains("Halal Gebeya by Kifiya")
 // cy.wait(1000)



 //.cy.get('.flex-1 > .font-nexa')
 //.should("contain",'Dashboard')
 //.and('be.visible')

 /* ==== Test Created with Cypress Studio ==== */
 it('create distrubuter', function() {
  /* ==== Generated with Cypress Studio ==== */
  
  cy.get('.space-y-6 > :nth-child(1) > .w-full').type('superadmin');
  cy.get('.relative > .w-full').type('superadmin');
  cy.get('.space-y-6 > .justify-center > .text-white').click();
  cy.get('.header-content > .lg\\:hidden > svg').click();
  cy.get('#Distributor > .flex > .flex-1').click();
  cy.get('#add-Distributor > .flex > .ml-3').click();
  cy.get('.inset-0').click();
  
  cy.get('#distributorName').type('testdist');
  cy.get('#distributorDisplayName').type('hello'); 
  // for unique tin number 
  
 // cy.get('#tin').type('9888877777');

  const uniqueNumber = Math.floor(1000000000 + Math.random() * 9000000000); 

  cy.get('#tin').type(uniqueNumber);
//cy.get('button[type="submit"]').click();


  cy.get('#address').type('addiss');
  cy.get('#phoneNumber').type('987665544');
  cy.get('#alternativePhoneNumber').type('932225555');
  cy.get('#status').select('ACTIVE');
  cy.get('#distributorCategory').select('FMCG');
  cy.get('#distributorTypes').select('EXCLUSIVE');
  cy.get('#storeConfiguration').select('SINGLE_STORE');
  cy.get('#retailerConfiguration').select('CHE');
  cy.get('.css-19bb58m').click();
  cy.get('#react-select-2-option-0').click();
  cy.get('.relative > .flex-1 > .font-nexa').type('0000002320101');
  cy.get('.bg-myrtle-green-900').click();




    
    // logo image
    cy.get('input[type="file"]#logo').should('exist')
    cy.get('input[type="file"]#logo').selectFile('cypress/fixtures/Images/DistImage/logo.png', { force: true });

      //Tin image
      
      cy.get('input[type="file"]#tinImage').should('exist')
      cy.get('input[type="file"]#tinImage').selectFile('cypress/fixtures/Images/DistImage/tin.png', { force: true });
     
      // licence image
      cy.get('input[type="file"]#licenseImage').should('exist')
      cy.get('input[type="file"]#licenseImage').selectFile('cypress/fixtures/Images/DistImage/licence.png', { force: true });
      

      //header image
      cy.get('input[type="file"]#invoiceHeaderImage').should('exist')
      cy.get('input[type="file"]#invoiceHeaderImage').selectFile('cypress/fixtures/Images/DistImage/header.png', { force: true });
      
      //footer image
      cy.get('input[type="file"]#invoiceFooterImage').should('exist')
      cy.get('input[type="file"]#invoiceFooterImage').selectFile('cypress/fixtures/Images/DistImage/footer.png', { force: true });
      cy.get('#submit').click();
    });


 
  
 });

 
  
   







 