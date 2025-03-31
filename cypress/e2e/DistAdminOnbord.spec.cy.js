import { describe } from "mocha";

describe('record n playback back test', function(){
    it('record n playback back test', function(){
        cy.visit('https://web.ifb.chegebeya.com/auth/login')
    
    })

    /* ==== Test Created with Cypress Studio ==== */
    it('Create Dist Admin', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('web.ifb.chegebeya.com');
    
        cy.get('.space-y-6 > :nth-child(1) > .w-full').type('superadmin');
        cy.get('.relative > .w-full').type('superadmin');
        cy.get('.space-y-6 > .justify-center > .text-white').click();
        cy.get('.header-content > .lg\\:hidden > svg').click();
        cy.get('#Distributor-Admin > .flex > .flex-1').click();
        cy.get('#Onboard-Distributor-Admin > .flex > .ml-3').click();
        cy.get('.inset-0').click();
      
        //cy.get('#username').type('testt'); 
        const uniqueName = `User_${Date.now()}`;

        cy.get('#username').type(uniqueName);
       

        cy.get('#firstName').type('testtt');
        cy.get('#middleName').type('tetttt');
        cy.get('#lastName').type('testtt');

        //cy.get('#phoneNumber').type('923452345');
        const uniqueNumber = `9${Math.floor(10000000 + Math.random() * 90000000)}`;
        cy.get('#phoneNumber').type(uniqueNumber);

        //for unique email address
      
       const uniqueEmail = `user_${Date.now()}@testmail.com`;
       cy.get('#email').type(uniqueEmail);
      

        cy.get('.css-19bb58m').click();
        cy.get('#react-select-2-option-40 > .font-medium').click();
        cy.get('.text-\\[8px\\]').click();
        cy.get('input[type="file"]#logo').selectFile('cypress/fixtures/Images/DistImage/logo.png', { force: true });
        cy.get('#submit').click();
        cy.get(':nth-child(3) > .go4109123758 > .go2072408551 > .go3958317564')
        .should("contain",'Distributor Admin created successfully')
         .and('be.visible')
         cy.url().should('include', 'https://web.ifb.chegebeya.com/distributor-admin/List'); 
 
        /* ==== End Cypress Studio ==== */
    });
})