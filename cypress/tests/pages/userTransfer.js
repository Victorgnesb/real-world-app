class userTransfer {

    selectorsList (){
        const selectors = {
            newTransfer : "[tabindex='0']",
            userOption : ".css-1p823my-MuiListItem-root",
            sendAmount : "[name='amount']",
            addNoteField : "[placeholder='Add a note']",
            submitButton : "[type='submit']", 
            confirmationAlert : "#root > div > div.MuiSnackbar-root.MuiSnackbar-anchorOriginBottomLeft.css-cpgvjg-MuiSnackbar-root > div > div.MuiAlert-icon.css-1ytlwq5-MuiAlert-icon"
        }
        return selectors
    }

    sendMoneySucess (){
        cy.get(this.selectorsList().newTransfer) .eq(1) .click()
        cy.get(this.selectorsList().userOption) .eq(3) .click()
        cy.get(this.selectorsList().sendAmount) .type('1')
        cy.get(this.selectorsList().addNoteField) .type ('Lume Transfer')
        cy.get(this.selectorsList().submitButton) .eq(1) .click()
        cy.get(this.selectorsList().confirmationAlert) .should('be.visible','contain', 'Transaction Submitted!') 
    }

    sendExceedAmount () {
        cy.get(this.selectorsList().newTransfer) .eq(1) .click()
        cy.get(this.selectorsList().userOption) .eq(3) .click()
        cy.get(this.selectorsList().sendAmount) .type('2000000')
        cy.get(this.selectorsList().addNoteField) .type ('Exceed Amount')
        cy.get(this.selectorsList().submitButton) .eq(1) .click()
    }
}

export default userTransfer