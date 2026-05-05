class HistoryPage {
    selectorsList() {
        const selectors = {
            myHistory : "[href='/personal']",
            gotHistory : "[data-test='transaction-list']",
            emptyHistory : "[data-test='empty-list-header']",
            arrowButton : "[role='button']",
            dateSelector : ".react-calendar__month-view__days__day"
        }
        return selectors
    }

    myHistory() {
        cy.get(this.selectorsList().myHistory) .click()
        cy.get(this.selectorsList().gotHistory) .should('be.visible')
        
    }

    chekcEmptyHistory(){
        cy.get(this.selectorsList().myHistory) .click()
        cy.get(this.selectorsList().arrowButton) .eq(1) .click()
        cy.get(this.selectorsList().dateSelector) .eq(14) .click()
        cy.get(this.selectorsList().dateSelector) .eq(14) .click()
        cy.get(this.selectorsList().emptyHistory) .should('be.visible')

    }

}

export default HistoryPage