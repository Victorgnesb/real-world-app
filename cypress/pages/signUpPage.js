class SignUpPage {

    selectorsList(){
        const selectors = {
            signUpButton : "[data-test='signup']",
            firstNameField : "[name='firstName']",
            lastNameField : "[name='lastName']",
            userNameField : "[name='username']",
            passwordField : "[name='password']",
            confirmPasswordField : "[name='confirmPassword']",
            submitSignUpButton : "[type='submit']"
        }
        return selectors
    }

    signUpField() {
        cy.get(this.selectorsList().signUpButton) .click()
        cy.get(this.selectorsList().firstNameField) .type("Boa")
        cy.get(this.selectorsList().lastNameField) .type("Noite")
        cy.get(this.selectorsList().userNameField) .type("Boa Noite")
        cy.get(this.selectorsList().passwordField) .type("testeste")
        cy.get(this.selectorsList().confirmPasswordField) .type("testeste")
        cy.get(this.selectorsList().submitSignUpButton) .click()
    }

    signUpFieldError(){
        cy.get(this.selectorsList().signUpButton) .click()
        cy.get(this.selectorsList().submitSignUpButton) .click()
        cy.get(this.selectorsList() .submitSignUpButton) .should('be.disabled')
    }
}

    

export default SignUpPage
