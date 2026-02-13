class userTransfer {
    selectorsList() {
        const selectors = {
            userBalance : "[data-test='sidenav-user-balance']",
            newTransferButton : "[href='/transaction/new']",
            profileButton : ".MuiTypography-root",
            fillField: "[type='text']",
            payButton: "[type='submit']"
            
        }
        return selectors
    }

    balanceCheck() {
        cy.get(this.selectorsList().userBalance)
      
    }

    newTransfer() {
        cy.get(this.selectorsList() .newTransferButton) .click()
        cy.get(this.selectorsList() .profileButton) .eq(13) .click({force: true})
        cy.get(this.selectorsList() .fillField) .eq(0) .type("100000")
        cy.get(this.selectorsList() .fillField) .eq(1) .type("Note test")
        cy.get(this.selectorsList() .payButton) .eq(1) .click()
    }
    
}

export default userTransfer