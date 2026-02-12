class LoginPage {

    selectorsList() {
        const selectors = {
            usernameField : "[name ='username']",
            passwordField : "[name ='password']",
            loginButton : "[type='submit']",
            wrongCredentialAlert : "[role='alert']",
        
        }
        return selectors
    }

    accessLoginPage(){
        cy.visit('http://localhost:3000/signin')
    }

    loginWithUser (username, realPassword){
        cy.get(this.selectorsList()  .usernameField ) .type (username) 
        cy.get(this.selectorsList()  .passwordField) .type (realPassword)
        cy.get(this.selectorsList() .loginButton) .click()
    }

    loginError(){
        cy.get(this.selectorsList() .wrongCredentialAlert) .should('be.visible')
    }


}

export default LoginPage