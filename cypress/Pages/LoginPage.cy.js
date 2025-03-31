export class LoginPage{
    username_txtbox =".space-y-6 > :nth-child(1) > .w-full"
    password_txtbox ='.relative > .w-full'
    signin_btn = '.space-y-6 > .justify-center > .text-white'
         

    getUserName(username){
        cy.get(this.username_txtbox).type(username)
        
    }
    
    getPassword(password){
        cy.get(this.password_txtbox).type(password)
        
    }
    
    getSigninBtn(){
    
        cy.get(this.signin_btn).click()
    }

}
    
    // }
    // export default Login;