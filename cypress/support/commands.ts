/// <reference types="cypress" />


Cypress.Commands.add("getByData", (selector) => {
    return cy.get(`[id=${selector}]`)
})