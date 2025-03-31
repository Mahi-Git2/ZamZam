import { LoginPage } from "../Pages/LoginPage.cy"
const login = new LoginPage()
//login test
describe('Login test', () => {
    beforeEach(function(){
   
      cy.visit('https://web.ifb.chegebeya.com/auth/login')
    })
   
    it('valid Login test', () => {
    
        cy.get('.space-y-6 > :nth-child(1) > .w-full').type('superadmin');
        cy.get('.relative > .w-full').type('superadmin');
        login.getSigninBtn()
        cy.get('.flex-1 > .font-nexa')
          .should("contain",'Dashboard')
           .and('be.visible')
   
      })
    })