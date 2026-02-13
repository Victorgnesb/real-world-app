class LoginPage {

    selectorsList() {
        const selectors = {
            usernameField : "[name ='username']",
            passwordField : "[name ='password']",
            loginButton : "[type='submit']",
            wrongCredentialAlert : "[role='alert']",
            logoutButton : "[role='button']"
        }
        return selectors
    }

    accessLoginPage(){
        cy.visit('http://localhost:3000/signin')
    }

    loginWithUser (username, password){
        cy.get(this.selectorsList() .usernameField ) .type (username) 
        cy.get(this.selectorsList() .passwordField) .type (password)
        cy.get(this.selectorsList() .loginButton) .click()
        
    }

    loginSucess(){
        cy.get(this.selectorsList() .logoutButton) .should('be.visible') 

    }
    
    loginError(){
        cy.get(this.selectorsList() .wrongCredentialAlert) .should('be.visible')
        }


}

export default LoginPage