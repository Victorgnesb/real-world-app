class LoginPage {

    selectorsList(){
        const selectors = {
            usernameField : '[name="username"]',
            passwordField : '[name="password"]',
            submitButton : '[type="submit"]',
            rememberButton : '[type="checkbox"]',
            errorAlert : '[role="alert"]' 
        }
        return selectors
    }
    
    loginWithUser(username, password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField) .type("s3cret")
        cy.get(this.selectorsList().rememberButton) .check()
        cy.get(this.selectorsList().submitButton).click()
        
    }

        loginWithWrongCredentials(){
        cy.get(this.selectorsList().errorAlert) .should('be.visible')        
    }
    
    accessLoginPage(){
        cy.visit('http://localhost:3000/signin')
    }
}

export default LoginPage